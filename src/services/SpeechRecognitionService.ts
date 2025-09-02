// src/services/SpeechRecognitionService.ts

// Type declarations for Web Speech API
declare global {
    interface Window {
      SpeechRecognition: typeof SpeechRecognition;
      webkitSpeechRecognition: typeof SpeechRecognition;
    }
  }
  
  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
    onaudioend: (() => void) | null;
    onend: (() => void) | null;
    start(): void;
    stop(): void;
  }
  
  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }
  
  interface SpeechRecognitionErrorEvent extends Event {
    error: string;
  }
  
  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }
  
  interface SpeechRecognitionResult {
    readonly length: number;
    readonly isFinal: boolean;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }
  
  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }
  
  declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
  
  export class SpeechRecognitionService {
    private recognition: SpeechRecognition | null = null;
    private isListening = false;
  
    constructor(
      private onResult: (text: string) => void,
      private onError?: (err: string) => void
    ) {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
  
      if (!SpeechRecognition) {
        throw new Error("Web Speech API not supported in this browser.");
      }
  
      this.recognition = new SpeechRecognition();
      this.recognition!.continuous = true;
      this.recognition!.interimResults = true;
      this.recognition!.lang = "en-US";
  
      this.recognition!.onresult = (event: SpeechRecognitionEvent) => {
        // Only process final results, not interim ones
        const result = event.results[event.results.length - 1];
        if (result.isFinal) {
          const text = result[0].transcript;
          this.onResult(text);
        }
      };

      this.recognition!.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.warn("SpeechRecognition error:", event.error);

        if (this.onError) {
          this.onError(event.error);
        }

        // Automatically stop on error
        this.stop();
      };

      // Handle end of speech gracefully
      this.recognition!.onend = () => {
        this.isListening = false;
      };
    }
  
    start() {
      if (!this.recognition) return;
  
      if (!this.isListening) {
        try {
          this.recognition.start();
          this.isListening = true;
        } catch (err) {
          console.error("Failed to start recognition:", err);
        }
      }
    }
  
    stop() {
      if (this.recognition && this.isListening) {
        this.recognition.stop();
        this.isListening = false;
      }
    }
  }
  
// src/services/SpeechSynthesisService.ts

export class SpeechSynthesisService {
    private currentUtterance: SpeechSynthesisUtterance | null = null;

    speak(text: string): Promise<void> {
      return new Promise((resolve, reject) => {
        if (!("speechSynthesis" in window)) {
          console.error("Text-to-Speech not supported in this browser.");
          reject(new Error("Text-to-Speech not supported"));
          return;
        }
        
        console.log('Speaking: ' + text);
        const utterance = new SpeechSynthesisUtterance(text);
        this.currentUtterance = utterance;
        
        // Voice configuration
        const voices = speechSynthesis.getVoices();
        const maleVoice = voices.find(voice => 
          voice.name.includes('Male') || 
          voice.name.includes('Daniel') || 
          voice.name.includes('Alex') ||
          voice.name.includes('Fred')
        );
        
        if (maleVoice) {
          utterance.voice = maleVoice;
        }
        
        utterance.lang = "en-US";
        utterance.rate = 1.3; // Increased speed
        utterance.pitch = 0.9; // Slightly lower pitch for more masculine sound
        
        utterance.onend = () => {
          this.currentUtterance = null;
          resolve();
        };
        utterance.onerror = (event) => {
          this.currentUtterance = null;
          reject(event.error);
        };
        
        speechSynthesis.speak(utterance);
      });
    }

    stop(): void {
      if (this.currentUtterance) {
        speechSynthesis.cancel();
        this.currentUtterance = null;
      }
    }
  }
  
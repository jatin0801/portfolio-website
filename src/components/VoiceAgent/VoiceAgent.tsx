// src/components/VoiceAgent.tsx
import React, { useState } from "react";
import { SpeechRecognitionService } from "../../services/SpeechRecognitionService";
import { SpeechSynthesisService } from "../../services/SpeechSynthesisService";
import { GroqService } from "../../services/GroqService";

interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

const groq = new GroqService(import.meta.env.VITE_GROQ_API_KEY as string);
const tts = new SpeechSynthesisService();

export const VoiceAgent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [stt, setStt] = useState<SpeechRecognitionService | null>(null);
  const [shouldAutoRestart, setShouldAutoRestart] = useState(true);

  const handleUserSpeech = async (text: string) => {
    console.log('User said: ' + text);
    
    // Stop listening while processing
    if (stt) {
      stt.stop();
      setIsListening(false);
    }
    
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsSpeaking(true);
    
    try {
      const reply = await groq.getResponse(text);
      console.log('Bot said: ' + reply);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      
      // Speak the response and wait for it to finish
      await tts.speak(reply);
      console.log('Bot speaking done');
    } catch (error) {
      console.error("Error getting response:", error);
    } finally {
      setIsSpeaking(false);
      // Only automatically restart listening if user hasn't clicked stop
      if (shouldAutoRestart) {
        setTimeout(() => {
          startListening();
        }, 500); // Small delay to ensure clean transition
      }
    }
  };

  const startListening = () => {
    if (isSpeaking) {
      console.log("Bot is speaking, cannot start listening");
      return;
    }
    
    // Stop any existing recognition
    if (stt) {
      stt.stop();
    }
    
    console.log("Listening...");
    const newStt = new SpeechRecognitionService(
      handleUserSpeech, 
      (err) => {
        console.error("STT error:", err);
        setIsListening(false);
      }
    );
    
    setStt(newStt);
    newStt.start();
    setIsListening(true);
    setShouldAutoRestart(true); // Enable auto-restart when user starts listening
  };

  const stopListening = () => {
    if (stt) {
      stt.stop();
      setStt(null);
    }
    setIsListening(false);
    setShouldAutoRestart(false); // Disable auto-restart when user clicks stop
    
    // Stop speaking immediately if bot is currently speaking
    if (isSpeaking) {
      tts.stop();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-2">🎤 Talk to JACK - Jatin's AI Chat Kernel</h2>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={startListening}
          disabled={isSpeaking}
          className={`px-4 py-2 rounded-lg ${
            isSpeaking 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          {isListening ? "🎤 Listening..." : "Start Talking"}
        </button>
        
        <button
          onClick={stopListening}
          disabled={!isListening && !isSpeaking}
          className={`px-4 py-2 rounded-lg ${
            (!isListening && !isSpeaking)
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-red-500 hover:bg-red-600"
          } text-white`}
        >
          Stop
        </button>
      </div>

      {isSpeaking && (
        <div className="mb-4 p-2 bg-yellow-100 rounded-lg text-center">
          🗣️ JACK is speaking...
        </div>
      )}

      <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              m.role === "user" ? "bg-gray-200 text-right" : "bg-green-200"
            }`}
          >
            <strong>{m.role === "user" ? "You" : "JACK"}:</strong> {m.content}
          </div>
        ))}
      </div>
    </div>
  );
};

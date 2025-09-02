// src/pages/TalkToJackPage/TalkToJackPage.tsx
import React, { useState } from 'react';
import styles from './TalkToJackPage.module.css';
import { SpeechRecognitionService } from '../../services/SpeechRecognitionService';
import { SpeechSynthesisService } from '../../services/SpeechSynthesisService';
import { GroqService } from '../../services/GroqService';
import VoiceControl from '../../components/VoiceControl/VoiceControl';
import TranscriptBox from '../../components/TranscriptBox/TranscriptBox';
import profileImage from '../../assets/profile.png';

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const groq = new GroqService(import.meta.env.VITE_GROQ_API_KEY as string);
const tts = new SpeechSynthesisService();

const TalkToJackPage: React.FC = () => {
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
    <div className={styles.talkToJackPage}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Talk to JACK</h1>
        <p className={styles.subtitle}>Jatin's AI Chat Kernel</p>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.avatarSection}>
          <div className={`${styles.avatarContainer} ${isSpeaking ? styles.speaking : ''}`}>
            <img 
              src={profileImage} 
              alt="Jatin Chhabria" 
              className={styles.avatar}
            />
            
            {isSpeaking && (
              <div className={styles.speakingIndicator}>
                <div className={styles.soundWave}></div>
                <div className={styles.soundWave}></div>
                <div className={styles.soundWave}></div>
              </div>
            )}
          </div>
        </div>

        <VoiceControl
          isListening={isListening}
          isSpeaking={isSpeaking}
          onStartListening={startListening}
          onStop={stopListening}
        />

        <TranscriptBox messages={messages} />
      </div>
    </div>
  );
};

export default TalkToJackPage;

// src/components/VoiceControl/VoiceControl.tsx
import React from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';
import styles from './VoiceControl.module.css';

interface VoiceControlProps {
  isListening: boolean;
  isSpeaking: boolean;
  onStartListening: () => void;
  onStop: () => void;
}

const VoiceControl: React.FC<VoiceControlProps> = ({
  isListening,
  isSpeaking,
  onStartListening,
  onStop
}) => {
  return (
    <div className={styles.voiceControl}>
      <div className={styles.buttonContainer}>
        <button
          onClick={onStartListening}
          disabled={isSpeaking}
          className={`${styles.micButton} ${isListening ? styles.listening : ''} ${isSpeaking ? styles.disabled : ''}`}
          title={isListening ? "Listening..." : "Start Talking"}
        >
          <FaMicrophone className={styles.icon} />
          {isListening && <div className={styles.pulse}></div>}
        </button>
        
        <button
          onClick={onStop}
          disabled={!isListening && !isSpeaking}
          className={`${styles.stopButton} ${(!isListening && !isSpeaking) ? styles.disabled : ''}`}
          title="Stop"
        >
          <FaStop className={styles.icon} />
        </button>
      </div>
      
      <div className={styles.statusText}>
        {isSpeaking && "JACK is speaking..."}
        {isListening && !isSpeaking && "Listening..."}
        {!isListening && !isSpeaking && "Click mic to start talking"}
      </div>
    </div>
  );
};

export default VoiceControl;

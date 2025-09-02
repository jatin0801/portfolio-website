// src/components/TranscriptBox/TranscriptBox.tsx
import React from 'react';
import ReactMarkdown from "react-markdown";
import styles from './TranscriptBox.module.css';

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface TranscriptBoxProps {
  messages: ChatMessage[];
}

const TranscriptBox: React.FC<TranscriptBoxProps> = ({ messages }) => {
  return (
    <div className={styles.transcriptBox}>
      <h3 className={styles.title}>Conversation Transcript</h3>
      <div className={styles.messagesContainer}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            Start talking to see the conversation transcript here...
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                message.role === "user" ? styles.userMessage : styles.assistantMessage
              }`}
            >
              <div className={styles.messageHeader}>
                <strong>{message.role === "user" ? "You" : "JACK"}</strong>
              </div>
              <div className={styles.messageContent}>
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TranscriptBox;

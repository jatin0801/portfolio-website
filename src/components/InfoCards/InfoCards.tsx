// src/components/InfoCards/InfoCards.tsx
import React from 'react';
import styles from './InfoCards.module.css';
import { FaCode, FaPlane, FaCoffee } from 'react-icons/fa';

const InfoCards: React.FC = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.cardIcon}>
          <FaCode />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>Code</div>
          <div className={styles.cardSubtitle}>1M+ lines</div>
        </div>
      </div>
      
      <div className={styles.card}>
        <div className={styles.cardIcon}>
          <FaCoffee />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>Coffee</div>
          <div className={styles.cardSubtitle}>5000+ cups</div>
        </div>
      </div>
      
      <div className={styles.card}>
        <div className={styles.cardIcon}>
          <FaPlane />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>Travel</div>
          <div className={styles.cardSubtitle}>10000+ miles</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;

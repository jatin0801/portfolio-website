// src/pages/ExperiencePage/ExperiencePage.tsx
import React from 'react';
import ExperienceTimeline from '../../components/Experience/ExperienceTimeline';
import styles from './ExperiencePage.module.css';

const ExperiencePage: React.FC = () => {
  return (
    <div className={styles.experiencePage}>
      <h1 className={styles.pageTitle}>Work Experience</h1>
      <ExperienceTimeline />
    </div>
  );
};

export default ExperiencePage;

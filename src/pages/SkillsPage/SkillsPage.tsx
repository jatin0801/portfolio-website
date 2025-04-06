// src/pages/SkillsPage/SkillsPage.tsx
import React from 'react';
import SkillsDisplay from '../../components/Skills/SkillsDisplay';
import styles from './SkillsPage.module.css';

const SkillsPage: React.FC = () => {
  return (
    <div className={styles.skillsPage}>
      <h1 className={styles.pageTitle}>My Skills</h1>
      <SkillsDisplay />
    </div>
  );
};

export default SkillsPage;

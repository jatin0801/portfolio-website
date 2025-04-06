// src/pages/EducationPage/EducationPage.tsx
import React from 'react';
import EducationCards from '../../components/Education/EducationCards';
import styles from './EducationPage.module.css';

const EducationPage: React.FC = () => {
  return (
    <div className={styles.educationPage}>
      <h1 className={styles.pageTitle}>Education</h1>
      <EducationCards />
    </div>
  );
};

export default EducationPage;

// src/pages/ProjectsPage/ProjectsPage.tsx
import React from 'react';
import ProjectCards from '../../components/Projects/ProjectCards';
import styles from './ProjectPage.module.css';

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <ProjectCards />
    </div>
  );
};

export default ProjectsPage;

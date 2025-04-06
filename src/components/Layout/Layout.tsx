// src/components/Layout/Layout.tsx
import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  const navigate = useNavigate();

  const handleQuestionSelect = (question: string) => {
    navigate(`/chat?q=${encodeURIComponent(question)}`);
  };

  return (
    <div className={styles.layout}>
      <Sidebar onQuestionSelect={handleQuestionSelect}/>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

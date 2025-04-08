// src/components/Sidebar/Sidebar.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa6';

interface SideBarProps {
  onQuestionSelect?: (question: string) => void;
}

const Sidebar: React.FC<SideBarProps> = ({ onQuestionSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return window.innerWidth <= 768;
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if ((!isCollapsed) && window.innerWidth <= 768) {
      setIsCollapsed(true);
    }
  };

  const handleQuestionClick = (question: string) => {
    if (onQuestionSelect) {
      onQuestionSelect(question);
    } else {
      navigate(`/chat?q=${encodeURIComponent(question)}`);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  interface ColorPair {
    main: string;
    hover: string;
  }

  interface ColorPairs {
    [key: string]: ColorPair;
  }

  const updateAccentColor = (color: string): void => {
    const colorPairs: ColorPairs = {
      // Green
      "#1a8917": {
        main: "#1a8917",
        hover: "#146c12"
      },
      // Blue
      "#3b82f6": {
        main: "#3b82f6",
        hover: "#2563eb"
      },
      // Red
      "#ef4444": {
        main: "#ef4444",
        hover: "#dc2626"
      },
      // Purple
      "#8b5cf6": {
        main: "#8b5cf6",
        hover: "#7c3aed"
      },
      // Orange
      "#f97316": {
        main: "#f97316",
        hover: "#ea580c"
      }
    };

    const selectedPair = color in colorPairs 
            ? colorPairs[color as keyof ColorPairs] 
            : colorPairs["#3b82f6"];
    
    document.documentElement.style.setProperty('--accent-color', selectedPair.main);
    document.documentElement.style.setProperty('--accent-hover', selectedPair.hover);
    
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      const lighterMain = selectedPair.main;
      document.documentElement.style.setProperty('--accent-color', lighterMain);
      document.documentElement.style.setProperty('--accent-hover', selectedPair.hover);
    }
  };

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isCollapsed ? <FaBars /> : <FaTimes />}
      </button>
      
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
          <img src="dark-letter-j.png" alt="Logo" />
        </span>
        {!isCollapsed && <span className={styles.logoText}>JACK</span>}
      </div>
      
      {!isCollapsed && (
        <div className={styles.newThread}>
          <div className={styles.colorPicker}>
            <label htmlFor="accent-color">Accent Color</label>
            <select 
              id="accent-color" 
              className={styles.colorSelect}
              onChange={(e) => {
                updateAccentColor(e.target.value);
              }}
            >
              <option value="#8b5cf6" selected>Purple</option>
              <option value="#3b82f6">Blue</option>
              <option value="#1a8917">Green</option>
              <option value="#ef4444">Red</option>
              <option value="#f97316">Orange</option>
            </select>
          </div>
        </div>
      )}
      
      <nav className={styles.navigation}>
        <ul>
          <li 
            className={isActive('/') ? styles.active : ''}
            onClick={() => handleNavigation('/')}
          >
            <FaHome /> {!isCollapsed && <span>Home</span>}
          </li>
          <li 
            className={isActive('/skills') ? styles.active : ''}
            onClick={() => handleNavigation('/skills')}
          >
            <FaCode /> {!isCollapsed && <span>Skills</span>}
          </li>
          <li 
            className={isActive('/experience') ? styles.active : ''}
            onClick={() => handleNavigation('/experience')}
          >
            <FaBriefcase /> {!isCollapsed && <span>Experience</span>}
          </li>
          <li 
            className={isActive('/education') ? styles.active : ''}
            onClick={() => handleNavigation('/education')}
          >
            <FaGraduationCap /> {!isCollapsed && <span>Education</span>}
          </li>
          <li 
            className={isActive('/projects') ? styles.active : ''}
            onClick={() => handleNavigation('/projects')}
          >
            <FaLaptop /> {!isCollapsed && <span>Projects</span>}
          </li>
        </ul>
      </nav>
      
      {!isCollapsed && (
        <div className={styles.recentSearches}>
          <div className={styles.recentTitle}>
             Recent Searches
          </div>
          <div className={styles.recentItem} onClick={() => handleQuestionClick('who is the best software engineer in the world?')}>
            who is the best software engineer in the world?
          </div>
          <div className={styles.recentItem} onClick={() => handleQuestionClick('who has the most impressive skills?')}>
            who has the most impressive skills?
          </div>
        </div>
      )}
      
      <div className={styles.userProfile}>
        <div className={styles.avatar}>JC</div>
        {!isCollapsed && <div className={styles.userName}>Jatin Chhabria</div>}
      </div>
    </div>
  );
};

export default Sidebar;

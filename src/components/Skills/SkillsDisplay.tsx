// src/components/Skills/SkillsDisplay.tsx
import React from 'react';
import styles from './SkillsDisplay.module.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaNetworkWired, FaRobot, FaChartBar, FaLanguage, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiPython, SiMongodb, SiExpress, SiNextdotjs, SiJavascript, SiPytorch, SiDjango, SiFlask, SiMysql, SiPostgresql, SiMlflow, SiLangchain, SiOllama, SiChatbot } from 'react-icons/si';
import { FaBots } from 'react-icons/fa6';

const SkillsDisplay: React.FC = () => {
  const skillCategories = [
    {
      category: "Languages and Frameworks",
      skills: [
        { name: "Python", icon: <SiPython />, level: "Expert", years: 5 },
        { name: "Javascript", icon: <SiJavascript />, level: "Advanced", years: 4 },
        { name: "Pytorch", icon: <SiPytorch />, level: "Intermediate", years: 2 },
        { name: "React", icon: <FaReact />, level: "Advanced", years: 2 },
        { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate", years: 1 },
        { name: "Django", icon: <SiDjango />, level: "Advanced", years: 3 },
        { name: "Flask", icon: <SiFlask />, level: "Advanced", years: 2 },
      ]
    },
    {
      category: "Data and Cloud",
      skills: [
        { name: "SQL", icon: <SiMysql />, level: "Expert", years: 5 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced", years: 3 },
        { name: "AWS", icon: <FaAws />, level: "Intermediate", years: 2 },
        { name: "Docker", icon: <FaDocker />, level: "Intermediate", years: 2 },
        { name: "Git", icon: <FaGitAlt />, level: "Expert", years: 5 }
      ]
    },
    {
      category: "AI and ML",
      skills: [
        { name: "Machine Learning", icon: <FaRobot />, level: "Expert", years: 4 },
        { name: "Deep Learning", icon: <FaNetworkWired />, level: "Intermediate", years: 2 },
        { name: "RAG", icon: <SiChatbot />, level: "Advanced", years: 2 },
        { name: "LLM", icon: <SiOllama />, level: "Expert", years: 2 },
        { name: "LangChain", icon: <SiLangchain />, level: "Advanced", years: 1 },
        { name: "NLP", icon: <FaLanguage />, level: "Advanced", years: 2 },
        { name: "Data Science", icon: <FaDatabase />, level: "Expert", years: 4 },
      ]
    }
  ];

  return (
    <div className={styles.skillsContainer}>
      {skillCategories.map((category, index) => (
        <div key={index} className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <div className={styles.skillsGrid}>
            {category.skills.map((skill, idx) => (
              <div key={idx} className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  {skill.icon || skill.name.charAt(0)}
                </div>
                <div className={styles.skillInfo}>
                  <div className={styles.skillName}>{skill.name}</div>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillLevel}>{skill.level}</span>
                    <span className={styles.skillYears}>{skill.years}+ years</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDisplay;

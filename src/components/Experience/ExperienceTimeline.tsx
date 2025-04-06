// src/components/Experience/ExperienceTimeline.tsx
import React from 'react';
import styles from './ExperienceTimeline.module.css';
import { FaBriefcase, FaBuilding } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      role: "AI Engineer",
      company: "Spice",
      period: "Jan 2025 - Present",
      description: "Architected and led the development of an AI-driven podcast customization platform, overseeing all phases from design to deployment.",
      achievements: [
        "Reduced podcast generation latency by 30% through code and workflow optimization",
        "Implemented 8+ AWS services, lowering operational costs by 20%",
        "Integrated LLMs into RAG pipeline, improving response quality by 25%",
        "Rapid-prototyped 5+ core features including transcription, summarization, and scraping tools"
      ]
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "SUNY Research Foundation",
      period: "January 2024 - Dec 2024",
      description: "Developed web applications to improve laboratory data management using Django, Python, and PostgreSQL.",
      achievements: [
        "Automated data workflows, improving handling efficiency by 80%",
        "Built sample tracking system managing 1,000+ samples with 2x efficiency",
        "Deployed solution to 3+ labs, enhancing data retrieval by 40% and reducing errors by 25%"
      ]
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "Linedata",
      period: "June 2022 - July 2023",
      description: "Designed and built modular web modules for asset management platforms using React, Node.js, and Django.",
      achievements: [
        "Saved 200+ hours annually through improved code reusability",
        "Redesigned architecture for modularity, accelerating development by 50%",
        "Reduced customer support dependency by 70% by deploying a smart chatbot",
        "Received the Rising Star award for outstanding performance"
      ]
    },
    {
      id: 4,
      role: "Software Engineer Intern",
      company: "VESIT Admission Team",
      period: "2019 - 2021",
      description: "Supported the VESIT admission team in building internal tools and systems.",
      achievements: [
        "Developed admission-related software utilities to automate data entry and tracking",
        "Streamlined communication workflows for applicants and staff",
        "Collaborated with faculty to digitize and improve the admissions process"
      ]
    }
  ];

  return (
    <div className={styles.timelineContainer}>
      {experiences.map((exp, index) => (
        <div key={exp.id} className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <FaBriefcase />
          </div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3 className={styles.timelineRole}>{exp.role}</h3>
              <div className={styles.timelineCompany}>
                <FaBuilding /> {exp.company}
              </div>
              <div className={styles.timelinePeriod}>{exp.period}</div>
            </div>
            <p className={styles.timelineDescription}>{exp.description}</p>
            <ul className={styles.achievementsList}>
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className={styles.achievementItem}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;

// src/components/Education/EducationCards.tsx
import React from 'react';
import styles from './EducationCards.module.css';
import { FaGraduationCap, FaCalendarAlt, FaMedal } from 'react-icons/fa';

const EducationCards = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Science (MS) in Computer Science",
      specialization: "Artificial Intelligence",
      institution: "University at Buffalo, The State University of New York",
      period: "2023 - 2025",
      achievements: [
        "GPA: 4.0/4.0",
        "Graduate Teaching Assistant for CSE 4/560: Data Models and Query Languages",
        "Conducted workshops on Python, ML and SQL in collaboration with UB CSE Department",
        "Research on affective state recognition using multisensor data (ActDiffNet)"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Engineering (BE) in Computer Engineering",
      specialization: "Computer Engineering",
      institution: "University at Mumbai (VESIT)",
      period: "2018 - 2022",
      achievements: [
        "GPA: 3.8/4.0",
        "Top 5% of the class",
        "Internship at VESIT Admission Cell - Developed a web application for student admission process",
        "Treasurer at Indian Society of Technical Education (ISTE) - VESIT Chapter",
        "Organized technical events and workshops for students",
        "Member of SoRT (Social Responsibility Team) - VESIT Chapter",
        "Class representative for 2 years",
        "Organized and participated in various technical and non-technical events",
        "Hackathon winner - Best Innovation Award"
      ]
    }
  ];

  return (
    <div className={styles.educationContainer}>
      {education.map(edu => (
        <div key={edu.id} className={styles.educationCard}>
          <div className={styles.educationIcon}>
            <FaGraduationCap />
          </div>
          <div className={styles.educationContent}>
            <h3 className={styles.educationDegree}>{edu.degree}</h3>
            <div className={styles.educationSpecialization}>{edu.specialization}</div>
            <div className={styles.educationInstitution}>{edu.institution}</div>
            <div className={styles.educationPeriod}>
              <FaCalendarAlt /> {edu.period}
            </div>
            <div className={styles.educationAchievements}>
              <div className={styles.achievementsTitle}>
                <FaMedal /> Achievements
              </div>
              <ul className={styles.achievementsList}>
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCards;

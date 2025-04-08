// src/components/Projects/ProjectCards.tsx
import styles from './ProjectCards.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      title: "ezHire: Agentic AI for Smarter Outreach Campaigns",
      description: "Built a full-stack web application that leverages agentic AI to generate and optimize outreach campaigns. The platform uses React (TypeScript) for a smooth frontend experience and a Flask backend, integrating LangChain agents to enable AGI-like conversational assistance for crafting highly personalized campaign sequences.",
      technologies: ["Python", "LangChain", "Agentic AI", "React", "TypeScript", "Flask"],
      image: "https://i.ibb.co/rKHJrX5n/Screenshot-2025-04-07-at-10-37-50-PM.png",
      github: "https://github.com/jatin0801/ezHire",
      liveDemo: "https://drive.google.com/file/d/1wJLZvxiOYKYWipYZ20pWNkqBOLPHaekv/preview"
    },
    {
      id: 2,
      title: "ActDiffNet: Multisensor Affective State Recognition",
      description: "Built an active learning framework with diffusion models for biomedical signal synthesis to address data imbalance in emotion recognition tasks.",
      technologies: ["PyTorch", "U-Net", "Active Learning", "Diffusion Models", "Python"],
      image: "https://i.ibb.co/N6qXLgBw/actdiffnet.png",
      github: "https://github.com/jatin0801",
      liveDemo: null
    },
    {
      id: 3,
      title: "InsightBot: Media and Document Query Application",
      description: "Deployed a chatbot handling 1000+ queries/day using RAG and LangChain to provide intelligent responses on documents and YouTube videos.",
      technologies: ["Python", "Flask", "LangChain", "Groq API", "Pinecone", "RAG"],
      image: "https://i.ibb.co/bR2nQ7LS/insightbot.png",
      github: "https://github.com/jatin0801/InsightBot",
      liveDemo: "https://drive.google.com/file/d/1tTFv2xPKZ5TfaoYXIrezdurBshz0r5Z6/preview"
    },
    {
      id: 4,
      title: "eKrishi: A One-Stop Portal for Farmers",
      description: "Developed a multilingual web app for crop recommendations, disease detection, and direct e-commerce to improve profitability for farmers.",
      technologies: ["Machine Learning", "Python", "Flask", "Google Translate API"],
      image: "https://user-images.githubusercontent.com/75525185/111887391-d5feb180-89fa-11eb-8982-d7c7187734fd.gif",
      github: "https://github.com/jatinchhabria/smart-home",
      liveDemo: null
    },
    {
      id: 5,
      title: "shopX: Modern Shopping Experience",
      description: "Built a responsive and intuitive e-commerce platform using React and Redux, enabling users to browse, search, and manage cart items with seamless state management. Designed for scalability and optimized user experience.",
      technologies: ["React", "Redux", "JavaScript", "CSS", "HTML", "Stripe API"],
      image: "https://i.ibb.co/xSJ57yWM/shopX.png",
      github: "https://github.com/jatin0801/E-Commerce-Website",
      liveDemo: null
    }
  ];

  return (
    <div className={styles.projectsContainer}>
      {projects.map(project => (
        <div key={project.id} className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              {project.liveDemo && (
                <a href={project.liveDemo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;

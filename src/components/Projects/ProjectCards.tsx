// src/components/Projects/ProjectCards.tsx
import styles from './ProjectCards.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      title: "ActDiffNet: Multisensor Affective State Recognition",
      description: "Built an active learning framework with diffusion models for biomedical signal synthesis to address data imbalance in emotion recognition tasks.",
      technologies: ["PyTorch", "U-Net", "Active Learning", "Diffusion Models", "Python"],
      image: "src/assets/actdiffnet.png",
      github: "https://github.com/jatin0801",
      liveDemo: null
    },
    {
      id: 2,
      title: "InsightBot: Media and Document Query Application",
      description: "Deployed a chatbot handling 1000+ queries/day using RAG and LangChain to provide intelligent responses on documents and YouTube videos.",
      technologies: ["Python", "Flask", "LangChain", "Groq API", "Pinecone", "RAG"],
      image: "src/assets/insightbot.png",
      github: "https://github.com/jatin0801/InsightBot",
      liveDemo: "https://drive.google.com/file/d/1tTFv2xPKZ5TfaoYXIrezdurBshz0r5Z6/preview"
    },
    {
      id: 3,
      title: "eKrishi: A One-Stop Portal for Farmers",
      description: "Developed a multilingual web app for crop recommendations, disease detection, and direct e-commerce to improve profitability for farmers.",
      technologies: ["Machine Learning", "Python", "Flask", "Google Translate API"],
      image: "/images/projects/smart-home.jpg",
      github: "https://github.com/jatinchhabria/smart-home",
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

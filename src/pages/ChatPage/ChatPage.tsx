// src/pages/ChatPage/ChatPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ChatPage.module.css';
import { FaUser } from 'react-icons/fa';
import SearchBar from '../../components/SearchBar/SearchBar';

const ChatPage: React.FC = () => {
  const location = useLocation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      setQuestion(decodeURIComponent(query));
      fetchAnswer(decodeURIComponent(query));
    }
  }, [location.search]);

  const fetchAnswer = (q: string) => {
    setLoading(true);
    
    // Simulate API call with predefined answers
    setTimeout(() => {
      let response = '';
      
      if (q.includes('projects') || q.includes('project')) {
        response = "Oh, where do I start? Jatin has built some pretty cool stuff—like ActDiffNet (fancy AI meets biomedical data), InsightBot (a chatbot that understands your docs and YouTube links like a pro), and eKrishi (helping farmers with AI magic 🌾🤖). Whether it’s ML, full-stack dev, or clever use of LLMs, Jatin loves turning ideas into real-world tools.";
      } else if (q.includes('experience') || q.includes('work') || q.includes('job')) {
        response = "Jatin is currently working as an AI Engineer at Spice, leading development on a custom podcast platform using LLMs and AWS. He has also interned at SUNY Research Foundation, optimizing lab data systems, and previously worked at Linedata building scalable financial software and smart chatbots. He has a strong background in software development, machine learning, and cloud technologies.";
      } else if (q.includes('school') || q.includes('university') || q.includes('education')) {
        response = "Jatin pursued a Master’s in Computer Science at the University at Buffalo with a focus on AI. He’s also a Graduate Teaching Assistant for courses like Data Models and Query Languages. He completed his Bachelor's in Computer Engineering from VESIT, University of Mumbai, graduating with distinction.";
      } else if (q.includes('technologies') || q.includes('tech') || q.includes('tools')) {
        response = "Jatin is highly skilled in technologies like Python, Flask, Django, LangChain, PyTorch, AWS, React, and Node.js. He has hands-on experience building RAG-based systems, full-stack applications, and deploying scalable solutions using cloud-native tools.";
      } else if (q.includes('freelance')) {
        response = "Yes, Jatin is open to freelance opportunities-especially ones involving AI/ML, chatbot development, or full-stack applications. If you're working on something innovative or challenging, feel free to reach out!";
      } else if (q.includes('skills') || q.includes('tech stack')) {
        response = "Jatin’s core skills include frontend and backend development (React, Node.js, Django), AI/ML (PyTorch, LangChain), and cloud infrastructure (AWS, Docker). He also has experience in database design, API development, CI/CD, and deploying scalable RAG-based apps.";
      } else if (q.includes('working') || q.includes('current')) {
        response = "Jatin is currently working at Spice as an AI Engineer. He’s leading a team to build a podcast generation platform powered by LLMs. Alongside that, he’s also a Teaching Assistant and actively involved in research on affective state recognition using active learning and diffusion models.";
      } else if (q.includes('best')) {
        response = "No doubt. Jatin Chhabria. He is the best! 💪🔥";
      } else if (q.includes('opportunities') || q.includes('job') || q.includes('internship')) {
        response = "Jatin is looking for opportunities that challenge him and allow him to grow. He’s particularly interested in roles that involve AI/ML, full-stack development, or innovative tech solutions. If you have something in mind, don’t hesitate to reach out!";
      } else if (q.includes('contact') || q.includes('reach out')) {
        response = "You can reach out to Jatin via LinkedIn or email. He’s always open to discussing new ideas, collaborations, or just having a good tech chat!";
      } else if (q.includes('hobbies') || q.includes('travel') || q.includes('interests')) {
        response = "Jatin’s hobbies? Oh, just the usual things—traveling to eat, cooking to paint, painting to code, and of course, coding to escape reality. Basically, if you ever find him, he’s either exploring new places, experimenting in the kitchen, adding accidental modern art to a canvas, or debugging his way through life—with snacks. 😄"
      }else {
        response = "Hey! Thanks for exploring this portfolio. Feel free to ask about Jatin's projects, experience, education, or anything tech-related!";
      }
      
      setAnswer(response);
      setLoading(false);
    }, 1000);
  };

  const handleQuestionSelect = (q: string) => {
    setQuestion(q);
    fetchAnswer(q);
  };

  return (
    <div className={styles.chatPage}>
      <div className={styles.chatContainer}>        
        {question && (
          <div className={styles.messageContainer}>
            <div className={styles.userMessage}>
              <div className={styles.userAvatar}>
                <FaUser />
              </div>
              <div className={styles.messageContent}>
                <div className={styles.messageSender}>You</div>
                <div className={styles.messageText}>{question}</div>
              </div>
            </div>
            
            {loading ? (
              <div className={styles.botMessage}>
                <div className={styles.botAvatar}>
                  <img src="https://i.ibb.co/j9C5Dj1v/dark-letter-j.png" alt="Logo" />
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.messageSender}>JACK</div>
                  <div className={styles.loadingDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            ) : answer && (
              <div className={styles.botMessage}>
                <div className={styles.botAvatar}>
                  <img src="https://i.ibb.co/j9C5Dj1v/dark-letter-j.png" alt="Logo" />
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.messageSender}>JACK</div>
                  <div className={styles.messageText}>{answer}</div>
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className={styles.searchBarContainer}>
          <SearchBar onQuestionSelect={handleQuestionSelect} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

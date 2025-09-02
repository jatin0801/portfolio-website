// src/components/SearchBar/SearchBar.tsx
import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onQuestionSelect?: (question: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onQuestionSelect }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  
  const suggestedQuestions = [
    "What are the interesting projects Jatin has worked on?",
    "What are his past experiences?",
    "What kind of opportunities is he looking for?",
    "Which school did he attend?",
    "What technologies does Jatin work with?",
    "Is Jatin available for freelance work?",
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery('');
    if (query.trim()) {
      navigate(`/chat?q=${encodeURIComponent(query)}`);
    }
  };
  
  const handleQuestionClick = (question: string) => {
    if (onQuestionSelect) {
      onQuestionSelect(question);
    } else {
      navigate(`/chat?q=${encodeURIComponent(question)}`);
    }
  };
  
  return (
    <div className={styles.searchContainer}>
      <form 
        onSubmit={handleSubmit} 
        className={`${styles.searchForm} ${isFocused ? styles.focused : ''}`}
      >
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Ask anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={styles.searchInput}
            autoComplete="off"
          />
        </div>
        <div className={styles.searchTools}>
          <button type="button" className={styles.toolButton} title="Talk to JACK" onClick={() => handleNavigation('/talk-to-jack')}>
            <FaMicrophone />
          </button>
          <button type="submit" className={styles.searchButton} title="Search">
            <FaSearch />
          </button>
        </div>
      </form>
      <div className={styles.questionsContainer}>
          <h3 className={styles.questionsTitle}>Suggested Questions</h3>
          <div className={styles.questionsList}>
            {suggestedQuestions.map((q, index) => (
              <div 
                key={index} 
                className={styles.questionItem}
                onClick={() => handleQuestionClick(q)}
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      {/* <div className={styles.suggestedQuestions}>
        {suggestedQuestions.map((question, index) => (
          <div 
            key={index} 
            className={styles.questionItem}
            onClick={() => handleQuestionClick(question)}
          >
            {question}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SearchBar;

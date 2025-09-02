// src/App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import EducationPage from './pages/EducationPage/EducationPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ChatPage from './pages/ChatPage/ChatPage';
import TalkToJackPage from './pages/TalkToJackPage/TalkToJackPage';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/talk-to-jack" element={<TalkToJackPage />} />
            </Routes>
          </Layout>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

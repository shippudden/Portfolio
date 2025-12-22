import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/case-study/:id" element={<CaseStudyPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
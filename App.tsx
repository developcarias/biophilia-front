
import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { PageContent } from './types';
import { INITIAL_CONTENT } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import AdminBar from './components/AdminBar';
import { I18nProvider } from './i18n';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

const AppContent = () => {
  const [content, setContent] = useState<PageContent>(INITIAL_CONTENT);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/admin');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };
  
  return (
    <div className="bg-brand-green-light min-h-screen flex flex-col font-sans text-brand-gray">
      {isLoggedIn && <AdminBar onLogout={handleLogout} />}
      <Header isLoggedIn={isLoggedIn} />
      <main className="flex-grow -mt-28">
        <Routes>
          <Route path="/" element={<HomePage content={content} />} />
          <Route path="/about" element={<AboutPage content={content.about} />} />
          <Route path="/projects" element={<ProjectsPage projects={content.projects} />} />
          <Route path="/team" element={<TeamPage team={content.team} />} />
          <Route path="/blog" element={<BlogPage posts={content.blog} />} />
          <Route path="/blog/:slug" element={<BlogPostPage posts={content.blog} />} />
          <Route path="/contact" element={<ContactPage content={content.contact} />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLogin} />} />
          <Route 
            path="/admin-content" 
            element={isLoggedIn ? <Navigate to="/admin" /> : <Navigate to="/login" />} 
          />
          <Route path="/admin" element={
            isLoggedIn ? 
              <AdminPage 
                content={content} 
                onUpdateContent={setContent} 
              /> : 
              <Navigate to="/login" />
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <I18nProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </I18nProvider>
  );
}

export default App;
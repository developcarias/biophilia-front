

import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
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
import ProjectDetailPage from './pages/ProjectDetailPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import { produce } from 'immer';
import { AdminProvider } from './components/AdminContext';

const AppContent = () => {
  const [content, setContent] = useState<PageContent>(INITIAL_CONTENT);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = ReactRouterDOM.useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/admin');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };
  
  const handleUpdateContentValue = (path: string, value: any) => {
    setContent(produce(draft => {
      const keys = path.split('.');
      let current: any = draft;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    }));
  };

  return (
    <AdminProvider isLoggedIn={isLoggedIn} onUpdate={handleUpdateContentValue}>
      <div className="bg-brand-green-light min-h-screen flex flex-col font-sans text-brand-gray">
        {isLoggedIn && <AdminBar onLogout={handleLogout} />}
        <Header 
          content={content.global}
          uiText={content.ui}
        />
        <main className="flex-grow">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<HomePage content={content.homePage} uiText={content.ui} projects={content.projects} />} />
            <ReactRouterDOM.Route path="/about" element={<AboutPage content={content.aboutPage} valuesContent={content.homePage.values} />} />
            <ReactRouterDOM.Route path="/projects" element={<ProjectsPage content={content.projectsPage} projects={content.projects} uiText={content.ui} />} />
            <ReactRouterDOM.Route path="/projects/:projectId" element={<ProjectDetailPage projects={content.projects} content={content.projectDetailPage} />} />
            <ReactRouterDOM.Route path="/team" element={<TeamPage content={content.teamPage} team={content.team} />} />
            <ReactRouterDOM.Route path="/blog" element={<BlogPage content={content.blogPage} posts={content.blog} uiText={content.ui} />} />
            <ReactRouterDOM.Route path="/blog/:slug" element={<BlogPostPage content={content.blogPage} posts={content.blog} uiText={content.ui} />} />
            <ReactRouterDOM.Route path="/contact" element={<ContactPage content={content.contactPage} globalContent={content.global} />} />
            <ReactRouterDOM.Route path="/donate" element={<DonatePage content={content.donatePage} />} />
            <ReactRouterDOM.Route path="/login" element={<LoginPage onLoginSuccess={handleLogin} />} />
            <ReactRouterDOM.Route 
              path="/admin-content" 
              element={isLoggedIn ? <ReactRouterDOM.Navigate to="/admin" /> : <ReactRouterDOM.Navigate to="/login" />} 
            />
            <ReactRouterDOM.Route path="/admin" element={
              isLoggedIn ? 
                <AdminPage 
                  content={content} 
                  onUpdateContent={setContent} 
                /> : 
                <ReactRouterDOM.Navigate to="/login" />
            } />
          </ReactRouterDOM.Routes>
        </main>
        <div 
          className="bg-cover bg-center bg-fixed" 
          style={{backgroundImage: "url('https://biophiliaweb.org/images/parallax/2.jpg')"}}
        >
          <Footer 
            content={content.global} 
          />
        </div>
      </div>
    </AdminProvider>
  );
};

const App = () => (
  <I18nProvider>
    <ReactRouterDOM.HashRouter>
      <ScrollToTop />
      <AppContent />
    </ReactRouterDOM.HashRouter>
  </I18nProvider>
);

export default App;
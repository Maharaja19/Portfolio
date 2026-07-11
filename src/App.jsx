import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ThemeSwitcher from './components/ThemeSwitcher';
import BackgroundParticles from './components/BackgroundParticles';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Experience from './sections/Experience';
import Leadership from './sections/Leadership';
import Certifications from './sections/Certifications';
import GitHubLeetCode from './sections/GitHubLeetCode';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Internship from './sections/Internship';
import Incubation from './sections/Incubation';

// Components & Pages
import AchievementCounters from './components/AchievementCounters';
import Documents from './pages/Documents';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import NotFound from './pages/NotFound';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Listen to path updates for simulated 404 routing compatibility
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (hash.startsWith('#/project/')) {
        const pid = hash.replace('#/project/', '');
        setActiveProjectId(pid);
        setCurrentPath('project');
      } else if (hash === '#documents' || path.endsWith('/documents') || path.endsWith('/documents/')) {
        setCurrentPath('documents');
      } else if (path === '/' || path === '/index.html' || path.endsWith('/portfolio') || path.endsWith('/portfolio/')) {
        setCurrentPath('/');
      } else {
        // Fallback for custom routing
        setCurrentPath('/');
      }
    };

    // Initial check
    handleLocationChange();

    // Listen to popstate and hashchange events
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleGoHome = () => {
    window.location.hash = '';
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
  };

  const handleSetPath = (path) => {
    if (path === '/') {
      window.location.hash = '';
    } else if (path === 'documents') {
      window.location.hash = 'documents';
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300">
          {/* Visual Elements */}
          <ScrollProgress />
          <CustomCursor />
          <ThemeSwitcher />
          <BackgroundParticles />
          <Navbar currentPath={currentPath} setPath={handleSetPath} />

          {/* Conditional Router */}
          {currentPath === '/' ? (
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                <Hero />
                <AchievementCounters />
                <About />
                <TechStack />
                <Skills />
                <Projects />
                <Internship />
                <Incubation />
                <Timeline />
                <Experience />
                <Leadership />
                <Certifications />
                <GitHubLeetCode />
                <Contact />
              </main>
              <Footer />
            </div>
          ) : currentPath === 'documents' ? (
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                <Documents />
              </main>
              <Footer />
            </div>
          ) : currentPath === 'project' ? (
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                <ProjectCaseStudy projectId={activeProjectId} goHome={handleGoHome} />
              </main>
              <Footer />
            </div>
          ) : (
            <NotFound goHome={handleGoHome} />
          )}
        </div>
      )}
    </>
  );
}

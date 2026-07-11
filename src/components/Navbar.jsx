import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaUserAlt, FaBriefcase, FaCode, FaEnvelope, FaGraduationCap, FaAward, FaBars, FaTimes } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Navbar({ currentPath, setPath }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    
    // Switch to Home first if on Documents page
    if (currentPath !== '/') {
      setPath('/');
      // Delay scrolling slightly to allow page re-rendering
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (pathStr) => {
    setIsMobileOpen(false);
    setPath(pathStr);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "About", id: "about", icon: <FaUserAlt /> },
    { label: "Tech Stack", id: "tech-stack", selector: "tech-stack" },
    { label: "Projects", id: "projects", icon: <FaCode /> },
    { label: "Timeline", id: "timeline", icon: <FaBriefcase /> },
    { label: "Contact", id: "contact", icon: <FaEnvelope /> }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => navigateToPage('/')}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white cursor-pointer select-none"
        >
          {personalDetails.name} <span className="text-indigo-500 font-black">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  if (link.id) handleNavClick(link.id);
                  else if (link.selector) {
                    const el = document.getElementById('about'); // Fallback or search
                    const targetEl = document.getElementById('projects');
                    // We can just scroll to parent container or custom ID
                    // Let's bind directly to section divs
                    if (link.label === "Tech Stack") {
                      const elStack = document.querySelector('section[id="projects"]')?.previousElementSibling?.previousElementSibling;
                      if (elStack) elStack.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  currentPath === '/' 
                    ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' 
                    : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Mode Tabs */}
          <div className="flex space-x-2">
            <button
              onClick={() => navigateToPage('/')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                currentPath === '/'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => navigateToPage('documents')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                currentPath === 'documents'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <FaFileAlt className="w-3 h-3" />
              <span>Documents</span>
            </button>
          </div>
        </nav>

        {/* Mobile Hamburguer Toggler */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-4 flex flex-col text-left">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.id) handleNavClick(link.id);
                    else if (link.label === "Tech Stack") {
                      const elStack = document.querySelector('section[id="projects"]')?.previousElementSibling?.previousElementSibling;
                      if (elStack) elStack.scrollIntoView({ behavior: 'smooth' });
                      setIsMobileOpen(false);
                    }
                  }}
                  className="px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg text-left"
                >
                  {link.label}
                </button>
              ))}

              <div className="h-px bg-slate-100 dark:bg-slate-900 my-2" />

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => navigateToPage('/')}
                  className={`w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    currentPath === '/'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => navigateToPage('documents')}
                  className={`w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                    currentPath === 'documents'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <FaFileAlt />
                  <span>Documents</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

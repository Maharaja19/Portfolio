import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaCode, FaServer, FaTerminal, FaFolderOpen } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { personalDetails } from '../data/portfolioData';

const codeSnippetText = `const developer = {
  name: "${personalDetails.name}",
  skills: ["MERN", "Java", "AWS", "Security"],
  philosophy: "Build scalable, secure architectures",
  passion: "Continuous learning & problem solving",
  code: () => {
    return compileIdeas().deployCloud();
  }
};`;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const roles = personalDetails.roles;
    let timer;

    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh-light dark:bg-mesh-dark">
      {/* Absolute Decorative Circles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl -z-10 animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Text Area */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm <span className="text-gradient text-glow">{personalDetails.name}</span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 flex items-center h-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>I'm a&nbsp;</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-pulse">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Google, OpenAI, and Stripe level engineering aesthetics. Focused on designing secure full-stack applications, managing cloud deployments, and solving algorithmic bottlenecks.
          </motion.p>

          {/* Social Connects & Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => handleScroll('projects')}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="btn-secondary"
            >
              Contact Me
            </button>
            <a
              href={personalDetails.resumeUrl}
              download
              className="btn-secondary flex items-center space-x-2"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Icon Anchors */}
          <motion.div
            className="flex items-center space-x-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2 text-2xl"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href={personalDetails.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2 text-2xl"
              aria-label="HackerRank"
            >
              <SiHackerrank />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2 text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Code & Photo Overlapping Card Deck Area */}
        <motion.div
          className="lg:col-span-5 relative w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating Decorative Coding Icons */}
          <div className="absolute top-6 -left-10 text-indigo-500/30 text-4xl animate-float-slow hidden sm:block">
            <FaCode />
          </div>
          <div className="absolute bottom-6 -right-6 text-emerald-500/30 text-4xl animate-float-medium hidden sm:block">
            <FaServer />
          </div>
          <div className="absolute -top-10 right-10 text-pink-500/30 text-3xl animate-float-fast hidden sm:block">
            <FaTerminal />
          </div>

          <div className="relative w-full max-w-sm aspect-[4/5] sm:aspect-[4/4.5] flex items-center justify-center">
            
            {/* Background IDE Card */}
            <div className="absolute top-0 right-2 w-[85%] rounded-xl overflow-hidden glass-card border border-slate-200/30 dark:border-slate-800/60 shadow-xl opacity-50 dark:opacity-30 select-none pointer-events-none scale-95 origin-top-right transform">
              <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
                <span className="text-[10px] text-slate-600 font-mono">Maharaja.js</span>
              </div>
              <div className="bg-slate-950 p-4 text-left font-mono text-[9px] text-slate-500 leading-relaxed">
                <pre>{codeSnippetText}</pre>
              </div>
            </div>

            {/* Foreground Profile Photo Card */}
            <div className="absolute bottom-0 left-2 w-[80%] rounded-2xl overflow-hidden glass-card border border-slate-200/50 dark:border-slate-800/80 shadow-2xl p-3 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative rounded-xl overflow-hidden aspect-[4/4.5] border border-slate-200/20 bg-slate-100 dark:bg-slate-950">
                <img
                  src="/images/profile/Maharaja.jpeg"
                  alt={personalDetails.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Tech Badge on Image */}
                <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-indigo-600/90 text-[9px] font-black text-white uppercase tracking-wider backdrop-blur-sm shadow-md shadow-indigo-600/10">
                  Full Stack Developer
                </span>
              </div>
              
              {/* Profile Card details */}
              <div className="mt-3 text-left">
                <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">{personalDetails.name}</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">Government College of Technology</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScroll('about')}>
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase mb-2">Scroll Down</span>
        <motion.div
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

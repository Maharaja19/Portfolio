import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, FaGithub, FaExternalLinkAlt, FaBookOpen, FaShieldAlt, 
  FaDatabase, FaExchangeAlt, FaChevronLeft, FaChevronRight, FaTimes, FaExpand,
  FaCalendarAlt, FaBriefcase, FaAward, FaInfoCircle, FaHourglassHalf
} from 'react-icons/fa';
import { caseStudies } from '../data/projectCaseStudiesData';

export default function ProjectCaseStudy({ projectId, goHome }) {
  const proj = caseStudies[projectId];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeApiIndex, setActiveApiIndex] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);

    // Inject JSON-LD Project Schema dynamically
    if (proj) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `jsonld-project-${proj.id}`;
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": proj.title,
        "applicationCategory": proj.category,
        "operatingSystem": "All",
        "author": {
          "@type": "Person",
          "name": "Maharaja M"
        },
        "description": proj.shortDescription || proj.overview,
        "softwareVersion": "1.0.0",
        "downloadUrl": proj.githubUrl
      });
      document.head.appendChild(script);

      return () => {
        const existingScript = document.getElementById(`jsonld-project-${proj.id}`);
        if (existingScript) existingScript.remove();
      };
    }
  }, [proj]);

  if (!proj) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white font-mono p-6">
        <FaInfoCircle className="text-rose-500 text-5xl mb-4 animate-pulse" />
        <h2 className="text-xl font-bold">Case Study Not Found</h2>
        <button onClick={goHome} className="btn-primary mt-6">Return to Root Node</button>
      </div>
    );
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? proj.gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === proj.gallery.length - 1 ? 0 : prev + 1
    );
  };

  // Render SVG Architecture Diagrams
  const renderArchitectureDiagram = () => {
    if (proj.id === 'voting') {
      return (
        <svg viewBox="0 0 800 300" className="w-full h-auto bg-slate-950 rounded-2xl border border-slate-800 p-4 shadow-inner">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366f1"/>
            </marker>
          </defs>
          
          {/* Nodes */}
          <rect x="20" y="110" width="120" height="60" rx="10" fill="#1e1b4b" stroke="#6366f1" stroke-width="2" className="animate-pulse"/>
          <text x="80" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Browser (React)</text>

          <rect x="220" y="110" width="140" height="60" rx="10" fill="#0f172a" stroke="#4f46e5" stroke-width="2"/>
          <text x="290" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Express REST API</text>

          <rect x="440" y="50" width="140" height="60" rx="10" fill="#022c22" stroke="#10b981" stroke-width="2"/>
          <text x="510" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Auth (JWT / OAuth)</text>

          <rect x="440" y="170" width="140" height="60" rx="10" fill="#31102f" stroke="#ec4899" stroke-width="2"/>
          <text x="510" y="205" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Flask Face Service</text>

          <rect x="660" y="110" width="120" height="60" rx="10" fill="#061c24" stroke="#06b6d4" stroke-width="2"/>
          <text x="720" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">MongoDB Atlas</text>

          {/* Connections */}
          <path d="M 140,140 L 210,140" fill="none" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M 360,130 L 430,85" fill="none" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M 360,150 L 430,195" fill="none" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
          
          <path d="M 580,85 L 650,130" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M 580,200 L 650,155" fill="none" stroke="#ec4899" stroke-width="2" marker-end="url(#arrow)"/>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 800 300" className="w-full h-auto bg-slate-950 rounded-2xl border border-slate-800 p-4 shadow-inner">
          <defs>
            <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
            </marker>
          </defs>

          {/* Nodes */}
          <rect x="20" y="110" width="120" height="60" rx="10" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
          <text x="80" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Vite Frontend</text>

          <rect x="200" y="110" width="130" height="60" rx="10" fill="#0f172a" stroke="#4f46e5" stroke-width="2"/>
          <text x="265" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Express Gateway</text>

          <rect x="380" y="50" width="130" height="60" rx="10" fill="#111827" stroke="#94a3b8" stroke-width="2"/>
          <text x="445" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Redis Cache</text>

          <rect x="380" y="170" width="130" height="60" rx="10" fill="#172554" stroke="#3b82f6" stroke-width="2"/>
          <text x="445" y="205" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">BullMQ Queues</text>

          <rect x="560" y="170" width="130" height="60" rx="10" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
          <text x="625" y="205" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Gemini 2.5 AI</text>

          <rect x="660" y="50" width="120" height="60" rx="10" fill="#022c22" stroke="#10b981" stroke-width="2"/>
          <text x="720" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">MongoDB Atlas</text>

          {/* Connections */}
          <path d="M 140,140 L 190,140" fill="none" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow2)"/>
          <path d="M 330,130 L 370,95" fill="none" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow2)"/>
          <path d="M 330,150 L 370,185" fill="none" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow2)"/>
          <path d="M 510,80 L 650,80" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow2)"/>
          <path d="M 510,200 L 550,200" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow2)"/>
          <path d="M 625,170 L 690,120" fill="none" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow2)"/>
        </svg>
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 text-left pt-20">
      
      {/* 1. Hero Banner */}
      <section className="relative overflow-hidden py-16 bg-mesh-light dark:bg-mesh-dark border-b border-slate-200/50 dark:border-slate-800/80">
        <div className="container mx-auto px-6 max-w-5xl">
          <button 
            onClick={goHome}
            className="flex items-center space-x-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors mb-6 cursor-pointer"
          >
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded bg-indigo-500/10 text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
                {proj.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {proj.title}
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                {proj.tagline}
              </p>
            </div>
            
            <div className="md:col-span-4 grid grid-cols-2 gap-4 bg-white/50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/60 backdrop-blur-md">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Role</span>
                <p className="text-xs font-bold text-slate-700 dark:text-white mt-0.5">{proj.role}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Duration</span>
                <p className="text-xs font-bold text-slate-700 dark:text-white mt-0.5">{proj.duration}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Status</span>
                <p className="text-xs font-bold text-emerald-500 mt-0.5">{proj.status}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Scope</span>
                <p className="text-xs font-bold text-slate-700 dark:text-white mt-0.5">{proj.projectType.split(' ')[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        
        {/* Main Content Pane (Col 8) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {proj.overview}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm italic border-l-2 border-indigo-500 pl-4 py-1">
              <strong>Motivation:</strong> {proj.motivation}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Problem Statement</h2>
            <div className="p-6 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {proj.problemStatement}
            </div>
          </div>

          {/* System Architecture Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">System Architecture</h2>
            <p className="text-xs text-slate-400 mb-2">Interactive SVG communication flow between gateway endpoints and background ML modules.</p>
            {renderArchitectureDiagram()}
          </div>

          {/* Authentication Flow timeline */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Authentication Flow</h2>
            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-6">
              {proj.authFlow.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/10" />
                  <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
                    Step {idx + 1}: {step.step}
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">{step.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* API Explorer */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">REST API Explorer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              
              {/* Endpoint select sidebar */}
              <div className="sm:col-span-4 flex flex-col space-y-1 overflow-x-auto max-h-52 pr-1 no-scrollbar">
                {proj.apiExplorer.map((api, idx) => {
                  let badgeColor = "bg-blue-500/10 text-blue-500";
                  if (api.method === "POST") badgeColor = "bg-emerald-500/10 text-emerald-500";
                  return (
                    <button
                      key={api.path}
                      onClick={() => setActiveApiIndex(idx)}
                      className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        activeApiIndex === idx
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/20"
                          : "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80"
                      }`}
                    >
                      <div className="truncate text-xs font-semibold mr-2">{api.path}</div>
                      <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${
                        activeApiIndex === idx ? "bg-white/20 text-white" : badgeColor
                      }`}>
                        {api.method}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Endpoint detail box */}
              <div className="sm:col-span-8 p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800 space-y-4 overflow-x-auto">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Endpoint Description</span>
                  <span className="text-slate-400 font-semibold">{proj.apiExplorer[activeApiIndex].group}</span>
                </div>
                <p className="text-slate-400 text-left font-sans text-xs">{proj.apiExplorer[activeApiIndex].desc}</p>
                
                {/* Request payload */}
                <div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1">Request Payload</span>
                  <pre className="p-3 bg-slate-950 rounded-lg overflow-x-auto select-all text-emerald-400">{proj.apiExplorer[activeApiIndex].req}</pre>
                </div>

                {/* Response payload */}
                <div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1">Response JSON</span>
                  <pre className="p-3 bg-slate-950 rounded-lg overflow-x-auto select-all text-indigo-400">{proj.apiExplorer[activeApiIndex].res}</pre>
                </div>
              </div>

            </div>
          </div>

          {/* Database Schema */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Database Design</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {proj.database.map((col) => (
                <div key={col.name} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 space-y-3 font-mono text-xs">
                  <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <FaDatabase className="text-indigo-500" />
                    <span className="font-bold text-slate-800 dark:text-white text-sm">{col.name}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-sans text-xs">{col.desc}</p>
                  <pre className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg text-slate-600 dark:text-slate-400 overflow-x-auto">{col.schema}</pre>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Challenges Faced &amp; Solutions</h2>
            <div className="space-y-4">
              {proj.challenges.map((ch, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/80 space-y-2">
                  <h4 className="font-bold text-rose-500 text-sm flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center text-xs">!</span>
                    <span>Challenge: {ch.issue}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                    <strong>Solution:</strong> {ch.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Enhancements */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Future Roadmap</h2>
            <ul className="space-y-3">
              {proj.futureEnhancements.map((fut, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="text-indigo-500 font-black mr-3 select-none">&bull;</span>
                  <span>{fut}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sidebar specs pane (Col 4) */}
        <div className="lg:col-span-4 space-y-6 text-left">
          
          {/* Tech badges box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 space-y-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Stack Integrations</h3>
            
            {Object.entries(proj.techStack).map(([layer, techs]) => (
              <div key={layer} className="space-y-1.5">
                <span className="text-[9px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider block">{layer}</span>
                <div className="flex flex-wrap gap-1">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 space-y-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Project Impact &amp; Metrics</h3>
            <div className="space-y-4">
              {proj.metrics.map((met) => (
                <div key={met.label} className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 last:pb-0">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{met.label}</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{met.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed italic mt-2">
              {proj.impact}
            </p>
          </div>

          {/* Repository & Demo Launchpad */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Code Launchpad</h3>
            
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary flex items-center justify-center space-x-2 text-xs py-2.5"
            >
              <FaGithub />
              <span>GitHub Code Repository</span>
            </a>

            {proj.demoUrl ? (
              <a
                href={proj.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary flex items-center justify-center space-x-2 text-xs py-2.5"
              >
                <FaExternalLinkAlt />
                <span>Live Deploy Demo</span>
              </a>
            ) : (
              <div className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/50 text-slate-400 text-xs font-bold flex items-center justify-center space-x-1.5">
                <FaHourglassHalf className="animate-spin text-amber-500" />
                <span>Live Deploy: Coming Soon</span>
              </div>
            )}

            <a
              href={proj.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-secondary flex items-center justify-center space-x-2 text-xs py-2.5"
            >
              <FaBookOpen />
              <span>Read Documentation</span>
            </a>
          </div>

          {/* Screenshots Gallery Container */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Screenshots Gallery</h3>
            
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
              <img
                src={proj.gallery[activeImageIndex]}
                alt={`Screenshot slide ${activeImageIndex + 1}`}
                className="w-full h-full object-contain cursor-zoom-in"
                onClick={() => setLightboxImage(proj.gallery[activeImageIndex])}
                loading="lazy"
              />

              <button
                onClick={() => setLightboxImage(proj.gallery[activeImageIndex])}
                className="absolute top-2 right-2 p-1.5 rounded bg-slate-950/70 text-slate-200 hover:bg-slate-900 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer"
              >
                <FaExpand className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-2 p-2 rounded-full bg-slate-950/70 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Prev slide"
              >
                <FaChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 p-2 rounded-full bg-slate-950/70 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-1">
              {proj.gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeImageIndex === idx ? "bg-indigo-500 w-4" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-lg bg-slate-900 text-white cursor-pointer"
              aria-label="Close fullscreen"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <motion.img
              src={lightboxImage}
              alt="Fullscreen mockup view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

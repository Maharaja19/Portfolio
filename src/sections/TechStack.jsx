import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiJavascript, SiPython, SiC, SiHtml5, 
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, 
  SiMongodb, SiMysql, SiGit, SiGithub, 
  SiPostman, SiJsonwebtokens 
} from 'react-icons/si';
import { FaCloud, FaExchangeAlt, FaLock, FaJava, FaCss3Alt, FaAws, FaCode } from 'react-icons/fa';
import { techStack } from '../data/portfolioData';

// Helper mapping tech names to icons and neon styles
const techConfig = {
  // Languages
  "Java": { icon: <FaJava className="text-red-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]" },
  "JavaScript": { icon: <SiJavascript className="text-yellow-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]" },
  "Python": { icon: <SiPython className="text-blue-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]" },
  "C": { icon: <SiC className="text-blue-600 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]" },
  "HTML5": { icon: <SiHtml5 className="text-orange-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]" },
  "CSS3": { icon: <FaCss3Alt className="text-blue-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
  
  // Frameworks
  "React.js": { icon: <SiReact className="text-sky-400 w-8 h-8 animate-spin-slow" />, glow: "hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]" },
  "Node.js": { icon: <SiNodedotjs className="text-emerald-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]" },
  "Express.js": { icon: <SiExpress className="text-slate-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(148,163,184,0.4)]" },
  "Tailwind CSS": { icon: <SiTailwindcss className="text-teal-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(45,212,191,0.4)]" },
  
  // Databases
  "MongoDB": { icon: <SiMongodb className="text-emerald-600 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(5,150,105,0.4)]" },
  "MySQL": { icon: <SiMysql className="text-blue-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
  
  // Tools & Cloud & Auth
  "Git": { icon: <SiGit className="text-red-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]" },
  "GitHub": { icon: <SiGithub className="text-slate-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(148,163,184,0.4)]" },
  "VS Code": { icon: <FaCode className="text-blue-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
  "Postman": { icon: <SiPostman className="text-orange-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]" },
  "AWS EC2": { icon: <FaAws className="text-amber-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]" },
  "AWS S3": { icon: <FaAws className="text-orange-600 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(221,82,76,0.4)]" },
  "CloudFront": { icon: <FaCloud className="text-cyan-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]" },
  "JWT": { icon: <SiJsonwebtokens className="text-pink-500 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]" },
  "Google OAuth": { icon: <FaLock className="text-red-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(248,113,113,0.4)]" },
  "REST APIs": { icon: <FaExchangeAlt className="text-indigo-400 w-8 h-8" />, glow: "hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]" }
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Languages", "Frameworks", "Databases", "Tools & Infrastructure"];

  // Map category data structures
  const getCategoryName = (item) => {
    if (item.category === "Language") return "Languages";
    if (item.category === "Frontend" || item.category === "Backend") return "Frameworks";
    if (item.category === "Database") return "Databases";
    return "Tools & Infrastructure";
  };

  const allTechItems = [
    ...techStack.languages,
    ...techStack.frameworks,
    ...techStack.databases,
    ...techStack.tools
  ].map(item => ({
    ...item,
    mappedCategory: getCategoryName(item)
  }));

  const filteredItems = activeCategory === "All"
    ? allTechItems
    : allTechItems.filter(item => item.mappedCategory === activeCategory);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A comprehensive catalog of languages, architectures, tools, and platforms I employ.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech) => {
              const cfg = techConfig[tech.name] || { icon: <FaCloud className="text-indigo-400 w-8 h-8" />, glow: "hover:shadow-neon-indigo" };
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center justify-center text-center interactive-card group transition-all duration-300 hover:-translate-y-1 ${cfg.glow}`}
                >
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cfg.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">{tech.name}</h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">{tech.category || tech.mappedCategory}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

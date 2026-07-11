import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const handleExploreProject = (projId) => {
    window.location.hash = `#/project/${projId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Featured Creations
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A showcase of production-ready platforms, focusing on security, analytics, and interactive learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              className="rounded-2xl overflow-hidden glass-card border border-slate-200/50 dark:border-slate-800/50 flex flex-col interactive-card hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-neon-indigo transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Image Preview Container */}
              <div className="relative group aspect-video overflow-hidden bg-slate-900 border-b border-slate-200/30 dark:border-slate-800/50">
                <img
                  src={proj.images[0]}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handleExploreProject(proj.id)}
                    className="px-4 py-2 bg-indigo-600/90 text-white rounded-lg text-xs font-semibold tracking-wider uppercase cursor-pointer backdrop-blur-sm"
                  >
                    Explore System Case Study
                  </button>
                </div>
              </div>

              {/* Content Summary */}
              <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 line-clamp-1">{proj.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed flex-grow">
                  {proj.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-[10px] font-bold text-indigo-500 dark:text-indigo-400">
                      +{proj.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-2">
                  <button
                    onClick={() => handleExploreProject(proj.id)}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-xs tracking-wider uppercase cursor-pointer"
                  >
                    Read Case Study &rarr;
                  </button>
                  <div className="flex space-x-3 text-slate-500 dark:text-slate-400">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-500 transition-colors p-1"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href={proj.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-500 transition-colors p-1"
                      aria-label="Documentation"
                    >
                      <FaBookOpen className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaDownload, FaEye, FaImage, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

export default function Internship() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const exp = experienceData[0]; // Fetch the Bluekode intern data

  const openDocument = (path) => {
    window.open(path, '_blank');
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-5xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional Internship
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Details of my commercial assignments, showing tech integration and analytical deliverables.
          </p>
        </div>

        {/* Timeline Block */}
        <div className="relative border-l-2 border-indigo-500/30 pl-6 sm:pl-10 text-left">
          
          {/* Central Point */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-500/20 z-10" />

          <motion.div
            className="p-8 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 space-y-6 hover:shadow-xl hover:border-indigo-500/15 transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 font-extrabold text-lg select-none">
                  {exp.logoPlaceholder}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</h4>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-xs font-semibold text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center space-x-1">
                  <FaMapMarkerAlt />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {exp.description}
            </p>

            {/* Tech pills */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Technologies Deployed</span>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullet achievements */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Core Accomplishments</span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2 select-none">&bull;</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Document download buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <button
                onClick={() => openDocument(exp.experienceLetter)}
                className="btn-primary inline-flex items-center space-x-2 text-xs py-2.5"
              >
                <FaEye />
                <span>View Experience Letter</span>
              </button>
              <button
                onClick={() => openDocument(exp.experienceCertificate)}
                className="btn-secondary inline-flex items-center space-x-2 text-xs py-2.5"
              >
                <FaDownload />
                <span>View Internship Certificate</span>
              </button>
            </div>

            {/* Internship Photo Gallery */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                Internship Media Gallery
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div 
                  className="relative group aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200/20 cursor-zoom-in"
                  onClick={() => setLightboxImage(exp.internPhoto)}
                >
                  <img
                    src={exp.internPhoto}
                    alt="Internship workspace"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaImage className="text-white text-lg" />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* LIGHTBOX DRAWER */}
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
              aria-label="Close lightbox"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <motion.img
              src={lightboxImage}
              alt="Expanded media view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaEye, FaDownload, FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { certificationData } from '../data/portfolioData';

// Map issuer names to short tag abbreviations for logos
const issuerLogos = {
  "IBM SkillsBuild": <span className="text-blue-500 font-extrabold tracking-tighter">IBM</span>,
  "IBM (Coursera)": <span className="text-blue-500 font-extrabold tracking-tighter">IBM</span>,
  "Forage": <span className="text-blue-400 font-bold tracking-tight">FORAGE</span>,
  "NPTEL": <span className="text-amber-500 font-extrabold">NPTEL</span>,
  "EBPL": <span className="text-purple-500 font-bold">EBPL</span>,
  "Government College of Technology": <span className="text-emerald-600 font-bold text-xs">GCT</span>
};

export default function Certifications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'Cloud', 'Programming', 'Internship', 'Job Simulation', 'College', 'Achievements', 'AI', 'Data Analytics'
  ];

  // Helper matching filter toggles to category values
  const matchFilter = (cert, filter) => {
    if (filter === 'All') return true;
    
    const cat = cert.filterCategory.toLowerCase();
    const skillsList = cert.skills.map(s => s.toLowerCase());

    if (filter === 'Cloud') return cat.includes('cloud') || skillsList.includes('cloud') || skillsList.includes('devops');
    if (filter === 'Programming') return cat.includes('programming') || skillsList.includes('python') || skillsList.includes('java');
    if (filter === 'Internship') return cat.includes('ai') && cert.issuer.toLowerCase().includes('ebpl'); // matches ebpl internship
    if (filter === 'Job Simulation') return cat.includes('job simulation');
    if (filter === 'College') return cat.includes('college');
    if (filter === 'Achievements') return cert.achievement !== undefined || cat.includes('college');
    if (filter === 'AI') return cat.includes('ai') || skillsList.includes('generative ai') || skillsList.includes('llms');
    if (filter === 'Data Analytics') return skillsList.includes('data cleaning') || skillsList.includes('sql') || skillsList.includes('excel');

    return false;
  };

  const filteredCerts = certificationData.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag = matchFilter(cert, activeFilter);

    return matchesSearch && matchesTag;
  });

  const openPdf = (path) => {
    window.open(path, '_blank');
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Certifications &amp; Credentials
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Search and filter verified training courses, software engineering simulations, and academic transcripts.
          </p>
        </div>

        {/* Controls Layout (Search & Filters) */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search certificates, skills, or organizations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden glass-card border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between interactive-card hover:-translate-y-1 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Thumbnail Gradient Card */}
                <div className={`h-40 bg-gradient-to-br ${cert.theme} p-6 text-white flex flex-col justify-between relative`}>
                  {/* Category overlay */}
                  <span className="text-[9px] uppercase font-bold tracking-widest bg-black/25 px-2 py-0.5 rounded backdrop-blur-xs w-fit">
                    {cert.category}
                  </span>

                  {/* Gold / Elite Badge Overlay */}
                  {cert.achievement && (
                    <div className="absolute top-4 right-4 flex items-center space-x-1">
                      <FaAward className="text-yellow-400 w-5 h-5 animate-pulse" />
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-yellow-400/25 px-1.5 py-0.5 rounded text-yellow-300">
                        {cert.achievement.split(' ')[0]}
                      </span>
                    </div>
                  )}

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm sm:text-base line-clamp-2 text-left leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-indigo-200 text-left font-semibold">
                      {cert.issuer} &bull; {cert.date}
                    </p>
                  </div>
                </div>

                {/* Details / Skills */}
                <div className="p-5 text-left flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Organization Logo line */}
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-xs font-black select-none">
                        {issuerLogos[cert.issuer] || <FaCertificate className="text-slate-400" />}
                      </div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{cert.issuer}</span>
                    </div>

                    {/* Skills learned */}
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-[9px] font-semibold text-slate-500 dark:text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => openPdf(cert.pdfPath)}
                      className="px-2 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-600 text-indigo-500 hover:text-white transition-all text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <FaEye />
                      <span>View</span>
                    </button>
                    <a
                      href={cert.pdfPath}
                      download
                      className="px-2 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all text-[10px] font-bold flex items-center justify-center space-x-1"
                    >
                      <FaDownload />
                      <span>PDF</span>
                    </a>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all text-[10px] font-bold flex items-center justify-center space-x-1"
                    >
                      <FaExternalLinkAlt className="w-2 h-2" />
                      <span>Verify</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <div className="p-12 text-center text-slate-400 dark:text-slate-500">
            No credentials found matching your parameters.
          </div>
        )}
      </div>
    </section>
  );
}

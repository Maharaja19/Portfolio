import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilePdf, FaEye, FaDownload, FaTimes } from 'react-icons/fa';
import { documentRegistry } from '../data/portfolioData';

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ["All", "Resume", "Internship", "Certificates", "Achievements", "Incubation", "Academic"];

  const filteredDocs = documentRegistry.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = activeTab === 'All' || doc.category === activeTab;

    return matchesSearch && matchesTab;
  });

  const openPdf = (path) => {
    window.open(path, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-5xl z-10 relative text-left">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Documents &amp; Credentials Center
          </h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            A centralized secure locker to preview, authorize, and download all letters, transcripts, and credentials.
          </p>
        </div>

        {/* Controls */}
        <div className="space-y-6 mb-10">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search file name, type, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === cat
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredDocs.map((doc) => (
              <motion.div
                key={doc.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between interactive-card hover:-translate-y-1 hover:border-indigo-500/10 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Preview Area */}
                <div 
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-200/10 mb-4 flex items-center justify-center relative group cursor-zoom-in"
                  onClick={() => setLightboxImage(doc.thumbnail)}
                >
                  <img
                    src={doc.thumbnail}
                    alt={doc.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-102 transition duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaEye className="text-white text-xl" />
                  </div>
                  {/* File category label */}
                  <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-[8px] font-bold text-slate-300 uppercase tracking-widest backdrop-blur-xs">
                    {doc.category}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Name and Meta */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 h-10 leading-tight">
                      {doc.name}
                    </h3>
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 dark:text-slate-500">
                      <span>SIZE: {doc.size}</span>
                      <span>ISSUED: {doc.date}</span>
                    </div>
                  </div>

                  {/* PDF indicator icon line */}
                  <div className="flex items-center space-x-2 text-rose-500 bg-rose-500/5 dark:bg-rose-500/10 p-2 rounded-lg text-xs font-semibold">
                    <FaFilePdf />
                    <span className="truncate text-[10px]">Portable Document Format</span>
                  </div>

                  {/* Download Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => openPdf(doc.path)}
                      className="px-3 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-600 text-indigo-500 hover:text-white transition-all text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <FaEye />
                      <span>Open PDF</span>
                    </button>
                    <a
                      href={doc.path}
                      download
                      className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all text-xs font-bold flex items-center justify-center space-x-1.5"
                    >
                      <FaDownload />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDocs.length === 0 && (
          <div className="p-12 text-center text-slate-400 dark:text-slate-500">
            No documents match your parameters.
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox for preview thumbnails */}
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
              aria-label="Close preview"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <motion.img
              src={lightboxImage}
              alt="Document visual preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
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

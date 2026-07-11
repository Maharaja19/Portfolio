import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaRocket, FaFileAlt, FaGlobeAmericas, FaMapSigns, FaChartLine } from 'react-icons/fa';
import { incubationData } from '../data/portfolioData';

export default function Incubation() {
  const [activeTab, setActiveTab] = useState('overview');

  const openDoc = (path) => {
    window.open(path, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: <FaRocket /> },
    { id: 'research', label: 'Market & Research', icon: <FaGlobeAmericas /> },
    { id: 'roadmap', label: 'Future Roadmap', icon: <FaMapSigns /> }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Absolute Incubation Ribbon Ribbon */}
      <div className="absolute top-0 right-12 w-16 h-28 bg-gradient-to-b from-amber-500 to-yellow-600 shadow-md flex flex-col items-center justify-center rounded-b-xl z-20 select-none">
        <FaAward className="text-white text-3xl mb-1 animate-bounce" />
        <span className="text-[9px] text-white font-extrabold uppercase tracking-widest text-center leading-none">
          DCKAP<br/>INC
        </span>
      </div>

      <div className="container mx-auto px-6 max-w-5xl z-10 relative">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Incubated Venturing
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Selected for incubation support and mentorship under GCT department networks.
          </p>
        </div>

        {/* Highlight Container */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          {/* Neon background grids */}
          <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl -z-10" />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Header / Info Column (Col 5) */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-amber-500/20 rounded-2xl text-amber-500">
                  <FaRocket className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                    Startup Incubation
                  </span>
                  <h3 className="text-2xl font-black">{incubationData.title}</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {incubationData.highlight}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => openDoc(incubationData.selectionLetter)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <FaFileAlt />
                  <span>Selection Letter</span>
                </button>
                <button
                  onClick={() => openDoc(incubationData.incubationCertificate)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors border border-slate-700 cursor-pointer"
                >
                  <FaAward />
                  <span>Incubation Certificate</span>
                </button>
              </div>
            </div>

            {/* Content Tabs (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tab Toggles */}
              <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-slate-800 text-white border-b-2 border-amber-500'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Body */}
              <div className="text-left min-h-[220px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <h4 className="font-bold text-slate-200">System Overview: {incubationData.project}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{incubationData.overview}</p>
                      
                      {/* Interactive Architecture representation */}
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex-shrink-0 flex items-center justify-center text-indigo-400">
                          <FaChartLine />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Architecture Model</span>
                          <span className="text-xs text-slate-300">Modular MVC, REST Ledger Sync, Parental Limits controllers.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'research' && (
                    <motion.div
                      key="research"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <h4 className="font-bold text-slate-200">Market Validation</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{incubationData.research}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{incubationData.validation}</p>
                    </motion.div>
                  )}

                  {activeTab === 'roadmap' && (
                    <motion.div
                      key="roadmap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <h4 className="font-bold text-slate-200">Project Future Roadmap</h4>
                      <div className="space-y-3 pl-2">
                        {incubationData.roadmap.map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-3 text-sm">
                            <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <span className="text-slate-400">{step}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { FaCalculator, FaUsers, FaCoins } from 'react-icons/fa';
import { leadershipData } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-5xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Leadership &amp; Management
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Treasury and administration roles in campus clubs and academic associations.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((lead, idx) => (
            <motion.div
              key={lead.organization}
              className="p-8 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 text-left flex flex-col justify-between hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                    <FaCalculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{lead.role}</h3>
                    <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{lead.organization}</h4>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  <span>Term: {lead.period}</span>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {lead.description}
                </p>

                {/* Stats Badge */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/50 flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-300">
                  <FaCoins className="text-amber-500" />
                  <span className="font-semibold">{lead.stats}</span>
                </div>

                {/* Bullets */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Core Accomplishments</span>
                  {lead.achievements.map((ach, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      <span className="text-indigo-500 font-bold mr-2.5 select-none">&bull;</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

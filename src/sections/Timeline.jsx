import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaUsers } from 'react-icons/fa';
import { timelineData } from '../data/portfolioData';

const typeIcons = {
  education: <FaGraduationCap className="w-4 h-4 text-indigo-500" />,
  internship: <FaBriefcase className="w-4 h-4 text-emerald-500" />,
  achievement: <FaAward className="w-4 h-4 text-amber-500" />,
  leadership: <FaUsers className="w-4 h-4 text-sky-500" />
};

export default function Timeline() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-4xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Milestones &amp; History
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A chronological visualization of my education, internships, leadership roles, and achievements.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={item.id}
              className="relative pl-8 md:pl-12 text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Year sidebar (visible on desktop) */}
              <div className="absolute right-full mr-8 top-1 hidden md:block text-right w-24">
                <span className="text-sm font-bold text-slate-400 dark:text-slate-500">{item.year}</span>
              </div>

              {/* Central node icon */}
              <div className="absolute -left-[17px] top-1 p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm z-10">
                {typeIcons[item.type]}
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 space-y-3 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 hover:shadow-lg transition-all duration-300">
                {/* Year tag for mobile */}
                <span className="inline-block md:hidden text-xs font-bold text-indigo-500 dark:text-indigo-400 mb-1">
                  {item.year}
                </span>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{item.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>
                
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.subtitle}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  // Group skills by category
  const categories = skills.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-5xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Domain Competence
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Self-assessment of primary computer science paradigms and implementation domains.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(categories).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              className="p-8 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 pb-3 border-b border-slate-200/50 dark:border-slate-800/50">
                {category}
              </h3>
              
              <div className="space-y-5">
                {items.map((item, idx) => (
                  <div key={item.name} className="space-y-2 text-left">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{item.level}%</span>
                    </div>
                    {/* Progress track */}
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.05, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

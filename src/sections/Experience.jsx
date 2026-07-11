import { motion } from 'framer-motion';
import { FaDatabase, FaChartBar, FaFileExcel, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

const skillIcons = {
  "SQL": <FaDatabase className="text-blue-500 w-4 h-4" />,
  "Power BI": <FaChartBar className="text-yellow-500 w-4 h-4" />,
  "Excel": <FaFileExcel className="text-emerald-500 w-4 h-4" />
};

export default function Experience() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-5xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Internships where I applied data querying, dashboards, and analytical pipelines.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              className="p-8 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 text-left hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                    <FaBriefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500 text-sm">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Skills Tags inside experience */}
              <div className="py-6 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    {skillIcons[skill] || <FaDatabase className="w-3.5 h-3.5" />}
                    <span>{skill}</span>
                  </span>
                ))}
              </div>

              {/* Achievements bullets */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Contributions &amp; Impact</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((ach, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="text-indigo-500 font-bold mr-3 select-none">&bull;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

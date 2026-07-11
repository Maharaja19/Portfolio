import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaServer, FaLightbulb } from 'react-icons/fa';
import { aboutMeStory, personalDetails } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const corePillars = [
    {
      icon: <FaCode className="w-6 h-6 text-indigo-500" />,
      title: "Scalable Full Stack MERN",
      text: "Passionate about engineering reliable web apps using React, Node.js, Express, and MongoDB."
    },
    {
      icon: <FaServer className="w-6 h-6 text-emerald-500" />,
      title: "Cloud & Security Architecture",
      text: "Designing infrastructure on AWS (EC2, S3, CloudFront) using secure authentication flows (JWT, OAuth)."
    },
    {
      icon: <FaLightbulb className="w-6 h-6 text-amber-500" />,
      title: "Algorithmic Problem Solving",
      text: "Solid fundamentals in Data Structures, Relational Database query structures, and OOP design models."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Decorative meshes */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            My Journey &amp; Story
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A developer who bridges engineering logic with cloud scaling architectures.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Avatar / Profile Graphic */}
          <motion.div className="lg:col-span-5 flex justify-center" variants={itemVariants}>
            <div className="relative group max-w-xs">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-2xl overflow-hidden glass-card aspect-square max-w-[280px]">
                <img
                  src="/images/profile/Maharaja.jpeg"
                  alt={personalDetails.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Story Section */}
          <motion.div className="lg:col-span-7 space-y-6 text-left" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {aboutMeStory.intro}
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              {aboutMeStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-card flex items-start space-x-3">
                <img
                  src="/images/college/college.png"
                  alt="Government College of Technology"
                  className="w-10 h-10 object-contain mt-0.5 rounded-lg flex-shrink-0 bg-white dark:bg-slate-900 p-0.5 border border-slate-200/20"
                />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Education</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">BE CSE (CGPA {personalDetails.education.cgpa})</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{personalDetails.education.institution}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card flex items-start space-x-3">
                <FaLightbulb className="w-8 h-8 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Objective</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[220px] leading-tight">
                    Deploy scalable web/microservice architectures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pillars / Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {corePillars.map((p, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl glass-card interactive-card hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-neon-indigo transition-all duration-300 text-left border border-slate-200/50 dark:border-slate-800/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-800/50 w-fit rounded-xl mb-4">
                {p.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

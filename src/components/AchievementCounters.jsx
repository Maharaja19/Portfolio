import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { counterStats } from '../data/portfolioData';

function SingleCounter({ targetValue, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const incrementTime = Math.max(Math.floor(duration / targetValue), 30);
    
    const timer = setInterval(() => {
      start += Math.ceil(targetValue / (duration / incrementTime));
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <div ref={ref} className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-center text-center interactive-card hover:-translate-y-1 hover:border-indigo-500/10 hover:shadow-lg transition-all duration-300">
      <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
        {count}{suffix}
      </span>
      <span className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {label}
      </span>
    </div>
  );
}

export default function AchievementCounters() {
  return (
    <section className="py-12 bg-white dark:bg-slate-950/60 z-10 relative border-y border-slate-100 dark:border-slate-900/60">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {counterStats.map((stat, idx) => (
            <SingleCounter
              key={idx}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

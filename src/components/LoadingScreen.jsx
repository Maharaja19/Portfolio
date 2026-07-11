import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  const messages = [
    "Initializing MERN systems...",
    "Connecting secure database instances...",
    "Querying cloud infrastructure stacks...",
    "Optimizing interface layouts...",
    "System check: 100% functional."
  ];

  useEffect(() => {
    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600); // Small pause for completeness
          return 100;
        }
        // Random increment for realistic feel
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Step through CLI text messages based on current progress
    const segment = 100 / messages.length;
    const currentSegment = Math.floor(progress / segment);
    const index = Math.min(currentSegment, messages.length - 1);
    if (index !== activeMessageIndex) {
      setActiveMessageIndex(index);
    }
  }, [progress, activeMessageIndex, messages.length]);

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950 font-mono text-indigo-400 p-6 select-none">
      <div className="max-w-md w-full">
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 pb-4 mb-4 border-b border-slate-800">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs text-slate-500 pl-2">system_boot.sh</span>
        </div>

        {/* Prompt */}
        <div className="mb-4">
          <span className="text-emerald-400">maharaja@portfolio:~$</span>
          <span className="text-slate-100 ml-2">npm run start:portfolio</span>
        </div>

        {/* Loading details */}
        <div className="space-y-2 text-sm text-slate-300 min-h-[100px]">
          {messages.slice(0, activeMessageIndex).map((msg, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-emerald-500">✓</span>
              <span>{msg}</span>
            </div>
          ))}
          <div className="flex items-center space-x-2 text-indigo-400 animate-pulse">
            <span className="text-slate-500">&gt;</span>
            <span>{messages[activeMessageIndex]}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8">
          <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
            <span>COMPILING</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

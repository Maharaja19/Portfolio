import { motion } from 'framer-motion';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';

export default function NotFound({ goHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 font-sans p-6 text-center select-none overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="max-w-md w-full space-y-6 z-10">
        <motion.div
          className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          404
        </motion.div>

        <motion.h1
          className="text-2xl font-bold text-white tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Endpoint Not Found
        </motion.h1>

        <motion.p
          className="text-slate-400 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The route you are requesting does not resolve to an active compiler node. It may have been relocated or deleted.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-4"
        >
          <button
            onClick={goHome}
            className="btn-primary inline-flex items-center space-x-2 text-sm"
          >
            <FaHome />
            <span>Return to Root Node</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

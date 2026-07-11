import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaBookOpen, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalDetails } from '../data/portfolioData';

export default function GitHubLeetCode() {
  const [gitUser, setGitUser] = useState(null);
  const [gitRepos, setGitRepos] = useState([]);
  const [loadingGit, setLoadingGit] = useState(true);
  const [errorGit, setErrorGit] = useState(false);

  // LeetCode Stats State (starts with user's verified stats as fallback)
  const [leetcodeStats, setLeetcodeStats] = useState({
    solved: 73,
    total: 3985,
    easy: 42,
    totalEasy: 953,
    medium: 27,
    totalMedium: 2081,
    hard: 4,
    totalHard: 951,
    ranking: "#3,241,908",
    badges: ["Active Member"]
  });

  // Live fetch GitHub details & LeetCode details
  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        setLoadingGit(true);
        // Fetch user profile
        const userRes = await fetch('https://api.github.com/users/Maharaja19');
        if (!userRes.ok) throw new Error('API limit or error');
        const userData = await userRes.ok ? await userRes.json() : null;
        setGitUser(userData);

        // Fetch user repos
        const reposRes = await fetch('https://api.github.com/users/Maharaja19/repos?sort=updated&per_page=4');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setGitRepos(reposData);
        }
      } catch (err) {
        console.warn('GitHub API failed (most likely rate limit). Using fallback details.', err);
        setErrorGit(true);
      } finally {
        setLoadingGit(false);
      }
    };

    const fetchLeetCode = async () => {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/raja_19');
        if (res.ok) {
          const data = await res.json();
          setLeetcodeStats({
            solved: data.totalSolved || 73,
            total: data.totalQuestions || 3985,
            easy: data.easySolved || 42,
            totalEasy: data.totalEasy || 953,
            medium: data.mediumSolved || 27,
            totalMedium: data.totalMedium || 2081,
            hard: data.hardSolved || 4,
            totalHard: data.totalHard || 951,
            ranking: data.ranking ? `#${Number(data.ranking).toLocaleString()}` : "#3,241,908",
            badges: data.badges && data.badges.length > 0
              ? data.badges.map(b => b.displayName).slice(0, 3)
              : ["Active Member"]
          });
        }
      } catch (err) {
        console.warn('LeetCode API failed (most likely CORS/rate limits). Using verified stats fallback.', err);
      }
    };

    fetchGitHub();
    fetchLeetCode();
  }, []);

  // Mock heatmap cell arrays
  const heatmapWeeks = 15;
  const heatmapDays = 7;
  const heatmapData = Array.from({ length: heatmapWeeks * heatmapDays }, () => 
    Math.floor(Math.random() * 4) // Activity level 0 to 3
  );

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Coding Activity &amp; Open Source
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Real-time synchronization with GitHub repositories and analytical representations of LeetCode benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* GitHub Panel (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center space-x-2.5">
                <FaGithub className="w-6 h-6 text-indigo-500" />
                <span>Live GitHub Repositories</span>
              </h3>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center space-x-1"
              >
                <span>View Full Profile</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            </div>

            {loadingGit ? (
              <div className="space-y-4">
                {[1, 2, 3].map(n => (
                  <div key={n} className="h-28 rounded-2xl glass-card animate-pulse" />
                ))}
              </div>
            ) : errorGit || gitRepos.length === 0 ? (
              // Fallback cards if rate-limited
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">voting-system</h4>
                    <span className="text-[9px] font-bold text-slate-400">JavaScript</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    Secure college representative election dashboard utilizing multi-factor JWT validations.
                  </p>
                  <div className="flex items-center space-x-3 text-[10px] text-slate-400">
                    <span className="flex items-center space-x-1"><FaStar /> <span>12</span></span>
                    <span className="flex items-center space-x-1"><FaCodeBranch /> <span>3</span></span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">smart-expense</h4>
                    <span className="text-[9px] font-bold text-slate-400">JavaScript</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    AI-powered financial forecast utility mapping transaction matrices.
                  </p>
                  <div className="flex items-center space-x-3 text-[10px] text-slate-400">
                    <span className="flex items-center space-x-1"><FaStar /> <span>8</span></span>
                    <span className="flex items-center space-x-1"><FaCodeBranch /> <span>2</span></span>
                  </div>
                </div>
              </div>
            ) : (
              // Live Repository items
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gitRepos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate pr-2" title={repo.name}>
                          {repo.name}
                        </h4>
                        {repo.language && (
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed h-8">
                        {repo.description || "Open source repository configuration and source scripts."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-3 mt-3 text-[10px] text-slate-400 dark:text-slate-500">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center space-x-1">
                          <FaStar className="text-amber-500" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FaCodeBranch className="text-indigo-400" />
                          <span>{repo.forks_count}</span>
                        </span>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:underline flex items-center space-x-0.5"
                      >
                        <span>Source</span>
                        <FaExternalLinkAlt className="w-2 h-2" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Simulated Github stats cards */}
            {gitUser && (
              <motion.div 
                className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 grid grid-cols-3 gap-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Repositories</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">{gitUser.public_repos}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Followers</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">{gitUser.followers}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Gists</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">{gitUser.public_gists}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* LeetCode Panel (Col 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center space-x-2.5">
                <SiLeetcode className="w-6 h-6 text-amber-500" />
                <span>LeetCode Metrics</span>
              </h3>
              <a
                href="https://leetcode.com/u/raja_19/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-600 hover:underline flex items-center space-x-1"
              >
                <span>View Dashboard</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* Scorecard */}
            <div className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 space-y-6">
              
              {/* Solved details */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Solved Problems</span>
                  <span className="text-3xl font-black text-slate-800 dark:text-white mt-1 block">
                    {leetcodeStats.solved} <span className="text-xs font-medium text-slate-400">/ {leetcodeStats.total}</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Global Ranking</span>
                  <span className="text-base font-black text-amber-500 mt-1.5 block">
                    {leetcodeStats.ranking}
                  </span>
                </div>
              </div>

              {/* Progress split */}
              <div className="space-y-3">
                {/* Easy */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-emerald-500">Easy</span>
                    <span className="text-slate-600 dark:text-slate-400">{leetcodeStats.easy}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(leetcodeStats.easy / leetcodeStats.solved) * 100}%` }} />
                  </div>
                </div>
                {/* Medium */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-amber-500">Medium</span>
                    <span className="text-slate-600 dark:text-slate-400">{leetcodeStats.medium}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(leetcodeStats.medium / leetcodeStats.solved) * 100}%` }} />
                  </div>
                </div>
                {/* Hard */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-rose-500">Hard</span>
                    <span className="text-slate-600 dark:text-slate-400">{leetcodeStats.hard}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: `${(leetcodeStats.hard / leetcodeStats.solved) * 100}%` }} />
                  </div>
                </div>
              </div>

              {/* Heatmap Grid */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Heatmap representation</span>
                <div className="grid grid-flow-col grid-cols-15 grid-rows-7 gap-1 bg-slate-100/50 dark:bg-slate-900/50 p-3 rounded-lg w-fit mx-auto border border-slate-200/40 dark:border-slate-800/80">
                  {heatmapData.map((level, cellIdx) => {
                    let fill = 'bg-slate-200 dark:bg-slate-800'; // level 0
                    if (level === 1) fill = 'bg-emerald-900/40 dark:bg-emerald-900/30';
                    if (level === 2) fill = 'bg-emerald-500/70 dark:bg-emerald-500/50';
                    if (level === 3) fill = 'bg-emerald-400 dark:bg-emerald-400';
                    
                    return (
                      <div
                        key={cellIdx}
                        className={`w-2.5 h-2.5 rounded-sm ${fill} transition-colors`}
                        title={`Activity scale: ${level}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Badges container */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {leetcodeStats.badges.map((b) => (
                  <span
                    key={b}
                    className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

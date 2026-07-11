import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Logo / Brand */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-lg">{personalDetails.name}</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
              {personalDetails.roleShort}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <button onClick={() => handleScroll('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={() => handleScroll('projects')} className="hover:text-white transition-colors cursor-pointer">Projects</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button>
            <a href={personalDetails.resumeUrl} download className="hover:text-white transition-colors flex items-center space-x-1.5">
              <FaFileDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social connections */}
          <div className="flex justify-center md:justify-end space-x-2.5 flex-wrap gap-y-2">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-indigo-600 rounded-xl text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-indigo-600 rounded-xl text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-indigo-600 rounded-xl text-white transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-indigo-600 rounded-xl text-white transition-colors"
              aria-label="HackerRank"
            >
              <SiHackerrank className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2.5 bg-slate-800 hover:bg-indigo-600 rounded-xl text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/80 pt-8 mt-8 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} {personalDetails.name}. All Rights Reserved.</span>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <FaChevronUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}

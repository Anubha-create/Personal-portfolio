import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B2319] border-t border-[#2E3C2B] py-12 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="flex items-center font-black text-2xl tracking-tighter text-white">
              <span>A</span>
              <span className="text-amber-400">.</span>
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#E2ECE1]">
                Designed & built by Anubha.
              </div>
              <div className="text-[10px] font-mono text-[#8FA58C]">
                Software Developer • MCA Student (LPU)
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BACBB8] hover:text-amber-400 transition-colors p-2.5 rounded-xl hover:bg-white/10"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BACBB8] hover:text-amber-400 transition-colors p-2.5 rounded-xl hover:bg-white/10"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#BACBB8] hover:text-amber-400 transition-colors p-2.5 rounded-xl hover:bg-white/10"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="ml-2 p-2.5 rounded-xl bg-[#283526] hover:bg-[#344632] border border-[#3E523C] text-[#E0EBE0] hover:text-amber-400 transition-all shadow-md group"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#859B82] gap-2">
          <div>
            &copy; {new Date().getFullYear()} Anubha. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite & Tailwind CSS</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">CODE • BUILD • LEARN • GROW</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

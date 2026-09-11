import React from 'react';
import { Download, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeCta() {
  return (
    <section className="py-20 bg-[#F8F5EE] relative overflow-hidden border-t border-[#E5DFD1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#2D392B] via-[#243022] to-[#1B2319] border-2 border-[#4A5D45] shadow-2xl text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D4E4D0] text-xs font-mono font-bold tracking-widest uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Curriculum Vitae & Qualifications
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Let's build something meaningful<span className="text-amber-400">.</span>
          </h2>

          <p className="text-[#D4DFD0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Looking for an opportunity to learn, contribute, and grow as an entry-level software developer or data engineering professional.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm tracking-wide shadow-xl hover:shadow-amber-400/25 transition-all group"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-all shadow-md group"
            >
              <span>LET'S CONNECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#BAC8B7] border-t border-white/10">
            <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> MCA Candidate (9.12 CGPA)
            </span>
            <span className="flex items-center gap-1.5 text-blue-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Java • Python • SQL • ML
            </span>
            <span className="flex items-center gap-1.5 text-orange-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Immediate Availability
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

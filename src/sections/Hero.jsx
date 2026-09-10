import React from 'react';
import { ArrowRight, Download, Mail, Lightbulb, Users2, TrendingUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#0C1017] text-white overflow-hidden select-none min-h-[500px] lg:min-h-[540px] flex items-center"
    >
      {/* Background Seamless Full-Fill Banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full flex items-end justify-end">
          <img
            src="/anubha-banner.png"
            alt="Anubha - Software Developer"
            className="w-full h-full object-cover object-right-bottom max-h-[560px]"
          />

          {/* Left Edge Seamless Dark Blend */}
          <div className="absolute inset-y-0 left-0 w-3/5 max-w-2xl bg-gradient-to-r from-[#0C1017] via-[#0C1017]/90 to-transparent pointer-events-none" />
          {/* Top Subtle Dark Fade */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0C1017] to-transparent pointer-events-none" />
          {/* Right Edge subtle vignette */}
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0C1017]/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

      {/* Foreground Content Layer */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full py-10 lg:py-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          
          {/* ========================================================
              LEFT: TEXT CONTENT & CTAS (Width capped to stay on left)
          ======================================================== */}
          <div className="w-full lg:w-[440px] xl:w-[480px] space-y-4 text-left shrink-0 z-10">
            <div className="text-slate-400 font-mono text-xs sm:text-sm tracking-widest font-bold uppercase">
              HELLO, I'M
            </div>

            <div>
              <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none">
                Anubha<span className="text-amber-400">.</span>
              </h1>
              <div className="mt-2 text-base sm:text-lg font-medium text-slate-300">
                Aspiring Software Developer <span className="text-slate-600 font-light mx-1">|</span> MCA Student
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              Passionate about building meaningful solutions through code. I enjoy solving problems, learning new technologies, and turning ideas into real-world projects.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-850 text-white font-semibold text-sm border border-slate-700 hover:border-slate-500 transition-all"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="pt-4 flex items-center gap-5 text-white">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors p-1"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors p-1"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-300 hover:text-amber-400 transition-colors p-1"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ========================================================
              CENTER: HANDWRITING EDITORIAL TEXT OVERLAY (Over ambient space)
          ======================================================== */}
          <div className="hidden lg:block absolute left-[420px] xl:left-[460px] top-4 pointer-events-none z-10">
            <div className="font-editorial text-3xl xl:text-4xl text-amber-300 font-bold tracking-wide leading-tight drop-shadow-2xl -rotate-6">
              Better <br />
              Code <br />
              <span className="text-white">A Brighter</span> <br />
              <span className="text-white ml-2">Tomorrow</span>
            </div>
          </div>

          {/* ========================================================
              FAR RIGHT: TRAITS & STACKED WHITE PILLS (Over Shelves & Plants)
          ======================================================== */}
          <div className="w-full lg:w-auto ml-auto flex flex-col items-end space-y-5 z-10 shrink-0 lg:translate-x-4 xl:translate-x-6">
            {/* 4 Trait pills with frosted dark background for 100% readability */}
            <div className="space-y-2 w-full sm:w-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090D16]/90 backdrop-blur-md border border-slate-700/80 shadow-xl text-white text-xs font-bold hover:border-amber-400/60 transition-all">
                <span className="text-amber-400 font-mono text-sm font-extrabold">&lt;/&gt;</span>
                <span className="tracking-wide">Problem Solver</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090D16]/90 backdrop-blur-md border border-slate-700/80 shadow-xl text-white text-xs font-bold hover:border-amber-400/60 transition-all">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span className="tracking-wide">Quick Learner</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090D16]/90 backdrop-blur-md border border-slate-700/80 shadow-xl text-white text-xs font-bold hover:border-amber-400/60 transition-all">
                <Users2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="tracking-wide">Team Player</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090D16]/90 backdrop-blur-md border border-slate-700/80 shadow-xl text-white text-xs font-bold hover:border-amber-400/60 transition-all">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span className="tracking-wide">Always Improving</span>
              </div>
            </div>

            {/* 3 White pills stacked on far lower right */}
            <div className="space-y-1.5 w-32 sm:w-36">
              <div className="py-1 px-3 bg-white text-slate-900 text-xs font-black rounded-md text-center shadow-xl hover:bg-slate-50 transition-colors border border-slate-200">
                Clean Code
              </div>
              <div className="py-1 px-3 bg-white text-slate-900 text-xs font-black rounded-md text-center shadow-xl hover:bg-slate-50 transition-colors border border-slate-200">
                Better Solutions
              </div>
              <div className="py-1 px-3 bg-white text-slate-900 text-xs font-black rounded-md text-center shadow-xl hover:bg-slate-50 transition-colors border border-slate-200">
                Brighter Future
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2, Clock, GitBranch, Terminal } from 'lucide-react';
import { projectJourney } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#080B13] relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            Practical Engineering Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Hands-On Experience<span className="text-amber-400">.</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg">
            Practical development milestones translating theory into working production systems.
          </p>
        </div>

        {/* Timeline Journey Cards */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-28 space-y-10">
          {projectJourney.map((step, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080B13] border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all shadow-md" />

              {/* Date pill for desktop */}
              <div className="hidden sm:block absolute -left-32 top-1 text-right w-24">
                <span className="font-mono text-xs font-bold text-amber-400">
                  {step.period}
                </span>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:shadow-xl transition-all duration-300">
                {/* Mobile period */}
                <div className="sm:hidden mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-amber-400">
                  <Clock className="w-3 h-3" />
                  <span>{step.period}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 font-bold">
                    {step.project}
                  </span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  {step.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

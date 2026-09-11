import React from 'react';
import { Target, Sparkles, CheckCircle2, Compass, Layers, Zap } from 'lucide-react';
import { whyAnubhaPillars } from '../data/portfolioData';

export default function WhyMe() {
  const iconComponents = [Target, Sparkles, Layers, Zap];

  return (
    <section className="py-24 bg-[#0B0F19] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Recruiter Perspective
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Why Anubha<span className="text-amber-400">?</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg">
            What makes my technical profile, disciplined mindset, and early-career readiness distinct.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyAnubhaPillars.map((pillar, idx) => {
            const IconComp = iconComponents[idx % iconComponents.length];
            return (
              <div
                key={pillar.id}
                className="p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6 text-amber-400" />
                    </div>
                  <span className="font-mono text-sm font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                    {pillar.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Concrete Evidence
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.evidence}
                </p>
              </div>
            </div>
          );
        })}
        </div>

      </div>
    </section>
  );
}

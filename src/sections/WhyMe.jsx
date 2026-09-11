import React from 'react';
import { Target, Sparkles, CheckCircle2, Compass, Layers, Zap } from 'lucide-react';
import { whyAnubhaPillars } from '../data/portfolioData';

export default function WhyMe() {
  const iconComponents = [Target, Sparkles, Layers, Zap];

  const cardThemes = [
    {
      topBorder: 'border-t-4 border-[#4D6543]',
      iconBox: 'bg-[#EAF0E7] border-[#C5D6BF] text-[#3B4D35]',
      evidenceText: 'text-[#3B4D35]',
      hoverTitle: 'group-hover:text-[#4D6543]'
    },
    {
      topBorder: 'border-t-4 border-blue-600',
      iconBox: 'bg-blue-50 border-blue-200 text-blue-700',
      evidenceText: 'text-blue-700',
      hoverTitle: 'group-hover:text-blue-700'
    },
    {
      topBorder: 'border-t-4 border-orange-500',
      iconBox: 'bg-orange-50 border-orange-200 text-orange-700',
      evidenceText: 'text-orange-700',
      hoverTitle: 'group-hover:text-orange-700'
    },
    {
      topBorder: 'border-t-4 border-rose-600',
      iconBox: 'bg-rose-50 border-rose-200 text-rose-700',
      evidenceText: 'text-rose-700',
      hoverTitle: 'group-hover:text-rose-700'
    }
  ];

  return (
    <section className="py-24 bg-[#F3EFE6] relative border-t border-[#E5DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0E7] border border-[#C5D6BF] text-[#3B4D35] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#4D6543]" />
            Recruiter Perspective
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1C251B]">
            Why Anubha<span className="text-amber-500">?</span>
          </h2>
          <p className="mt-2 text-[#4D5A4B] text-base sm:text-lg">
            What makes my technical profile, disciplined mindset, and early-career readiness distinct.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyAnubhaPillars.map((pillar, idx) => {
            const IconComp = iconComponents[idx % iconComponents.length];
            const theme = cardThemes[idx % cardThemes.length];
            return (
              <div
                key={pillar.id}
                className={`p-8 rounded-3xl bg-white border border-[#E5DFD1] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group ${theme.topBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-transform ${theme.iconBox}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#7D8F7B]">
                      {pillar.id}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold text-[#1C251B] transition-colors ${theme.hoverTitle}`}>
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-[#455643] text-sm sm:text-base leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE7DC]">
                  <div className={`text-[11px] font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5 ${theme.evidenceText}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Concrete Evidence
                  </div>
                  <p className="text-xs text-[#5E6F5B] leading-relaxed">
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

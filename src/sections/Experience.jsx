import React from 'react';
import { Clock, GitBranch } from 'lucide-react';
import { projectJourney } from '../data/portfolioData';

export default function Experience() {
  const milestoneColors = [
    {
      marker: 'border-[#4D6543] group-hover:bg-[#4D6543]',
      dateText: 'text-[#4D6543]',
      badge: 'text-[#364931] bg-[#EAF0E7] border-[#C5D6BF]',
      hoverBorder: 'hover:border-[#4D6543]'
    },
    {
      marker: 'border-blue-600 group-hover:bg-blue-600',
      dateText: 'text-blue-700',
      badge: 'text-blue-800 bg-blue-50 border-blue-200',
      hoverBorder: 'hover:border-blue-500'
    },
    {
      marker: 'border-orange-500 group-hover:bg-orange-500',
      dateText: 'text-orange-700',
      badge: 'text-orange-800 bg-orange-50 border-orange-200',
      hoverBorder: 'hover:border-orange-400'
    },
    {
      marker: 'border-rose-600 group-hover:bg-rose-600',
      dateText: 'text-rose-700',
      badge: 'text-rose-800 bg-rose-50 border-rose-200',
      hoverBorder: 'hover:border-rose-500'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#FBF9F5] relative border-t border-[#E5DFD1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <GitBranch className="w-3.5 h-3.5 text-blue-700" />
            Practical Engineering Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1C251B]">
            Hands-On Experience<span className="text-amber-500">.</span>
          </h2>
          <p className="mt-2 text-[#4D5A4B] text-base sm:text-lg">
            Practical development milestones translating theory into working production systems.
          </p>
        </div>

        {/* Timeline Journey Cards */}
        <div className="relative border-l-2 border-[#D8D2C3] ml-4 sm:ml-28 space-y-10">
          {projectJourney.map((step, idx) => {
            const config = milestoneColors[idx % milestoneColors.length];
            return (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Marker */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 ${config.marker} group-hover:scale-125 transition-all shadow-sm`} />

                {/* Date pill for desktop */}
                <div className="hidden sm:block absolute -left-32 top-1 text-right w-24">
                  <span className={`font-mono text-xs font-bold ${config.dateText}`}>
                    {step.period}
                  </span>
                </div>

                {/* Card */}
                <div className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DFD1] hover:shadow-xl transition-all duration-300 ${config.hoverBorder}`}>
                  {/* Mobile period */}
                  <div className="sm:hidden mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#4D5A4B]">
                    <Clock className="w-3 h-3" />
                    <span>{step.period}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#1C251B] group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded border font-bold ${config.badge}`}>
                      {step.project}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#455643] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#ECE7DC] flex flex-wrap items-center gap-1.5">
                    {step.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#FAF8F3] text-[#4A5D47] border border-[#E2DBD0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

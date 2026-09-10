import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#080B13] relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Education<span className="text-amber-400">.</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg">
            Consistent academic excellence spanning computer applications and computer science.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080B13] border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all shadow-md" />

              {/* Period Pill on the left for tablet/desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="font-mono text-xs font-bold text-amber-400">
                  {edu.period}
                </span>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:shadow-xl transition-all duration-300">
                {/* Mobile period display */}
                <div className="sm:hidden mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-amber-400">
                  <Calendar className="w-3 h-3" />
                  <span>{edu.period}</span>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="font-semibold text-sm text-slate-300 mt-1">
                      {edu.institution}
                    </div>
                  </div>

                  {/* Highlight Score Pill */}
                  <div className="px-3.5 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono font-extrabold text-sm sm:text-base flex items-center gap-1.5 shadow-sm">
                    <Award className="w-4 h-4" />
                    <span>{edu.score}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {edu.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

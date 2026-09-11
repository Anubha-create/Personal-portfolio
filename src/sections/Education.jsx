import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  const getBadgeStyle = (score) => {
    if (score.includes('9.12')) {
      return {
        badge: 'bg-emerald-50 border-emerald-300 text-emerald-800',
        marker: 'border-emerald-600 group-hover:bg-emerald-600',
        border: 'hover:border-emerald-500'
      };
    }
    if (score.includes('82%')) {
      return {
        badge: 'bg-blue-50 border-blue-300 text-blue-800',
        marker: 'border-blue-600 group-hover:bg-blue-600',
        border: 'hover:border-blue-500'
      };
    }
    return {
      badge: 'bg-orange-50 border-orange-300 text-orange-800',
      marker: 'border-orange-500 group-hover:bg-orange-500',
      border: 'hover:border-orange-400'
    };
  };

  return (
    <section id="education" className="py-24 bg-[#F4F6F0] relative border-t border-[#E5E0D2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5ECE1] border border-[#C2D4BC] text-[#33472E] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#4D6543]" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1C251B]">
            Education<span className="text-amber-500">.</span>
          </h2>
          <p className="mt-2 text-[#4D5A4B] text-base sm:text-lg">
            Consistent academic excellence spanning computer applications, software design, and core computing.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#D8D2C3] ml-4 sm:ml-32 space-y-12">
          {educationList.map((edu, idx) => {
            const style = getBadgeStyle(edu.score);
            return (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Marker Dot */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 ${style.marker} group-hover:scale-125 transition-all shadow-sm`} />

                {/* Period Pill on the left for tablet/desktop */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                  <span className="font-mono text-xs font-bold text-[#4B5E46]">
                    {edu.period}
                  </span>
                </div>

                {/* Card */}
                <div className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DFD1] hover:shadow-xl transition-all duration-300 ${style.border}`}>
                  {/* Mobile period display */}
                  <div className="sm:hidden mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#4B5E46]">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#1C251B] group-hover:text-blue-700 transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="font-semibold text-sm text-[#435242] mt-1">
                        {edu.institution}
                      </div>
                    </div>

                    {/* Highlight Score Pill with dynamic color */}
                    <div className={`px-3.5 py-1.5 rounded-xl border font-mono font-extrabold text-sm sm:text-base flex items-center gap-1.5 shadow-xs ${style.badge}`}>
                      <Award className="w-4 h-4" />
                      <span>{edu.score}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#6A7B68] mt-2 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#889986]" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#475745] leading-relaxed border-t border-[#ECE7DC] pt-3">
                    {edu.details}
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

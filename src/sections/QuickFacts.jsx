import React from 'react';
import { GraduationCap, Code2, Target, Star } from 'lucide-react';

export default function QuickFacts() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-slate-900" />,
      title: "MCA Student",
      subtitle: "Lovely Professional University",
      detail: "2025 – Present • CGPA: 9.12"
    },
    {
      icon: <Code2 className="w-6 h-6 text-slate-900" />,
      title: "Aspiring Developer",
      subtitle: "DSA | OOP | Web Development",
      detail: "Building real-world projects"
    },
    {
      icon: <Target className="w-6 h-6 text-slate-900" />,
      title: "Focused",
      subtitle: "Eager to contribute and grow",
      detail: "in a dynamic tech environment"
    },
    {
      icon: <Star className="w-6 h-6 text-slate-900" />,
      title: "Open to Opportunities",
      subtitle: "Full-Time Roles",
      detail: "Internships | Entry-Level"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                  {card.title}
                </h3>
                <div className="text-xs font-medium text-slate-600 truncate">
                  {card.subtitle}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {card.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Code2, Globe, BrainCircuit, Wrench, Layers, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import TechIcon from '../components/TechIcon';

export default function Skills() {
  const getCategoryConfig = (title) => {
    switch (title) {
      case 'Programming':
        return {
          icon: <Code2 className="w-5 h-5 text-blue-600" />,
          topBorder: 'border-t-4 border-blue-600',
          iconBox: 'bg-blue-50 border-blue-200 text-blue-800',
          badgeText: 'text-blue-700',
          numColor: 'text-blue-600'
        };
      case 'Web Technologies':
        return {
          icon: <Globe className="w-5 h-5 text-orange-600" />,
          topBorder: 'border-t-4 border-orange-500',
          iconBox: 'bg-orange-50 border-orange-200 text-orange-800',
          badgeText: 'text-orange-700',
          numColor: 'text-orange-600'
        };
      case 'Data & AI':
        return {
          icon: <BrainCircuit className="w-5 h-5 text-[#3F5437]" />,
          topBorder: 'border-t-4 border-[#4D6543]',
          iconBox: 'bg-[#EAF0E7] border-[#C5D6BF] text-[#3B4D35]',
          badgeText: 'text-[#3B4D35]',
          numColor: 'text-[#4D6543]'
        };
      case 'Tools & Platforms':
        return {
          icon: <Wrench className="w-5 h-5 text-rose-600" />,
          topBorder: 'border-t-4 border-rose-600',
          iconBox: 'bg-rose-50 border-rose-200 text-rose-800',
          badgeText: 'text-rose-700',
          numColor: 'text-rose-600'
        };
      default:
        return {
          icon: <Layers className="w-5 h-5 text-amber-500" />,
          topBorder: 'border-t-4 border-amber-500',
          iconBox: 'bg-amber-50 border-amber-200 text-amber-800',
          badgeText: 'text-amber-700',
          numColor: 'text-amber-600'
        };
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#F8F5EE] relative border-t border-[#E5E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0E7] border border-[#C5D6BF] text-[#3B4D35] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#4D6543]" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1C251B]">
            Tools I build with<span className="text-amber-500">.</span>
          </h2>
          <p className="mt-2 text-[#4D5A4B] text-base sm:text-lg">
            A battle-tested technology ecosystem spanning core backend engineering, AI pipelines, and analytical tooling.
          </p>
        </div>

        {/* 4 Categorized Constellation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const config = getCategoryConfig(category.title, idx);
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD1] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${config.topBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EDE7DB]">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${config.iconBox}`}>
                        {config.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#1C251B] group-hover:text-blue-700 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-[#526350]">{category.description}</p>
                      </div>
                    </div>
                    <span className={`font-mono text-xs font-bold ${config.numColor}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skill Pills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E6E0D2] hover:bg-white hover:border-[#C4BBA7] hover:shadow-xs transition-all duration-200 flex items-center justify-between group/pill"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded flex items-center justify-center shrink-0">
                            <TechIcon name={skill.name} className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-sm text-[#1D261C]">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#5A6D56] bg-white px-2 py-0.5 rounded border border-[#DDD5C5]">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EDE7DB] flex items-center justify-between text-[11px] font-mono text-[#6A7C67]">
                  <span>Verified in Academic & Project Repos</span>
                  <span className={`font-bold ${config.badgeText}`}>Production Tested</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

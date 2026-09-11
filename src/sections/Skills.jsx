import React from 'react';
import { Code2, Globe, BrainCircuit, Wrench, Layers, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import TechIcon from '../components/TechIcon';

export default function Skills() {
  const getCategoryIcon = (title) => {
    switch (title) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Web Technologies':
        return <Globe className="w-5 h-5 text-amber-400" />;
      case 'Data & AI':
        return <BrainCircuit className="w-5 h-5 text-amber-400" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#080B13] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tools I build with<span className="text-amber-400">.</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg">
            A battle-tested technology ecosystem spanning core backend engineering, AI pipelines, and analytical tooling.
          </p>
        </div>

        {/* 4 Categorized Constellation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skill Pills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-800/80 transition-all duration-200 flex items-center justify-between group/pill"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded flex items-center justify-center shrink-0">
                          <TechIcon name={skill.name} className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-sm text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in Academic & Project Repos</span>
                <span className="text-amber-400">Production Tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

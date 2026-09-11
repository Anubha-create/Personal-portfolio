import React, { useState } from 'react';
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/portfolioData';
import MockupFinGuide from '../components/MockupFinGuide';
import MockupBrainVault from '../components/MockupBrainVault';
import MockupFakeNews from '../components/MockupFakeNews';
import MockupRecruitment from '../components/MockupRecruitment';
import ProjectModal from '../components/ProjectModal';

export default function Projects({ onSelectProject }) {
  const [internalSelected, setInternalSelected] = useState(null);

  const handleSelect = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setInternalSelected(project);
    }
  };

  const heroProject = projects.find((p) => p.isHeroProject);
  const otherProjects = projects.filter((p) => !p.isHeroProject);

  const renderMockup = (projectId) => {
    switch (projectId) {
      case 'finguide-ai':
        return <MockupFinGuide />;
      case 'brainvault':
        return <MockupBrainVault />;
      case 'fake-news-classifier':
        return <MockupFakeNews />;
      case 'campus-recruitment':
        return <MockupRecruitment />;
      default:
        return null;
    }
  };

  const getCardAccent = (id) => {
    switch (id) {
      case 'brainvault':
        return {
          border: 'border-l-4 border-blue-600',
          badgeBg: 'bg-blue-50 border-blue-200 text-blue-800',
          btnBg: 'bg-blue-600 hover:bg-blue-500 text-white'
        };
      case 'fake-news-classifier':
        return {
          border: 'border-l-4 border-rose-600',
          badgeBg: 'bg-rose-50 border-rose-200 text-rose-800',
          btnBg: 'bg-rose-600 hover:bg-rose-500 text-white'
        };
      case 'campus-recruitment':
        return {
          border: 'border-l-4 border-orange-500',
          badgeBg: 'bg-orange-50 border-orange-200 text-orange-800',
          btnBg: 'bg-orange-600 hover:bg-orange-500 text-white'
        };
      default:
        return {
          border: 'border-l-4 border-emerald-600',
          badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
          btnBg: 'bg-emerald-600 hover:bg-emerald-500 text-white'
        };
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#FAF7F2] relative border-t border-[#E6E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-blue-700" />
              Engineered Systems
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1D261C]">
              Things I've built<span className="text-amber-500">.</span>
            </h2>
            <p className="mt-2 text-[#4A574B] text-base sm:text-lg">
              Turning ideas into practical software, intelligent data models, and resilient architectures.
            </p>
          </div>

          <div className="text-xs font-mono text-[#6B7C68]">
            Click any project to inspect full architecture & details
          </div>
        </div>

        {/* ========================================================
            HERO PROJECT SHOWCASE: FINGUIDE AI (Deep Olive / Marine Container)
        ======================================================== */}
        {heroProject && (
          <div className="mb-20">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#223124] via-[#1C2C33] to-[#16231F] border-2 border-emerald-500/40 p-6 sm:p-10 shadow-2xl overflow-hidden group hover:border-emerald-400 transition-all duration-300">
              {/* Subtle Ambient Backlight */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Col: Project Meta & Editorial Content */}
                <div className="lg:col-span-5 space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded border border-emerald-400/30">
                      FLAGSHIP / HERO PROJECT
                    </span>
                    <span className="text-xs font-mono text-slate-300">{heroProject.date}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {heroProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-amber-300 mt-1">
                      {heroProject.tagline}
                    </p>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {heroProject.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {heroProject.techStack.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/10 text-white border border-white/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Highlights from CV */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>XGBoost regression forecasting based on historical market trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>Live stock prices & news ingestion via external REST APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>Technical indicators & volatility modeling to generate Buy / Hold / Sell signals</span>
                    </li>
                  </ul>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => handleSelect(heroProject)}
                      className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <span>Explore Project Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={heroProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4 text-amber-300" />
                      <span>View GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right Col: High-Fidelity UI Mockup */}
                <div className="lg:col-span-7 cursor-pointer" onClick={() => handleSelect(heroProject)}>
                  <div className="transform lg:group-hover:scale-[1.01] transition-transform duration-500">
                    {renderMockup('finguide-ai')}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            OTHER FEATURED PROJECTS (Warm Beige / Crisp Light Cards)
        ======================================================== */}
        <div className="space-y-12">
          {otherProjects.map((project) => {
            const accent = getCardAccent(project.id);
            return (
              <div
                key={project.id}
                className={`rounded-3xl bg-white border border-[#E5DFD1] p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group ${accent.border}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Text Side */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded border ${accent.badgeBg}`}>
                        PROJECT {project.number}
                      </span>
                      <span className="text-xs font-mono text-[#6A7B67]">{project.date}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1D261C] group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#5A6C58] mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {project.verifiedStat && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>CV Verified: {project.verifiedStat} ({project.datasetInfo})</span>
                      </div>
                    )}

                    <p className="text-[#3D4C3C] text-xs sm:text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#F4F1EA] text-[#2C382A] border border-[#E2DBD0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex items-center gap-3">
                      <button
                        onClick={() => handleSelect(project)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 ${accent.btnBg}`}
                      >
                        <span>View Breakdown</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#F4F1EA] hover:bg-[#E8E3D8] text-[#2C382A] border border-[#DDD5C5] transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4 text-[#1D261C]" />
                      </a>
                    </div>
                  </div>

                  {/* Mockup Side */}
                  <div className="lg:col-span-7 cursor-pointer" onClick={() => handleSelect(project)}>
                    <div className="transform group-hover:scale-[1.01] transition-transform duration-500">
                      {renderMockup(project.id)}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal (fallback for standalone usage) */}
      {!onSelectProject && internalSelected && (
        <ProjectModal
          project={internalSelected}
          onClose={() => setInternalSelected(null)}
        />
      )}
    </section>
  );
}

import React from 'react';
import { ArrowRight, Brain, Building2, Newspaper, TrendingUp } from 'lucide-react';
import { projects } from '../data/portfolioData';
import TechIcon from '../components/TechIcon';

export default function DualOverview({ onSelectProject }) {
  const quickProjects = [
    {
      id: "finguide-ai",
      title: "FinGuide AI",
      desc: "AI-powered investment advisor predicting stock trends using XGBoost regression and market APIs.",
      techs: ["Python", "Flask", "XGBoost", "REST APIs"],
      icon: <TrendingUp className="w-5 h-5 text-amber-500" />
    },
    {
      id: "brainvault",
      title: "BrainVault",
      desc: "Student record management system with secure admin & student role-based authentication.",
      techs: ["Java", "MySQL", "HTML", "CSS", "JS"],
      icon: <Brain className="w-5 h-5 text-slate-800" />
    },
    {
      id: "fake-news-classifier",
      title: "Fake News Classifier",
      desc: "ML text classifier detecting fake news with 95% accuracy on 44,898 ISOT articles.",
      techs: ["Python", "NLTK", "TF-IDF", "Gradio"],
      icon: <Newspaper className="w-5 h-5 text-emerald-600" />
    },
    {
      id: "campus-recruitment",
      title: "Campus Recruitment",
      desc: "Placement portal with automated student eligibility screening (CGPA, branch, backlogs).",
      techs: ["Java", "MySQL", "Screening Logic"],
      icon: <Building2 className="w-5 h-5 text-blue-600" />
    }
  ];

  const tools = [
    { name: "Java", id: "java" },
    { name: "Python", id: "python" },
    { name: "MySQL", id: "mysql" },
    { name: "HTML5", id: "html5" },
    { name: "CSS3", id: "css3" },
    { name: "JavaScript", id: "javascript" },
    { name: "Git", id: "git" },
    { name: "GitHub", id: "github" },
    { name: "Pandas", id: "pandas" },
    { name: "Scikit-learn", id: "scikitlearn" },
  ];

  return (
    <section className="bg-[#F8FAFC] py-12 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: 7 Cols Projects, 5 Cols Skills & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Featured Projects */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Featured Projects
                </h2>
                <div className="w-12 h-1 bg-amber-400 rounded-full mt-1.5" />
              </div>
              <a
                href="#projects"
                className="text-xs font-bold text-slate-600 hover:text-slate-950 flex items-center gap-1 group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 2x2 Grid of Project Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickProjects.map((p) => {
                const fullProject = projects.find((proj) => proj.id === p.id);
                return (
                  <div
                    key={p.id}
                    onClick={() => onSelectProject(fullProject)}
                    className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {p.icon}
                        </div>
                        <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-500 transition-colors">
                          {p.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                      {p.techs.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Skills & Tools */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-2">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Skills & Tools
                </h2>
                <div className="w-12 h-1 bg-amber-400 rounded-full mt-1.5" />
              </div>
              <a
                href="#skills"
                className="text-xs font-bold text-slate-600 hover:text-slate-950 flex items-center gap-1 group"
              >
                <span>View All Skills</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 5x2 Circular / Pill Badges Grid */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="grid grid-cols-5 gap-3 sm:gap-4 text-center">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 p-1.5 rounded-xl hover:bg-slate-50 transition-all group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center p-2.5 shadow-xs group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-md transition-all duration-200">
                      <TechIcon name={tool.id || tool.name} className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 truncate w-full group-hover:text-slate-950">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Ribbon Banner at bottom of section matching reference image */}
      <div className="mt-14 bg-[#0A0E17] text-white py-4 text-center select-none">
        <div className="text-xs font-mono tracking-widest uppercase text-slate-300">
          " CONSISTENTLY LEARNING. CONSISTENTLY IMPROVING. "
        </div>
        <div className="w-10 h-0.5 bg-amber-400 mx-auto mt-1.5 rounded-full" />
      </div>
    </section>
  );
}

import React from 'react';
import { Database, Cpu, Layers, Sparkles, Terminal, BookOpen, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Core Development",
      desc: "Robust object-oriented programming in Java and Python with clean architectural separation and reliable CRUD pipelines."
    },
    {
      title: "Intelligent Systems",
      desc: "Applying machine learning regression (XGBoost) and NLP vectorization (TF-IDF) to solve real information challenges."
    },
    {
      title: "Data Engineering & Analytics",
      desc: "Designing normalized relational databases (MySQL) and extracting actionable insights with Pandas, NumPy, and SQL."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            More than code<span className="text-amber-400">.</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg font-medium">
            Building with purpose and rigorous analytical thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative grounded in CV */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-200 text-lg leading-relaxed font-normal">
              I am an <span className="text-white font-semibold">MCA student at Lovely Professional University</span> and an aspiring software developer driven by translating complex concepts into practical, reliable applications. My hands-on work spans <span className="text-amber-400 font-semibold">Java-based web applications</span>, <span className="text-amber-400 font-semibold">AI/ML regression models</span>, <span className="text-amber-400 font-semibold">NLP text classification</span>, and <span className="text-amber-400 font-semibold">relational SQL databases</span>.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Rather than building superficial demos, I prioritize end-to-end functionality: structuring clean database schemas, testing backend operations, and optimizing user interactions. Whether tuning an XGBoost model on time-series market signals or automating candidate eligibility algorithms in Java, I focus on solving concrete problems with maintainable code.
            </p>

            {/* 3 Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#111827] border border-slate-800 space-y-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="font-bold text-sm text-white">{item.title}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Quote / Value Badge */}
            <div className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-amber-400 text-slate-200 text-sm italic">
              "Continuous learning is not just an aspiration—it is reflected in maintaining a 9.12 CGPA while earning certifications from Oracle, HP LIFE, and NPTEL."
            </div>
          </div>

          {/* Right Column: Abstract Technical Composition */}
          <div className="lg:col-span-5">
            <div className="relative p-6 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0A0E1A] border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Monogram Brand Watermark */}
              <div className="absolute top-0 right-0 font-black text-9xl text-slate-800/20 select-none pointer-events-none -mr-4 -mt-6">
                A.
              </div>

              {/* Composition Matrix */}
              <div className="space-y-4 relative z-10">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800">
                  <span>Architecture Matrix</span>
                  <Terminal className="w-4 h-4 text-amber-400" />
                </div>

                {/* 4 Brand Pillars in Graphic Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center group hover:border-amber-400/50 transition-all">
                    <div className="font-mono text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      CODE
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase font-mono">
                      Java • Python • C++
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center group hover:border-amber-400/50 transition-all">
                    <div className="font-mono text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      BUILD
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase font-mono">
                      Full Systems & APIs
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center group hover:border-amber-400/50 transition-all">
                    <div className="font-mono text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      LEARN
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase font-mono">
                      AI, ML & Cloud
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center group hover:border-amber-400/50 transition-all">
                    <div className="font-mono text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      GROW
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase font-mono">
                      Industry Ready
                    </div>
                  </div>
                </div>

                {/* System Node Diagram */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-amber-400" />
                      RDBMS Schema
                    </span>
                    <span className="text-slate-500">MySQL / Normalization</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      Inference Engine
                    </span>
                    <span className="text-slate-500">XGBoost & Scikit-learn</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      Application Layer
                    </span>
                    <span className="text-slate-500">Java Servlets & Flask</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-amber-400 font-bold">A. Brand Identity</span>
                  <span>Muzaffarpur ➔ Phagwara</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

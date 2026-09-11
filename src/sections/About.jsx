import React from 'react';
import { Database, Cpu, Layers, Sparkles, Terminal } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: "Core Development",
      colorClass: "border-t-4 border-blue-600",
      dotClass: "bg-blue-600",
      desc: "Robust object-oriented programming in Java and Python with clean architectural separation and reliable CRUD pipelines."
    },
    {
      title: "Intelligent Systems",
      colorClass: "border-t-4 border-[#4D6543]",
      dotClass: "bg-[#4D6543]",
      desc: "Applying machine learning regression (XGBoost) and NLP vectorization (TF-IDF) to solve real information challenges."
    },
    {
      title: "Data Engineering & Analytics",
      colorClass: "border-t-4 border-orange-500",
      dotClass: "bg-orange-500",
      desc: "Designing normalized relational databases (MySQL) and extracting actionable insights with Pandas, NumPy, and SQL."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8F6F0] relative overflow-hidden border-t border-[#E6E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0E7] border border-[#C5D6BF] text-[#3B4D35] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#4D6543]" />
            Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1D261C]">
            More than code<span className="text-amber-500">.</span>
          </h2>
          <p className="mt-2 text-[#4A574B] text-base sm:text-lg font-medium">
            Building with purpose, warm aesthetics, and rigorous analytical thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative grounded in CV */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[#2A3629] text-lg leading-relaxed font-normal">
              I am an <span className="text-[#1D261C] font-bold">MCA student at Lovely Professional University</span> and an aspiring software developer driven by translating complex concepts into practical, reliable applications. My hands-on work spans <span className="text-blue-700 font-semibold">Java-based web applications</span>, <span className="text-[#3F5437] font-semibold">AI/ML regression models</span>, <span className="text-orange-600 font-semibold">NLP text classification</span>, and <span className="text-rose-600 font-semibold">relational SQL databases</span>.
            </p>

            <p className="text-[#435242] leading-relaxed">
              Rather than building superficial demos, I prioritize end-to-end functionality: structuring clean database schemas, testing backend operations, and optimizing user interactions. Whether tuning an XGBoost model on time-series market signals or automating candidate eligibility algorithms in Java, I focus on solving concrete problems with maintainable code.
            </p>

            {/* 3 Core Pillars with Distinct Color Accents */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((item, i) => (
                <div key={i} className={`p-4 rounded-xl bg-white border border-[#E4DEC9] shadow-sm hover:shadow-md transition-shadow space-y-2 ${item.colorClass}`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.dotClass}`} />
                    <div className="font-bold text-sm text-[#1D261C]">{item.title}</div>
                  </div>
                  <div className="text-xs text-[#526350] leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Quote / Value Badge */}
            <div className="p-4 rounded-xl bg-[#F2EDE2] border-l-4 border-[#4D6543] text-[#2C382B] text-sm italic shadow-xs">
              "Continuous learning is not just an aspiration—it is reflected in maintaining a 9.12 CGPA while earning certifications from Oracle, HP LIFE, and NPTEL."
            </div>
          </div>

          {/* Right Column: Deep Olive Green Technical Matrix */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#2D3A2C] to-[#1C251B] border border-[#44553F] shadow-xl overflow-hidden">
              
              {/* Monogram Brand Watermark */}
              <div className="absolute top-0 right-0 font-black text-9xl text-white/5 select-none pointer-events-none -mr-4 -mt-6">
                A.
              </div>

              {/* Composition Matrix */}
              <div className="space-y-4 relative z-10">
                <div className="text-xs font-mono uppercase tracking-widest text-[#B5C7B0] flex items-center justify-between pb-3 border-b border-white/10">
                  <span>Architecture Matrix</span>
                  <Terminal className="w-4 h-4 text-amber-400" />
                </div>

                {/* 4 Brand Pillars with colorful hover borders on Warm Beige cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E7E2D5] text-center group hover:border-blue-500 hover:shadow-md transition-all">
                    <div className="font-mono text-2xl font-black text-[#1D261C] group-hover:text-blue-600 transition-colors">
                      CODE
                    </div>
                    <div className="text-[10px] text-[#556753] mt-1 uppercase font-mono font-medium">
                      Java • Python • C++
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E7E2D5] text-center group hover:border-orange-500 hover:shadow-md transition-all">
                    <div className="font-mono text-2xl font-black text-[#1D261C] group-hover:text-orange-600 transition-colors">
                      BUILD
                    </div>
                    <div className="text-[10px] text-[#556753] mt-1 uppercase font-mono font-medium">
                      Full Systems & APIs
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E7E2D5] text-center group hover:border-emerald-500 hover:shadow-md transition-all">
                    <div className="font-mono text-2xl font-black text-[#1D261C] group-hover:text-emerald-600 transition-colors">
                      LEARN
                    </div>
                    <div className="text-[10px] text-[#556753] mt-1 uppercase font-mono font-medium">
                      AI, ML & Cloud
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E7E2D5] text-center group hover:border-rose-500 hover:shadow-md transition-all">
                    <div className="font-mono text-2xl font-black text-[#1D261C] group-hover:text-rose-600 transition-colors">
                      GROW
                    </div>
                    <div className="text-[10px] text-[#556753] mt-1 uppercase font-mono font-medium">
                      Industry Ready
                    </div>
                  </div>
                </div>

                {/* System Node Diagram */}
                <div className="p-4 rounded-xl bg-[#232F22]/90 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#E2ECE0] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-blue-400" />
                      RDBMS Schema
                    </span>
                    <span className="text-[#A7B9A3]">MySQL / Normalization</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#E2ECE0] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      Inference Engine
                    </span>
                    <span className="text-[#A7B9A3]">XGBoost & Scikit-learn</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#E2ECE0] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      Application Layer
                    </span>
                    <span className="text-[#A7B9A3]">Java Servlets & Flask</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#BACBB7]">
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

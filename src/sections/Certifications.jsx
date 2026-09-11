import React from 'react';
import { Award, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#0B0F19] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              Verified Competencies
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Credentials<span className="text-amber-400">.</span>
            </h2>
            <p className="mt-2 text-slate-400 text-base sm:text-lg">
              Industry credentials and national certifications spanning Java, Agentic AI, Data Science, and SQL.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400">
            {certifications.length} Professional & Academic Credentials
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {cert.name}
                </h3>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {cert.skillsLearned}
                </p>

                {cert.credentialId && (
                  <div className="mt-2 text-[10px] font-mono text-slate-500 truncate">
                    ID: <span className="text-slate-400">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cert.date}</span>
                </div>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="font-mono text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded">
                    {cert.credentialType}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

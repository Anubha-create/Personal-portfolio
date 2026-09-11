import React from 'react';
import { Award, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const getIssuerBadge = (issuer) => {
    const norm = issuer.toLowerCase();
    if (norm.includes('oracle')) {
      return 'text-rose-700 bg-rose-50 border-rose-200';
    }
    if (norm.includes('hp')) {
      return 'text-blue-700 bg-blue-50 border-blue-200';
    }
    if (norm.includes('google') || norm.includes('coursera')) {
      return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    }
    if (norm.includes('tata') || norm.includes('forage')) {
      return 'text-indigo-700 bg-indigo-50 border-indigo-200';
    }
    if (norm.includes('hackerrank')) {
      return 'text-emerald-800 bg-emerald-50 border-emerald-200';
    }
    return 'text-amber-800 bg-amber-50 border-amber-200';
  };

  return (
    <section id="certifications" className="py-24 bg-[#F5F2EA] relative border-t border-[#E5E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5 text-rose-600" />
              Verified Competencies
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1C251B]">
              Credentials<span className="text-amber-500">.</span>
            </h2>
            <p className="mt-2 text-[#4D5A4B] text-base sm:text-lg">
              Industry credentials and national certifications spanning Java, Agentic AI, Data Science, and SQL.
            </p>
          </div>

          <div className="font-mono text-xs text-[#6A7B68] font-bold">
            {certifications.length} Professional & Academic Credentials
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const issuerStyle = getIssuerBadge(cert.issuer);
            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white border border-[#E5DFD1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  <div className={`inline-block text-[11px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded border mb-2 ${issuerStyle}`}>
                    {cert.issuer}
                  </div>

                  <h3 className="text-lg font-bold text-[#1C251B] group-hover:text-blue-700 transition-colors leading-snug">
                    {cert.name}
                  </h3>

                  <p className="mt-3 text-xs text-[#526350] leading-relaxed">
                    {cert.skillsLearned}
                  </p>

                  {cert.credentialId && (
                    <div className="mt-2 text-[10px] font-mono text-[#7A8B78] truncate">
                      ID: <span className="text-[#3B4D39] font-medium">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE6DB] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[#6A7B68]">
                    <Calendar className="w-3.5 h-3.5 text-[#889986]" />
                    <span>{cert.date}</span>
                  </div>

                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-700 hover:text-blue-900 font-bold transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] text-[#556753] bg-[#F4F1EA] px-2 py-1 rounded border border-[#E0D8CB]">
                      {cert.credentialType}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

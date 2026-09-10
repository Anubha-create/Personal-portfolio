import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, MessageSquare, ExternalLink, Download, Sparkles, Briefcase } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F19] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Have an opportunity<span className="text-amber-400">?</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg">
            I am actively seeking entry-level software development and data roles. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* 3 High-Impact Connection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email Hub */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider mb-1">
                Direct Communication
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Email Address
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                The fastest way to reach me for job inquiries, technical discussions, or interviews.
              </p>
              
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-200 truncate select-all">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>SEND DIRECT EMAIL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Professional Networks */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider mb-1">
                Professional Presence
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Social Profiles
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Explore my code repositories, continuous contributions, and professional network.
              </p>

              <div className="space-y-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-xs font-semibold text-white transition-all group/link"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-amber-400" />
                    <span>LinkedIn / in/anubha-creates</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-amber-400 transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-xs font-semibold text-white transition-all group/link"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-amber-400" />
                    <span>GitHub / Anubha-create</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Card 3: Hiring & Resume Download */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ready for Hire
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Open to Opportunities
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Available for full-time Software Developer, Graduate Trainee, or AI/Data Intern roles across India and remote.
              </p>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-300 font-mono">
                  <span>Target Roles:</span>
                  <span className="text-white font-semibold">SWE / SDE / Data</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 font-mono">
                  <span>Graduation:</span>
                  <span className="text-amber-400 font-semibold">MCA (CGPA: 9.12)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white hover:text-amber-400 border border-slate-700 hover:border-slate-500 font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD FULL RESUME (PDF)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

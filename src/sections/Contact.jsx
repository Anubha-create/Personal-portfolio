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
    <section id="contact" className="py-24 bg-[#F8F5EE] relative border-t border-[#E5DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0E7] border border-[#C5D6BF] text-[#3B4D35] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#4D6543]" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1C251B]">
            Have an opportunity<span className="text-amber-500">?</span>
          </h2>
          <p className="mt-2 text-[#4D5A4B] text-base sm:text-lg">
            I am actively seeking entry-level software development and data roles. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* 3 High-Impact Connection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email Hub (Royal Blue) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD1] border-t-4 border-t-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider mb-1">
                Direct Communication
              </div>
              <h3 className="text-xl font-bold text-[#1C251B] mb-2">
                Email Address
              </h3>
              <p className="text-xs text-[#526350] leading-relaxed mb-4">
                The fastest way to reach me for job inquiries, technical discussions, or interviews.
              </p>
              
              <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E5DFD1] flex items-center justify-between">
                <span className="text-xs font-mono text-[#2B3929] truncate select-all font-medium">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white hover:bg-[#EAE4D6] text-[#2B3929] border border-[#DDD5C5] transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE7DC]">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>SEND DIRECT EMAIL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Professional Networks (Olive Green) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD1] border-t-4 border-t-[#4D6543] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E7] border border-[#C5D6BF] flex items-center justify-center text-[#3B4D35] mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono text-[#3B4D35] font-bold uppercase tracking-wider mb-1">
                Professional Presence
              </div>
              <h3 className="text-xl font-bold text-[#1C251B] mb-2">
                Social Profiles
              </h3>
              <p className="text-xs text-[#526350] leading-relaxed mb-4">
                Explore my code repositories, continuous contributions, and professional network.
              </p>

              <div className="space-y-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FAF8F3] hover:bg-[#F2ECE0] border border-[#E5DFD1] flex items-center justify-between text-xs font-semibold text-[#1C251B] transition-all group/link"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn / in/anubha-creates</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#889986] group-hover/link:text-[#3B4D35] transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FAF8F3] hover:bg-[#F2ECE0] border border-[#E5DFD1] flex items-center justify-between text-xs font-semibold text-[#1C251B] transition-all group/link"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#24292E]" />
                    <span>GitHub / Anubha-create</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#889986] group-hover/link:text-[#3B4D35] transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE7DC] flex items-center gap-2 text-xs text-[#6A7B68] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#4D6543]" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Card 3: Hiring & Resume Download (Warm Orange & Emerald) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD1] border-t-4 border-t-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Ready for Hire
              </div>
              <h3 className="text-xl font-bold text-[#1C251B] mb-2">
                Open to Opportunities
              </h3>
              <p className="text-xs text-[#526350] leading-relaxed mb-4">
                Available for full-time Software Developer, Graduate Trainee, or AI/Data Intern roles across India and remote.
              </p>

              <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E5DFD1] space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#556752] font-mono">
                  <span>Target Roles:</span>
                  <span className="text-[#1C251B] font-semibold">SWE / SDE / Data</span>
                </div>
                <div className="flex items-center justify-between text-[#556752] font-mono">
                  <span>Graduation:</span>
                  <span className="text-emerald-700 font-bold">MCA (CGPA: 9.12)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE7DC]">
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
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

import React, { useState } from 'react';
import { Briefcase, CheckCircle2, XCircle, Filter, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export default function MockupRecruitment() {
  const [activeTab, setActiveTab] = useState('drives');

  const candidates = [
    { name: 'Ananya Roy', branch: 'MCA', cgpa: '8.92', backlogs: 0, year: 2026, status: 'ELIGIBLE', score: 'Passed Criteria' },
    { name: 'Vikram Singh', branch: 'B.Tech CSE', cgpa: '7.80', backlogs: 0, year: 2026, status: 'ELIGIBLE', score: 'Passed Criteria' },
    { name: 'Sameer Khan', branch: 'MCA', cgpa: '6.40', backlogs: 1, year: 2026, status: 'INELIGIBLE', score: 'CGPA < 7.0 & Backlog' },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0F172A] border border-slate-700/60 shadow-2xl overflow-hidden font-sans text-xs sm:text-sm select-none">
      {/* Top Header */}
      <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">Campus Recruitment & Placement Automation Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <ShieldCheck className="w-3 h-3" />
            Recruiter & Admin Portal
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-3 sm:p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('drives')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'drives' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Active Job Drive
          </button>
          <button
            onClick={() => setActiveTab('screening')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'screening' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Automated Eligibility Screening
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <Filter className="w-3 h-3 text-amber-400" />
          <span>Criteria: CGPA &ge; 7.0 | Backlogs = 0</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 bg-[#0F172A] space-y-3">
        {/* Drive Info Banner */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-200">Software Engineer (Graduate 2026 Batch)</div>
              <div className="text-[11px] text-slate-400">Target: MCA & B.Tech CSE • Min CGPA 7.0 • Zero Backlogs</div>
            </div>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            Java Automation Active
          </span>
        </div>

        {/* Screening Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-800/80">
          <table className="w-full text-left border-collapse bg-slate-950/50">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                <th className="py-2.5 px-3">Candidate</th>
                <th className="py-2.5 px-3">Branch</th>
                <th className="py-2.5 px-3">CGPA</th>
                <th className="py-2.5 px-3">Backlogs</th>
                <th className="py-2.5 px-3">Screening Status</th>
                <th className="py-2.5 px-3">Automated Decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
              {candidates.map((cand, i) => (
                <tr key={i} className="hover:bg-slate-900/60">
                  <td className="py-2.5 px-3 font-sans font-medium text-slate-200">{cand.name}</td>
                  <td className="py-2.5 px-3 text-slate-400">{cand.branch}</td>
                  <td className="py-2.5 px-3 font-bold text-amber-400">{cand.cgpa}</td>
                  <td className="py-2.5 px-3 text-slate-300">{cand.backlogs}</td>
                  <td className="py-2.5 px-3">
                    {cand.status === 'ELIGIBLE' ? (
                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                        <CheckCircle2 className="w-2.5 h-2.5" /> ELIGIBLE
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30 font-bold">
                        <XCircle className="w-2.5 h-2.5" /> INELIGIBLE
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 font-sans text-[11px] text-slate-400">{cand.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Java Business Logic • MySQL Database • Candidate Screening Automation</span>
        <span className="text-amber-400 font-mono">Illustrative Portal Mockup</span>
      </div>
    </div>
  );
}

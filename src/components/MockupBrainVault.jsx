import React, { useState } from 'react';
import { Users, UserPlus, Search, Edit3, Trash2, Shield, Database, CheckCircle2 } from 'lucide-react';

export default function MockupBrainVault() {
  const [role, setRole] = useState('Admin');
  const [records, setRecords] = useState([
    { id: 'STU-101', name: 'Aarav Sharma', course: 'MCA', sem: 'Sem 2', status: 'Enrolled', gpa: '8.85' },
    { id: 'STU-102', name: 'Pooja Verma', course: 'BCA', sem: 'Sem 6', status: 'Enrolled', gpa: '9.10' },
    { id: 'STU-103', name: 'Rohan Mehra', course: 'MCA', sem: 'Sem 4', status: 'Completed', gpa: '8.40' },
  ]);

  const [filter, setFilter] = useState('');

  const filtered = records.filter(
    (r) => r.name.toLowerCase().includes(filter.toLowerCase()) || r.id.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full rounded-2xl bg-[#0F172A] border border-slate-700/60 shadow-2xl overflow-hidden font-sans text-xs sm:text-sm select-none">
      {/* Top Header */}
      <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">BrainVault • Student Record Management System</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Shield className="w-3 h-3" />
            Role: {role}
          </span>
          <button
            onClick={() => setRole(role === 'Admin' ? 'Student' : 'Admin')}
            className="text-[10px] text-slate-400 hover:text-white underline underline-offset-2"
          >
            Switch to {role === 'Admin' ? 'Student' : 'Admin'} View
          </button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-3 sm:p-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-[200px] max-w-xs bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search records by name or ID..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-transparent text-slate-200 placeholder-slate-500 text-xs focus:outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          {role === 'Admin' && (
            <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs shadow-sm hover:bg-amber-300 transition-colors">
              <UserPlus className="w-3.5 h-3.5" />
              Add Student
            </button>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
            <Database className="w-3 h-3 text-amber-400" /> MySQL Connected
          </span>
        </div>
      </div>

      {/* Table Mockup */}
      <div className="p-4 bg-[#0F172A] overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
              <th className="py-2.5 px-3">Student ID</th>
              <th className="py-2.5 px-3">Full Name</th>
              <th className="py-2.5 px-3">Program</th>
              <th className="py-2.5 px-3">Academic Term</th>
              <th className="py-2.5 px-3">Performance</th>
              <th className="py-2.5 px-3">Status</th>
              {role === 'Admin' && <th className="py-2.5 px-3 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
            {filtered.map((row) => (
              <tr key={row.id} className="hover:bg-slate-900/60 transition-colors">
                <td className="py-2.5 px-3 font-medium text-amber-400">{row.id}</td>
                <td className="py-2.5 px-3 font-sans font-medium text-slate-200">{row.name}</td>
                <td className="py-2.5 px-3 text-slate-400">{row.course}</td>
                <td className="py-2.5 px-3 text-slate-400">{row.sem}</td>
                <td className="py-2.5 px-3 text-slate-200 font-semibold">{row.gpa}</td>
                <td className="py-2.5 px-3">
                  <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    {row.status}
                  </span>
                </td>
                {role === 'Admin' && (
                  <td className="py-2.5 px-3 text-right">
                    <div className="inline-flex items-center gap-1.5 text-slate-400">
                      <button className="p-1 hover:text-amber-400 transition-colors" title="Edit">
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1 hover:text-rose-400 transition-colors" title="Delete">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Java Enterprise • MySQL Schema • Secure Session Authentication • CRUD Operations</span>
        <span className="text-amber-400 font-mono">Illustrative UI Mockup</span>
      </div>
    </div>
  );
}

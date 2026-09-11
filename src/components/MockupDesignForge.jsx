import React, { useState } from 'react';
import { Layers, ShieldCheck, GitCommit, Sparkles, Check, Code2, Zap } from 'lucide-react';

export default function MockupDesignForge() {
  const [selectedChallenge, setSelectedChallenge] = useState('parking');

  const challenges = {
    parking: {
      title: 'Parking Lot System',
      level: 'Medium • 25 min',
      score: '92%',
      twist: 'Add 50kW EV Fast Chargers with kWh exit billing',
      blastRadius: '12% (1 of 8 classes)',
      verdict: 'PASSED • High OCP Resilience',
      diffs: [
        { type: 'add', text: '+ Interface: IPricingStrategy' },
        { type: 'add', text: '+ Class: EVSlotChargingPolicy' },
        { type: 'mod', text: '~ Modified: ParkingLot delegates fee' }
      ]
    },
    elevator: {
      title: 'Elevator Dispatcher',
      level: 'Hard • 35 min',
      score: '94%',
      twist: 'Emergency VIP / Fire Alarm Preemption mode',
      blastRadius: '9% (1 of 11 classes)',
      verdict: 'PASSED • State Pattern Preserved',
      diffs: [
        { type: 'add', text: '+ State: FireEmergencyState' },
        { type: 'mod', text: '~ Modified: Dispatcher handles preemption' },
        { type: 'del', text: '- Removed: Hardcoded priority flags' }
      ]
    }
  };

  const active = challenges[selectedChallenge];

  return (
    <div className="w-full rounded-2xl bg-[#0E1524] border border-indigo-900/60 shadow-2xl overflow-hidden font-sans text-xs sm:text-sm select-none">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-[#090D17] border-b border-indigo-950 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-indigo-300 font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            DesignForge • AI LLD Studio
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            LLD Engine Active
          </span>
        </div>
      </div>

      {/* Sub-header Controls */}
      <div className="p-3 sm:p-4 bg-[#0A101D] border-b border-indigo-950 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 bg-[#060911] p-1 rounded-lg border border-indigo-900/40">
          <button
            type="button"
            onClick={() => setSelectedChallenge('parking')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
              selectedChallenge === 'parking'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-indigo-300 hover:text-white'
            }`}
          >
            Parking Lot LLD
          </button>
          <button
            type="button"
            onClick={() => setSelectedChallenge('elevator')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
              selectedChallenge === 'elevator'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-indigo-300 hover:text-white'
            }`}
          >
            Elevator Control
          </button>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
            Attempt #2 vs #1 Diff
          </span>
          <span className="text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Resilience: {active.score}
          </span>
        </div>
      </div>

      {/* Main Workspace: UML Studio Left + Break My Design Right */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 bg-gradient-to-b from-[#0D1525] to-[#090D18]">
        
        {/* Left Column: UML Architecture & Diff (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300">
            <span className="flex items-center gap-1.5 text-indigo-200 font-bold">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              Live UML Dynamic Class Diagram
            </span>
            <span className="text-slate-400">TypeScript / AST Grounded</span>
          </div>

          {/* UML Class Cards */}
          <div className="space-y-2">
            {/* Interface Box */}
            <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-700/50 flex flex-col">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-indigo-900/60">
                <span className="font-mono text-indigo-300 font-bold">«interface» IPricingStrategy</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 rounded">
                  + EXTRACTED
                </span>
              </div>
              <div className="font-mono text-[10px] text-slate-300 pt-1 space-y-0.5">
                <div>+ calculateFee(ticket: ParkingTicket): Decimal</div>
                <div>+ appliesTo(vehicleType: VehicleType): boolean</div>
              </div>
            </div>

            {/* Implementing Class Box */}
            <div className="p-2.5 rounded-xl bg-[#090E1A] border border-slate-800 flex flex-col">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
                <span className="font-mono text-white font-bold">class HourlyPricingStrategy</span>
                <span className="text-[10px] text-indigo-300 font-mono">implements IPricing</span>
              </div>
              <div className="font-mono text-[10px] text-slate-400 pt-1 space-y-0.5">
                <div>- hourlyRate: Decimal = $3.50</div>
                <div>+ calculateFee(ticket): Decimal &#123; ... &#125;</div>
              </div>
            </div>

            {/* Core Domain Class Box */}
            <div className="p-2.5 rounded-xl bg-[#090E1A] border border-amber-500/40 flex flex-col">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
                <span className="font-mono text-white font-bold">class ParkingLotCoordinator</span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-1.5 rounded">
                  ~ REFINED OCP
                </span>
              </div>
              <div className="font-mono text-[10px] text-slate-400 pt-1">
                <div>+ processVehicleExit(ticketId: string): Receipt</div>
                <div className="text-emerald-400 text-[9px] mt-0.5">
                  ✓ Delegates to IPricingStrategy (Zero coupling to pricing formula)
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Diff Summary */}
          <div className="p-2 rounded-lg bg-[#070B14] border border-indigo-950 flex items-center justify-between text-[10px] font-mono">
            <span className="text-slate-400 flex items-center gap-1">
              <GitCommit className="w-3 h-3 text-indigo-400" />
              Diff:
            </span>
            <div className="flex gap-2 text-[10px]">
              {active.diffs.map((d, i) => (
                <span
                  key={i}
                  className={`px-1.5 py-0.5 rounded ${
                    d.type === 'add'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                      : d.type === 'mod'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800/40'
                      : 'bg-rose-950 text-rose-300 border border-rose-800/40'
                  }`}
                >
                  {d.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: "Break My Design" Resilience Engine (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Signature Engine Card */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#060912] border border-indigo-800/50 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                "Break My Design" Engine
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                {active.score} SCORE
              </span>
            </div>

            <div className="text-[11px] text-slate-300 leading-tight">
              <span className="text-slate-400 font-mono text-[10px] uppercase block mb-0.5">Curveball Twist:</span>
              "{active.twist}"
            </div>

            {/* Stress Test Metrics */}
            <div className="p-2 rounded-lg bg-[#0B111F] border border-slate-800 space-y-1.5 text-[10px] font-mono">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Blast Radius:</span>
                <span className="text-emerald-400 font-bold">{active.blastRadius}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Interface Stability:</span>
                <span className="text-indigo-300 font-bold">100% Intact</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Verdict:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-400" />
                  {active.verdict}
                </span>
              </div>
            </div>
          </div>

          {/* 12-Dimension Quality Deltas */}
          <div className="p-3 rounded-xl bg-[#060912] border border-indigo-950 space-y-1.5">
            <div className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider flex items-center justify-between">
              <span>Rubric Metrics</span>
              <span className="text-emerald-400">Evolution Delta</span>
            </div>
            <div className="space-y-1 text-[11px] font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Coupling</span>
                <span className="text-emerald-400 font-bold">5.5 → 8.5 (+3.0)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Cohesion</span>
                <span className="text-emerald-400 font-bold">5.0 → 9.0 (+4.0)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Extensibility (OCP)</span>
                <span className="text-emerald-400 font-bold">4.5 → 8.5 (+4.0)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Bar */}
      <div className="px-4 py-2 bg-[#080C16] border-t border-indigo-950/80 flex items-center justify-between text-[10px] font-mono text-indigo-300/80">
        <span>TypeScript • React • Node.js • Prisma • AI Evaluation</span>
        <span className="text-amber-400 font-semibold">Simulated Studio Interface</span>
      </div>
    </div>
  );
}

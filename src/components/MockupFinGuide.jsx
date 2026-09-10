import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, BarChart3, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

export default function MockupFinGuide() {
  const [activeTicker, setActiveTicker] = useState('NVDA');

  const tickerData = {
    NVDA: { name: 'NVIDIA Corp', price: '$128.40', change: '+3.42%', signal: 'BUY', conf: '88% XGBoost', rsi: '62.4', volatility: 'Moderate (1.8%)' },
    AAPL: { name: 'Apple Inc', price: '$224.15', change: '+0.85%', signal: 'HOLD', conf: '76% XGBoost', rsi: '54.1', volatility: 'Low (0.9%)' },
    INFY: { name: 'Infosys Ltd', price: '$22.90', change: '+1.75%', signal: 'BUY', conf: '84% XGBoost', rsi: '58.7', volatility: 'Moderate (1.4%)' }
  };

  const current = tickerData[activeTicker];

  return (
    <div className="w-full rounded-2xl bg-[#0F172A] border border-slate-700/60 shadow-2xl overflow-hidden font-sans text-xs sm:text-sm select-none">
      {/* Top OS Window Header */}
      <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">FinGuide AI • Intelligent Market Advisor</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Model Active
          </span>
        </div>
      </div>

      {/* Sub-header Controls */}
      <div className="p-3 sm:p-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
          {Object.keys(tickerData).map((ticker) => (
            <button
              key={ticker}
              type="button"
              onClick={() => setActiveTicker(ticker)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                activeTicker === ticker
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {ticker}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Live Price</div>
            <div className="font-mono font-bold text-white text-base sm:text-lg flex items-center gap-1">
              {current.price}
              <span className="text-emerald-400 text-xs font-normal">{current.change}</span>
            </div>
          </div>
          <div className="hidden sm:block pl-3 border-l border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Recommendation</div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 mt-0.5 rounded font-bold text-xs bg-amber-400/15 text-amber-300 border border-amber-400/30">
              <TrendingUp className="w-3.5 h-3.5" />
              {current.signal}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Chart + Indicator Panel */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gradient-to-b from-[#0F172A] to-[#0B0F19]">
        {/* Left 2 Cols: Predictive Trend Chart */}
        <div className="lg:col-span-2 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 sm:p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-slate-200">XGBoost Forecast vs Historical</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">Confidence: {current.conf}</span>
          </div>

          {/* SVG Vector Chart */}
          <div className="relative h-36 sm:h-44 w-full py-2">
            <svg viewBox="0 0 400 140" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Horizontal grid lines */}
              <line x1="0" y1="25" x2="400" y2="25" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />
              <line x1="0" y1="65" x2="400" y2="65" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />
              <line x1="0" y1="105" x2="400" y2="105" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />

              {/* Shaded Area under curve */}
              <polygon points="0,110 50,95 100,105 160,70 210,80 270,45 330,35 400,20 400,135 0,135" fill="url(#chartGlow)" />
              {/* Historical Trend Line */}
              <polyline
                fill="none"
                stroke="#94A3B8"
                strokeWidth="2"
                points="0,110 50,95 100,105 160,70 210,80 270,45"
              />
              {/* Predicted Trend Line (Yellow Dotted) */}
              <polyline
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeDasharray="4 2"
                points="270,45 330,35 400,20"
              />
              {/* Prediction Point Marker */}
              <circle cx="400" cy="20" r="4" fill="#F59E0B" className="animate-ping" />
              <circle cx="400" cy="20" r="4" fill="#F59E0B" />
            </svg>

            {/* In-chart labels */}
            <div className="absolute top-2 right-2 text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              Projected Trend: Bullish (+4.1%)
            </div>
            <div className="absolute bottom-1 left-2 text-[9px] font-mono text-slate-500">
              Historical Window (T-30d) ───▶ Forecast Window (T+7d)
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-400" /> Historical
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> XGBoost Model Projected
            </span>
            <span className="text-[10px] text-slate-500">REST API: Real-Time Sync</span>
          </div>
        </div>

        {/* Right 1 Col: Indicators & Sentiment */}
        <div className="space-y-3">
          <div className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-3">
            <div className="text-[10px] text-slate-400 uppercase font-semibold mb-2 flex items-center justify-between">
              <span>Technical Indicators</span>
              <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">RSI (14)</span>
                <span className="font-mono font-medium text-amber-400">{current.rsi}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: `${current.rsi}%` }} />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-300">Volatility Index</span>
                <span className="font-mono text-slate-300">{current.volatility}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-3">
            <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1.5 flex items-center justify-between">
              <span>External News & Sentiment</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-[11px] text-slate-300 line-clamp-2">
              "Semiconductor demand and cloud AI enterprise scaling forecast positive earnings revisions..."
            </p>
            <span className="inline-block mt-1 text-[9px] text-slate-400 font-mono">
              Sentiment Score: +0.72 (Positive)
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Architected with Python • Flask • XGBoost • Scikit-learn • Pandas</span>
        <span className="text-amber-400 font-mono">Simulated Project UI Mockup</span>
      </div>
    </div>
  );
}

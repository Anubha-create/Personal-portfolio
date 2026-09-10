import React, { useState } from 'react';
import { Sparkles, CheckCircle, AlertTriangle, Cpu, Terminal, FileText } from 'lucide-react';

export default function MockupFakeNews() {
  const [sampleIndex, setSampleIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const samples = [
    {
      title: "Government Announces New Renewable Energy Grant Scheme for Urban Communes",
      text: "The Ministry of Energy today unveiled an official public initiative offering subsidies for municipal solar rooftop transitions, confirmed through official gazette records and press releases.",
      expected: "REAL NEWS",
      confidence: "96.4%",
      tokens: ["government", "announces", "renewable", "energy", "grant", "scheme", "official"]
    },
    {
      title: "Secret Satellite Laser Causes Nationwide Internet Blackout in Coastal Areas",
      text: "Anonymous internet forums allege that a top-secret orbital satellite laser system triggered widespread telecommunications failure yesterday, with no technical verification or carrier confirmation.",
      expected: "FAKE NEWS",
      confidence: "97.1%",
      tokens: ["secret", "satellite", "laser", "causes", "blackout", "anonymous", "allege"]
    }
  ];

  const currentSample = samples[sampleIndex];

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0F172A] border border-slate-700/60 shadow-2xl overflow-hidden font-sans text-xs sm:text-sm select-none">
      {/* Top Header */}
      <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">Gradio / Hugging Face Spaces • Fake News NLP Detector</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
            ISOT Dataset: 44,898 Articles
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            95% Model Accuracy
          </span>
        </div>
      </div>

      {/* Main Two-Column Interface */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-b from-[#0F172A] to-[#0B0F19]">
        {/* Left: Input Article Box */}
        <div className="flex flex-col justify-between space-y-3 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                Input Headline & Article Text
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setSampleIndex(0)}
                  className={`px-2 py-0.5 rounded text-[10px] ${sampleIndex === 0 ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 bg-slate-900'}`}
                >
                  Sample 1
                </button>
                <button
                  type="button"
                  onClick={() => setSampleIndex(1)}
                  className={`px-2 py-0.5 rounded text-[10px] ${sampleIndex === 1 ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 bg-slate-900'}`}
                >
                  Sample 2
                </button>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs leading-relaxed space-y-1">
              <div className="font-semibold text-white">{currentSample.title}</div>
              <p className="text-slate-400 text-[11px]">{currentSample.text}</p>
            </div>
          </div>

          <div>
            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className="w-full py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              {isAnalyzing ? (
                <>
                  <span className="w-3 h-3 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  Vectorizing & Predicting...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Run TF-IDF & Logistic Regression
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Preprocessing & Prediction Result */}
        <div className="space-y-3 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              NLP Pipeline Tokens (NLTK)
            </div>
            {/* Tokens representation */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {currentSample.tokens.map((tok, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-900 text-amber-300 font-mono text-[10px] rounded border border-slate-800">
                  {tok}
                </span>
              ))}
              <span className="px-1.5 py-0.5 text-slate-500 font-mono text-[10px]">+ TF-IDF matrix</span>
            </div>

            {/* Classification Card */}
            <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              Model Classification Output
            </div>
            <div className={`p-3 rounded-lg border flex items-center justify-between ${
              currentSample.expected === 'REAL NEWS'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}>
              <div className="flex items-center gap-2.5">
                {currentSample.expected === 'REAL NEWS' ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                )}
                <div>
                  <div className="font-extrabold text-sm tracking-wide">{currentSample.expected}</div>
                  <div className="text-[10px] text-slate-400">Classified via Scikit-Learn Logistic Regression</div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-xs">{currentSample.confidence}</span>
                <div className="text-[9px] text-slate-400">Probability</div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <span>Pipeline: Tokenize ➔ Lemmatize ➔ TF-IDF ➔ Model</span>
            <span className="font-mono text-emerald-400">Precision Verified</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Python • Scikit-learn • NLTK • TF-IDF • Gradio • Hugging Face</span>
        <span className="text-amber-400 font-mono">NLP System Demonstration</span>
      </div>
    </div>
  );
}

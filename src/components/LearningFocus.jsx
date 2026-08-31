import React from 'react';
import { 
  Sparkles, 
  Code2, 
  Binary, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Compass
} from 'lucide-react';
import { currentFocus } from '../data/portfolioData';

export default function LearningFocus() {
  const steps = ["Learning", "Practicing", "Building", "Improving"];

  return (
    <section id="learning" className="py-20 relative bg-slate-950/60 border-y border-slate-900">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-blue-600/5 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Dedicated Learning Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Currently <span className="text-cyan-400">Learning</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            "{currentFocus.description}"
          </p>
        </div>

        {/* Learning Roadmap Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: C++ */}
          <div className="bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-500/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden transition-all duration-300 shadow-xl shadow-cyan-950/20">
            {/* Top glowing bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md shadow-cyan-500/10">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">C++</h3>
                  <span className="text-xs font-mono text-cyan-400">Programming Fundamentals & Logic</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shrink-0">
                Core Language
              </span>
            </div>

            {/* Exact Required Wording */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              "Currently learning and practicing C++ to improve programming fundamentals and problem-solving skills."
            </p>

            {/* Visual Step Progression: Learning → Practicing → Building → Improving */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                <span>Learning Progression</span>
                <span className="text-cyan-400 font-semibold">Active Stage: Practicing</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {steps.map((step, idx) => {
                  const isCurrent = idx === 1; // Practicing
                  const isCompleted = idx === 0; // Learning
                  return (
                    <div 
                      key={step} 
                      className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-lg border text-center text-xs font-medium transition-all ${
                        isCurrent 
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm shadow-cyan-500/20 ring-1 ring-cyan-400' 
                          : isCompleted 
                            ? 'bg-slate-950 border-cyan-500/40 text-slate-300' 
                            : 'bg-slate-950/50 border-slate-800 text-slate-500'
                      }`}
                    >
                      <span className="text-[10px] text-slate-500 font-mono mb-0.5">0{idx + 1}</span>
                      <span className="text-[11px] sm:text-xs">{step}</span>
                      {isCurrent && (
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1 animate-ping"></span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Topics in C++ */}
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Focus Topics:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Object-Oriented Programming (OOP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Pointers & Memory Allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Standard Template Library (STL)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Modular Code Structuring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Data Structures & Algorithms */}
          <div className="bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-500/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden transition-all duration-300 shadow-xl shadow-emerald-950/20">
            {/* Top glowing bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>

            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-md shadow-emerald-500/10">
                  <Binary className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Data Structures & Algorithms</h3>
                  <span className="text-xs font-mono text-emerald-400">Algorithmic Thinking & Efficiency</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shrink-0">
                Core Problem Solving
              </span>
            </div>

            {/* Exact Required Wording */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              "Currently studying and practicing Data Structures & Algorithms to develop strong algorithmic thinking and problem-solving skills."
            </p>

            {/* Visual Step Progression: Learning → Practicing → Building → Improving */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                <span>Learning Progression</span>
                <span className="text-emerald-400 font-semibold">Active Stage: Practicing</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {steps.map((step, idx) => {
                  const isCurrent = idx === 1; // Practicing
                  const isCompleted = idx === 0; // Learning
                  return (
                    <div 
                      key={step} 
                      className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-lg border text-center text-xs font-medium transition-all ${
                        isCurrent 
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-400' 
                          : isCompleted 
                            ? 'bg-slate-950 border-emerald-500/40 text-slate-300' 
                            : 'bg-slate-950/50 border-slate-800 text-slate-500'
                      }`}
                    >
                      <span className="text-[10px] text-slate-500 font-mono mb-0.5">0{idx + 1}</span>
                      <span className="text-[11px] sm:text-xs">{step}</span>
                      {isCurrent && (
                        <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1 animate-ping"></span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Topics in DSA */}
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Focus Topics:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Arrays, Strings & Vectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Time & Space Complexity (Big-O)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Linear & Binary Searching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sorting Algorithms & Recursion</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

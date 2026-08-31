import React from 'react';
import { 
  User, 
  GraduationCap, 
  Target, 
  Code, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Cpu 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      subtitle: "B.Tech in Computer Science & Engineering",
      detail: "Lovely Professional University (2025–2029). Building strong theoretical and practical computer science foundations.",
      color: "text-blue-400 border-blue-500/20 bg-blue-500/10"
    },
    {
      icon: Target,
      title: "Current Primary Focus",
      subtitle: "C++ & Data Structures & Algorithms",
      detail: "Dedication towards developing disciplined problem-solving methodologies, algorithm design, and computational efficiency.",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
    },
    {
      icon: Code,
      title: "Practical Development",
      subtitle: "Python Utilities & Applications",
      detail: "Applying programming principles by creating real console & GUI applications like student managers, calculators, and tools.",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Building Foundations in <span className="text-cyan-400">Computer Science</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            An authentic look into my background, academic path, and engineering mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden shadow-xl shadow-black/20">
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Shashank Shukla</h3>
                <p className="text-xs text-slate-400">B.Tech CSE Student • Lovely Professional University</p>
              </div>
            </div>

            {/* Core Approved Statement */}
            <blockquote className="border-l-2 border-cyan-500/80 pl-4 py-1 mb-6 text-slate-200 text-base sm:text-lg leading-relaxed font-medium bg-slate-950/40 rounded-r-lg">
              "{personalInfo.bioLong}"
            </blockquote>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              As a first-year Computer Science Engineering student, I believe in structured learning. Rather than rushing into frameworks prematurely, my current priority is mastering **C++ memory concepts, algorithmic paradigms, and data structures** to cultivate sharp computational intuition.
            </p>

            {/* Student Principles Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Focus on fundamental CS concepts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hands-on problem solving</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Clean, readable Python code</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Continuous daily coding practice</span>
              </div>
            </div>
          </div>

          {/* Highlights & Key Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 rounded-xl p-5 transition-all duration-200 hover:translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border shrink-0 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs font-medium text-cyan-400">{item.subtitle}</p>
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

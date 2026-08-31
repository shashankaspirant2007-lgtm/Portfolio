import React from 'react';
import { 
  Sparkles, 
  Code2, 
  Binary, 
  Terminal, 
  Layout, 
  Palette, 
  Users, 
  Clock, 
  Award, 
  MessageSquare, 
  BrainCircuit,
  Flame
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const softSkillIcons = {
    "Teamwork": Users,
    "Time Management": Clock,
    "Leadership": Award,
    "Effective Communication": MessageSquare,
    "Critical Thinking": BrainCircuit
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background glow behind skills */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical & Interpersonal Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-cyan-400">Core Focus</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Highlighting my active learning focus alongside practical programming and soft skills.
          </p>
        </div>

        <div className="space-y-10">
          
          {/* 1. VISUALLY PROMINENT: CURRENTLY LEARNING & PRACTICING (C++ & DSA) */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Currently Learning & Practicing</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-normal">
                  Primary Spotlight
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* C++ Card */}
              <div className="relative group bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border-2 border-cyan-500/40 hover:border-cyan-400 rounded-2xl p-6 sm:p-7 shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:shadow-cyan-500/10">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Active Focus</span>
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 shadow-sm shadow-cyan-500/20">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      C++
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">Core Programming Language</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  Focusing on syntax, memory management, pointers, and foundational Object-Oriented Programming (OOP) to strengthen low-level understanding and problem solving.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {["Syntax & Semantics", "Pointers & References", "OOP Basics", "Standard Library"].map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/70 border border-cyan-500/20 text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Structures & Algorithms Card */}
              <div className="relative group bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30 border-2 border-emerald-500/40 hover:border-emerald-400 rounded-2xl p-6 sm:p-7 shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:shadow-emerald-500/10">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Active Focus</span>
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 shadow-sm shadow-emerald-500/20">
                    <Binary className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Data Structures & Algorithms (DSA)
                    </h4>
                    <p className="text-xs text-emerald-400 font-mono mt-0.5">Algorithmic Problem Solving</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  Studying algorithmic concepts, data organization, time & space complexities, and structured logic to build resilient analytical problem-solving skills.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {["Arrays & Strings", "Complexity Analysis", "Searching & Sorting", "Algorithmic Logic"].map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/70 border border-emerald-500/20 text-emerald-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* 2. PROGRAMMING & WEB (Python, HTML, CSS) */}
          <div>
            <h3 className="text-base font-bold text-slate-300 mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Programming & Web Foundations</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Python */}
              <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all hover:bg-slate-900/80">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Python</h4>
                    <span className="text-xs text-amber-400/80 font-mono">Practical Projects</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Used for writing clean scripts, console utilities, data handling, and desktop GUI applications (Tkinter).
                </p>
              </div>

              {/* HTML */}
              <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all hover:bg-slate-900/80">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">HTML</h4>
                    <span className="text-xs text-orange-400/80 font-mono">Web Structure</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Creating accessible, semantic document layouts and standard web page structures.
                </p>
              </div>

              {/* CSS */}
              <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all hover:bg-slate-900/80">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">CSS</h4>
                    <span className="text-xs text-blue-400/80 font-mono">Styling & Layouts</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Styling interfaces, flexbox/grid alignments, responsive design, and visual aesthetics.
                </p>
              </div>

            </div>
          </div>

          {/* 3. SOFT SKILLS */}
          <div>
            <h3 className="text-base font-bold text-slate-300 mb-4 flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-emerald-400" />
              <span>Soft Skills & Professional Attributes</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {skillsData.softSkills.map((skill, idx) => {
                const IconComponent = softSkillIcons[skill.name] || Users;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 text-center flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  >
                    <div className="p-2 rounded-lg bg-slate-800/60 text-cyan-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

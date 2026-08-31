import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Code2, 
  Binary, 
  FileDown, 
  Mail, 
  Github, 
  Linkedin,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onResumeClick }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-emerald-500/10 blur-[110px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-sm shadow-cyan-500/10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              Actively Practicing <span className="text-cyan-400 font-semibold">C++</span> & <span className="text-emerald-400 font-semibold">DSA</span>
            </span>
          </div>

          {/* Main Title & Degree Information */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-base sm:text-xl font-medium text-slate-300">
              <span className="text-cyan-400">{personalInfo.title}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400 flex items-center gap-1.5 text-sm sm:text-base">
                <GraduationCap className="w-4 h-4 text-blue-400 inline" />
                {personalInfo.institution} (2025–2029)
              </span>
            </div>
          </div>

          {/* Authentic Intro Statement */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            {personalInfo.bioShort}
          </p>

          {/* Focus Pills: Visual Emphasis on C++ & DSA & Python */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-sm">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Currently Learning: C++</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono shadow-sm">
              <Binary className="w-4 h-4 text-emerald-400" />
              <span>Currently Learning: DSA</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs font-mono shadow-sm">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>Projects: Python</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 w-full max-w-xl">
            <a
              href="#projects"
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#learning"
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Currently Learning</span>
            </a>

            <a
              href="#contact"
              className="flex-1 min-w-[130px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Contact Me</span>
            </a>

            <button
              onClick={onResumeClick}
              className="flex-1 min-w-[150px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links & Location Info */}
          <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-xs">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
                title="GitHub Profile (Placeholder: Update in src/data/portfolioData.js)"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile (Placeholder: Update in src/data/portfolioData.js)"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Address"
                title={`Send email to ${personalInfo.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden sm:block text-slate-700">|</div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

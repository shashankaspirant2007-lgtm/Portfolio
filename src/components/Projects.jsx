import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Terminal, 
  Layers, 
  Sparkles, 
  HelpCircle,
  CheckCircle2,
  Code
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onPlaceholderClick }) {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Python', 'Tkinter GUI', 'Console Apps'];

  const filteredProjects = projectsData.filter(project => {
    if (selectedTag === 'All') return true;
    if (selectedTag === 'Python') return project.technology.includes('Python');
    if (selectedTag === 'Tkinter GUI') return project.technology.includes('Tkinter');
    if (selectedTag === 'Console Apps') return project.isConsole;
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Practical Python and GUI applications built to solve problems, reinforce logic, and organize data.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/30'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid (Strictly 4 Python Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Header & Tech Tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack Badges & Links */}
              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onPlaceholderClick(`GitHub Repository for ${project.title}`, project.githubUrl)}
                    className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-400" />
                    <span>GitHub Repo</span>
                  </button>

                  <button
                    onClick={() => onPlaceholderClick(`Live Demo / Run Guide for ${project.title}`, project.liveDemoUrl || 'Run locally using Python command')}
                    className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Live Demo / Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">Note:</span> GitHub repository and demo links are configured with clear placeholders ready for your custom repo links in <code className="text-slate-300 font-mono">src/data/portfolioData.js</code>.
          </p>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  Building2, 
  BookOpenCheck 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education <span className="text-cyan-400">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            My structured academic journey in science, mathematics, and computer science engineering.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800"></div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div 
                key={item.id}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Milestone Node Icon */}
                <div className={`absolute left-1.5 sm:left-3.5 top-1 -translate-x-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  index === 0 
                    ? 'bg-cyan-500 border-cyan-300 shadow-md shadow-cyan-500/50' 
                    : 'bg-slate-900 border-slate-700 group-hover:border-cyan-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-slate-950' : 'bg-cyan-400'}`}></div>
                </div>

                {/* Card */}
                <div className="bg-slate-900/70 border border-slate-800/90 group-hover:border-slate-700/90 rounded-2xl p-6 backdrop-blur-sm shadow-lg shadow-black/10 transition-all duration-200">
                  
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.institution}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-cyan-400">
                        {item.degree}
                      </p>
                    </div>

                    {/* Duration / Status Pill */}
                    <div className="flex items-center gap-2">
                      {item.score && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                          Score: {item.score}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-4 pt-3 border-t border-slate-800/60">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{item.location}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

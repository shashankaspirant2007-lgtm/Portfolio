import React from 'react';
import { 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { certificationData } from '../data/portfolioData';

export default function Certification() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Verified learning credentials demonstrating professional development and digital skills.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="max-w-2xl mx-auto">
          {certificationData.map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-md shadow-cyan-500/10">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      Issued by: <span className="text-white font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1.5 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{cert.badge}</span>
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Professional Credential</span>
                </span>
                <span className="font-mono text-[11px] text-slate-500">Skillup Platform</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

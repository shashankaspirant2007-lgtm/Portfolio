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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {certificationData.map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

              {/* Certificate Preview Image */}
              <div className="relative overflow-hidden bg-slate-950 aspect-[16/11]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono backdrop-blur-sm shadow-sm">
                  {cert.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <span className="font-mono text-slate-500 text-[11px]">{cert.issueDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Issued by: <span className="text-slate-200">{cert.issuer.split('(')[0]}</span></span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors"
                    >
                      <span>Preview</span>
                    </a>
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      download
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-colors"
                    >
                      <span>PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LearningFocus from './components/LearningFocus';
import Projects from './components/Projects';
import Education from './components/Education';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { 
  CheckCircle2, 
  Info, 
  X, 
  FileDown, 
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleResumeDownload = () => {
    setModalContent({
      title: "Resume Download",
      badge: "PDF Document",
      body: "You can link your real Resume PDF by updating the `resumeUrl` field in `src/data/portfolioData.js` or placing your `resume.pdf` inside the `public/` directory.",
      actionText: "Download Sample PDF / Placeholder",
      action: () => {
        showToast("Resume action triggered! (Connect your resume.pdf in portfolioData.js)");
        setModalContent(null);
      }
    });
  };

  const handlePlaceholderNotice = (title, url) => {
    setModalContent({
      title: title,
      badge: "Configurable Link",
      body: `This button is currently pointing to a placeholder (${url || 'No URL specified'}). You can replace it with your actual link in 'src/data/portfolioData.js'.`,
      actionText: "Got it!",
      action: () => setModalContent(null)
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onResumeClick={handleResumeDownload} 
        />

        {/* Page Sections */}
        <main className="flex-grow">
          <Hero onResumeClick={handleResumeDownload} />
          <About />
          <Skills />
          <LearningFocus />
          <Projects onPlaceholderClick={handlePlaceholderNotice} />
          <Education />
          <Certification />
          <Contact onShowToast={showToast} />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* Floating Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-slate-900/95 border border-cyan-500/50 shadow-2xl shadow-cyan-950/60 backdrop-blur-md text-white px-4 py-3 rounded-2xl flex items-center gap-3 text-xs font-medium max-w-sm">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="leading-tight">{toastMessage}</span>
            <button 
              onClick={() => setToastMessage(null)}
              className="ml-auto text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Config / Placeholder Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono">
                {modalContent.badge}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {modalContent.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
              {modalContent.body}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={modalContent.action}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-md shadow-cyan-500/20"
              >
                {modalContent.actionText}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

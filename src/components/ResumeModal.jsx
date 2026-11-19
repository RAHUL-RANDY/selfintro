import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Copy, Check, FileText, Sparkles, MapPin, Mail, GraduationCap } from 'lucide-react';
import { personalInfo, aboutData, skillsData, projectsData, educationData, certificationsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
RAHUL R — RESUME
AI & Data Science Student | Chennai Institute of Technology
Email: ${personalInfo.emailPlaceholder} | Location: ${personalInfo.location}
Academic: CGPA 9.1 / 10

SUMMARY:
${personalInfo.bio}

EDUCATION:
${educationData[0].institution} - ${educationData[0].degree} (${educationData[0].period})
CGPA: ${educationData[0].score}

PROJECTS:
${projectsData.map(p => `• ${p.title} (${p.category}): ${p.description}`).join('\n')}

CERTIFICATIONS:
${certificationsData.map(c => `• ${c.title} - ${c.issuer}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Controls */}
          <div className="p-4 sm:px-8 sm:py-4 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide font-display">
                Rahul_R_Resume.pdf — Preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-neutral-200 transition-colors flex items-center gap-1.5"
                title="Copy resume text to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-neutral-900 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div className="p-6 sm:p-12 overflow-y-auto bg-neutral-50/50 space-y-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-neutral-200 space-y-8">
              
              {/* Document Header */}
              <div className="border-b border-neutral-200 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight">
                      {personalInfo.name}
                    </h1>
                    <div className="text-sm font-medium text-neutral-600 mt-1">
                      {personalInfo.role} • Chennai Institute of Technology
                    </div>
                  </div>

                  <div className="text-xs font-mono text-neutral-500 space-y-0.5 sm:text-right">
                    <div>{personalInfo.emailPlaceholder}</div>
                    <div>{personalInfo.location}</div>
                    <div className="text-emerald-700 font-semibold">Academic CGPA: {personalInfo.cgpa}</div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold border-b border-neutral-200 pb-1">
                  Professional Objective
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold border-b border-neutral-200 pb-1">
                  Education
                </h3>
                {educationData.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-neutral-900">
                      <span>{edu.institution}</span>
                      <span className="font-mono text-neutral-500">{edu.period}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-600">
                      <span>{edu.degree}</span>
                      <span className="font-mono font-bold text-neutral-900">{edu.score}</span>
                    </div>
                    <div className="text-xs text-neutral-500">
                      Key Highlights: High academic standing, algorithmic coursework, symposium participation.
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold border-b border-neutral-200 pb-1">
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                  <div>
                    <span className="font-semibold text-neutral-900">Languages:</span> Python, C++, JavaScript, SQL, HTML5, CSS3
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Data & ML:</span> Pandas, NumPy, Matplotlib, Scikit-learn
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Platforms & Tools:</span> Git, GitHub, Google AI Studio
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Specializations:</span> Prompt Engineering, Problem Solving, AI Dev
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold border-b border-neutral-200 pb-1">
                  Key Projects & Innovations
                </h3>
                {projectsData.map((project, idx) => (
                  <div key={idx} className="space-y-1 text-xs sm:text-sm">
                    <div className="flex items-center justify-between font-semibold text-neutral-900">
                      <span>{project.title} — {project.subtitle}</span>
                      <span className="font-mono text-xs text-neutral-500">{project.category}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="text-[11px] font-mono text-neutral-500">
                      Stack: {project.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold border-b border-neutral-200 pb-1">
                  Certifications & Honors
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-700">
                  {certificationsData.map((c, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span>• <strong className="font-semibold text-neutral-900">{c.title}</strong> — {c.issuer}</span>
                      <span className="font-mono text-[11px] text-neutral-500">{c.credentialId}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer Note */}
          <div className="p-4 bg-neutral-100 border-t border-neutral-200 text-center text-xs text-neutral-500 font-mono">
            Rahul R • B.Tech AI & Data Science • Chennai Institute of Technology
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

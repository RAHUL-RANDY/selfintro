import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Cpu, CheckCircle2, Terminal, ExternalLink, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-neutral-900 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
              <span>Project {project.number}</span>
              <span>•</span>
              <span className="text-emerald-400">{project.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
                Project Overview & Mission
              </h4>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            {project.architecture && (
              <div>
                <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-neutral-600" />
                  Technical Architecture
                </h4>
                <div className="space-y-2">
                  {project.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Metrics / Technical Parameters */}
            {project.metrics && (
              <div>
                <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
                  Engine & Architecture Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-neutral-100/70 border border-neutral-200/60">
                      <div className="text-[11px] font-mono text-neutral-500 uppercase">{m.label}</div>
                      <div className="text-xs font-semibold text-neutral-900 mt-1">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
                Technologies & Tools Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Note on live links */}
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
              <span>Source code / deployment available upon academic review</span>
              <span className="font-mono text-[11px] text-neutral-400">CIT AI & DS</span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:px-8 sm:py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-semibold bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

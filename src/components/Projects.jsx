import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, QrCode, BarChart3, FileSearch, Mic } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Render stylized, high-fidelity project preview graphic placeholders
  const renderProjectVisual = (id) => {
    switch (id) {
      case 'project-01': // WorkPulse
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 flex flex-col justify-between text-white relative overflow-hidden rounded-2xl select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">WORKPULSE ANALYTICS</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Random Forest ML
              </span>
            </div>

            <div className="my-auto space-y-3 py-4">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Predicted Satisfaction Index</span>
                <span className="text-emerald-400 font-mono font-medium">92.4%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-[92%]" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] text-neutral-400">Retention Risk</div>
                  <div className="text-xs font-mono font-bold text-white mt-0.5">Low (4.2%)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] text-neutral-400">Sentiment</div>
                  <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">+0.78 Pos</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] text-neutral-400">Model F1</div>
                  <div className="text-xs font-mono font-bold text-white mt-0.5">0.89</div>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between">
              <span>WORKFORCE INTELLIGENCE PIPELINE</span>
              <span>SCIKIT-LEARN • PANDAS</span>
            </div>
          </div>
        );

      case 'project-02': // SafeBus Nexus
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 flex flex-col justify-between text-white relative overflow-hidden rounded-2xl select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">SAFEBUS PROTOCOL</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                IoT Telemetry
              </span>
            </div>

            <div className="my-auto flex items-center justify-center gap-6 py-4">
              <div className="w-20 h-20 bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                <QrCode className="w-16 h-16 text-neutral-900" />
              </div>
              <div className="space-y-1.5 text-left">
                <div className="text-xs font-medium text-white">Encrypted Transit Token</div>
                <div className="text-[11px] font-mono text-neutral-400">Status: Verified Boarding</div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live SOS Broadcast Ready
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between">
              <span>REAL-TIME SAFETY FLEET MESH</span>
              <span>QR VALIDATION SYSTEM</span>
            </div>
          </div>
        );

      case 'project-03': // AI Resume Analyzer
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-850 to-neutral-800 p-6 flex flex-col justify-between text-white relative overflow-hidden rounded-2xl select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <FileSearch className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">RESUME COGNITIVE ENGINE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Google AI Studio
              </span>
            </div>

            <div className="my-auto py-3 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">Job Description Alignment</span>
                <span className="text-amber-300 font-mono font-bold">88% Match</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-[88%]" />
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1 text-left">
                <div className="text-[11px] text-neutral-300 font-medium">Identified Skill Advancements:</div>
                <div className="text-[10px] font-mono text-neutral-400 flex gap-2">
                  <span className="text-emerald-400">+ PyTorch</span>
                  <span className="text-emerald-400">+ Docker</span>
                  <span className="text-emerald-400">+ Vector DB</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between">
              <span>NLP SEMANTIC PARSING</span>
              <span>GEMINI POWERED</span>
            </div>
          </div>
        );

      case 'project-04': // NOVA
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black p-6 flex flex-col justify-between text-white relative overflow-hidden rounded-2xl select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">NOVA VOICE CORE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                Bilingual NLP
              </span>
            </div>

            <div className="my-auto py-4 flex flex-col items-center justify-center space-y-3">
              {/* Animated Audio Waveform Mockup */}
              <div className="flex items-center gap-1.5 h-10">
                {[40, 75, 25, 90, 60, 100, 45, 80, 30, 95, 50, 70].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 bg-violet-400 rounded-full opacity-80"
                  />
                ))}
              </div>
              <div className="text-center">
                <div className="text-xs font-medium text-white">"வணக்கம் Rahul, How can I assist you?"</div>
                <div className="text-[10px] font-mono text-neutral-400 mt-0.5">Tamil & English Dual Speech Core</div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between">
              <span>SPEECH SYNTHESIS ENGINE</span>
              <span>PYTHON • UI AUTOMATION</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">03 / Works</span>
            <span className="h-[1px] w-12 bg-neutral-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 font-display">
            Featured Projects
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2 max-w-xl">
            Selected engineering prototypes bridging machine learning models, data analytics, and user experiences.
          </p>
        </div>

        <div className="text-xs font-mono text-neutral-400">
          SHOWCASE (4 OF 4)
        </div>
      </div>

      {/* Large Editorial Project Cards */}
      <div className="space-y-12 sm:space-y-16">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group rounded-3xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-card transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-10">
              {/* Visual Mockup Column */}
              <div className="lg:col-span-5 h-[280px] sm:h-[320px] lg:h-auto rounded-2xl overflow-hidden shadow-inner">
                {renderProjectVisual(project.id)}
              </div>

              {/* Information Column */}
              <div className="lg:col-span-7 flex flex-col justify-between py-2">
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-light text-neutral-300 font-display tracking-tight group-hover:text-neutral-900 transition-colors duration-300">
                      {project.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 text-neutral-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-950 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-500 mb-4 font-mono">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-50 text-neutral-700 border border-neutral-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <span>View Project Architecture & Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] font-mono text-neutral-400">
                    Academic Showcase
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

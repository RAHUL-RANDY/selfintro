import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, BrainCircuit, ExternalLink } from 'lucide-react';
import PortraitPlaceholder from './PortraitPlaceholder';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-20 flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Decorative vertical editorial accents (Desktop) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-3 text-[11px] font-mono tracking-widest text-neutral-400 uppercase pointer-events-none select-none z-10">
        <span>{personalInfo.role}</span>
        <span className="w-8 h-[1px] bg-neutral-300" />
        <span>CIT CHENNAI</span>
      </div>

      <div className="hidden lg:flex fixed left-6 bottom-8 text-[11px] font-mono tracking-wider text-neutral-400 select-none z-10">
        2024 — 2025
      </div>

      {/* Main Grid: Reference Layout Inspiration */}
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto">
        
        {/* Left Column (Desktop): Stats & Giant Editorial Greeting */}
        <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 z-20">
          
          {/* Reference Stats: +9.1 CGPA and +4 Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-8 mb-8"
          >
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight font-display">
                +9.1
              </div>
              <div className="text-xs sm:text-[13px] text-neutral-500 font-medium mt-1">
                CGPA Academic Record
              </div>
            </div>

            <div className="w-[1px] h-12 bg-neutral-200" />

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight font-display">
                +4
              </div>
              <div className="text-xs sm:text-[13px] text-neutral-500 font-medium mt-1">
                Featured AI Projects
              </div>
            </div>
          </motion.div>

          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium w-fit mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{personalInfo.status}</span>
          </motion.div>

          {/* Editorial Display Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-950 font-display leading-[0.95] mb-4">
              Hello
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-sm">
              <span className="text-neutral-400 font-mono text-xs mr-1.5">—</span>
              I'm <strong className="text-neutral-950 font-semibold">{personalInfo.name}</strong>. {personalInfo.headline}
            </p>
          </motion.div>
        </div>

        {/* Center Column: Large Centered Portrait with Soft Fade */}
        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            <PortraitPlaceholder />
          </motion.div>
        </div>

        {/* Right Column: Bio description & Call-to-actions */}
        <div className="lg:col-span-4 flex flex-col justify-center lg:items-start order-3 z-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Small Role Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-xs uppercase tracking-wider">
              <BrainCircuit className="w-3.5 h-3.5 text-neutral-600" />
              <span>{personalInfo.role}</span>
            </div>

            {/* Comprehensive Bio */}
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed text-balance">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-neutral-950 text-white hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50 transition-all duration-200 hover:border-neutral-400"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            </div>

            {/* Quick credentials teaser */}
            <div className="pt-4 border-t border-neutral-200/80 flex items-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium text-neutral-800">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                CIT Chennai
              </span>
              <span>•</span>
              <span>Python & AI Dev</span>
              <span>•</span>
              <span>Prompt Eng.</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Center: Scroll Down Indicator matching reference image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full flex justify-between items-center pt-8 border-t border-neutral-100 mt-8"
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-neutral-950 transition-colors"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200" />
        </a>

        <div className="text-[11px] font-mono text-neutral-400 tracking-wide hidden sm:block">
          AI & DATA SCIENCE • CHENNAI INSTITUTE OF TECHNOLOGY
        </div>
      </motion.div>
    </section>
  );
}

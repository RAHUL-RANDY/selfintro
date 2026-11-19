import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, School, Terminal, Cpu, Database, Sparkles } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Degree: GraduationCap,
    Institution: School,
    CGPA: Award,
    Location: MapPin,
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Editorial Section Label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">01 / Profile</span>
        <span className="h-[1px] w-12 bg-neutral-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Pillars */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 font-display leading-tight">
              {aboutData.heading}
            </h2>
            <div className="w-16 h-1 bg-neutral-900 mt-6 rounded-full" />
          </div>

          <div className="space-y-5 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx} className="text-balance">
                {para}
              </p>
            ))}
          </div>

          {/* Strategic Focus Cards */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {aboutData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-card transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3">
                  {idx === 0 ? <Database className="w-4 h-4" /> : idx === 1 ? <Cpu className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
                </div>
                <h4 className="text-sm font-semibold text-neutral-900 mb-1">{pillar.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Details & Academic Badges */}
        <div className="lg:col-span-6 space-y-6 lg:pl-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, idx) => {
              const Icon = iconMap[item.label] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:border-neutral-400/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      {item.label}
                    </span>
                    <div className="p-2 rounded-lg bg-neutral-100 text-neutral-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950 font-display">
                      {item.value}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 font-mono">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Editorial Philosophy Quote Box */}
          <div className="p-7 rounded-3xl bg-neutral-900 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 p-8 text-neutral-800 font-serif text-8xl leading-none select-none pointer-events-none opacity-40">
              “
            </div>
            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Vision & Ambition
              </span>
              <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
                "Striving to merge the mathematical precision of Data Science with the generative potential of modern AI, building tools that make everyday lives smarter, safer, and simpler."
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>— Rahul R</span>
                <span>Chennai Institute of Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

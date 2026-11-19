import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Editorial Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">04 / Academics</span>
        <span className="h-[1px] w-12 bg-neutral-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Summary */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 font-display">
            Education & Academic Track
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Rigorous undergraduate studies focusing on machine learning, statistical modeling, algorithm design, and modern artificial intelligence engineering.
          </p>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-neutral-400">Current Standing</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                Top Percentile
              </span>
            </div>
            <div className="text-4xl font-display font-light text-neutral-950">
              9.1 <span className="text-sm text-neutral-500 font-mono">/ 10 CGPA</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Consistently demonstrated academic excellence across foundational mathematics, programming theory, and applied AI labs.
            </p>
          </div>
        </div>

        {/* Right Column: Modern Education Timeline */}
        <div className="lg:col-span-7">
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-neutral-950 group-hover:scale-125 transition-transform duration-200 shadow-sm" />

                <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-card transition-all duration-300 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 text-white">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-medium text-neutral-950">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-medium text-neutral-600 mt-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-neutral-700" />
                      <span>{edu.degree}</span>
                    </div>
                    <div className="text-xs text-neutral-400 font-mono mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {edu.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                      Key Highlights & Coursework
                    </span>
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

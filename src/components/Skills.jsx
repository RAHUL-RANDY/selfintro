import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Wrench, 
  Sparkles, 
  Terminal, 
  CheckCircle, 
  Layers,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    programming: Terminal,
    datascience: Database,
    web: Globe,
    tools: Wrench,
    specialized: Sparkles,
  };

  const filteredCategories = activeCategory === 'all'
    ? skillsData.categories
    : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">02 / Competencies</span>
            <span className="h-[1px] w-12 bg-neutral-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 font-display">
            Technical Stack & Expertise
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2 max-w-xl">
            A comprehensive foundation in AI engineering, algorithmic logic, and full-stack software development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100/90 rounded-2xl border border-neutral-200/80 max-w-fit">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            All Areas
          </button>
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-card hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-neutral-950 text-base font-display">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {category.skills.length} competencies
                    </span>
                  </div>

                  <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-neutral-50/80 hover:bg-neutral-100/90 border border-neutral-100 transition-colors duration-200 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                          <span className="text-xs sm:text-[13px] font-medium text-neutral-900">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-500 bg-white px-2 py-0.5 rounded-md border border-neutral-200/60">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>CIT AI & DS</span>
                  <span className="text-emerald-700 font-medium">Verified Academic / Project</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

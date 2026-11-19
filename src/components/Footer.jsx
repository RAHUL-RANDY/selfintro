import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200/80 py-16 px-4 sm:px-6 lg:px-12 text-neutral-600">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm tracking-tight">
              R
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-950 font-display">
                {personalInfo.name}
              </div>
              <div className="text-xs text-neutral-400 font-mono">
                {personalInfo.role} • Chennai, India
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Academic & Tech Roles</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors duration-200"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Row: Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-neutral-500">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#about" className="hover:text-neutral-950 transition-colors">About</a>
            <a href="#skills" className="hover:text-neutral-950 transition-colors">Technical Skills</a>
            <a href="#projects" className="hover:text-neutral-950 transition-colors">Featured Projects</a>
            <a href="#education" className="hover:text-neutral-950 transition-colors">Education & Academics</a>
            <a href="#certifications" className="hover:text-neutral-950 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-neutral-950 transition-colors">Contact</a>
          </div>

          <div className="text-neutral-400 font-mono text-[11px]">
            CHENNAI INSTITUTE OF TECHNOLOGY
          </div>
        </div>

        {/* Bottom Row: Copyright & Editorial Note */}
        <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-mono">
          <div>
            © {new Date().getFullYear()} Rahul R. All rights reserved.
          </div>
          <div>
            Designed with Minimalist Editorial Typography & Precision.
          </div>
        </div>
      </div>
    </footer>
  );
}

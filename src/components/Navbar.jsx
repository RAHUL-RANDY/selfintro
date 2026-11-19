import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-12 py-3.5 sm:py-5 flex justify-center`}
      >
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'glass-nav rounded-full px-5 py-2.5 sm:px-7 sm:py-3'
              : 'bg-white/60 backdrop-blur-md rounded-full px-5 py-2.5 sm:px-7 sm:py-3 border border-neutral-200/50 shadow-sm'
          }`}
        >
          {/* Top-Left: Rahul R Logo & Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Rahul R Home"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:scale-105 transition-transform duration-200">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900 tracking-tight text-sm leading-none group-hover:text-neutral-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 font-mono uppercase mt-0.5">
                Portfolio
              </span>
            </div>
          </a>

          {/* Top-Center: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Top-Right: Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/80 transition-all duration-200 hover:scale-[1.02]"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-600" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </button>

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-neutral-950/20 backdrop-blur-sm animate-fade-in">
          <div className="fixed top-20 inset-x-4 bg-white rounded-3xl p-6 shadow-2xl border border-neutral-200 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">Navigation</span>
              <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for internships
              </span>
            </div>
            
            <div className="flex flex-col gap-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                <span>Contact Rahul</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

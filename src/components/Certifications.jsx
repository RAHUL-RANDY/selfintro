import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, ShieldCheck, Eye, X, Image as ImageIcon } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">05 / Credentials</span>
            <span className="h-[1px] w-12 bg-neutral-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 font-display">
            Certifications & Accreditations
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2 max-w-xl">
            Industry and developer-recognized certifications affirming programming rigor, database engineering, and prompt architecture.
          </p>
        </div>

        <div className="text-xs font-mono text-neutral-400">
          3 VERIFIED CREDENTIALS
        </div>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Visual Certificate Placeholder Container */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-200/60 p-6 flex flex-col justify-between border-b border-neutral-100 select-none group-hover:from-neutral-200/80 group-hover:to-neutral-100 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-white/90 text-neutral-800 shadow-xs border border-neutral-200">
                  {cert.badge}
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>

              {/* Certificate Motif Graphic */}
              <div className="my-auto text-center space-y-1">
                <div className="w-10 h-10 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-800">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-neutral-800 font-display">
                  {cert.title}
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  {cert.issuer}
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>{cert.credentialId}</span>
                <span>{cert.date}</span>
              </div>

              {/* Hover overlay button to preview */}
              <div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-white text-neutral-900 shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Certificate</span>
                </button>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-neutral-950 font-display">
                  {cert.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Verified Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-8 shadow-2xl border border-neutral-200 z-10 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-neutral-900" />
                  <span className="text-sm font-semibold text-neutral-900 font-display">
                    Certificate Document Placeholder
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Stylized Document Template */}
              <div className="border-4 border-double border-neutral-300 p-8 rounded-2xl bg-gradient-to-b from-[#fcfbf9] to-[#faf8f5] text-center space-y-4 shadow-inner">
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  {selectedCert.issuer}
                </div>
                <div className="text-xs font-serif italic text-neutral-400">
                  This certifies that
                </div>
                <div className="text-2xl font-display font-semibold text-neutral-950">
                  Rahul R
                </div>
                <div className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  has satisfactorily completed all rigorous requirements and assessments for
                </div>
                <div className="text-lg font-bold text-neutral-900 font-display bg-white/60 py-1 rounded-lg border border-neutral-200">
                  {selectedCert.title}
                </div>
                <div className="pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500 border-t border-neutral-200/60">
                  <span>ID: {selectedCert.credentialId}</span>
                  <span>Issued to: Rahul R (CIT Chennai)</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>To link your actual scanned PDF/PNG, replace asset in portfolio config.</span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-neutral-900 text-white rounded-full text-xs font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

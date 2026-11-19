import React, { useState, useRef } from 'react';
import { Camera, Upload, User, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PortraitPlaceholder({ className = "" }) {
  // Check if an uploaded or custom image exists in state or default path
  const [customImage, setCustomImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setImageError(false);
    }
  };

  return (
    <div className={`relative mx-auto flex flex-col items-center justify-center select-none ${className}`}>
      {/* Outer Container with soft shadow and mask */}
      <div className="relative w-full max-w-[420px] md:max-w-[480px] lg:max-w-[540px] aspect-[4/5] flex items-end justify-center overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-200/50 via-neutral-100/20 to-transparent rounded-3xl -z-10" />

        {/* If custom image loaded */}
        {customImage && !imageError ? (
          <img
            src={customImage}
            alt="Rahul R — AI & Data Science"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top portrait-fade-mask portrait-monochrome transition-all duration-700 hover:scale-[1.02]"
          />
        ) : (
          /* High-Fidelity Editorial Placeholder matching the Reference Style */
          <div className="relative w-full h-full flex flex-col items-center justify-end">
            
            {/* SVG Silhouette with editorial monochromatic shading */}
            <div className="w-full h-full flex items-end justify-center portrait-fade-mask">
              <svg
                viewBox="0 0 500 620"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-[92%] object-contain text-neutral-800 drop-shadow-xl"
              >
                {/* Subtle soft backdrop contour */}
                <ellipse cx="250" cy="230" rx="150" ry="170" fill="url(#silhouette-glow)" />

                {/* Torso & Shoulders Suit Jacket Contour */}
                <path
                  d="M100 620 L110 500 C120 440 160 410 200 395 L225 470 L250 495 L275 470 L300 395 C340 410 380 440 390 500 L400 620 Z"
                  fill="#27272a"
                />
                {/* Shirt Collar */}
                <path
                  d="M210 400 L250 480 L290 400 L268 375 L250 390 L232 375 Z"
                  fill="#f4f4f5"
                />
                <path
                  d="M225 470 L250 560 L275 470 Z"
                  fill="#e4e4e7"
                />

                {/* Neck */}
                <path
                  d="M220 330 C220 375 280 375 280 330 L280 300 L220 300 Z"
                  fill="#d4d4d8"
                />

                {/* Head / Face Silhouette */}
                <path
                  d="M190 220 C190 140 310 140 310 220 C310 280 290 325 250 335 C210 325 190 280 190 220 Z"
                  fill="#e4e4e7"
                />

                {/* Stylized Modern Glasses (Inspired by editorial reference) */}
                <circle cx="225" cy="210" r="28" stroke="#18181b" strokeWidth="6" fill="#f8fafc" fillOpacity="0.4" />
                <circle cx="275" cy="210" r="28" stroke="#18181b" strokeWidth="6" fill="#f8fafc" fillOpacity="0.4" />
                <path d="M253 210 L247 210" stroke="#18181b" strokeWidth="6" strokeLinecap="round" />
                <path d="M197 206 L182 200" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />
                <path d="M303 206 L318 200" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />

                {/* Textured Hair Geometry */}
                <path
                  d="M178 190 C175 140 200 95 250 95 C300 95 325 140 322 190 C310 160 295 150 250 150 C205 150 190 160 178 190 Z"
                  fill="#18181b"
                />
                <path
                  d="M195 125 C215 100 240 90 270 95 C250 110 230 115 195 125 Z"
                  fill="#3f3f46"
                />
                <path
                  d="M230 92 C255 82 285 90 300 110 C280 110 260 100 230 92 Z"
                  fill="#27272a"
                />

                {/* Gradients */}
                <defs>
                  <radialGradient id="silhouette-glow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                    <stop offset="0%" stopColor="#e4e4e7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#fafafa" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Inset Badge indicating original selfie placeholder */}
            <div className="absolute top-8 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-neutral-200/80 shadow-subtle flex items-center gap-2 text-xs font-medium text-neutral-800">
              <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
              <span>Rahul's Portrait Slot</span>
            </div>
          </div>
        )}

        {/* Bottom Fade Gradient Overlay for seamless background transition */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/80 to-transparent pointer-events-none" />
      </div>

      {/* Interactive Photo Upload / Switcher Tooltip */}
      <div className="mt-2 flex flex-col items-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-white hover:bg-neutral-50 rounded-full border border-neutral-200 shadow-sm transition-all duration-200"
          title="Click to preview your original portrait/selfie"
        >
          <Camera className="w-3.5 h-3.5 text-neutral-500 group-hover:text-black transition-colors" />
          <span>{customImage ? "Change Photo" : "Upload Rahul's Photo to Preview"}</span>
        </button>
        <p className="text-[11px] text-neutral-400 mt-1 tracking-wide">
          Drop selfie anytime or place as <code className="text-neutral-600 font-mono">public/rahul-portrait.jpg</code>
        </p>
      </div>
    </div>
  );
}

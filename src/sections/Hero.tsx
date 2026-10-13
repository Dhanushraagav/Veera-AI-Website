import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick: _onDownloadClick }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-[#080908]">
      {/* Subtle brand ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-[#087F5B]/[0.16] via-[#D4AF72]/[0.06] to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Content */}
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
          {/* Main Brand Headline with Animated Orbital Light Trails */}
          <div className="relative w-full flex items-center justify-center">
            {/* Animated Orbital Light Trails */}
            <svg
              className="absolute w-[125%] max-w-[860px] h-[210px] pointer-events-none -z-10"
              viewBox="0 0 860 210"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orbitCyanTeal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E5BE" stopOpacity="0.55" />
                  <stop offset="45%" stopColor="#087F5B" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#D4AF72" stopOpacity="0.45" />
                </linearGradient>
                <linearGradient id="orbitWarmAmber" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#D4AF72" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#00E5BE" stopOpacity="0.35" />
                </linearGradient>
                <filter id="glowCyan" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glowGold" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Primary Orbital Ellipse (Tilted -3 deg) */}
              <ellipse
                id="heroOrbit1"
                cx="430"
                cy="105"
                rx="400"
                ry="64"
                stroke="url(#orbitCyanTeal)"
                strokeWidth="1.2"
                strokeDasharray="8 12"
                opacity="0.35"
                transform="rotate(-3 430 105)"
              />

              {/* Secondary Counter-Orbital Ellipse (Tilted +3.5 deg) */}
              <ellipse
                id="heroOrbit2"
                cx="430"
                cy="105"
                rx="370"
                ry="72"
                stroke="url(#orbitWarmAmber)"
                strokeWidth="1"
                strokeDasharray="6 14"
                opacity="0.25"
                transform="rotate(3.5 430 105)"
              />

              {/* Orbital Light Trail Particles traveling on paths */}
              <circle r="3" fill="#00E5BE" filter="url(#glowCyan)">
                <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#heroOrbit1" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="#D4AF72" filter="url(#glowGold)">
                <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
                  <mpath href="#heroOrbit2" />
                </animateMotion>
              </circle>
            </svg>

            {/* VEERA AI Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center text-center"
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-semibold tracking-[0.06em] sm:tracking-[0.09em] leading-none select-none text-center uppercase">
                <span className="brand-gradient-text brand-glow inline-block text-center drop-shadow-sm">
                  {SITE_CONFIG.HEADLINE}
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Small, Elegant Tagline: "Your crush could never." */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-3 sm:pt-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-center">
              <span className="text-[#B4B7B0]">Your crush could </span>
              <span className="bg-gradient-to-r from-[#F7F5EF] via-[#00E5BE] to-[#D4AF72] bg-clip-text text-transparent font-semibold">
                never.
              </span>
            </p>
          </motion.div>

          {/* Primary CTA and Secondary Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-7 sm:pt-9"
          >
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl metallic-button font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-lg group cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#087F5B] transition-transform group-hover:-translate-y-0.5" />
              <span>{SITE_CONFIG.PRIMARY_CTA}</span>
              <span className="text-[11px] font-mono text-[#D4AF72] ml-1">
                ({SITE_CONFIG.INSTALLER_SIZE})
              </span>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#121512] hover:bg-[#191D19] border border-[#292D29] text-[#F7F5EF] text-sm font-medium transition-colors cursor-pointer"
            >
              <span>{SITE_CONFIG.SECONDARY_CTA}</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF72]" />
            </a>
          </motion.div>

          {/* Capability Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="pt-6 sm:pt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono"
          >
            {SITE_CONFIG.CAPABILITY_LABELS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#121512] border border-[#292D29] text-[#B4B7B0]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                <span className="text-[#F7F5EF] font-medium">{label}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

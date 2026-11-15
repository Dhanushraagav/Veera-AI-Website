import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, Shield, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { FunnyDramaticHeart } from "../components/FunnyDramaticHeart";
import { LiveHudStage } from "../components/LiveHudStage";

export const Hero: React.FC = () => {
  const fullText = "Veera AI";
  const [displayedText, setDisplayedText] = useState("");
  const [_isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timer: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        currentIndex++;
        setDisplayedText(fullText.slice(0, currentIndex));
        timer = setTimeout(typeNextChar, 220);
      } else {
        setIsTypingComplete(true);
        timer = setTimeout(() => {
          setIsTypingComplete(false);
          currentIndex = 0;
          setDisplayedText("");
          timer = setTimeout(typeNextChar, 450);
        }, 5500);
      }
    };

    timer = setTimeout(typeNextChar, 500);
    return () => clearTimeout(timer);
  }, []);

  const heroCapabilityPills = [
    "Hardware Cloaked (DWM Exclusion)",
    "Real-Time Question Detection",
    "Personal API Keys (BYOK)",
    "Global Hotkey (Ctrl + D)",
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#080908]">
      {/* Multi-hue subtle ambient background aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#00F5D4]/[0.14] via-[#8B5CF6]/[0.08] to-[#FF9F1C]/[0.06] blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Centered Hero Content */}
        <div className="text-center max-w-6xl w-full mx-auto flex flex-col items-center">
          {/* Release Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/40 text-xs font-mono text-[#00F5D4] mb-3 shadow-[0_0_15px_rgba(0,245,212,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
            <span className="tracking-wider uppercase">CYBERNETIC DESKTOP COPILOT // WIN 10/11 x64 // v{SITE_CONFIG.VERSION}</span>
          </motion.div>

          {/* Main Brand Headline with Dynamic Multi-Color Orbital Trails */}
          <div className="relative w-full flex items-center justify-center py-2 sm:py-4">
            {/* Luminous Multi-Color Energy Field */}
            <div className="absolute w-[680px] max-w-full h-[180px] bg-gradient-to-r from-[#00F5D4]/12 via-[#8B5CF6]/12 to-[#FF9F1C]/12 blur-[90px] pointer-events-none rounded-full -z-10" />

            {/* High-Visibility Animated Orbital Light Trails SVG */}
            <svg
              className="absolute w-[130%] max-w-[940px] h-[240px] pointer-events-none -z-10 overflow-visible"
              viewBox="0 0 940 240"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orbitMulti1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.85" />
                  <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0.8" />
                </linearGradient>

                <linearGradient id="orbitMulti2" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FF9F1C" stopOpacity="0.85" />
                  <stop offset="35%" stopColor="#EC4899" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#06D6A0" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.8" />
                </linearGradient>

                <filter id="superGlowCyan" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="blur1" />
                  <feGaussianBlur stdDeviation="2" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="superGlowGold" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="blur1" />
                  <feGaussianBlur stdDeviation="2" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Primary Orbital Ring (Tilted -4.5 deg) */}
              <ellipse
                id="heroOrbit1"
                cx="470"
                cy="120"
                rx="440"
                ry="74"
                stroke="url(#orbitMulti1)"
                strokeWidth="1.6"
                strokeDasharray="14 18"
                opacity="0.7"
                transform="rotate(-4.5 470 120)"
                className="orbit-trail-animated"
              />

              {/* Secondary Counter-Orbital Ring (Tilted +4 deg) */}
              <ellipse
                id="heroOrbit2"
                cx="470"
                cy="120"
                rx="410"
                ry="84"
                stroke="url(#orbitMulti2)"
                strokeWidth="1.5"
                strokeDasharray="10 16"
                opacity="0.6"
                transform="rotate(4 470 120)"
                className="orbit-trail-animated-reverse"
              />

              {/* Primary Cyan Comet Head & Trail (Motion along Orbit 1) */}
              <g filter="url(#superGlowCyan)">
                <circle r="5" fill="#00F5D4">
                  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#heroOrbit1" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="#FFFFFF">
                  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#heroOrbit1" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#3B82F6" opacity="0.6">
                  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" begin="-0.35s">
                    <mpath href="#heroOrbit1" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="#8B5CF6" opacity="0.35">
                  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" begin="-0.7s">
                    <mpath href="#heroOrbit1" />
                  </animateMotion>
                </circle>
              </g>

              {/* Secondary Amber/Rose Comet Head & Trail (Counter-Motion along Orbit 2) */}
              <g filter="url(#superGlowGold)">
                <circle r="5" fill="#FF9F1C">
                  <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
                    <mpath href="#heroOrbit2" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="#FFFFFF">
                  <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
                    <mpath href="#heroOrbit2" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#EC4899" opacity="0.6">
                  <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1" begin="-0.4s">
                    <mpath href="#heroOrbit2" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="#06D6A0" opacity="0.35">
                  <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1" begin="-0.8s">
                    <mpath href="#heroOrbit2" />
                  </animateMotion>
                </circle>
              </g>
            </svg>

            {/* VEERA AI Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center text-center relative z-10 py-1"
            >
              <h1
                style={{ fontFamily: "'Orbitron', 'Space Grotesk', sans-serif" }}
                className="relative inline-flex items-center justify-center text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] font-extrabold tracking-[-0.02em] leading-none select-none text-center whitespace-nowrap uppercase"
              >
                <span className="invisible opacity-0 pointer-events-none select-none inline-block whitespace-nowrap font-extrabold" aria-hidden="true">
                  {fullText}
                </span>

                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap">
                  <span className="brand-gradient-text inline-block text-center whitespace-nowrap font-extrabold drop-shadow-[0_0_35px_rgba(0,245,212,0.4)]">
                    {displayedText}
                  </span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Small, Elegant Tagline with dramatic heart */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-2 sm:pt-3"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-light sm:font-normal tracking-wide text-center flex items-center justify-center gap-1">
              <span className="tagline-spectrum font-normal inline-block text-center drop-shadow-sm">
                Your crush could never.
              </span>
              <FunnyDramaticHeart />
            </p>
          </motion.div>

          {/* High-Impact Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-4 max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#9aa39e] leading-relaxed">
              The stealth desktop assistant for technical interviews. Real-time speech transcription, instant algorithmic code synthesis, and hardware-level Stealth Mode that stays 100% invisible during Zoom, Teams, and Google Meet screen shares.
            </p>
          </motion.div>

          {/* 2050 Cyber CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-8 w-full max-w-xl mx-auto"
          >
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl cyber-btn-primary font-bold text-sm transition-all duration-200 active:scale-[0.98] shadow-xl group cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#040605] transition-transform group-hover:-translate-y-0.5" />
              <span>DOWNLOAD v{SITE_CONFIG.VERSION}</span>
              <span className="text-[11px] font-mono text-[#040605]/80 ml-1 px-1.5 py-0.5 rounded bg-black/10">
                {SITE_CONFIG.INSTALLER_SIZE}
              </span>
            </a>

            <a
              href="#stealth-mode"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl cyber-btn-secondary text-sm font-semibold transition-all cursor-pointer group"
            >
              <Shield className="w-4 h-4 text-[#00F5D4]" />
              <span>EXPERIENCE STEALTH MODE</span>
              <ChevronRight className="w-4 h-4 text-[#00F5D4] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Capability Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="pt-6 sm:pt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono"
          >
            {heroCapabilityPills.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0a0f0c] border border-[#00F5D4]/25 text-[11px] font-mono shadow-sm hover:border-[#00F5D4]/60 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
                <span className="text-[#F7F5EF] font-medium tracking-wide uppercase">{label}</span>
              </span>
            ))}
          </motion.div>

          {/* THE FLAGSHIP LIVE HUD STAGE SIMULATION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="w-full mt-12 sm:mt-16"
          >
            <div className="text-center mb-3 text-[11px] font-mono text-[#D4AF72] uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>Interactive Desktop HUD Preview</span>
            </div>
            <LiveHudStage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

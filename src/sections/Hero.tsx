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
        timer = setTimeout(typeNextChar, 180);
      } else {
        setIsTypingComplete(true);
        timer = setTimeout(() => {
          setIsTypingComplete(false);
          currentIndex = 0;
          setDisplayedText("");
          timer = setTimeout(typeNextChar, 350);
        }, 6000);
      }
    };

    timer = setTimeout(typeNextChar, 400);
    return () => clearTimeout(timer);
  }, []);

  const heroCapabilityPills = [
    "Hardware Cloaked (DWM Exclusion)",
    "Real-Time Question Detection",
    "Personal API Keys (BYOK)",
    "Global Hotkey (Ctrl + D)",
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-38 sm:pb-26 overflow-hidden bg-[#060907]">
      {/* Zero-Lag Hardware-Accelerated Ambient Glow */}
      <div className="absolute inset-0 hero-radial-glow pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid-2050 opacity-40 pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Centered Hero Content */}
        <div className="text-center max-w-6xl w-full mx-auto flex flex-col items-center">
          {/* Release Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="tracking-wider uppercase font-semibold">NATIVE WINDOWS 10 / 11 COPILOT &bull; v{SITE_CONFIG.VERSION}</span>
          </motion.div>

          {/* Main Brand Headline - Clean, High Visibility, Space Grotesk */}
          <div className="relative w-full flex items-center justify-center py-2 sm:py-3">
            {/* Subtle orbital ring accent without heavy filters */}
            <div className="absolute w-[600px] h-[120px] border border-white/[0.04] rounded-full -rotate-3 pointer-events-none -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center text-center relative z-10 py-1"
            >
              <h1 className="relative inline-flex items-center justify-center text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[10.5rem] font-bold tracking-tight leading-none select-none text-center whitespace-nowrap">
                <span className="invisible opacity-0 pointer-events-none select-none inline-block whitespace-nowrap font-bold" aria-hidden="true">
                  {fullText}
                </span>

                <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap">
                  <span className="brand-gradient-text inline-block text-center whitespace-nowrap font-bold">
                    {displayedText}
                  </span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="pt-2 sm:pt-3"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-wide text-center flex items-center justify-center gap-1.5 text-white">
              <span className="tagline-spectrum font-medium inline-block text-center">
                Your crush could never.
              </span>
              <FunnyDramaticHeart />
            </p>
          </motion.div>

          {/* High-Impact, High-Readability Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="pt-4 max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal">
              The stealth desktop assistant for technical interviews. Real-time speech transcription, instant algorithmic code synthesis, and hardware-level Stealth Mode that stays 100% invisible during Zoom, Teams, and Google Meet screen shares.
            </p>
          </motion.div>

          {/* Clean, High-Contrast Modern CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-8 w-full max-w-xl mx-auto"
          >
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl cyber-btn-primary font-bold text-sm transition-all duration-200 active:scale-[0.98] shadow-lg group cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#040605] transition-transform group-hover:-translate-y-0.5" />
              <span>Download Veera AI v{SITE_CONFIG.VERSION}</span>
              <span className="text-[11px] font-mono text-[#040605]/80 ml-1 px-1.5 py-0.5 rounded bg-black/10">
                {SITE_CONFIG.INSTALLER_SIZE}
              </span>
            </a>

            <a
              href="#stealth-mode"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl cyber-btn-secondary text-sm font-semibold transition-all cursor-pointer group"
            >
              <Shield className="w-4 h-4 text-[#00F5D4]" />
              <span>Experience Stealth Mode</span>
              <ChevronRight className="w-4 h-4 text-[#00F5D4] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* High-Readability Capability Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-6 sm:pt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-mono"
          >
            {heroCapabilityPills.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1410] border border-white/10 text-[11px] font-mono text-slate-300 hover:border-[#00F5D4]/40 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                <span className="font-medium tracking-wide">{label}</span>
              </span>
            ))}
          </motion.div>

          {/* THE FLAGSHIP LIVE HUD STAGE SIMULATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="w-full mt-12 sm:mt-14"
          >
            <div className="text-center mb-3 text-[11px] font-mono text-[#D4AF72] uppercase tracking-wider flex items-center justify-center gap-1.5 font-semibold">
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

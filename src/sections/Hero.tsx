import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick: _onDownloadClick }) => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#080908]">
      {/* Subtle brand ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-[#087F5B]/[0.14] via-[#D4AF72]/[0.05] to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Content */}
        <div className="text-center max-w-5xl mx-auto space-y-6 flex flex-col items-center">
          {/* Small Label & Brand Emblem */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] animate-pulse" />
            <span className="font-semibold tracking-wider">{SITE_CONFIG.SITE_NAME}</span>
            <span className="text-[#292D29]">&bull;</span>
            <span className="text-[#B4B7B0]">{SITE_CONFIG.SMALL_LABEL}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="w-full flex justify-center text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F7F5EF] leading-[1.08] text-center max-w-full">
              <span className="bg-gradient-to-r from-[#F7F5EF] via-[#F7F5EF] to-[#D4AF72] bg-clip-text text-transparent inline-block text-center">
                {SITE_CONFIG.HEADLINE}
              </span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl font-normal text-[#B4B7B0] max-w-2xl mx-auto leading-relaxed pt-1"
          >
            {SITE_CONFIG.SUPPORTING_TEXT}
          </motion.p>

          {/* Primary CTA and Secondary Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4"
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono"
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

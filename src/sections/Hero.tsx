import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  ChevronRight, 
  Crop, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick: _onDownloadClick }) => {
  const [activeTab, setActiveTab] = useState<"aptitude" | "coding">("aptitude");

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#080908]">
      {/* Cinematic subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-[#087F5B]/[0.10] via-[#D4AF72]/[0.04] to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Hero Content */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
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

          {/* Main Headline: "See It. Solve It." */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F7F5EF] leading-[1.05] whitespace-nowrap">
              <span className="bg-gradient-to-r from-[#F7F5EF] via-[#F7F5EF] to-[#D4AF72] bg-clip-text text-transparent">
                {SITE_CONFIG.HEADLINE}
              </span>
            </h1>
          </motion.div>

          {/* Short Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-xl font-medium text-[#B4B7B0] max-w-xl mx-auto leading-relaxed"
          >
            {SITE_CONFIG.SUPPORTING_TEXT}
          </motion.p>

          {/* Download Button #2 (Hero) & Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl metallic-button font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-lg group cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#087F5B] transition-transform group-hover:-translate-y-0.5" />
              <span>{SITE_CONFIG.PRIMARY_CTA}</span>
              <span className="text-[11px] font-mono text-[#D4AF72] ml-1">
                ({SITE_CONFIG.INSTALLER_SIZE})
              </span>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#121512] hover:bg-[#191D19] border border-[#292D29] text-[#F7F5EF] text-sm font-medium transition-colors cursor-pointer"
            >
              <span>{SITE_CONFIG.SECONDARY_CTA}</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF72]" />
            </a>
          </motion.div>

          {/* Exactly 3 Compact Capability Labels (No Paragraphs) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono"
          >
            {SITE_CONFIG.CAPABILITY_LABELS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121512] border border-[#292D29] text-[#B4B7B0]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                <span className="text-[#F7F5EF] font-medium">{label}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Impressive Product Visual & Realistic Desktop Application Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-4xl mx-auto rounded-2xl glass-panel-elevated border border-[#292D29] shadow-2xl overflow-hidden"
        >
          {/* Mockup Title Bar */}
          <div className="px-4 py-3 bg-[#121512] border-b border-[#292D29] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#292D29]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#292D29]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#292D29]" />
              </div>
              <span className="text-[#F7F5EF] font-semibold text-xs ml-1.5">
                Veera AI Desktop &mdash; Live Solver
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden sm:inline px-2 py-0.5 rounded bg-black/40 border border-[#292D29] text-[11px] text-[#B4B7B0]">
                Toggle: <strong className="text-white">Ctrl + D</strong>
              </span>

              {/* Mode switch tabs */}
              <div className="flex items-center p-0.5 rounded-lg bg-black/50 border border-[#292D29]">
                <button
                  onClick={() => setActiveTab("aptitude")}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                    activeTab === "aptitude"
                      ? "bg-[#191D19] text-[#D4AF72] border border-[#D4AF72]/20"
                      : "text-[#B4B7B0] hover:text-white"
                  }`}
                >
                  Aptitude MCQ
                </button>
                <button
                  onClick={() => setActiveTab("coding")}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                    activeTab === "coding"
                      ? "bg-[#191D19] text-[#D4AF72] border border-[#D4AF72]/20"
                      : "text-[#B4B7B0] hover:text-white"
                  }`}
                >
                  Code Solution
                </button>
              </div>
            </div>
          </div>

          {/* Workflow Indicator Bar: Capture -> Analyze -> Solve */}
          <div className="px-5 py-2.5 bg-[#121512]/60 border-b border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#087F5B] animate-pulse" />
              <span className="text-zinc-300">Pipeline:</span>
              <span className="text-white">Screenshot Image</span>
              <span className="text-[#292D29]">&rarr;</span>
              <span className="text-[#D4AF72]">Vision AI</span>
              <span className="text-[#292D29]">&rarr;</span>
              <span className="text-[#087F5B] font-semibold">Structured Solution</span>
            </div>
            <span className="text-xs text-[#087F5B] font-semibold hidden md:inline">
              Model: Gemini 2.5 Flash
            </span>
          </div>

          {/* Mockup Workspace */}
          <div className="p-5 sm:p-7 space-y-4 bg-[#080908]/95">
            <AnimatePresence mode="wait">
              {activeTab === "aptitude" ? (
                <motion.div
                  key="aptitude-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Problem Statement Card */}
                  <div className="p-4 rounded-xl bg-[#121512] border border-[#292D29] space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#D4AF72] font-semibold flex items-center gap-1.5">
                        <Crop className="w-3.5 h-3.5 text-[#087F5B]" />
                        <span>CAPTURED QUESTION AREA</span>
                      </span>
                      <span className="text-[11px] text-[#B4B7B0]">Quantitative Reasoning</span>
                    </div>

                    <p className="text-sm sm:text-base text-[#F7F5EF] font-medium leading-snug">
                      &ldquo;A train running at 54 km/h crosses a 250m long platform in 30 seconds. What is the length of the train?&rdquo;
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                      <div className="p-2 rounded bg-black/40 border border-[#292D29] text-[#B4B7B0]">A) 150 m</div>
                      <div className="p-2 rounded bg-[#087F5B]/20 border border-[#087F5B]/50 text-white font-semibold">B) 200 m (Correct)</div>
                      <div className="p-2 rounded bg-black/40 border border-[#292D29] text-[#B4B7B0]">C) 220 m</div>
                      <div className="p-2 rounded bg-black/40 border border-[#292D29] text-[#B4B7B0]">D) 250 m</div>
                    </div>
                  </div>

                  {/* Structured Solution Card */}
                  <div className="p-4 rounded-xl bg-[#121512] border border-[#087F5B]/30 space-y-2.5 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#D4AF72] font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF72]" />
                        <span>STRUCTURED SOLUTION</span>
                      </span>
                      <span className="text-[#087F5B] font-semibold">Answer: Option B (200 meters)</span>
                    </div>

                    <div className="p-2.5 rounded bg-black/50 border border-[#292D29] text-[#B4B7B0] space-y-1">
                      <div><span className="text-white">1. Convert Speed:</span> 54 &times; (5 / 18) = 15 m/s</div>
                      <div><span className="text-white">2. Total Distance:</span> 15 m/s &times; 30 s = 450 meters</div>
                      <div><span className="text-white">3. Train Length:</span> 450 m &minus; 250 m (platform) = <strong className="text-[#087F5B]">200 meters</strong></div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="coding-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Coding Statement Card */}
                  <div className="p-4 rounded-xl bg-[#121512] border border-[#292D29] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#D4AF72] font-semibold flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-[#087F5B]" />
                        <span>CAPTURED CODE STATEMENT</span>
                      </span>
                      <span className="text-[11px] text-[#B4B7B0]">Array &bull; Hash Map</span>
                    </div>

                    <p className="text-sm text-[#F7F5EF] font-medium leading-snug">
                      &ldquo;Given an array of integers <code className="text-[#D4AF72]">nums</code> and an integer <code className="text-[#D4AF72]">target</code>, return indices of the two numbers that add up to target.&rdquo;
                    </p>
                  </div>

                  {/* Code Solution Card */}
                  <div className="p-4 rounded-xl bg-[#121512] border border-[#087F5B]/30 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#D4AF72] font-bold">Python 3 (Optimal Hash Map)</span>
                      <span className="text-[#087F5B]">Time: O(N) &bull; Space: O(N)</span>
                    </div>

                    <pre className="p-3 rounded bg-black/60 border border-[#292D29] text-[#B4B7B0] overflow-x-auto text-xs leading-relaxed">
{`def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

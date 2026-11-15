import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Code2,
  Sliders,
  Crop,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Lock,
  Globe2,
  Brain,
} from "lucide-react";

export const Features: React.FC = () => {
  const [activeTanglishExample, setActiveTanglishExample] = useState<number>(0);
  const [autoAnswerActive, setAutoAnswerActive] = useState<boolean>(false);
  const [screenshotScanning, setScreenshotScanning] = useState<boolean>(true);
  const [activeAnswerTab, setActiveAnswerTab] = useState<"aptitude" | "star">("aptitude");

  const tanglishExamples = [
    {
      spoken: "Idhula array-va sort panni binary search use panna mudiyuma?",
      extracted: "Can we apply sorting followed by binary search on this array?",
    },
    {
      spoken: "Space complexity minimize panna in-place approach irukka?",
      extracted: "Is there an in-place approach to minimize space complexity to O(1)?",
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#1a241f] bg-[#060907]">
      {/* Zero-Lag Hardware-Accelerated Ambient Glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4]">
            <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase font-semibold">CORE CAPABILITIES &bull; NATIVE SUBSYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Engineered for high-stakes interviews.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Every subsystem in Veera AI is grounded in native desktop execution &mdash; from live Tanglish speech understanding to visual screenshot solving and direct-to-provider key ownership.
          </p>
        </div>

        {/* 6 Perfectly Equal-Aligned Feature Bento Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          {/* CARD 01: Live Audio & Tanglish Intent Engine */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3 }}
            className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 group relative overflow-hidden h-full"
          >
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
                  <Mic className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-bold">
                  // SUBSYS-01
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1 font-semibold">
                  Speech &amp; Multilingual Intent
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00F5D4] transition-colors">
                  Live Audio &amp; Tanglish Detection
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Continuous real-time speech transcription. Verified for English and Tamil colloquial code-switching (Tanglish), extracting intent rather than literal translation.
                </p>
              </div>

              {/* Interactive Tanglish Intent Box */}
              <div className="p-3.5 rounded-xl bg-[#090e0b] border border-white/10 space-y-2.5 min-h-[145px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#D4AF72] flex items-center gap-1 font-semibold text-[10px]">
                    <Globe2 className="w-3 h-3 text-[#00F5D4]" />
                    Tanglish Extraction:
                  </span>
                  <div className="flex gap-1">
                    {tanglishExamples.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTanglishExample(i)}
                        className={`px-2 py-0.5 rounded text-[9px] cursor-pointer transition-all ${
                          activeTanglishExample === i
                            ? "bg-[#00F5D4]/20 text-[#00F5D4] border border-[#00F5D4]/40 font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Sample {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTanglishExample}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-1.5 text-xs font-mono"
                  >
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-[9px] text-slate-400 uppercase block font-semibold">Spoken Input:</span>
                      <p className="text-amber-200 text-[11px] leading-snug">"{tanglishExamples[activeTanglishExample].spoken}"</p>
                    </div>

                    <div className="p-2 rounded bg-[#0d1612] border border-[#00F5D4]/30">
                      <span className="text-[9px] text-[#00F5D4] uppercase block font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Isolated Technical Intent:
                      </span>
                      <p className="text-white text-[11px] leading-snug">{tanglishExamples[activeTanglishExample].extracted}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bullet highlights */}
              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Sub-300ms question boundary isolation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Noise-resilient Tamil &amp; Tanglish parsing</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>WHISPER PIPELINE</span>
              <span className="text-[#00F5D4] font-semibold">VERIFIED</span>
            </div>
          </motion.div>

          {/* CARD 02: Screenshot & MCQ Problem Solver */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 group relative overflow-hidden h-full"
          >
            <div className="cyber-reticle cyber-reticle-gold-tl" />
            <div className="cyber-reticle cyber-reticle-gold-br" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72]">
                  <Crop className="w-5 h-5 text-[#D4AF72]" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#D4AF72]/10 border border-[#D4AF72]/30 text-[#D4AF72] font-bold">
                  // SUBSYS-02
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1 font-semibold">
                  Visual Problem Ingestion
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF72] transition-colors">
                  Screenshot &amp; MCQ Solver
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Instantly crop on-screen multiple-choice questions, complex geometry, system diagrams, or code snippets using active window cropping or clipboard import.
                </p>
              </div>

              {/* Interactive Laser Scanning Simulation Box */}
              <div
                onClick={() => setScreenshotScanning(!screenshotScanning)}
                className="p-3.5 rounded-xl bg-[#090e0b] border border-white/10 relative overflow-hidden cursor-pointer group/scanner select-none min-h-[145px] flex flex-col justify-between"
                title="Click to trigger OCR scan animation"
              >
                <div className="space-y-1.5 font-mono text-[10px] text-slate-400">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Active Crop [1024x768]</span>
                    <span className="text-[#00F5D4] text-[9px] font-bold">// CLICK TO RESCAN</span>
                  </div>
                  <p className="text-white font-semibold text-[11px]">Q: Which data structure guarantees O(1) amortized insertion?</p>
                  <div className="space-y-0.5 text-slate-300 text-[10px]">
                    <div>A) Binary Search Tree</div>
                    <div className="text-[#00F5D4] font-bold">✓ B) Hash Table (Dynamic Array Bucket)</div>
                    <div>C) Skip List</div>
                  </div>
                </div>

                {screenshotScanning && (
                  <motion.div
                    animate={{ y: [0, 85, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent shadow-[0_0_12px_#00F5D4]"
                  />
                )}
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Active window crop &amp; clipboard paste</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Geometry, diagram &amp; MCQ analysis</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>VISION OCR ENGINE</span>
              <span className="text-[#D4AF72] font-semibold">INSTANT</span>
            </div>
          </motion.div>

          {/* CARD 03: Manual & Automated Session Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 group relative overflow-hidden h-full"
          >
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
                  <Sliders className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-bold">
                  // SUBSYS-03
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1 font-semibold">
                  Operator Control Matrix
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00F5D4] transition-colors">
                  Manual &amp; Automated Triggers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Maintain total discretion with the "Answer Now" manual trigger, hands-free auto-answers, and the global hotkey (Ctrl + D) to cloak or reveal in &lt;16ms.
                </p>
              </div>

              {/* Interactive Mode Toggle Box */}
              <div className="p-3.5 rounded-xl bg-[#090e0b] border border-white/10 space-y-2.5 font-mono text-xs min-h-[145px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[10px]">Auto Answer Mode:</span>
                  <button
                    onClick={() => setAutoAnswerActive(!autoAnswerActive)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                      autoAnswerActive
                        ? "bg-[#00F5D4] text-black shadow-md shadow-[#00F5D4]/20"
                        : "bg-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    {autoAnswerActive ? "HANDS-FREE ON" : "MANUAL TRIGGER"}
                  </button>
                </div>

                <div className="p-2 rounded bg-black/40 border border-white/5 space-y-1">
                  <span className="text-slate-400 text-[9px] uppercase block">Response Triggering:</span>
                  <span className="text-white text-[11px] font-semibold">
                    {autoAnswerActive ? "Automated upon 1.2s silence" : "On-demand via manual button / key"}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <span className="text-slate-400 text-[10px]">Global Stealth Key:</span>
                  <kbd className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[#00F5D4] font-bold text-[10px]">
                    Ctrl + D
                  </kbd>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Manual "Answer Now" discretion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Instant wipe with Clear Session</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SESSION STEALTH</span>
              <span className="text-[#00F5D4] font-semibold">16MS SWITCH</span>
            </div>
          </motion.div>

          {/* CARD 04: Algorithmic Depth & Big-O Benchmarks */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 group relative overflow-hidden h-full"
          >
            <div className="cyber-reticle cyber-reticle-gold-tl" />
            <div className="cyber-reticle cyber-reticle-gold-br" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72]">
                  <Code2 className="w-5 h-5 text-[#D4AF72]" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#D4AF72]/10 border border-[#D4AF72]/30 text-[#D4AF72] font-bold">
                  // SUBSYS-04
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1 font-semibold">
                  Algorithms &amp; Production Code
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF72] transition-colors">
                  Algorithmic Depth &amp; Big-O
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Synthesizes clean, production-grade code for algorithmic challenges with explicit Big-O time and space complexity benchmarks, trade-off notes, and edge-case handling.
                </p>
              </div>

              {/* Code Complexity Card */}
              <div className="p-3.5 rounded-xl bg-[#090e0b] border border-white/10 space-y-2 font-mono text-[11px] min-h-[145px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#00F5D4]">
                  <span className="text-[10px] uppercase font-bold tracking-wider">// COMPLEXITY BENCHMARKS</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#00F5D4]/15 border border-[#00F5D4]/40 font-bold text-[#00F5D4]">
                    OPTIMAL O(1)
                  </span>
                </div>
                <div className="space-y-1.5 text-slate-300 text-[10px]">
                  <div>Time Complexity: <strong className="text-[#00F5D4]">O(N log K)</strong> with Min-Heap</div>
                  <div>Space Complexity: <strong className="text-[#D4AF72]">O(K)</strong> aux memory</div>
                  <div className="text-[9px] text-slate-400 pt-1 border-t border-white/5">
                    Constraint: Handles K elements without buffering entire N dataset.
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Python, TS, Java, C++, Go, Rust</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Edge cases &amp; constraint coverage</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>BIG-O OPTIMIZER</span>
              <span className="text-[#D4AF72] font-semibold">VERIFIED</span>
            </div>
          </motion.div>

          {/* CARD 05: Intelligent Answer Generation & STAR Framework */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 group relative overflow-hidden h-full"
          >
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
                  <Brain className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-bold">
                  // SUBSYS-05
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1 font-semibold">
                  Reasoning &amp; Formatting
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00F5D4] transition-colors">
                  Intelligent Answer-First Clarity
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Immediate answer-first conclusions for quantitative aptitude, deep architectural explanations for system design, and role-adapted STAR breakdowns for behavioral prompts.
                </p>
              </div>

              {/* Interactive STAR / Aptitude Tab View */}
              <div className="p-3.5 rounded-xl bg-[#090e0b] border border-white/10 space-y-2 font-mono text-xs min-h-[145px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[10px]">
                  <span className="text-slate-400 uppercase tracking-wider">// FRAMEWORK:</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveAnswerTab("aptitude")}
                      className={`px-2 py-0.5 rounded text-[9px] cursor-pointer ${
                        activeAnswerTab === "aptitude" ? "bg-[#00F5D4]/20 text-[#00F5D4] font-bold border border-[#00F5D4]/40" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Aptitude
                    </button>
                    <button
                      onClick={() => setActiveAnswerTab("star")}
                      className={`px-2 py-0.5 rounded text-[9px] cursor-pointer ${
                        activeAnswerTab === "star" ? "bg-[#00F5D4]/20 text-[#00F5D4] font-bold border border-[#00F5D4]/40" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      STAR Matrix
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 leading-snug">
                  {activeAnswerTab === "aptitude" ? (
                    <div className="space-y-1">
                      <div className="text-[#00F5D4] font-bold text-[10px]">Direct Conclusion First:</div>
                      <p className="text-white text-[11px]">Option B (72 hours). Formula: Total Work / Net Rate = 144 / 2.</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="text-[#D4AF72] font-bold text-[10px]">Situation &rarr; Task &rarr; Action &rarr; Result:</div>
                      <p className="text-white text-[11px]">Led queue refactor, reduced p99 latency by 91% under peak load.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Immediate answer-first clarity</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Structured STAR behavioral responses</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>REASONING ADAPTER</span>
              <span className="text-[#00F5D4] font-semibold">ROLE ADAPTED</span>
            </div>
          </motion.div>

          {/* CARD 06: Personal Key Ownership (BYOK) & Local DPAPI Vault */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 group relative overflow-hidden h-full"
          >
            <div className="cyber-reticle cyber-reticle-gold-tl" />
            <div className="cyber-reticle cyber-reticle-gold-br" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72]">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF72]" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#D4AF72]/10 border border-[#D4AF72]/30 text-[#D4AF72] font-bold">
                  // SUBSYS-06
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1 font-semibold">
                  Security &amp; Key Privacy
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF72] transition-colors">
                  Personal Keys &amp; DPAPI Vault
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Your credentials stay strictly encrypted on your machine inside native Windows Credential Storage (DPAPI). All AI inferences originate directly from your PC to provider APIs with zero intermediate proxy servers.
                </p>
              </div>

              {/* DPAPI Security Badge Box */}
              <div className="p-3.5 rounded-xl bg-[#090e0b] border border-white/10 space-y-2 font-mono text-[10px] min-h-[145px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#00F5D4] font-bold">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Zero Relay Servers
                  </span>
                  <span className="text-slate-400">TLS 1.3 DIRECT</span>
                </div>
                <p className="text-slate-300 text-[10px] leading-relaxed">
                  Keys are encrypted locally with hardware-bound user certificates. Never logged, never forwarded to remote clouds.
                </p>
                <div className="pt-1 border-t border-white/5 text-[9px] text-[#D4AF72]">
                  Windows CryptProtectData API Enforced
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Windows DPAPI local encryption</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Volatile RAM memory (wiped on exit)</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>CLIENT ARCHITECTURE</span>
              <span className="text-[#D4AF72] font-semibold">100% PRIVATE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

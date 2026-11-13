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
  Zap,
} from "lucide-react";

export const Features: React.FC = () => {
  // Interactive state for features
  const [activeTanglishExample, setActiveTanglishExample] = useState<number>(0);
  const [autoAnswerActive, setAutoAnswerActive] = useState<boolean>(false);
  const [screenshotScanning, setScreenshotScanning] = useState<boolean>(true);

  const tanglishExamples = [
    {
      spoken: "Idhula array-va sort panni binary search use panna mudiyuma?",
      extracted: "Can we apply sorting followed by binary search on this array?",
      context: "Tanglish Code-Switching (Tamil + English)",
    },
    {
      spoken: "Space complexity minimize panna in-place approach irukka?",
      extracted: "Is there an in-place approach to minimize space complexity to O(1)?",
      context: "Colloquial Optimization Intent",
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#080908]">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[750px] h-[450px] bg-gradient-to-b from-[#00F5D4]/[0.06] via-[#D4AF72]/[0.04] to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>VERIFIED DESKTOP CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF] leading-tight">
            Engineered for high-stakes interviews.
          </h2>

          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed max-w-2xl mx-auto">
            Every feature in Veera AI is grounded in real desktop functionality &mdash; from live Tanglish speech understanding to visual screenshot solving and direct-to-provider key ownership.
          </p>
        </div>

        {/* 6 High-Impact Interactive Feature Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 1. FEATURE 1: Live Audio & Tanglish Intent Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 lg:col-span-2 p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#00F5D4]/40 transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
          >
            {/* Top sheen */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#00F5D4] group-hover:bg-[#087F5B]/20 group-hover:border-[#00F5D4]/40 transition-all">
                    <Mic className="w-5 h-5 text-[#00F5D4]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] px-2 py-0.5 rounded bg-white/[0.03] border border-[#292D29]">
                    Speech &amp; Multilingual Intent
                  </span>
                </div>

                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#191D19] border border-[#292D29] text-[#D4AF72]">
                  01
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#F7F5EF] group-hover:text-white transition-colors">
                  Live Audio &amp; Multilingual Tanglish Intent Detection
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed mt-1.5">
                  Continuous real-time speech transcription with automated question boundary detection. Verified for English and Tamil colloquial code-switching (Tanglish), extracting the interviewer’s actual intent rather than literal verbatim translation.
                </p>
              </div>

              {/* Interactive Tanglish Intent Demonstration Box */}
              <div className="p-4 rounded-xl bg-[#090b09] border border-[#292D29] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#D4AF72] flex items-center gap-1.5 font-semibold">
                    <Globe2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                    Interactive Intent Isolation Demo:
                  </span>
                  <div className="flex gap-1">
                    {tanglishExamples.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTanglishExample(i)}
                        className={`px-2 py-0.5 rounded text-[10px] cursor-pointer transition-all ${
                          activeTanglishExample === i
                            ? "bg-[#087F5B]/30 text-[#00F5D4] border border-[#00F5D4]/40"
                            : "text-[#B4B7B0] hover:text-white"
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
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-xs font-mono"
                  >
                    <div className="p-2.5 rounded-lg bg-[#141814] border border-white/5 space-y-1">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Raw Audio Input:</span>
                      <p className="text-amber-200/90 font-medium">"{tanglishExamples[activeTanglishExample].spoken}"</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0e1610] border border-[#087F5B]/30 space-y-1">
                      <span className="text-[10px] text-[#00F5D4] uppercase tracking-wider block font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Isolated Technical Intent:
                      </span>
                      <p className="text-[#F7F5EF] font-medium">{tanglishExamples[activeTanglishExample].extracted}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#292D29]/60 text-xs text-zinc-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Tamil &amp; English Code-Switching</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Noise-Resilient Boundary Isolation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Sub-300ms Intent Dispatch</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
              <span>WHISPER &amp; GROQ INTENT PIPELINE</span>
              <span className="text-[#00F5D4] font-semibold">VERIFIED</span>
            </div>
          </motion.div>

          {/* 2. FEATURE 2: Screenshot Problem Solving */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#D4AF72]/40 transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#D4AF72] group-hover:bg-[#D4AF72]/15 group-hover:border-[#D4AF72]/40 transition-all">
                  <Crop className="w-5 h-5 text-[#D4AF72]" />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#191D19] border border-[#292D29] text-[#D4AF72]">
                  02
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1">
                  Visual Problem Ingestion
                </span>
                <h3 className="text-lg font-semibold text-[#F7F5EF] group-hover:text-white transition-colors">
                  Screenshot &amp; MCQ Solver
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed mt-1">
                  Instantly crop on-screen multiple-choice questions, complex geometry, system diagrams, or LeetCode snippets using active window cropping or clipboard import.
                </p>
              </div>

              {/* Interactive Laser Scanning Simulation Box */}
              <div
                onClick={() => setScreenshotScanning(!screenshotScanning)}
                className="p-3 rounded-xl bg-[#090b09] border border-[#292D29] relative overflow-hidden cursor-pointer group/scanner select-none"
                title="Click to trigger OCR scan animation"
              >
                {/* Simulated LeetCode MCQ snippet */}
                <div className="space-y-1.5 font-mono text-[10px] text-zinc-400">
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>Active Crop: [1024x768]</span>
                    <span className="text-[#00F5D4]">Click to Rescan</span>
                  </div>
                  <p className="text-white font-semibold">Q: Which data structure guarantees O(1) amortized insertion?</p>
                  <div className="space-y-0.5 text-zinc-300">
                    <div>A) Binary Search Tree</div>
                    <div className="text-[#00F5D4] font-bold">✓ B) Hash Table (Dynamic Array Bucket)</div>
                    <div>C) Skip List</div>
                  </div>
                </div>

                {/* Animated Scanning Laser Line */}
                {screenshotScanning && (
                  <motion.div
                    animate={{ y: [0, 80, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent shadow-[0_0_12px_#00F5D4]"
                  />
                )}
              </div>

              <div className="pt-2 space-y-1.5 border-t border-[#292D29]/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Window Crop &amp; Clipboard Paste</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Visual Geometry &amp; Diagram Extraction</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
              <span>VISION OCR OCR-4O</span>
              <span className="text-[#D4AF72] font-semibold">INSTANT</span>
            </div>
          </motion.div>

          {/* 3. FEATURE 3: Manual & Automated Session Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#00F5D4]/40 transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#00F5D4] group-hover:bg-[#087F5B]/20 group-hover:border-[#00F5D4]/40 transition-all">
                  <Sliders className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#191D19] border border-[#292D29] text-[#D4AF72]">
                  03
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1">
                  Operator Control Matrix
                </span>
                <h3 className="text-lg font-semibold text-[#F7F5EF] group-hover:text-white transition-colors">
                  Manual &amp; Automated Triggers
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed mt-1">
                  Maintain total discretion with the "Answer Now" manual trigger, hands-free auto-answers, and the global hotkey (Ctrl + D) to cloak or reveal in &lt;16ms.
                </p>
              </div>

              {/* Interactive Mode Toggle Simulation */}
              <div className="p-3 rounded-xl bg-[#090b09] border border-[#292D29] space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[11px]">Auto Answer Mode:</span>
                  <button
                    onClick={() => setAutoAnswerActive(!autoAnswerActive)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                      autoAnswerActive
                        ? "bg-[#087F5B] text-white shadow-md shadow-[#00F5D4]/20"
                        : "bg-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {autoAnswerActive ? "HANDS-FREE ON" : "MANUAL TRIGGER"}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-zinc-400 text-[11px]">Global Stealth Key:</span>
                  <kbd className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-white font-bold text-[10px]">
                    Ctrl + D
                  </kbd>
                </div>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-[#292D29]/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Manual "Answer Now" Trigger</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                  <span>Instant Clear Session &amp; Memory</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
              <span>SESSION STEALTH</span>
              <span className="text-[#00F5D4] font-semibold">16MS SWITCH</span>
            </div>
          </motion.div>

          {/* 4. FEATURE 4: Coding & Algorithmic Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#D4AF72]/40 transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#D4AF72] group-hover:bg-[#D4AF72]/15 group-hover:border-[#D4AF72]/40 transition-all">
                  <Code2 className="w-5 h-5 text-[#D4AF72]" />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#191D19] border border-[#292D29] text-[#D4AF72]">
                  04
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1">
                  Algorithms &amp; Production Code
                </span>
                <h3 className="text-lg font-semibold text-[#F7F5EF] group-hover:text-white transition-colors">
                  Algorithmic Depth &amp; Big-O Benchmarks
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed mt-1">
                  Synthesizes clean, production-grade code for algorithmic challenges with explicit Big-O time and space complexity analysis, trade-off notes, and edge-case handling.
                </p>
              </div>

              {/* Code Complexity Card */}
              <div className="p-3 rounded-xl bg-[#090b09] border border-[#292D29] space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-[#00F5D4]">
                  <span>Complexity Benchmark</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                    OPTIMAL
                  </span>
                </div>
                <div className="space-y-1 text-zinc-300 text-[10px]">
                  <div>Time Complexity: <strong className="text-white">O(N log K)</strong> with Min-Heap</div>
                  <div>Space Complexity: <strong className="text-white">O(K)</strong> aux memory</div>
                </div>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-[#292D29]/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Python, TS, Java, C++, Go, Rust</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0" />
                  <span>Edge cases &amp; constraint coverage</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
              <span>BIG-O OPTIMIZER</span>
              <span className="text-[#D4AF72] font-semibold">VERIFIED</span>
            </div>
          </motion.div>

          {/* 5. FEATURE 5: Direct Client-to-API Privacy & Local DPAPI Vault */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#00F5D4]/40 transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#00F5D4] group-hover:bg-[#087F5B]/20 group-hover:border-[#00F5D4]/40 transition-all">
                    <ShieldCheck className="w-5 h-5 text-[#00F5D4]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] px-2 py-0.5 rounded bg-white/[0.03] border border-[#292D29]">
                    Security &amp; Key Privacy
                  </span>
                </div>

                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#191D19] border border-[#292D29] text-[#D4AF72]">
                  05
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#F7F5EF] group-hover:text-white transition-colors">
                  Personal Key Ownership (BYOK) &amp; Local Hardware Security
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed mt-1.5">
                  Your credentials stay strictly encrypted on your machine inside native Windows Credential Storage (DPAPI). All AI inferences originate directly from your PC to provider APIs with zero intermediate proxy servers.
                </p>
              </div>

              {/* Visual Privacy Comparison Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#090b09] border border-[#292D29] space-y-1">
                  <div className="text-[#00F5D4] font-bold flex items-center gap-1.5 text-[11px]">
                    <Lock className="w-3.5 h-3.5" />
                    Zero Relay Servers
                  </div>
                  <p className="text-[10px] text-zinc-400">Direct TLS 1.3 socket from your desktop to Groq / Anthropic / OpenAI.</p>
                </div>

                <div className="p-3 rounded-xl bg-[#090b09] border border-[#292D29] space-y-1">
                  <div className="text-[#D4AF72] font-bold flex items-center gap-1.5 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Windows DPAPI
                  </div>
                  <p className="text-[10px] text-zinc-400">Keys encrypted locally with hardware-bound user certificates.</p>
                </div>

                <div className="p-3 rounded-xl bg-[#090b09] border border-[#292D29] space-y-1">
                  <div className="text-[#00F5D4] font-bold flex items-center gap-1.5 text-[11px]">
                    <Zap className="w-3.5 h-3.5" />
                    Ephemeral Memory
                  </div>
                  <p className="text-[10px] text-zinc-400">Transcripts and captured pixels cleared immediately upon session exit.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
              <span>CLIENT-DIRECT ARCHITECTURE</span>
              <span className="text-[#00F5D4] font-semibold">100% PRIVATE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

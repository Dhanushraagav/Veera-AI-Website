import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  ChevronRight, 
  Sparkles, 
  Command, 
  Radio,
  Clock,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#080908]">
      {/* Subtle ambient mesh in emerald and champagne gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#087F5B]/[0.06] via-[#D4AF72]/[0.03] to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 subtle-grid opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top release badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full metallic-badge text-xs font-mono text-[#B4B7B0] backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#087F5B] animate-pulse" />
            <span className="text-[#F7F5EF] tracking-wider font-semibold">REAL-TIME INTERVIEW INTELLIGENCE</span>
            <span className="text-[#292D29]">/</span>
            <span className="text-[#D4AF72]">WINDOWS 10 + 11</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#F7F5EF] leading-[1.08] sm:leading-[1.04]">
              <span className="block text-[#F7F5EF] font-bold">Interview Smarter.</span>
              <span className="block font-extrabold tracking-tight bg-gradient-to-b from-[#F7F5EF] via-[#D4AF72] to-[#B89354] bg-clip-text text-transparent drop-shadow-sm">
                Respond Faster.
              </span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#B4B7B0] max-w-3xl mx-auto leading-snug">
              {SITE_CONFIG.SUPPORTING_HEADLINE}
            </p>
          </motion.div>

          {/* Small supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-[#B4B7B0] leading-relaxed font-normal max-w-2xl mx-auto"
          >
            {SITE_CONFIG.SUBHEADLINE}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl metallic-button font-semibold text-sm sm:text-base transition-all duration-200 active:scale-[0.98] group cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#087F5B] transition-transform group-hover:-translate-y-0.5" />
              <span>Download for Windows</span>
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl dark-button text-sm sm:text-base font-medium transition-all duration-200 hover:text-[#F7F5EF]"
            >
              <span>See How It Works</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF72]" />
            </a>
          </motion.div>

          {/* Version and installer meta */}
          <div className="text-[11px] font-mono text-[#B4B7B0] flex flex-wrap items-center justify-center gap-2 pt-0.5">
            <span>Version {SITE_CONFIG.VERSION}</span>
            <span>&bull;</span>
            <span>Windows 10/11</span>
            <span>&bull;</span>
            <span>64-bit</span>
            <span>&bull;</span>
            <span>{SITE_CONFIG.INSTALLER_SIZE}</span>
            <span>&bull;</span>
            <button
              onClick={onDownloadClick}
              className="underline text-[#D4AF72] hover:text-[#F7F5EF] transition-colors cursor-pointer"
            >
              Installer Details
            </button>
          </div>

          {/* Meta details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-[#B4B7B0] pt-1"
          >
            <div className="flex items-center gap-1.5">
              <Command className="w-3.5 h-3.5 text-[#D4AF72]" />
              <span>Ctrl + D Hotkey</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B]" />
              <span>Sub-300ms Inference</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF72]" />
              <span>Zero Cloud Logs</span>
            </div>
          </motion.div>
        </div>

        {/* Product Showcase Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl glass-panel-elevated overflow-hidden border border-[#292D29] shadow-2xl">
            {/* Window Title Bar */}
            <div className="px-4 py-3 bg-[#121512] border-b border-[#292D29] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#292D29] border border-[#3E433E]" />
                <div className="w-3 h-3 rounded-full bg-[#292D29] border border-[#3E433E]" />
                <div className="w-3 h-3 rounded-full bg-[#292D29] border border-[#3E433E]" />
                <span className="ml-2 text-xs font-mono text-[#B4B7B0]">
                  VEERA AI &bull; LIVE INTERVIEW COPILOT
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#B4B7B0]">
                <span className="flex h-2 w-2 rounded-full bg-[#087F5B] animate-pulse" />
                <span className="text-[#087F5B] font-semibold">STANDBY &bull; PERMITTED SESSION</span>
              </div>
            </div>

            {/* Application Mockup Layout */}
            <div className="grid grid-cols-12 bg-[#080908] min-h-[460px]">
              {/* Left Column: Context Setup & Candidate Anchoring */}
              <div className="col-span-12 lg:col-span-3 p-4 border-b lg:border-b-0 lg:border-r border-[#292D29] bg-[#121512]/60 space-y-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#D4AF72] uppercase tracking-wider font-semibold">Target Context</div>
                  <div className="text-xs font-bold text-[#F7F5EF]">Lead Systems Architect</div>
                  <div className="text-[11px] text-[#B4B7B0]">Distributed Infrastructure</div>
                </div>

                <div className="p-3 rounded-xl bg-[#191D19] border border-[#292D29] space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#B4B7B0]">
                    <span className="flex items-center gap-1 text-[#D4AF72]">
                      <Layers className="w-3 h-3" /> VERIFIED RESUME
                    </span>
                    <span className="text-[#087F5B] text-[10px]">INDEXED</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-[#F7F5EF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B] shrink-0" />
                      <span className="truncate">CrowdCity Distributed Engine</span>
                    </div>
                    <div className="text-[10px] text-[#B4B7B0] leading-snug">
                      Strict factual grounding. Zero invented claims or technologies.
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] font-mono text-[#B4B7B0] uppercase px-1">Active Discussion Topic</div>
                    <div className="p-2.5 rounded-lg bg-[#087F5B]/10 border border-[#087F5B]/25 text-[11px] text-[#A3E5CB]">
                      Kafka Partitions &amp; Low-Latency Consumer Lag
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#191D19] border border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
                  <span>Toggle Assistant</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#121512] text-[#F7F5EF] border border-[#292D29]">Ctrl + D</span>
                </div>
              </div>

              {/* Main Real-Time Copilot Stage */}
              <div className="col-span-12 lg:col-span-9 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-[#080908]">
                {/* 1. Live Audio Recognition Banner */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#121512] border border-[#292D29] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#087F5B]/15 border border-[#087F5B]/30 flex items-center justify-center text-[#087F5B] shrink-0">
                      <Radio className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-medium text-[#087F5B] tracking-wide">
                          LISTENING &bull; REAL-TIME TRANSCRIPTION
                        </span>
                        <span className="text-[10px] font-mono text-[#B4B7B0]">PERMITTED AUDIO</span>
                      </div>
                      <div className="text-xs text-[#B4B7B0] truncate max-w-lg mt-0.5">
                        "...and how did you prevent database lock contention when scaling your previous project CrowdCity?"
                      </div>
                    </div>
                  </div>

                  {/* Sound Wave Graphic */}
                  <div className="flex items-center gap-1 h-7 px-3 py-1 bg-[#191D19] rounded-lg shrink-0 border border-[#292D29]">
                    {[20, 40, 70, 90, 45, 95, 75, 40, 85, 65, 90, 50, 30].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="w-1 bg-[#087F5B] rounded-full animate-pulse"
                      />
                    ))}
                  </div>
                </div>

                {/* 2. Detected Question Box */}
                <div className="p-4 rounded-xl bg-[#121512] border border-[#087F5B]/25 relative">
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#B4B7B0] mb-2">
                    <span className="flex items-center gap-1.5 text-[#D4AF72] font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF72]" />
                      QUESTION DETECTED &bull; SYSTEM ARCHITECTURE
                    </span>
                    <span className="text-[10px] text-[#087F5B] font-mono">AUTOMATIC ISOLATION</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#F7F5EF] font-medium leading-relaxed">
                    "Explain how you designed your previous project, CrowdCity, and how you prevented database lock contention during concurrent write spikes."
                  </p>
                </div>

                {/* 3. Generated Answer Suggestion */}
                <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-b from-[#191D19] to-[#121512] border border-[#292D29] space-y-3.5 shadow-xl">
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#292D29]">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#087F5B]/15 text-[#A3E5CB] font-mono text-xs font-semibold border border-[#087F5B]/30">
                        ANSWER READY
                      </span>
                      <span className="text-xs text-[#B4B7B0]">Grounded in Candidate Resume</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#B4B7B0]">
                      <Clock className="w-3 h-3 text-[#087F5B]" />
                      <span className="text-[#087F5B]">Sub-second Latency</span>
                      <span className="text-[#292D29]">|</span>
                      <span className="text-[#D4AF72]">Groq LLaMA-3.3-70B</span>
                    </div>
                  </div>

                  {/* Direct Answer Formulation */}
                  <div className="text-xs sm:text-sm text-[#F7F5EF] font-medium leading-relaxed bg-[#121512]/80 p-3 rounded-lg border border-[#292D29]">
                    "In CrowdCity, I eliminated write contention by offloading incoming transaction bursts to Redis ring buffers and batching inserts asynchronously into PostgreSQL, dropping transaction lock waits by 92%."
                  </div>

                  {/* Talking points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="p-2.5 rounded-lg bg-[#080908] border border-[#292D29] space-y-1">
                      <div className="text-[10px] font-mono text-[#D4AF72] uppercase font-semibold">1. Architectural Choice</div>
                      <div className="text-xs text-[#B4B7B0] leading-snug">
                        Decoupled write paths using queue workers with optimistic concurrency controls.
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#080908] border border-[#292D29] space-y-1">
                      <div className="text-[10px] font-mono text-[#087F5B] uppercase font-semibold">2. Resume Grounding</div>
                      <div className="text-xs text-[#B4B7B0] leading-snug">
                        Sustained 45k operations/sec without deadlocks as verified on candidate profile.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#B4B7B0] pt-1 border-t border-[#292D29]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-[#087F5B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] animate-pulse" />
                      MICROPHONE STREAM READY
                    </span>
                    <span className="hidden sm:inline text-[#292D29]">&bull;</span>
                    <span className="hidden sm:inline">EPHEMERAL RUNTIME MEMORY ONLY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B4B7B0]">AI BACKEND:</span>
                    <span className="text-[#D4AF72]">GROQ LPU / GEMINI / OPENROUTER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

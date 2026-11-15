import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sliders,
  Mic,
  Brain,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";

interface WorkflowStepDetail {
  number: string;
  badge: string;
  title: string;
  summary: string;
  description: string;
  icon: React.ElementType;
  interactivePreview: {
    label: string;
    sublabel: string;
    metrics: string;
    tags: string[];
  };
}

const STEPS: WorkflowStepDetail[] = [
  {
    number: "01",
    badge: "INITIAL SETUP",
    title: "Configure & Initialize",
    summary: "Add your personal API credentials securely in desktop Settings and verify microphone readiness.",
    description: "Launch Veera AI on Windows, input your personal provider API keys (Groq, Anthropic, OpenAI, or Gemini), and customize your hotkey preferences. All keys are encrypted locally inside native Windows DPAPI storage.",
    icon: Sliders,
    interactivePreview: {
      label: "Desktop Settings & DPAPI Vault",
      sublabel: "Personal Keys Verified • Zero Relay Servers",
      metrics: "Local Encryption: AES-256 (DPAPI)",
      tags: ["Groq Llama 3.3", "Claude 3.5 Sonnet", "OpenAI GPT-4o"],
    },
  },
  {
    number: "02",
    badge: "REAL-TIME INGESTION",
    title: "Listen or Capture",
    summary: "Veera AI captures speech in real time with intent detection (English & Tamil) or crops question screenshots.",
    description: "Activate the session. The desktop engine captures spoken audio with sub-300ms question boundary detection, isolating interviewer intent even in mixed colloquial Tanglish. Or trigger instant screen-crop to ingest MCQs, LeetCode challenges, or architecture diagrams.",
    icon: Mic,
    interactivePreview: {
      label: "Dual Ingestion Pipeline",
      sublabel: "Live Audio (Mic/Loopback) + Window Screenshot Crop",
      metrics: "Boundary Detection: <250ms latency",
      tags: ["English Intent", "Tanglish Code-Switching", "Active Window Crop"],
    },
  },
  {
    number: "03",
    badge: "DECISIVE REASONING",
    title: "Solve & Review",
    summary: "View direct answer-first conclusions, optimal Big-O code, or structured STAR responses in your cloaked HUD.",
    description: "Review suggested solutions directly on your translucent HUD floating over your workspace. Solutions present direct conclusions first for aptitude, clean code with time/space complexity for algorithms, or structured STAR responses for behavioral questions.",
    icon: Brain,
    interactivePreview: {
      label: "Translucent HUD Window",
      sublabel: "Cloaked via Windows DWM Hardware Exclusion",
      metrics: "Generation: 210ms • Invisible on Zoom/Teams",
      tags: ["Answer-First Clarity", "Big-O Analysis", "Ctrl + D Panic Key"],
    },
  },
];

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#1a241f] bg-[#060907]">
      {/* Zero-Lag Hardware-Accelerated Ambient Glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4]">
            <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase font-semibold">AUTONOMOUS PIPELINE &bull; ZERO LATENCY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Configure. Intercept. Synthesize.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            From initial DPAPI vault encryption to live cloaked telemetry, Veera AI operates natively on your Windows PC with zero intermediate server latency.
          </p>
        </div>

        {/* Step Progression Bar */}
        <div className="w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto mb-12 hidden md:block">
          <div className="relative flex items-center justify-between">
            {/* Background connecting track */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#1a241f] -z-0" />

            {/* Active progress line */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#00F5D4] to-[#D4AF72] -z-0"
              initial={{ width: "0%" }}
              animate={{
                width: activeStepIndex === 0 ? "16%" : activeStepIndex === 1 ? "50%" : "84%",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            {STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center gap-2 group cursor-pointer z-10 focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[#142018] border-2 border-[#00F5D4] text-[#00F5D4] shadow-md scale-105"
                        : isPast
                        ? "bg-[#101712] border border-[#00F5D4]/40 text-[#D4AF72]"
                        : "bg-[#0c120e] border border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/20"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`text-xs font-mono transition-colors ${
                      isActive ? "text-white font-semibold" : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto mb-10">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStepIndex;
            return (
              <motion.div
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className={`cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between cursor-pointer relative group ${
                  isActive
                    ? "border-[#00F5D4] bg-[#0c1611]"
                    : "hover:border-[#00F5D4]/40"
                }`}
              >
                <div className="cyber-reticle cyber-reticle-tl" />
                <div className="cyber-reticle cyber-reticle-br" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-3xl font-extrabold transition-colors ${
                        isActive ? "text-[#00F5D4]" : "text-slate-500 group-hover:text-[#D4AF72]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#00F5D4]/20 border-[#00F5D4] text-[#00F5D4]"
                          : "bg-white/5 border-white/10 text-[#D4AF72] group-hover:border-[#00F5D4]/40"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1 font-semibold">
                    {step.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className={isActive ? "text-[#00F5D4] font-bold" : "text-slate-400"}>
                    {isActive ? "// ACTIVE CONDUIT" : `PHASE 0${idx + 1} OF 03`}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? "text-[#00F5D4] translate-x-1" : "text-slate-400 group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Interactive Step Inspector Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.number}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="cyber-card w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto p-6 sm:p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-tr" />
            <div className="cyber-reticle cyber-reticle-bl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Left Detail Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF72]">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    PHASE {activeStep.number}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[#00F5D4] font-semibold">{activeStep.badge}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {activeStep.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {activeStep.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {activeStep.interactivePreview.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#0e1410] border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Interactive Mock View */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#090e0b] border border-white/10 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                  <span className="text-[#D4AF72] font-semibold">{activeStep.interactivePreview.label}</span>
                  <span className="text-[#00F5D4] text-[10px] px-2 py-0.5 rounded bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-bold">
                    ACTIVE
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#0f1713] border border-white/5 space-y-2">
                  <div className="text-[11px] text-slate-200">
                    {activeStep.interactivePreview.sublabel}
                  </div>
                  <div className="text-[10px] text-[#00F5D4] font-bold">
                    ✓ {activeStep.interactivePreview.metrics}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                  <span>Native Windows 10/11 Architecture</span>
                  <span className="text-[#D4AF72]">Veera AI v3.0.1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
          <span>Audio processing, intent extraction, and window cloaking run locally on your desktop client.</span>
        </div>
      </div>
    </section>
  );
};

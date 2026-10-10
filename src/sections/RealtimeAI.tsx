import React from "react";
import { motion } from "framer-motion";
import { Radio, Sparkles, Zap, Clock, Shield } from "lucide-react";

export const RealtimeAI: React.FC = () => {
    return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <Zap className="w-3.5 h-3.5 text-zinc-300" />
            <span>INSTANTANEOUS INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Built for the moment the question is asked.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Interviews move fast. Veera AI transcribes speech as it happens, detects questions instantly, and generates answers without delay.
          </p>
        </div>

        {/* Real-Time Transcript Product Demo Visual Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel-elevated rounded-2xl overflow-hidden border border-white/12 shadow-2xl">
            {/* Top Bar with Demo Indicator */}
            <div className="bg-[#141416] px-5 py-3 border-b border-[#292D29] flex items-center justify-between text-xs font-mono select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-300 font-semibold">LIVE INTERVIEW TRANSCRIPTION STREAM</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-white/[0.05] border border-[#292D29] text-[10px] text-zinc-400 tracking-wider uppercase">
                PRODUCT DEMO VISUAL
              </span>
            </div>

            {/* Main Interactive Demo Stream */}
            <div className="p-6 sm:p-8 space-y-6 bg-[#0a0a0c]">
              {/* Interviewer Speech Block */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-[#191D19] border border-[#292D29] space-y-2 relative"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 uppercase font-semibold flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-[#087F5B]" />
                    INTERVIEWER (VOICE STREAM)
                  </span>
                  <span className="text-zinc-500">AUDIO INPUT READY</span>
                </div>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  "Can you explain how you designed the backend for your previous project, and how you handled high concurrent read traffic?"
                </p>
                <div className="text-[11px] font-mono text-zinc-500 pt-1">
                  Incremental speech recognized &bull; Question boundary isolated in real time
                </div>
              </motion.div>

              {/* Veera AI Question Detected & Generation Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-[#292D29] space-y-1">
                  <div className="text-[10px] font-mono text-[#087F5B] uppercase font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Question Detected
                  </div>
                  <div className="text-xs text-zinc-200">
                    Category: System Architecture &bull; Concurrency &bull; Database Design
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-[#292D29] space-y-1">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#087F5B]" />
                    AI Reasoning Status
                  </div>
                  <div className="text-xs text-emerald-300 font-mono">
                    Groq LPU Inference Active &bull; Answer Formulated
                  </div>
                </div>
              </div>

              {/* Veera AI Suggested Answer Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 sm:p-6 rounded-xl bg-gradient-to-b from-[#161619] to-[#0f0f11] border border-[#087F5B]/30 space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#292D29]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      VEERA AI &mdash; SUGGESTED ANSWER
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#087F5B]/10 text-[#087F5B] text-[10px] font-mono border border-[#087F5B]/25">
                      CANDIDATE TALKING POINTS
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Instantaneous formulation</span>
                  </div>
                </div>

                <div className="text-sm sm:text-base text-zinc-100 font-medium leading-relaxed bg-black/40 p-4 rounded-lg border border-white/[0.04]">
                  "On the backend, I used an asynchronous pipeline with Redis caching layers and PostgreSQL read replicas, decoupling write transactions from high read throughput to maintain sub-15ms latency."
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Architecture Rationale</div>
                    <div className="text-zinc-300">
                      Separated transaction paths using read replicas to eliminate database lock waits.
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Candidate Context Grounding</div>
                    <div className="text-zinc-300">
                      Directly referenced verified project metrics from uploaded resume profile.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Demo Banner */}
            <div className="bg-[#121512] px-6 py-3 border-t border-[#292D29] flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400 gap-2">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-zinc-400" />
                <span>Simulated interview prompt demo &bull; Not a real candidate recording</span>
              </div>
              <span className="text-zinc-300">Ctrl + D toggles assistant overlay</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

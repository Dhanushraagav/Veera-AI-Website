import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Mic, 
  HelpCircle, 
  Zap, 
  GitBranch, 
  ShieldCheck,
  Sparkles,
  Radio,
  Layers
} from "lucide-react";

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"grounding" | "audio" | "detection" | "generation" | "memory">("grounding");

  const tabs = [
    { id: "grounding", label: "Context Grounding", icon: FileText, desc: "Resume & Job Spec index" },
    { id: "audio", label: "Audio Stream", icon: Mic, desc: "Permitted live audio capture" },
    { id: "detection", label: "Question Detection", icon: HelpCircle, desc: "Instant query isolation" },
    { id: "generation", label: "Fast Generation", icon: Zap, desc: "Sub-300ms suggested answers" },
    { id: "memory", label: "Session Continuity", icon: GitBranch, desc: "Follow-up question context" },
  ] as const;

  return (
    <section id="product" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <span>REAL-TIME COPILOT ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Listen. Understand. Generate. Assist.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Engineered exclusively for interviews where AI assistance is permitted or disclosed. Built with zero deception mechanisms, sub-300ms inference, and strict resume grounding.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-5xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-white text-zinc-950 border-white shadow-md"
                    : "bg-white/[0.03] text-zinc-400 border-[#292D29] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-zinc-950" : "text-zinc-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panes */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "grounding" && (
              <motion.div
                key="grounding"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#121512] border border-[#292D29] space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292D29] gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Pre-Session Context Grounding</h3>
                    <p className="text-xs text-zinc-400">Anchor suggested answers strictly into your real profile before the interview starts.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#087F5B]/10 text-[#087F5B] border border-[#087F5B]/25 w-fit">
                    ZERO FABRICATION ENFORCED
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-[#292D29] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <FileText className="w-4 h-4 text-[#087F5B]" />
                      <span>CANDIDATE RESUME &amp; PROJECTS</span>
                    </div>
                    <div className="text-xs text-zinc-300 font-mono space-y-1.5 bg-black/40 p-3 rounded-lg border border-[#292D29]">
                      <div className="text-white font-medium">&bull; Tech Lead &bull; 6+ Years Exp</div>
                      <div className="text-zinc-400">&bull; Projects: CrowdCity (Distributed Graph Engine), NovaPay</div>
                      <div className="text-zinc-400">&bull; Stack: Go, Rust, PostgreSQL, Kafka, Redis, Kubernetes</div>
                      <div className="text-zinc-400">&bull; Scaled to 45k QPS with 99.99% availability</div>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      The AI strictly references these verified projects and never invents technologies or roles.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-[#292D29] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <Layers className="w-4 h-4 text-zinc-400" />
                      <span>TARGET JOB &amp; COMPANY SPEC</span>
                    </div>
                    <div className="text-xs text-zinc-300 font-mono space-y-1.5 bg-black/40 p-3 rounded-lg border border-[#292D29]">
                      <div className="text-white font-medium">&bull; Company: Stripe / Datadog</div>
                      <div className="text-zinc-400">&bull; Role: Senior Distributed Systems Engineer</div>
                      <div className="text-zinc-400">&bull; Type: Technical &amp; System Architecture Loop</div>
                      <div className="text-zinc-400">&bull; Level: Staff / L6 Expectations</div>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Answers are framed to meet the seniority and technical depth expected by the company.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-[#087F5B]/25 flex items-start gap-3 text-xs text-zinc-300">
                  <ShieldCheck className="w-5 h-5 text-[#087F5B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-300 block mb-0.5">Strict Factual Guarantee</span>
                    If an interviewer asks about a technology not listed in your resume, Veera AI will instruct you how to honestly frame related transferable skills rather than fabricating fake experience.
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "audio" && (
              <motion.div
                key="audio"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#121512] border border-[#292D29] space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292D29] gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Continuous Audio Stream &amp; Voice Detection</h3>
                    <p className="text-xs text-zinc-400">Processes permitted microphone or meeting audio in real time with incremental transcription.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#087F5B]/10 text-[#087F5B] border border-[#087F5B]/25 w-fit flex items-center gap-1.5">
                    <Radio className="w-3 h-3 animate-pulse" />
                    LIVE AUDIO STREAM
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-black/40 border border-[#292D29] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                      <Mic className="w-4 h-4 text-[#087F5B]" />
                      ACTIVE AUDIO CAPTURE (MEETING / MIC)
                    </span>
                    <span className="text-xs font-mono text-[#087F5B]">VOICE ACTIVITY: DETECTED</span>
                  </div>

                  {/* Sound Wave Graphic */}
                  <div className="flex items-center justify-center gap-1.5 h-14 px-4 bg-[#191D19] rounded-xl border border-[#292D29]">
                    {[20, 35, 60, 85, 45, 95, 75, 40, 90, 65, 80, 50, 70, 90, 40, 25, 55, 75, 30].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="w-1.5 bg-emerald-400 rounded-full transition-all duration-150"
                      />
                    ))}
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-[#292D29] space-y-1">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Incremental Transcription Stream</div>
                    <div className="text-xs sm:text-sm text-zinc-200 font-mono">
                      "Could you walk me through how you designed your previous project, CrowdCity, and how you handled high concurrent read loads?"
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-[#292D29]">
                    <span className="text-zinc-500 block text-[10px] font-mono mb-1">LATENCY</span>
                    <span className="text-white font-medium">Incremental &lt; 50ms</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-[#292D29]">
                    <span className="text-zinc-500 block text-[10px] font-mono mb-1">AUDIO PERSISTENCE</span>
                    <span className="text-[#087F5B] font-medium">None &bull; Never Saved to Disk</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-[#292D29]">
                    <span className="text-zinc-500 block text-[10px] font-mono mb-1">WINDOW TOGGLE</span>
                    <span className="text-white font-medium">Ctrl + D Quick HUD</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "detection" && (
              <motion.div
                key="detection"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#121512] border border-[#292D29] space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292D29] gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Incremental Question Detection</h3>
                    <p className="text-xs text-zinc-400">Isolates interview questions instantaneously without waiting for long conversation pauses.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800 text-zinc-300 border border-[#292D29] w-fit">
                    SEMANTIC INTENT PARSER
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[#292D29] space-y-1">
                    <span className="text-[10px] font-mono text-[#087F5B] font-semibold">TECHNICAL</span>
                    <div className="text-xs text-white font-medium">System Architecture</div>
                    <div className="text-[11px] text-zinc-400">Trade-offs, scaling, failure recovery</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[#292D29] space-y-1">
                    <span className="text-[10px] font-mono text-amber-400 font-semibold">CODING</span>
                    <div className="text-xs text-white font-medium">Algorithms &amp; DS</div>
                    <div className="text-[11px] text-zinc-400">Approach, complexity, syntax</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[#292D29] space-y-1">
                    <span className="text-[10px] font-mono text-[#D4AF72] font-semibold">BEHAVIORAL / HR</span>
                    <div className="text-xs text-white font-medium">Leadership &amp; Culture</div>
                    <div className="text-[11px] text-zinc-400">STAR method, natural phrasing</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#191D19] border border-[#087F5B]/25 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-[#087F5B]">
                      <Sparkles className="w-3.5 h-3.5" />
                      DETECTED INTERVIEW QUESTION
                    </span>
                    <span className="text-[10px] text-zinc-500">CONFIDENCE: 98%</span>
                  </div>
                  <div className="text-sm sm:text-base text-zinc-100 font-medium">
                    "Explain how you designed your previous project, CrowdCity, and how you prevented database lock contention."
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "generation" && (
              <motion.div
                key="generation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#121512] border border-[#292D29] space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292D29] gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Sub-300ms Answer Generation</h3>
                    <p className="text-xs text-zinc-400">Multi-provider acceleration via Groq LPU, Google Gemini, and OpenRouter.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#087F5B]/10 text-[#087F5B] border border-[#087F5B]/25">
                      âš¡ GROQ: 240ms
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-zinc-400 border border-[#292D29]">
                      GEMINI: 720ms
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-[#292D29] space-y-4">
                  <div className="p-3 rounded-lg bg-emerald-500/[0.08] border border-[#087F5B]/25 text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                    <span className="text-[#087F5B] font-mono text-[11px] block mb-1">SUGGESTED ANSWER FORMULATION</span>
                    "For CrowdCity, I designed a multi-layer read path separating our PostgreSQL cluster from write transactions using Redis cluster replication and read replicas, which kept p99 query latency under 12ms."
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-[#292D29] space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">1. Direct Response</div>
                      <div className="text-xs text-zinc-300 leading-snug">
                        Immediate, clear opening sentence without generic conversational fluff.
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-[#292D29] space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">2. Concrete Metric</div>
                      <div className="text-xs text-zinc-300 leading-snug">
                        Real numbers grounded in your resume (45k QPS, &lt; 12ms p99 latency).
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-[#292D29] space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">3. Trade-offs</div>
                      <div className="text-xs text-zinc-300 leading-snug">
                        Explains eventual consistency trade-offs chosen for high availability.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "memory" && (
              <motion.div
                key="memory"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#121512] border border-[#292D29] space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292D29] gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Short-Term Conversation Context</h3>
                    <p className="text-xs text-zinc-400">Retains active session timeline to seamlessly resolve follow-up questions.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#D4AF72]/10 text-[#D4AF72] border border-[#D4AF72]/20 w-fit">
                    SESSION CONTEXT AWARE
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-[#292D29] space-y-1">
                    <span className="text-[10px] text-zinc-500">INTERVIEWER (TURN 1)</span>
                    <div className="text-zinc-200">"Tell me about CrowdCity."</div>
                    <div className="text-[#087F5B]/90 text-[11px] pt-1">Veera AI: Formulates candidate-specific overview grounded in your resume.</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#D4AF72]/[0.08] border border-[#D4AF72]/20 space-y-1">
                    <span className="text-[10px] text-[#D4AF72] font-semibold">INTERVIEWER FOLLOW-UP (TURN 2)</span>
                    <div className="text-white font-medium">"What technology did you use for the backend?"</div>
                    <div className="text-zinc-300 text-[11px] pt-1 font-sans">
                      Veera AI immediately recognizes this as a follow-up to <strong className="text-white">CrowdCity</strong>, referencing your Go and PostgreSQL stack rather than asking for clarification or giving generic options.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-[#292D29] flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Session Memory Duration: Active Interview Only</span>
                  <span className="text-[#087F5B]">Zero Persistent Storage</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

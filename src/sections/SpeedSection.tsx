import React from "react";
import { motion } from "framer-motion";
import { Clock, Activity, ArrowRight } from "lucide-react";

export const SpeedSection: React.FC = () => {
  const speedStages = [
    {
      title: "Audio Loopback Capture",
      desc: "Captures spoken soundwaves continuously through low-overhead native audio buffers.",
      phase: "STAGE 1",
    },
    {
      title: "Streaming Transcription",
      desc: "Transcribes partial speech chunks incrementally rather than buffering whole answers.",
      phase: "STAGE 2",
    },
    {
      title: "Instant Question Detection",
      desc: "Isolates the interrogative prompt boundary the moment the interviewer pauses.",
      phase: "STAGE 3",
    },
    {
      title: "Fast AI Answer Generation",
      desc: "Routes prompts directly to accelerated hardware inference engines for instant display.",
      phase: "STAGE 4",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <Clock className="w-3.5 h-3.5 text-zinc-300" />
            <span>LATENCY OPTIMIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Every second matters.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            In live interviews, every pause counts. Veera AI is built for speed — giving you answers right when you need them.
          </p>
        </div>

        {/* Animated Speed Pipeline Visualization */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#121512] border border-[#292D29] shadow-2xl relative overflow-hidden space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292D29] gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#087F5B] font-semibold block">
                Continuous Processing Pipeline
              </span>
              <p className="text-xs text-zinc-400 mt-0.5">
                Eliminates batch delays by cascading speech, intent detection, and AI inference in parallel.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Streaming Enabled</span>
            </div>
          </div>

          {/* Progress Timeline Graphic */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {speedStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-black/40 border border-[#292D29] relative space-y-2.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1">
                    <span>{stage.phase}</span>
                    <span className="text-[#087F5B]">READY</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug">{stage.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-normal">{stage.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>Cascaded</span>
                  <ArrowRight className="w-3 h-3 text-zinc-600" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Real-time Streaming Bar */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-[#292D29] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 font-mono text-zinc-300">
              <Activity className="w-4 h-4 text-[#087F5B] animate-pulse" />
              <span>Real-time response streaming ensures suggestions appear before you formulate your answer.</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">Zero unnecessary wait time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

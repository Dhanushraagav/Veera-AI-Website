import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";

export const GlobalShortcut: React.FC = () => {
  const [hudActive, setHudActive] = useState<boolean>(true);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <Command className="w-3.5 h-3.5 text-zinc-300" />
            <span>INSTANT WORKFLOW ACTIVATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            One shortcut. Instant access.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Press Ctrl + D to toggle your assistant anytime — without leaving your meeting or clicking around.
          </p>
        </div>

        {/* Interactive Key & HUD Demonstration */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121512] border border-[#292D29] shadow-2xl space-y-8 text-center">
            {/* Keyboard Keys Graphic */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setHudActive(!hudActive)}
                className="px-5 py-4 rounded-2xl bg-[#191D19] border border-white/20 shadow-lg text-lg sm:text-2xl font-mono font-bold text-white active:scale-95 transition-transform cursor-pointer"
                title="Click to simulate Ctrl press"
              >
                Ctrl
              </button>
              <span className="text-2xl font-mono text-zinc-500">+</span>
              <button
                type="button"
                onClick={() => setHudActive(!hudActive)}
                className="px-6 py-4 rounded-2xl bg-[#191D19] border border-white/20 shadow-lg text-lg sm:text-2xl font-mono font-bold text-white active:scale-95 transition-transform cursor-pointer"
                title="Click to simulate D press"
              >
                D
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#087F5B] uppercase tracking-wider font-semibold">
                Click the shortcut above to toggle the live assistant HUD
              </div>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                Works globally across Microsoft Teams, Google Meet, Zoom, Slack, or any browser window.
              </p>
            </div>

            {/* Interactive Preview HUD */}
            <div className="p-4 rounded-2xl bg-black/50 border border-[#292D29] min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {hudActive ? (
                  <motion.div
                    key="hud-open"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-md p-4 rounded-xl bg-[#18181b] border border-white/15 text-left space-y-3 shadow-xl"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-[#292D29] text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white font-bold">VEERA AI &mdash; HUD</span>
                      </div>
                      <span className="text-zinc-400">Groq LPU (Active)</span>
                    </div>

                    <div className="text-xs space-y-1">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block">Question detected</span>
                      <p className="text-zinc-200 font-medium">"How do you handle Kafka consumer rebalancing?"</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-black/40 border border-[#087F5B]/30 text-xs text-emerald-200">
                      "I implement cooperative sticky assignors with exponential backoff on dead-letter queues..."
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hud-closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-mono text-zinc-500 py-6"
                  >
                    Assistant minimized to background system tray. Press Ctrl+D to summon.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="text-[11px] font-mono text-zinc-500">
              Shortcut can be customized anytime from Desktop Settings.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

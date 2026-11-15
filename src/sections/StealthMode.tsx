import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Shield,
  Monitor,
  Video,
  Lock,
  Zap,
  CheckCircle2,
  Sliders,
  Layers,
} from "lucide-react";

export const StealthMode: React.FC = () => {
  const [activeView, setActiveView] = useState<"split" | "user" | "interviewer">("split");
  const [screenShareActive, setScreenShareActive] = useState<boolean>(true);

  return (
    <section
      id="stealth-mode"
      className="py-24 sm:py-32 relative overflow-hidden border-t border-[#1a241f] bg-[#060907]"
    >
      {/* Zero-Lag Hardware-Accelerated Ambient Glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4]">
            <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase font-semibold">PROJECT PHANTOM &bull; DWM HARDWARE CLOAK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Invisible on Screen Share. <br />
            <span className="brand-gradient-text">Crystal clear to you.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Powered directly by native Windows Desktop Window Manager (DWM) hardware exclusion (<code className="text-[#00F5D4] text-xs px-2 py-0.5 rounded bg-black/60 border border-white/10 font-mono">WDA_EXCLUDEFROMCAPTURE</code>). When sharing your full desktop on Zoom, Microsoft Teams, or Google Meet, Veera is completely omitted from the video frame at the OS kernel level.
          </p>
        </div>

        {/* Interactive Comparison Controls Bar */}
        <div className="max-w-5xl mx-auto mb-8 p-2 rounded-2xl bg-[#0e1410] border border-white/10 flex flex-wrap items-center justify-between gap-3 shadow-xl">
          {/* View Selector Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setActiveView("split")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeView === "split"
                  ? "bg-[#142018] text-[#00F5D4] border border-[#00F5D4]/40 font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </button>

            <button
              onClick={() => setActiveView("user")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeView === "user"
                  ? "bg-[#142018] text-[#D4AF72] border border-[#D4AF72]/40 font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Your Display (Visible)</span>
            </button>

            <button
              onClick={() => setActiveView("interviewer")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeView === "interviewer"
                  ? "bg-[#142018] text-[#00F5D4] border border-[#00F5D4]/40 font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Interviewer Screen Share (Cloaked)</span>
            </button>
          </div>

          {/* Screen Share Simulation Toggle */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono">
            <span className="text-slate-400 text-[11px] hidden sm:inline">Screen Share:</span>
            <button
              onClick={() => setScreenShareActive(!screenShareActive)}
              className={`px-2.5 py-1 rounded-lg font-bold text-[10px] transition-all flex items-center gap-1.5 cursor-pointer ${
                screenShareActive
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                  : "bg-white/10 text-slate-400 border border-white/10"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${screenShareActive ? "bg-rose-400 animate-pulse" : "bg-slate-500"}`} />
              <span>{screenShareActive ? "LIVE (ZOOM / TEAMS)" : "OFFLINE"}</span>
            </button>
          </div>
        </div>

        {/* The Interactive Dual Stage Comparison Canvas */}
        <div className="w-full max-w-[1500px] 2xl:max-w-[1650px] mx-auto">
          <div className={`grid gap-6 ${activeView === "split" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
            {/* 1. LEFT SCREEN: User Physical Monitor (What You See) */}
            {(activeView === "split" || activeView === "user") && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="cyber-card rounded-2xl overflow-hidden shadow-2xl flex flex-col relative group"
              >
                {/* Corner reticles */}
                <div className="cyber-reticle cyber-reticle-gold-tl" />
                <div className="cyber-reticle cyber-reticle-gold-tr" />
                <div className="cyber-reticle cyber-reticle-gold-bl" />
                <div className="cyber-reticle cyber-reticle-gold-br" />

                {/* Screen Header Badge */}
                <div className="px-4 py-3 bg-[#0d1410] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF72]">
                    <Monitor className="w-4 h-4 text-[#D4AF72]" />
                    <span className="font-bold uppercase tracking-wider">YOUR SCREEN (PILOT RETINA VIEW)</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF72]/15 border border-[#D4AF72]/40 text-[10px] font-mono text-[#D4AF72] font-bold">
                    100% VISIBLE TO YOU
                  </span>
                </div>

                {/* Simulated Desktop Workspace with Code Editor Background */}
                <div className="relative min-h-[380px] p-4 bg-[#080d0a] flex flex-col justify-between overflow-hidden">
                  {/* Faux Code Editor Background */}
                  <div className="space-y-2 opacity-60 font-mono text-[11px] text-slate-300 select-none">
                    <div className="text-slate-500">// LeetCode 146: LRU Cache Implementation</div>
                    <div><span className="text-amber-400">class</span> <span className="text-emerald-400">LRUCache</span> &#123;</div>
                    <div className="pl-4 text-slate-400">private capacity: number;</div>
                    <div className="pl-4 text-slate-400">private cache: Map&lt;number, Node&gt;;</div>
                    <div className="pl-4"><span className="text-sky-400">constructor</span>(capacity: number) &#123;</div>
                    <div className="pl-8 text-slate-300">this.capacity = capacity;</div>
                    <div className="pl-8 text-slate-300">this.cache = new Map();</div>
                    <div className="pl-4">&#125;</div>
                    <div className="pl-4"><span className="text-sky-400">get</span>(key: number): number &#123;</div>
                    <div className="pl-8 text-slate-300">if (!this.cache.has(key)) return -1;</div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;</div>
                  </div>

                  {/* Overlaid Veera HUD Window - Fully visible and highlighted */}
                  <div className="mt-4 p-4 rounded-xl bg-[#0f1713]/95 backdrop-blur-xl border border-[#00F5D4]/40 shadow-2xl space-y-3 relative z-10">
                    <div className="flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2 text-white">
                        <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                        <span className="font-bold">VEERA HUD (Ctrl + D)</span>
                      </div>
                      <span className="text-[10px] text-[#00F5D4] font-semibold">LIVE REASONING</span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono uppercase text-[#D4AF72] font-semibold">
                        Suggested Solution:
                      </div>
                      <p className="text-xs text-white font-medium leading-relaxed">
                        Combine a Hash Map with a Doubly Linked List for true O(1) recency lookups and evictions.
                      </p>
                    </div>

                    <div className="p-2 rounded bg-black/60 border border-white/10 font-mono text-[10px] text-emerald-300">
                      <code>time_complexity: O(1) | space_complexity: O(capacity)</code>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 pt-1">
                      <span>Latency: <strong className="text-[#00F5D4]">240ms</strong></span>
                      <span className="text-[#D4AF72]">Opacity: 85%</span>
                    </div>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-3 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                    <span>You read the solution in real-time without eye deflection.</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. RIGHT SCREEN: Interviewer Screen Share Feed */}
            {(activeView === "split" || activeView === "interviewer") && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="cyber-card rounded-2xl overflow-hidden shadow-2xl flex flex-col relative group"
              >
                {/* Corner reticles */}
                <div className="cyber-reticle cyber-reticle-tl" />
                <div className="cyber-reticle cyber-reticle-tr" />
                <div className="cyber-reticle cyber-reticle-bl" />
                <div className="cyber-reticle cyber-reticle-br" />

                {/* Screen Header Badge */}
                <div className="px-4 py-3 bg-[#0d1410] border-b border-rose-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                    <Video className="w-4 h-4 text-rose-400" />
                    <span className="font-bold uppercase tracking-wider">INTERVIEWER VIEW (ZOOM / TEAMS)</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-[10px] font-mono text-rose-300 font-bold flex items-center gap-1">
                    <EyeOff className="w-3 h-3" />
                    DWM CLOAK: 100% INVISIBLE
                  </span>
                </div>

                {/* Simulated Meeting Viewport */}
                <div className="relative min-h-[380px] p-4 bg-[#080d0a] flex flex-col justify-between overflow-hidden">
                  {/* Meeting Status Bar */}
                  <div className="mb-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span className="text-white font-semibold">Screen Share Feed: Display 1</span>
                    </div>
                    <span className="text-slate-400">1080p 60fps</span>
                  </div>

                  {/* Clean Code Editor Background - NO HUD ARTIFACTS */}
                  <div className="space-y-2 opacity-90 font-mono text-[11px] text-slate-200 select-none">
                    <div className="text-slate-500">// LeetCode 146: LRU Cache Implementation</div>
                    <div><span className="text-amber-400">class</span> <span className="text-emerald-400">LRUCache</span> &#123;</div>
                    <div className="pl-4 text-slate-400">private capacity: number;</div>
                    <div className="pl-4 text-slate-400">private cache: Map&lt;number, Node&gt;;</div>
                    <div className="pl-4"><span className="text-sky-400">constructor</span>(capacity: number) &#123;</div>
                    <div className="pl-8 text-slate-200">this.capacity = capacity;</div>
                    <div className="pl-8 text-slate-200">this.cache = new Map();</div>
                    <div className="pl-4">&#125;</div>
                    <div className="pl-4"><span className="text-sky-400">get</span>(key: number): number &#123;</div>
                    <div className="pl-8 text-slate-200">if (!this.cache.has(key)) return -1;</div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;</div>
                  </div>

                  {/* Where the HUD was: Clean translucent pass-through box */}
                  <div className="mt-4 p-4 rounded-xl border border-dashed border-emerald-500/40 bg-emerald-500/[0.04] space-y-2 relative">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#00F5D4]">
                      <span className="flex items-center gap-1.5 font-bold uppercase">
                        <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
                        DWM Exclusion Active (Zero Window Artifacts)
                      </span>
                      <span className="text-[10px] text-slate-400">Kernel Bypass</span>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      The video capture buffer skips Veera’s window handle entirely. The interviewer sees only your clean code editor and normal cursor movements. No black boxes, no hole-punching, no stuttering.
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-3 text-[11px] font-mono text-[#00F5D4] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                    <span>Verified on Zoom, Google Meet, Microsoft Teams, Discord, and OBS.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* 4 Technical Pillars of Stealth Architecture */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto">
          <div className="cyber-card p-5 rounded-2xl space-y-3 relative group">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">DWM Kernel Exclusion</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Configured with native Windows <code className="text-[#00F5D4]">WDA_EXCLUDEFROMCAPTURE</code> display affinity. Capture APIs cannot record what the graphics engine excludes.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-2xl space-y-3 relative group">
            <div className="cyber-reticle cyber-reticle-gold-tl" />
            <div className="cyber-reticle cyber-reticle-gold-br" />
            <div className="w-9 h-9 rounded-xl bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72]">
              <Sliders className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">No Black Box Glitches</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Web overlays leave dark rectangular voids on recordings. Veera AI desktop passes through genuine underlying pixels with zero rendering corruption.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-2xl space-y-3 relative group">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
              <Zap className="w-4 h-4 text-[#00F5D4]" />
            </div>
            <h3 className="text-sm font-bold text-white">Anti-Cursor Flickering</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Maintains standard Windows cursor shapes across the entire screen so your pointer never flips into window-resize arrows during screen broadcast.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-2xl space-y-3 relative group">
            <div className="cyber-reticle cyber-reticle-gold-tl" />
            <div className="cyber-reticle cyber-reticle-gold-br" />
            <div className="w-9 h-9 rounded-xl bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72]">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Instant Panic Key (Ctrl+D)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instantly toggle the entire HUD on or off in under 16ms (a single screen refresh) without halting real-time audio capture or question processing.
            </p>
          </div>
        </div>

        {/* Responsible Usage / Platform Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#0e1410] border border-white/10 max-w-3xl mx-auto text-center text-xs text-slate-300 font-mono leading-relaxed">
          <span className="text-[#D4AF72] font-semibold">Integrity Notice:</span> Veera AI is engineered as an assistive practice companion and accessibility aid for technical interviews. Always ensure adherence to your institution's and interview organization's honor codes.
        </div>
      </div>
    </section>
  );
};

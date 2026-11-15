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
  // 'split' | 'user' | 'interviewer'
  const [activeView, setActiveView] = useState<"split" | "user" | "interviewer">("split");
  const [screenShareActive, setScreenShareActive] = useState<boolean>(true);

  return (
    <section
      id="stealth-mode"
      className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#070807]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#00F5D4]/[0.08] via-[#087F5B]/[0.05] to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/35 text-xs font-mono text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase">PROJECT PHANTOM // DWM KERNEL HARDWARE CLOAK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cyber font-extrabold tracking-tight text-[#F7F5EF] leading-tight">
            Invisible on Screen Share. <br />
            <span className="brand-gradient-text drop-shadow-[0_0_35px_rgba(0,245,212,0.35)]">Crystal clear to you.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9aa39e] leading-relaxed max-w-2xl mx-auto">
            Powered directly by native Windows Desktop Window Manager (DWM) hardware exclusion (<code className="text-[#00F5D4] text-xs px-2 py-0.5 rounded bg-black/60 border border-[#00F5D4]/30 font-mono">WDA_EXCLUDEFROMCAPTURE</code>). When sharing your full desktop on Zoom, Microsoft Teams, or Google Meet, Veera is completely omitted from the video frame at the OS kernel level.
          </p>
        </div>

        {/* Interactive Comparison Controls Bar */}
        <div className="max-w-5xl mx-auto mb-8 p-2 rounded-2xl bg-[#121612] border border-[#292D29] flex flex-wrap items-center justify-between gap-3 shadow-xl">
          {/* View Selector Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setActiveView("split")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeView === "split"
                  ? "bg-[#191D19] text-[#00F5D4] border border-[#00F5D4]/40 shadow-sm"
                  : "text-[#B4B7B0] hover:text-[#F7F5EF] hover:bg-white/[0.04]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Side-by-Side Comparison</span>
            </button>

            <button
              onClick={() => setActiveView("user")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeView === "user"
                  ? "bg-[#191D19] text-[#D4AF72] border border-[#D4AF72]/40 shadow-sm"
                  : "text-[#B4B7B0] hover:text-[#F7F5EF] hover:bg-white/[0.04]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Your Display (Visible)</span>
            </button>

            <button
              onClick={() => setActiveView("interviewer")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeView === "interviewer"
                  ? "bg-[#191D19] text-[#00F5D4] border border-[#00F5D4]/40 shadow-sm"
                  : "text-[#B4B7B0] hover:text-[#F7F5EF] hover:bg-white/[0.04]"
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Interviewer Screen Share (Cloaked)</span>
            </button>
          </div>

          {/* Screen Share Simulation Toggle */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 text-xs font-mono">
            <span className="text-zinc-400 text-[11px] hidden sm:inline">Screen Share:</span>
            <button
              onClick={() => setScreenShareActive(!screenShareActive)}
              className={`px-2.5 py-1 rounded-lg font-bold text-[10px] transition-all flex items-center gap-1.5 cursor-pointer ${
                screenShareActive
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                  : "bg-white/10 text-zinc-400 border border-white/10"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${screenShareActive ? "bg-rose-400 animate-ping" : "bg-zinc-500"}`} />
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="cyber-card rounded-2xl overflow-hidden shadow-2xl flex flex-col relative group"
              >
                {/* Corner reticles */}
                <div className="cyber-reticle cyber-reticle-gold-tl" />
                <div className="cyber-reticle cyber-reticle-gold-tr" />
                <div className="cyber-reticle cyber-reticle-gold-bl" />
                <div className="cyber-reticle cyber-reticle-gold-br" />

                {/* Screen Header Badge */}
                <div className="px-4 py-3 bg-[#0a0f0c] border-b border-[#00F5D4]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF72]">
                    <Monitor className="w-4 h-4 text-[#D4AF72]" />
                    <span className="font-bold uppercase tracking-wider font-cyber">PILOT RETINA VIEW (YOUR DISPLAY)</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF72]/15 border border-[#D4AF72]/40 text-[10px] font-mono text-[#D4AF72] font-bold">
                    100% VISIBLE TO PILOT
                  </span>
                </div>

                {/* Simulated Desktop Workspace with Code Editor Background */}
                <div className="relative min-h-[380px] p-4 bg-[#0a0c0a] flex flex-col justify-between overflow-hidden">
                  {/* Faux Code Editor Background (e.g. LeetCode / VS Code) */}
                  <div className="space-y-2 opacity-50 font-mono text-[11px] text-zinc-400 select-none">
                    <div className="text-zinc-600">// LeetCode 146: LRU Cache Implementation</div>
                    <div><span className="text-amber-400">class</span> <span className="text-emerald-400">LRUCache</span> &#123;</div>
                    <div className="pl-4 text-zinc-500">private capacity: number;</div>
                    <div className="pl-4 text-zinc-500">private cache: Map&lt;number, Node&gt;;</div>
                    <div className="pl-4"><span className="text-blue-400">constructor</span>(capacity: number) &#123;</div>
                    <div className="pl-8 text-zinc-400">this.capacity = capacity;</div>
                    <div className="pl-8 text-zinc-400">this.cache = new Map();</div>
                    <div className="pl-4">&#125;</div>
                    <div className="pl-4"><span className="text-blue-400">get</span>(key: number): number &#123;</div>
                    <div className="pl-8 text-zinc-400">if (!this.cache.has(key)) return -1;</div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;</div>
                  </div>

                  {/* Overlaid Veera HUD Window - Fully visible and highlighted */}
                  <div className="mt-4 p-4 rounded-xl bg-[#121612]/92 backdrop-blur-xl border border-[#00F5D4]/40 shadow-2xl space-y-3 relative z-10 transition-transform group-hover:scale-[1.01]">
                    <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#292D29] pb-2">
                      <div className="flex items-center gap-2 text-[#F7F5EF]">
                        <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                        <span className="font-bold">VEERA HUD (Ctrl + D)</span>
                      </div>
                      <span className="text-[10px] text-[#00F5D4] font-semibold">LIVE REASONING</span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono uppercase text-[#D4AF72] font-semibold">
                        Suggested Solution:
                      </div>
                      <p className="text-xs text-[#F7F5EF] font-medium leading-relaxed">
                        Combine a Hash Map with a Doubly Linked List for true O(1) recency lookups and evictions.
                      </p>
                    </div>

                    <div className="p-2 rounded bg-black/60 border border-white/5 font-mono text-[10px] text-emerald-300">
                      <code>time_complexity: O(1) | space_complexity: O(capacity)</code>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-[#B4B7B0] pt-1">
                      <span>Latency: <strong className="text-[#00F5D4]">240ms</strong></span>
                      <span className="text-[#D4AF72]">Opacity: 85%</span>
                    </div>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-3 text-[11px] font-mono text-[#D4AF72] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                    <span>You read the solution in real-time without eye deflection.</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. RIGHT SCREEN: Interviewer Screen Share Feed (What Zoom / Teams Captures) */}
            {(activeView === "split" || activeView === "interviewer") && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="cyber-card rounded-2xl overflow-hidden shadow-2xl flex flex-col relative group"
              >
                {/* Corner reticles */}
                <div className="cyber-reticle cyber-reticle-tl" />
                <div className="cyber-reticle cyber-reticle-tr" />
                <div className="cyber-reticle cyber-reticle-bl" />
                <div className="cyber-reticle cyber-reticle-br" />

                {/* Screen Header Badge */}
                <div className="px-4 py-3 bg-[#0a0f0c] border-b border-rose-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                    <Video className="w-4 h-4 text-rose-400" />
                    <span className="font-bold uppercase tracking-wider font-cyber">SURVEILLANCE RADAR (INTERVIEWER VIEW)</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-[10px] font-mono text-rose-300 font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(244,63,94,0.3)]">
                    <EyeOff className="w-3 h-3" />
                    DWM CLOAK: 100% INVISIBLE
                  </span>
                </div>

                {/* Simulated Meeting Viewport */}
                <div className="relative min-h-[380px] p-4 bg-[#050705] flex flex-col justify-between overflow-hidden">
                  {/* Real-time sweeping laser line indicating screen scan */}
                  {screenShareActive && (
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500/90 to-transparent shadow-[0_0_15px_rgba(244,63,94,0.9)] pointer-events-none z-20"
                    />
                  )}
                  {/* Meeting Status Bar */}
                  <div className="mb-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span className="text-white font-semibold">Zoom / Teams Meeting (Sharing: Screen 1)</span>
                    </div>
                    <span className="text-zinc-500">1080p 60fps Stream</span>
                  </div>

                  {/* Clean Code Editor Background - NO HUD ARTIFACTS, NO BLACK BOXES */}
                  <div className="space-y-2 opacity-90 font-mono text-[11px] text-zinc-300 select-none">
                    <div className="text-zinc-500">// LeetCode 146: LRU Cache Implementation</div>
                    <div><span className="text-amber-400">class</span> <span className="text-emerald-400">LRUCache</span> &#123;</div>
                    <div className="pl-4 text-zinc-400">private capacity: number;</div>
                    <div className="pl-4 text-zinc-400">private cache: Map&lt;number, Node&gt;;</div>
                    <div className="pl-4"><span className="text-blue-400">constructor</span>(capacity: number) &#123;</div>
                    <div className="pl-8 text-zinc-200">this.capacity = capacity;</div>
                    <div className="pl-8 text-zinc-200">this.cache = new Map();</div>
                    <div className="pl-4">&#125;</div>
                    <div className="pl-4"><span className="text-blue-400">get</span>(key: number): number &#123;</div>
                    <div className="pl-8 text-zinc-200">if (!this.cache.has(key)) return -1;</div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;</div>
                  </div>

                  {/* Where the HUD was: An explanatory translucent scanline showing native hardware pass-through */}
                  <div className="mt-4 p-4 rounded-xl border border-dashed border-[#087F5B]/40 bg-[#087F5B]/[0.03] space-y-2 relative">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#00F5D4]">
                      <span className="flex items-center gap-1.5 font-bold uppercase">
                        <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
                        DWM Exclusion Active (Zero Window Artifacts)
                      </span>
                      <span className="text-[10px] text-zinc-500">Kernel Bypass</span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
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
            <div className="w-9 h-9 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4] group-hover:scale-110 transition-transform">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">DWM Kernel Exclusion</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              Configured with native Windows <code className="text-[#00F5D4]">WDA_EXCLUDEFROMCAPTURE</code> display affinity. Capture APIs cannot record what the graphics engine excludes.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-2xl space-y-3 relative group">
            <div className="cyber-reticle cyber-reticle-gold-tl" />
            <div className="cyber-reticle cyber-reticle-gold-br" />
            <div className="w-9 h-9 rounded-xl bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72] group-hover:scale-110 transition-transform">
              <Sliders className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">No Black Box Glitches</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              Web overlays leave dark rectangular voids on recordings. Veera AI desktop passes through genuine underlying pixels with zero rendering corruption.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-2xl space-y-3 relative group">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4] group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-[#00F5D4]" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">Anti-Cursor Flickering</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              Maintains standard Windows cursor shapes across the entire screen so your pointer never flips into window-resize arrows during screen broadcast.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-2xl space-y-3 relative group">
            <div className="cyber-reticle cyber-reticle-gold-tl" />
            <div className="cyber-reticle cyber-reticle-gold-br" />
            <div className="w-9 h-9 rounded-xl bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72] group-hover:scale-110 transition-transform">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">Instant Panic Key (Ctrl+D)</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              Instantly toggle the entire HUD on or off in under 16ms (a single screen refresh) without halting real-time audio capture or question processing.
            </p>
          </div>
        </div>

        {/* Responsible Usage / Platform Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#101310] border border-[#292D29] max-w-3xl mx-auto text-center text-xs text-[#B4B7B0] font-mono leading-relaxed">
          <span className="text-[#D4AF72] font-semibold">Integrity Notice:</span> Veera AI is engineered as an assistive practice companion and accessibility aid for technical interviews. Always ensure adherence to your institution's and interview organization's honor codes.
        </div>
      </div>
    </section>
  );
};

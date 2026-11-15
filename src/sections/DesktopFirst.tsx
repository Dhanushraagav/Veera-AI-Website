import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Command,
  HardDrive,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export const DesktopFirst: React.FC = () => {
  const [hotkeyTriggered, setHotkeyTriggered] = useState<boolean>(false);

  const handleSimulateHotkey = () => {
    setHotkeyTriggered(true);
    setTimeout(() => setHotkeyTriggered(false), 1600);
  };

  const specs = [
    {
      icon: Monitor,
      title: "Windows 10 / 11 Native",
      desc: "Compiled directly for 64-bit Windows (x64) utilizing Windows Desktop Window Manager (DWM) hardware compositing.",
      stat: "64-bit Native",
    },
    {
      icon: Command,
      title: "Global Hotkey (Ctrl + D)",
      desc: "Show or cloak the live interview overlay instantly in <16ms without disrupting your code editor or browser focus.",
      stat: "<16ms Switch",
    },
    {
      icon: HardDrive,
      title: "Ultra-Lightweight (~4.26 MB)",
      desc: "Built on Tauri 2.x and Rust with native Windows WebView2, eliminating heavy 200MB+ Electron framework bloat.",
      stat: `${SITE_CONFIG.INSTALLER_SIZE} Setup`,
    },
    {
      icon: ShieldCheck,
      title: "Windows DPAPI Credential Vault",
      desc: "Your personal API keys are encrypted at rest using native Windows Data Protection API hardware-backed keys.",
      stat: "Hardware Bound",
    },
  ];

  return (
    <section id="desktop" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#0c0d0c]">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
              <Monitor className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>NATIVE DESKTOP PERFORMANCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF] leading-tight">
              Engineered exclusively for Windows.
            </h2>

            <p className="text-sm sm:text-base text-[#B4B7B0] max-w-xl mx-auto leading-relaxed">
              Designed as a stealth desktop companion that hovers silently over your workspace without draining CPU or memory.
            </p>
          </div>

          {/* Interactive Global Hotkey Showcase Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121612] border border-[#292D29] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] px-2.5 py-0.5 rounded bg-white/[0.04] border border-[#292D29]">
                  Instant Panic Key
                </span>
                <h3 className="text-2xl font-bold text-[#F7F5EF]">
                  Instant HUD Cloaking with <span className="text-[#00F5D4]">Ctrl + D</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed">
                  The global shortcut works across any active application &mdash; full-screen IDEs, browser tabs, or video calls. Tap once to reveal the overlay; tap again to vanish it in a single frame. Background audio recording and question parsing continue seamlessly.
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleSimulateHotkey}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      hotkeyTriggered
                        ? "bg-[#00F5D4] text-black shadow-lg shadow-[#00F5D4]/30 scale-95"
                        : "metallic-button text-black hover:border-[#00F5D4]/40"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>{hotkeyTriggered ? "HUD Toggled (16ms)!" : "Test Shortcut Reaction"}</span>
                  </button>
                  <span className="text-[11px] font-mono text-zinc-500">Sub-16ms toggle response</span>
                </div>
              </div>

              {/* Animated Keycap Visual */}
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#090b09] border border-white/5 space-y-4 select-none">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={hotkeyTriggered ? { y: [0, 4, 0], scale: [1, 0.95, 1] } : {}}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-[#222822] to-[#121612] border-2 border-white/10 shadow-[0_8px_0_#080a08,0_15px_25px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-white font-mono font-bold text-sm sm:text-base"
                  >
                    <span>Ctrl</span>
                  </motion.div>

                  <span className="text-zinc-500 font-mono text-xl font-bold">+</span>

                  <motion.div
                    animate={hotkeyTriggered ? { y: [0, 4, 0], scale: [1, 0.95, 1] } : {}}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center font-mono font-bold text-sm sm:text-base transition-all ${
                      hotkeyTriggered
                        ? "bg-[#00F5D4] text-black border-2 border-white shadow-[0_4px_0_#00a892]"
                        : "bg-gradient-to-b from-[#222822] to-[#121612] border-2 border-white/10 text-white shadow-[0_8px_0_#080a08,0_15px_25px_rgba(0,0,0,0.6)]"
                    }`}
                  >
                    <span>D</span>
                  </motion.div>
                </div>

                <div className="text-[11px] font-mono text-center text-zinc-400">
                  {hotkeyTriggered ? (
                    <span className="text-[#00F5D4] font-bold">✓ HUD State Flipped (Cloaked/Revealed)</span>
                  ) : (
                    <span>Click button above or press Ctrl + D in desktop app</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Windows Native Advantage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-[#121612] border border-[#292D29] hover:border-[#D4AF72]/30 transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#00F5D4] group-hover:bg-[#087F5B]/20 transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[#D4AF72]">
                        {item.stat}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#F7F5EF]">{item.title}</h3>
                    <p className="text-xs text-[#B4B7B0] leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-[#292D29]/60 text-[10px] font-mono text-zinc-500">
                    NATIVE DESKTOP API
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Specs Strip */}
          <div className="p-4 rounded-xl bg-[#121612] border border-[#292D29] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#B4B7B0]">
            <div>
              <span className="text-zinc-500">PACKAGE:</span> <span className="text-white font-semibold">{SITE_CONFIG.INSTALLER_FILENAME}</span>
            </div>
            <div>
              <span className="text-zinc-500">SIZE:</span> <span className="text-[#D4AF72] font-semibold">{SITE_CONFIG.INSTALLER_SIZE}</span>
            </div>
            <div>
              <span className="text-zinc-500">RUNTIME:</span> <span className="text-[#00F5D4] font-semibold">Tauri 2.x + Rust (x64)</span>
            </div>
            <div>
              <span className="text-zinc-500">TARGET:</span> <span className="text-white font-semibold">{SITE_CONFIG.SUPPORTED_PLATFORM}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

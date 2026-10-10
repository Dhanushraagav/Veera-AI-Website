import React from "react";
import { motion } from "framer-motion";
import { Monitor, Zap, Command, Shield, Download, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface DesktopFirstProps {
  onDownloadClick: () => void;
}

export const DesktopFirst: React.FC<DesktopFirstProps> = ({ onDownloadClick: _onDownloadClick }) => {
  const highlights = [
    {
      icon: Monitor,
      title: "Dedicated Desktop Application",
      desc: "Engineered specifically for 64-bit Windows 10 and 11 to sit right alongside Microsoft Teams, Google Meet, or Zoom with zero window flicker.",
    },
    {
      icon: Command,
      title: "Background Operation & Global Shortcut",
      desc: "Stays running in the background with native system tray support. Toggle between the full assistant and floating HUD instantly with Ctrl + D.",
    },
    {
      icon: Zap,
      title: "Fast Assistant Access & Low Latency",
      desc: "Local desktop networking layer eliminates browser sandbox overhead, streaming voice data and AI suggestions with minimal delay.",
    },
    {
      icon: Shield,
      title: "Focused Workflow & Ephemeral Privacy",
      desc: "A minimal, distraction-free interface built for high-stakes interviews. Audio streams and transcripts live in volatile RAM only.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300">
              <Monitor className="w-3.5 h-3.5 text-zinc-300" />
              <span>NATIVE DESKTOP ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Built for Windows.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              Interviews need speed and focus. Veera AI runs as a native Windows desktop app — staying ready in your system tray and opening instantly via hotkey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-[#121512] border border-[#292D29] hover:border-white/15 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-white mb-3">
                      <Icon className="w-4 h-4 text-zinc-300" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_CONFIG.DOWNLOAD_URL}
                download={SITE_CONFIG.INSTALLER_FILENAME}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl metallic-button text-sm font-semibold transition-all group cursor-pointer"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download for Windows</span>
              </a>
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                <span>{SITE_CONFIG.SUPPORTED_PLATFORM} (64-bit)</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-white/15 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#292D29]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-zinc-200 font-medium">VEERA AI DESKTOP RUNTIME</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">WIN-X64 &bull; STANDALONE</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-zinc-400">Supported OS</span>
                    <span className="text-white font-medium">{SITE_CONFIG.SUPPORTED_PLATFORM}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-zinc-400">System Tray Mode</span>
                    <span className="text-[#087F5B] font-medium">Active in Background</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-zinc-400">Global Shortcut</span>
                    <span className="text-white px-2 py-0.5 rounded bg-zinc-800 border border-[#292D29] font-bold">Ctrl + D</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-zinc-400">Interview Session Storage</span>
                    <span className="text-[#087F5B]">Ephemeral (Zero Cloud Storage)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-[#292D29] text-xs text-zinc-300 leading-relaxed">
                  <span className="text-white font-medium block mb-1">Permitted &amp; Transparent Copilot</span>
                  Designed for interviews where AI assistance is permitted or disclosed, technical evaluations, or accessibility assistance. Built with zero stealth injection or screen-share evasion.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

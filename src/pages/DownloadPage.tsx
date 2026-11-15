import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Monitor,
  ArrowLeft,
  HardDrive,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface DownloadPageProps {
  onBackToHome: () => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen pt-28 pb-24 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative overflow-hidden bg-[#040605]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00F5D4]/[0.08] via-[#087F5B]/[0.04] to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 space-y-8">
        {/* Navigation back */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#9aa39e] hover:text-[#00F5D4] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>[ &larr; RETURN TO FLIGHT DECK ]</span>
        </button>

        {/* Header Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/35 text-xs font-mono text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Monitor className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase">2050 PRODUCTION BINARY // WIN x64 AIRGAP RELEASE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-cyber font-extrabold tracking-tight text-[#F7F5EF]">
            Deploy <span className="brand-gradient-text drop-shadow-[0_0_35px_rgba(0,245,212,0.35)]">Veera AI</span> for Windows.
          </h1>

          <p className="text-sm sm:text-base text-[#9aa39e] max-w-lg mx-auto leading-relaxed">
            Standalone 64-bit Windows desktop installer with hardware-level Stealth Mode and native DPAPI encryption.
          </p>
        </div>

        {/* Primary Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl mx-auto p-7 sm:p-9 rounded-2xl cyber-card shadow-2xl relative overflow-hidden"
        >
          <div className="cyber-reticle cyber-reticle-tl" />
          <div className="cyber-reticle cyber-reticle-tr" />
          <div className="cyber-reticle cyber-reticle-bl" />
          <div className="cyber-reticle cyber-reticle-br" />

          {/* Top release header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#1e2822]">
            <div>
              <div className="text-base font-cyber font-bold text-white flex items-center gap-2">
                <span>{SITE_CONFIG.SITE_NAME} Desktop</span>
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
              </div>
              <div className="text-xs text-[#00F5D4] font-mono mt-0.5">{SITE_CONFIG.ARCHITECTURE}</div>
            </div>
            <span className="px-3 py-1 rounded bg-[#00F5D4]/15 border border-[#00F5D4]/40 text-xs font-mono text-[#00F5D4] font-bold">
              v{SITE_CONFIG.VERSION} // ARMED
            </span>
          </div>

          {/* Specs List */}
          <div className="py-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">// PAYLOAD:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.INSTALLER_FILENAME}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">// PAYLOAD SIZE:</span>
              <span className="text-[#D4AF72] font-semibold">{SITE_CONFIG.INSTALLER_SIZE}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">// TARGET OS:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.SUPPORTED_PLATFORM}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">// HUD HOTKEY:</span>
              <span className="text-white font-bold px-2.5 py-0.5 rounded bg-black/60 border border-[#00F5D4]/40 text-[#00F5D4] shadow-[0_0_10px_rgba(0,245,212,0.2)]">
                Ctrl + D
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">// CRYPTOGRAPHY:</span>
              <span className="text-[#00F5D4] font-semibold">Windows DPAPI Hardware Vault</span>
            </div>
          </div>

          {/* CTA Download Button */}
          <div className="pt-2">
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="w-full py-4 px-6 cyber-btn-primary font-cyber font-bold text-sm tracking-wide transition-all duration-200 shadow-xl active:scale-[0.98] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Download className="w-4 h-4 text-black transition-transform group-hover:-translate-y-0.5" />
              <span>[ INITIALIZE DOWNLOAD ({SITE_CONFIG.INSTALLER_SIZE}) ]</span>
            </a>
          </div>

          {/* Quick Start Guide */}
          <div className="mt-6 pt-5 border-t border-[#1e2822] space-y-2.5 text-xs text-[#9aa39e]">
            <div className="text-[11px] uppercase tracking-wider font-mono text-[#D4AF72] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#00F5D4]" />
              <span>// 3-STAGE LAUNCH SEQUENCE:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] font-mono">
              <div className="p-2.5 rounded-lg bg-black/60 border border-[#1e2822] space-y-1">
                <span className="text-[#00F5D4] font-bold block">01. Execute</span>
                <span className="text-zinc-400 text-[10px]">Run standalone package</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-[#1e2822] space-y-1">
                <span className="text-[#00F5D4] font-bold block">02. Arm Keys</span>
                <span className="text-zinc-400 text-[10px]">Configure DPAPI Vault</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-[#1e2822] space-y-1">
                <span className="text-[#00F5D4] font-bold block">03. Ctrl + D</span>
                <span className="text-zinc-400 text-[10px]">Engage cloaked HUD</span>
              </div>
            </div>
          </div>

          {/* Windows SmartScreen Reassurance */}
          <div className="mt-5 p-3.5 rounded-xl bg-[#040605] border border-[#1e2822] flex items-start gap-2.5 text-xs text-[#9aa39e] leading-relaxed">
            <HardDrive className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
            <span>
              If Windows SmartScreen prompts "Windows protected your PC", click <strong className="text-white">More info &rarr; Run anyway</strong>. Veera AI is a standalone unsigned community desktop package built on open Rust/Tauri.
            </span>
          </div>
        </motion.div>

        {/* System Requirements Grid */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl cyber-card space-y-4 relative">
          <div className="cyber-reticle cyber-reticle-tl" />
          <div className="cyber-reticle cyber-reticle-br" />

          <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF72] font-bold">
            // HARDWARE REQUIREMENTS TELEMETRY
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {SITE_CONFIG.SYSTEM_REQUIREMENTS.map((req) => (
              <div key={req.label} className="p-3 rounded-lg bg-black/50 border border-[#1e2822] flex flex-col justify-between">
                <span className="text-zinc-500 text-[10px] uppercase">// {req.label}</span>
                <span className="text-white font-medium">{req.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070807]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00F5D4]/[0.08] via-[#087F5B]/[0.04] to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation back */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#B4B7B0] hover:text-[#00F5D4] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Overview</span>
        </button>

        {/* Header Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <Monitor className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>OFFICIAL WINDOWS PRODUCTION RELEASE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F5EF]">
            Download Veera AI for Windows.
          </h1>

          <p className="text-sm sm:text-base text-[#B4B7B0] max-w-lg mx-auto leading-relaxed">
            Standalone 64-bit Windows desktop installer with hardware-level Stealth Mode and native DPAPI security.
          </p>
        </div>

        {/* Primary Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl mx-auto p-7 sm:p-9 rounded-2xl bg-[#121612] border border-[#292D29] shadow-2xl relative overflow-hidden"
        >
          {/* Top release header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#292D29]">
            <div>
              <div className="text-base font-bold text-white font-mono flex items-center gap-2">
                <span>{SITE_CONFIG.SITE_NAME} Desktop</span>
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
              </div>
              <div className="text-xs text-[#B4B7B0] font-mono mt-0.5">{SITE_CONFIG.ARCHITECTURE}</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#087F5B]/20 border border-[#087F5B]/40 text-xs font-mono text-[#00F5D4] font-semibold">
              v{SITE_CONFIG.VERSION}
            </span>
          </div>

          {/* Specs List */}
          <div className="py-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">PACKAGE:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.INSTALLER_FILENAME}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">PACKAGE SIZE:</span>
              <span className="text-[#D4AF72] font-semibold">{SITE_CONFIG.INSTALLER_SIZE}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">PLATFORM:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.SUPPORTED_PLATFORM}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">GLOBAL HOTKEY:</span>
              <span className="text-white font-bold px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[#00F5D4]">
                Ctrl + D
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">SECURITY:</span>
              <span className="text-emerald-400 font-semibold">Windows DPAPI Encrypted</span>
            </div>
          </div>

          {/* CTA Download Button */}
          <div className="pt-2">
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl metallic-button font-bold text-sm transition-all duration-200 shadow-xl active:scale-[0.98] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#087F5B] transition-transform group-hover:-translate-y-0.5" />
              <span>Download for Windows ({SITE_CONFIG.INSTALLER_SIZE})</span>
            </a>
          </div>

          {/* Quick Start Guide */}
          <div className="mt-6 pt-5 border-t border-[#292D29] space-y-2.5 text-xs text-[#B4B7B0]">
            <div className="text-[11px] uppercase tracking-wider font-mono text-[#D4AF72] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#00F5D4]" />
              <span>3-Step Quick Start:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] font-mono">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="text-[#00F5D4] font-bold block">01. Run Setup</span>
                <span className="text-zinc-400 text-[10px]">Execute standalone installer</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="text-[#00F5D4] font-bold block">02. Add API Keys</span>
                <span className="text-zinc-400 text-[10px]">Save in desktop Settings (DPAPI)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="text-[#00F5D4] font-bold block">03. Press Ctrl + D</span>
                <span className="text-zinc-400 text-[10px]">Toggle cloaked HUD anytime</span>
              </div>
            </div>
          </div>

          {/* Windows SmartScreen Reassurance */}
          <div className="mt-5 p-3.5 rounded-xl bg-white/[0.02] border border-[#292D29] flex items-start gap-2.5 text-xs text-[#B4B7B0] leading-relaxed">
            <HardDrive className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
            <span>
              If Windows SmartScreen prompts "Windows protected your PC", click <strong className="text-white">More info &rarr; Run anyway</strong>. Veera AI is a standalone unsigned community desktop package built on open Rust/Tauri.
            </span>
          </div>
        </motion.div>

        {/* System Requirements Grid */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#101310] border border-[#292D29] space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF72] font-semibold">
            Minimum System Requirements
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {SITE_CONFIG.SYSTEM_REQUIREMENTS.map((req) => (
              <div key={req.label} className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex flex-col justify-between">
                <span className="text-zinc-500 text-[10px]">{req.label}</span>
                <span className="text-white font-medium">{req.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

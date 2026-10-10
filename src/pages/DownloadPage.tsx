import React from "react";
import { motion } from "framer-motion";
import { Download, Monitor, CheckCircle2, ArrowLeft, HardDrive } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface DownloadPageProps {
  onBackToHome: () => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080908]">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-white/[0.04] to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation back */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#B4B7B0] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </button>

        {/* Header Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300">
            <Monitor className="w-3.5 h-3.5 text-zinc-300" />
            <span>OFFICIAL WINDOWS RELEASE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Download Veera AI for Windows.
          </h1>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">
              {SITE_CONFIG.SITE_NAME}
            </div>
            <div className="text-base sm:text-lg text-[#B4B7B0] font-medium">
              {SITE_CONFIG.TAGLINE}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#B4B7B0] max-w-xl mx-auto leading-relaxed">
            Download the latest Veera AI desktop application for Windows. Fast, native interview copilot with real-time question detection.
          </p>
        </div>

        {/* Central Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#121512] border border-[#292D29] shadow-2xl relative overflow-hidden"
        >
          {/* Top Sheen */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF72]/30 to-transparent" />

          <div className="flex items-center justify-between pb-6 border-b border-[#292D29]">
            <div>
              <div className="text-lg font-bold text-white font-mono">{SITE_CONFIG.SITE_NAME} Desktop</div>
              <div className="text-xs text-[#B4B7B0] font-mono mt-0.5">{SITE_CONFIG.ARCHITECTURE}</div>
            </div>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-300">
              v{SITE_CONFIG.VERSION}
            </span>
          </div>

          {/* Meta rows */}
          <div className="py-6 space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">PACKAGE:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.INSTALLER_TYPE}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">VERSION:</span>
              <span className="text-white font-semibold">Version {SITE_CONFIG.VERSION}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">OPERATING SYSTEM:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.SUPPORTED_PLATFORM}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">ARCHITECTURE:</span>
              <span className="text-white font-semibold">64-bit (x64)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">FILE SIZE:</span>
              <span className="text-zinc-300 font-semibold">{SITE_CONFIG.INSTALLER_SIZE}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">FILE NAME:</span>
              <span className="text-zinc-300 truncate max-w-[220px]">{SITE_CONFIG.INSTALLER_FILENAME}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">REQUIREMENTS:</span>
              <span className="text-zinc-300">4GB RAM &bull; Mic Input</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">GLOBAL SHORTCUT:</span>
              <span className="text-white px-2 py-0.5 rounded bg-zinc-800 border border-white/10 font-bold">Ctrl + D</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">ACTIVATION:</span>
              <span className="text-[#087F5B] font-medium">Workstation License Code</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              className="w-full py-4 px-6 rounded-xl metallic-button font-semibold text-sm transition-all duration-200 shadow-lg active:scale-[0.98] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download for Windows</span>
            </a>
          </div>

          {/* Direct Installer Notice */}
          <div className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-[#292D29] flex items-start gap-2.5">
            <HardDrive className="w-4 h-4 text-zinc-300 mt-0.5 shrink-0" />
            <div className="text-xs text-[#B4B7B0] leading-relaxed">
              <span className="text-zinc-200 font-medium block">Windows installer</span>
              Download the latest Veera AI desktop application for Windows. Standalone production package with auto-detection for Windows 10 and Windows 11.
            </div>
          </div>

          {/* Installation steps reminder */}
          <div className="mt-8 pt-6 border-t border-[#292D29] space-y-2 text-xs text-[#B4B7B0] font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B4B7B0]" />
              <span>1. Download and run {SITE_CONFIG.INSTALLER_FILENAME}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B4B7B0]" />
              <span>2. Launch and input your activation key</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B4B7B0]" />
              <span>3. Start Live Copilot</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

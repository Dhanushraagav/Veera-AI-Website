import React from "react";
import { motion } from "framer-motion";
import { Download, Monitor, ArrowLeft, HardDrive } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface DownloadPageProps {
  onBackToHome: () => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080908]">
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
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <Monitor className="w-3.5 h-3.5 text-[#087F5B]" />
            <span>OFFICIAL WINDOWS RELEASE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF]">
            Download Veera AI for Windows.
          </h1>

          <p className="text-sm text-[#B4B7B0] max-w-md mx-auto">
            Standalone 64-bit Windows desktop installer ({SITE_CONFIG.INSTALLER_SIZE}).
          </p>
        </div>

        {/* Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl mx-auto p-7 sm:p-9 rounded-2xl bg-[#121512] border border-[#292D29] shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between pb-5 border-b border-[#292D29]">
            <div>
              <div className="text-base font-bold text-white font-mono">{SITE_CONFIG.SITE_NAME} Desktop</div>
              <div className="text-xs text-[#B4B7B0] font-mono mt-0.5">{SITE_CONFIG.ARCHITECTURE}</div>
            </div>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-[#D4AF72]">
              v{SITE_CONFIG.VERSION}
            </span>
          </div>

          <div className="py-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">PACKAGE:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.INSTALLER_FILENAME}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">SIZE:</span>
              <span className="text-[#D4AF72] font-semibold">{SITE_CONFIG.INSTALLER_SIZE}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">PLATFORM:</span>
              <span className="text-white font-semibold">{SITE_CONFIG.SUPPORTED_PLATFORM} (64-bit)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B4B7B0]">HOTKEY:</span>
              <span className="text-white font-bold px-2 py-0.5 rounded bg-zinc-800 border border-white/10">Ctrl + D</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl metallic-button font-semibold text-sm transition-all duration-200 shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#087F5B] transition-transform group-hover:-translate-y-0.5" />
              <span>Download for Windows ({SITE_CONFIG.INSTALLER_SIZE})</span>
            </a>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-white/[0.03] border border-[#292D29] flex items-start gap-2.5 text-xs text-[#B4B7B0]">
            <HardDrive className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
            <span>Tested for Windows 10 (Build 19041+) and Windows 11. Run setup and add your API credentials in desktop Settings.</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

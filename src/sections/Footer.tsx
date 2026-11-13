import React from "react";
import { SITE_CONFIG } from "../config/site";
import { FunnySleepingGuard } from "../components/FunnySleepingGuard";
import { Shield, Download, ArrowRight } from "lucide-react";

interface FooterProps {
  onRouteChange?: (route: "home" | "download") => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="border-t border-[#292D29] bg-[#060706] py-14 text-zinc-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#292D29]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#121612] border border-[#D4AF72]/40 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D4AF72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l8 16 8-16" />
                    <circle cx="12" cy="14" r="1.5" fill="#00F5D4" />
                  </svg>
                </div>
                <span className="font-bold text-lg text-[#F7F5EF] font-mono tracking-wider">
                  {SITE_CONFIG.SITE_NAME}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#087F5B]/20 border border-[#087F5B]/40 text-[10px] font-mono text-[#00F5D4] font-semibold">
                  v{SITE_CONFIG.VERSION}
                </span>
              </div>
              <FunnySleepingGuard />
            </div>

            <p className="text-zinc-400 font-normal text-xs max-w-sm leading-relaxed">
              The stealth desktop assistant for technical interviews. Real-time speech transcription, context-aware answer suggestions, and hardware-level Stealth Mode that stays 100% invisible during Zoom, Teams, and Google Meet screen shares.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 pt-1">
              <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>Native Windows 10/11 x64 standalone executable</span>
            </div>
          </div>

          {/* Product Directory Links */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Product Capabilities
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#stealth-mode" className="hover:text-white transition-colors text-[#00F5D4] font-medium flex items-center gap-1.5">
                  <span>Stealth Mode (Cloaking)</span>
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Verified Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#providers" className="hover:text-white transition-colors">Provider Reliability &amp; BYOK</a>
              </li>
              <li>
                <a href="#desktop" className="hover:text-white transition-colors">Windows Desktop Specs</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">Privacy &amp; Security</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Knowledge Base (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Installer & Release Links */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Release &amp; Installer
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE_CONFIG.DOWNLOAD_URL}
                  download={SITE_CONFIG.INSTALLER_FILENAME}
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300 font-mono text-xs flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#00F5D4]" />
                  <span>{SITE_CONFIG.INSTALLER_FILENAME}</span>
                </a>
              </li>
              <li className="text-[11px] text-zinc-500 font-mono">
                Standalone package: <strong className="text-[#D4AF72]">{SITE_CONFIG.INSTALLER_SIZE}</strong>
              </li>
              <li className="text-[11px] text-zinc-500 font-mono">
                Target: {SITE_CONFIG.SUPPORTED_PLATFORM}
              </li>
              <li className="pt-2">
                <button
                  onClick={() => {
                    if (onRouteChange) onRouteChange("download");
                  }}
                  className="text-xs font-mono text-[#D4AF72] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Release Details &amp; Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; 2026 {SITE_CONFIG.SITE_NAME}. All rights reserved. Direct client-to-API architecture.
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <span>Windows 10 / 11 (64-bit)</span>
            <span>&bull;</span>
            <span className="text-[#00F5D4]">v{SITE_CONFIG.VERSION} Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

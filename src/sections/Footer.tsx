import React from "react";
import { SITE_CONFIG } from "../config/site";
import { FunnySleepingGuard } from "../components/FunnySleepingGuard";
import { Shield, Download, ArrowRight } from "lucide-react";

interface FooterProps {
  onRouteChange?: (route: "home" | "download") => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="border-t border-[#1a241f] bg-[#040605] py-14 text-slate-400 text-xs font-sans relative overflow-hidden">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#1a241f]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#0c120e] border border-[#00F5D4]/40 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#00F5D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l8 16 8-16" />
                    <circle cx="12" cy="14" r="1.5" fill="#00F5D4" />
                  </svg>
                </div>
                <span className="font-extrabold text-lg text-white tracking-wider">
                  {SITE_CONFIG.SITE_NAME}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[10px] font-mono text-[#00F5D4] font-bold">
                  v{SITE_CONFIG.VERSION}
                </span>
              </div>
              <FunnySleepingGuard />
            </div>

            <p className="text-slate-300 font-normal text-xs max-w-sm leading-relaxed">
              The stealth desktop copilot for technical interviews. Real-time speech transcription, context-aware algorithmic synthesis, and hardware-level Stealth Mode that stays 100% invisible during Zoom, Teams, and Google Meet screen shares.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#00F5D4]/90 pt-1">
              <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>Native Windows 10/11 x64 standalone executable // Zero Relay</span>
            </div>
          </div>

          {/* Product Directory Links */}
          <div className="space-y-3">
            <div className="font-bold text-[#00F5D4] uppercase tracking-wider text-[11px] font-mono">
              // PRODUCT DIRECTORY
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="#stealth-mode" className="hover:text-[#00F5D4] transition-colors text-white font-medium flex items-center gap-1.5">
                  <span>Stealth Mode (Cloaking)</span>
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#00F5D4] text-slate-300 transition-colors">Cognitive Capabilities</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#00F5D4] text-slate-300 transition-colors">Autonomous Pipeline</a>
              </li>
              <li>
                <a href="#providers" className="hover:text-[#00F5D4] text-slate-300 transition-colors">Provider Reliability &amp; BYOK</a>
              </li>
              <li>
                <a href="#desktop" className="hover:text-[#00F5D4] text-slate-300 transition-colors">Hardware Architecture</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#00F5D4] text-slate-300 transition-colors">Zero-Trust Privacy</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00F5D4] text-slate-300 transition-colors">Knowledge Base (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Installer & Release Links */}
          <div className="space-y-3">
            <div className="font-bold text-[#D4AF72] uppercase tracking-wider text-[11px] font-mono">
              // DEPLOYMENT SPECS
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href={SITE_CONFIG.DOWNLOAD_URL}
                  download={SITE_CONFIG.INSTALLER_FILENAME}
                  rel="noopener noreferrer"
                  className="hover:text-[#00F5D4] transition-colors text-white flex items-center gap-1.5 font-medium"
                >
                  <Download className="w-3.5 h-3.5 text-[#00F5D4]" />
                  <span>{SITE_CONFIG.INSTALLER_FILENAME}</span>
                </a>
              </li>
              <li className="text-[11px] text-slate-400">
                Payload Size: <strong className="text-[#D4AF72]">{SITE_CONFIG.INSTALLER_SIZE}</strong>
              </li>
              <li className="text-[11px] text-slate-400">
                Architecture: {SITE_CONFIG.SUPPORTED_PLATFORM}
              </li>
              <li className="pt-2">
                <button
                  onClick={() => {
                    if (onRouteChange) onRouteChange("download");
                  }}
                  className="text-xs font-mono text-[#00F5D4] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <span>[ RELEASE MANIFEST ]</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            &copy; 2026 {SITE_CONFIG.SITE_NAME}. All rights reserved. Direct client-to-API architecture.
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Windows 10 / 11 (64-bit)</span>
            <span>&bull;</span>
            <span className="text-[#00F5D4] font-semibold">v{SITE_CONFIG.VERSION} RELEASE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

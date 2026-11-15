import React from "react";
import { SITE_CONFIG } from "../config/site";
import { FunnySleepingGuard } from "../components/FunnySleepingGuard";
import { Shield, Download, ArrowRight } from "lucide-react";

interface FooterProps {
  onRouteChange?: (route: "home" | "download") => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="border-t border-[#1e2822] bg-[#020403] py-14 text-zinc-400 text-xs font-sans relative overflow-hidden">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#1e2822]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#040605] border border-[#00F5D4]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,212,0.2)]">
                  <svg className="w-4 h-4 text-[#00F5D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l8 16 8-16" />
                    <circle cx="12" cy="14" r="1.5" fill="#00F5D4" />
                  </svg>
                </div>
                <span className="font-extrabold text-lg text-[#F7F5EF] font-cyber tracking-wider">
                  {SITE_CONFIG.SITE_NAME}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/35 text-[10px] font-mono text-[#00F5D4] font-bold">
                  v{SITE_CONFIG.VERSION} // ARMED
                </span>
              </div>
              <FunnySleepingGuard />
            </div>

            <p className="text-[#9aa39e] font-normal text-xs max-w-sm leading-relaxed">
              The stealth desktop copilot for technical interviews. Real-time speech transcription, context-aware algorithmic synthesis, and hardware-level Stealth Mode that stays 100% invisible during Zoom, Teams, and Google Meet screen shares.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#00F5D4]/80 pt-1">
              <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>Native Windows 10/11 x64 standalone executable // Zero Relay</span>
            </div>
          </div>

          {/* Product Directory Links */}
          <div className="space-y-3">
            <div className="font-bold text-[#00F5D4] uppercase tracking-wider text-[11px] font-cyber">
              // PRODUCT CODES
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="#stealth-mode" className="hover:text-[#00F5D4] transition-colors text-white font-medium flex items-center gap-1.5">
                  <span>Stealth Mode (Cloaking)</span>
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#00F5D4] text-[#9aa39e] transition-colors">Cognitive Arsenal</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#00F5D4] text-[#9aa39e] transition-colors">Autonomous Pipeline</a>
              </li>
              <li>
                <a href="#providers" className="hover:text-[#00F5D4] text-[#9aa39e] transition-colors">Provider Lattice &amp; BYOK</a>
              </li>
              <li>
                <a href="#desktop" className="hover:text-[#00F5D4] text-[#9aa39e] transition-colors">Hardware Architecture</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#00F5D4] text-[#9aa39e] transition-colors">Zero-Trust Cryptography</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00F5D4] text-[#9aa39e] transition-colors">Protocol FAQ</a>
              </li>
            </ul>
          </div>

          {/* Installer & Release Links */}
          <div className="space-y-3">
            <div className="font-bold text-[#D4AF72] uppercase tracking-wider text-[11px] font-cyber">
              // DEPLOYMENT SPECS
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href={SITE_CONFIG.DOWNLOAD_URL}
                  download={SITE_CONFIG.INSTALLER_FILENAME}
                  rel="noopener noreferrer"
                  className="hover:text-[#00F5D4] transition-colors text-[#F7F5EF] flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#00F5D4]" />
                  <span>{SITE_CONFIG.INSTALLER_FILENAME}</span>
                </a>
              </li>
              <li className="text-[11px] text-zinc-500">
                Payload Size: <strong className="text-[#D4AF72]">{SITE_CONFIG.INSTALLER_SIZE}</strong>
              </li>
              <li className="text-[11px] text-zinc-500">
                Architecture: {SITE_CONFIG.SUPPORTED_PLATFORM}
              </li>
              <li className="pt-2">
                <button
                  onClick={() => {
                    if (onRouteChange) onRouteChange("download");
                  }}
                  className="text-xs font-mono text-[#00F5D4] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>[ RELEASE MANIFEST ]</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; 2026 {SITE_CONFIG.SITE_NAME}. All systems operational. Direct client-to-API architecture.
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <span>Windows 10 / 11 (64-bit)</span>
            <span>&bull;</span>
            <span className="text-[#00F5D4] font-bold">v{SITE_CONFIG.VERSION} PRODUCTION RELEASE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from "react";
import { SITE_CONFIG } from "../config/site";
import { FunnySleepingGuard } from "../components/FunnySleepingGuard";

interface FooterProps {
  onDownloadClick?: () => void;
  onRouteChange?: (route: "home" | "download") => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="border-t border-[#292D29] bg-[#070709] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#292D29]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#121512] border border-[#D4AF72]/30 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#D4AF72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l8 16 8-16" />
                    <circle cx="12" cy="14" r="1.5" fill="#087F5B" />
                  </svg>
                </div>
                <span className="font-bold text-base text-[#F7F5EF] font-mono tracking-wider">
                  {SITE_CONFIG.SITE_NAME}
                </span>
              </div>
              <FunnySleepingGuard />
            </div>
            <p className="text-zinc-400 font-medium text-xs max-w-sm">
              {SITE_CONFIG.SUPPORTING_TEXT}
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Product
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#providers" className="hover:text-white transition-colors">Provider Reliability</a>
              </li>
              <li>
                <a href="#desktop" className="hover:text-white transition-colors">Windows App</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Non-prominent text download link */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Installer
            </div>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={SITE_CONFIG.DOWNLOAD_URL}
                  download={SITE_CONFIG.INSTALLER_FILENAME}
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300 underline underline-offset-4"
                >
                  {SITE_CONFIG.INSTALLER_FILENAME} ({SITE_CONFIG.INSTALLER_SIZE})
                </a>
              </li>
              <li className="text-[11px] text-zinc-500">
                Supports Windows 10 &amp; 11 (64-bit)
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onRouteChange) onRouteChange("download");
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer text-zinc-400"
                >
                  Download Page Specs &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; 2026 {SITE_CONFIG.SITE_NAME}. All rights reserved. AI responses may require verification.
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <span>Windows 10 / 11 (64-bit)</span>
            <span>&bull;</span>
            <span>v{SITE_CONFIG.VERSION}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

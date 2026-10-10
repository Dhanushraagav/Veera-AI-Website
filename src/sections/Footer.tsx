import React from "react";
import { SITE_CONFIG } from "../config/site";

interface FooterProps {
  onDownloadClick: () => void;
  onRouteChange?: (route: "home" | "download") => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick, onRouteChange }) => {
  return (
    <footer className="border-t border-[#292D29] bg-[#070709] py-14 sm:py-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#292D29]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#18181b] border border-white/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l8 16 8-16" />
                  <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-base text-white font-mono tracking-wider">
                {SITE_CONFIG.SITE_NAME}
              </span>
            </div>
            <p className="text-zinc-400 font-medium text-xs max-w-sm">
              {SITE_CONFIG.TAGLINE} &bull; Windows Desktop Copilot
            </p>
            <p className="text-zinc-500 text-[11px] max-w-sm leading-relaxed">
              Designed for permitted or disclosed interview environments, interview preparation, and accessibility assistance.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Product
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#product" className="hover:text-white transition-colors">Overview</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onRouteChange) onRouteChange("download");
                    else onDownloadClick();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Download Page
                </button>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.DOWNLOAD_URL}
                  download={SITE_CONFIG.INSTALLER_FILENAME}
                  className="hover:text-white transition-colors text-left"
                >
                  Download for Windows
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Information
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#activation" className="hover:text-white transition-colors">Activation</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="mailto:support@veera.ai" className="hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; 2026 {SITE_CONFIG.SITE_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Windows 10 / Windows 11</span>
            <span>&bull;</span>
            <span>x64 Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
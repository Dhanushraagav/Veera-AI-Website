import React from "react";
import { motion } from "framer-motion";
import { Download, Monitor, CheckCircle2, Shield, HardDrive } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300">
            <Monitor className="w-3.5 h-3.5" />
            <span>NATIVE WINDOWS INSTALLER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Get Veera AI for Windows.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Experience real-time AI interview intelligence and instant grounded assistance on your Windows desktop.
          </p>

          {/* Download Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-8 sm:p-10 rounded-3xl bg-[#121512] border border-white/12 max-w-xl mx-auto shadow-2xl relative overflow-hidden text-left"
          >
            {/* Top Sheen */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="flex items-center justify-between pb-6 border-b border-[#292D29]">
              <div>
                <div className="text-lg font-bold text-white font-mono">Veera AI Desktop</div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">Architecture: 64-bit (x64)</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-300">
                v{SITE_CONFIG.VERSION}
              </span>
            </div>

            {/* Platform Tag */}
            <div className="py-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">SUPPORTED PLATFORM:</span>
                <span className="text-white font-medium">{SITE_CONFIG.SUPPORTED_PLATFORM}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">FILE SIZE:</span>
                <span className="text-zinc-300 font-medium">{SITE_CONFIG.INSTALLER_SIZE}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">FILE NAME:</span>
                <span className="text-zinc-300 font-medium">{SITE_CONFIG.INSTALLER_FILENAME}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">SECURITY:</span>
                <span className="text-[#087F5B] font-medium flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> Sandboxed Execution
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">LICENSE:</span>
                <span className="text-zinc-300 font-medium">Activation Key Protected</span>
              </div>
            </div>

            {/* Download Button */}
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

            <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-[#292D29] flex items-start gap-2.5">
              <HardDrive className="w-4 h-4 text-zinc-300 mt-0.5 shrink-0" />
              <div className="text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-200 font-medium block">Windows installer</span>
                Download the latest Veera AI desktop application for Windows.
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-6 pt-5 border-t border-[#292D29] space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Compatible with Windows 10 (1809+) &amp; Windows 11</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Minimum 4 GB RAM &amp; microphone input</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

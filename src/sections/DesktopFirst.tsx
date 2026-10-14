import React from "react";
import { motion } from "framer-motion";
import { Monitor, Command, HardDrive, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export const DesktopFirst: React.FC = () => {
  const specs = [
    { icon: Monitor, title: "Windows 10 / 11 Native", desc: "Engineered specifically for 64-bit Windows." },
    { icon: Command, title: "Global Shortcut (Ctrl + D)", desc: "Show or hide the assistant instantly." },
    { icon: HardDrive, title: "Lightweight Installer", desc: `Compact ~${SITE_CONFIG.INSTALLER_SIZE} standalone setup package.` },
    { icon: ShieldCheck, title: "Native Credential Vault", desc: "API keys stored locally in Windows security." },
  ];

  return (
    <section id="desktop" className="py-20 sm:py-28 relative overflow-hidden border-t border-[#292D29] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
              <Monitor className="w-3.5 h-3.5 text-[#087F5B]" />
              <span>NATIVE DESKTOP EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF]">
              Built for your Windows PC.
            </h2>

            <p className="text-sm sm:text-base text-[#B4B7B0] max-w-xl mx-auto leading-relaxed">
              Designed as a focused study companion that stays ready without getting in the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-5 rounded-xl bg-[#121512] border border-[#292D29] space-y-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#087F5B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#F7F5EF]">{item.title}</h3>
                  <p className="text-xs text-[#B4B7B0] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-[#121512] border border-[#292D29] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#B4B7B0]">
            <div>
              <span className="text-zinc-500">PACKAGE:</span> <span className="text-white">{SITE_CONFIG.INSTALLER_FILENAME}</span>
            </div>
            <div>
              <span className="text-zinc-500">SIZE:</span> <span className="text-[#D4AF72]">{SITE_CONFIG.INSTALLER_SIZE}</span>
            </div>
            <div>
              <span className="text-zinc-500">TARGET:</span> <span className="text-[#087F5B]">{SITE_CONFIG.SUPPORTED_PLATFORM} (64-bit)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

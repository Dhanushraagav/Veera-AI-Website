import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG, type ReliabilityPillar } from "../config/site";
import { Cpu, CheckCircle2, ShieldCheck, Shuffle, Key, Zap } from "lucide-react";

const pillarIcons = [Key, Shuffle, Zap, ShieldCheck];

export const AIProviders: React.FC = () => {
  return (
    <section id="providers" className="py-20 sm:py-28 relative overflow-hidden border-t border-[#292D29] bg-[#080908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <Cpu className="w-3.5 h-3.5 text-[#087F5B]" />
            <span>RELIABILITY &amp; ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF]">
            Provider reliability &amp; key ownership.
          </h2>
          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed">
            Configure your own API credentials in Settings. The desktop engine handles intelligent provider routing and automated fallback when limits are reached.
          </p>
        </div>

        {/* 4 Pillars Grid (No model names, pure architectural value) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {SITE_CONFIG.RELIABILITY_PILLARS.map((pillar: ReliabilityPillar, i: number) => {
            const Icon = pillarIcons[i] || Cpu;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#D4AF72]/30 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#087F5B] group-hover:bg-[#087F5B]/15 transition-all">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-[#292D29] text-zinc-400">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F7F5EF]">{pillar.title}</h3>
                  <p className="text-xs text-[#B4B7B0] leading-relaxed">{pillar.description}</p>
                </div>

                <div className="pt-3 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-[#D4AF72]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B] shrink-0" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible BYOK Disclosure */}
        <div className="mt-10 p-4 rounded-xl bg-[#121512]/60 border border-[#292D29] max-w-3xl mx-auto text-center text-xs text-[#B4B7B0] font-mono leading-relaxed">
          <span className="text-[#D4AF72] font-semibold">User Credential Notice:</span> Bring-Your-Own-Key (BYOK). Usage quotas, request limits, and billing depend entirely on your configured provider accounts. Credentials remain strictly encrypted in native Windows local storage.
        </div>
      </div>
    </section>
  );
};

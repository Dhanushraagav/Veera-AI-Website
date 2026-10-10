import React from "react";
import { motion } from "framer-motion";
import { Lock, HardDrive, Key, Shield } from "lucide-react";

export const PrivacySection: React.FC = () => {
  const points = [
    {
      icon: HardDrive,
      title: "Direct Client Inference",
      desc: "Requests are sent directly from your desktop app to provider APIs without proprietary intermediate servers.",
    },
    {
      icon: Key,
      title: "Local Credential Vault",
      desc: "API credentials for Gemini, Groq, OpenRouter, and Cloudflare are stored in native Windows secure storage.",
    },
    {
      icon: Shield,
      title: "Ephemeral Session Memory",
      desc: "Captured images and solutions exist in temporary local memory during your session and are cleared when closed.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden border-t border-[#292D29] bg-[#080908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <Lock className="w-3.5 h-3.5 text-[#087F5B]" />
            <span>TRANSPARENT SECURITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF]">
            Private by design.
          </h2>
          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed">
            Veera AI does not run user tracking databases. Note that configured AI providers process API requests remotely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#121512] border border-[#292D29] space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#087F5B] mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#F7F5EF]">{item.title}</h3>
                <p className="text-xs text-[#B4B7B0] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

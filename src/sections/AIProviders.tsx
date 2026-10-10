import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "../config/site";
import { Cpu, CheckCircle2 } from "lucide-react";

export const AIProviders: React.FC = () => {
  return (
    <section id="providers" className="py-20 sm:py-28 relative overflow-hidden border-t border-[#292D29] bg-[#080908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <Cpu className="w-3.5 h-3.5 text-[#087F5B]" />
            <span>SUPPORTED BACKENDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF]">
            Configurable AI providers.
          </h2>
          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed">
            Configure your preferred model in Settings. Automatic failover routes to your next compatible provider when rate limits or quotas are reached.
          </p>
        </div>

        {/* 4 Compact Provider Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {SITE_CONFIG.AI_PROVIDERS.map((provider, i) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-[#121512] border border-[#292D29] hover:border-[#D4AF72]/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#087F5B] font-semibold">{provider.visionSupport}</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-[#292D29] text-zinc-400">
                    {provider.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F7F5EF]">{provider.name}</h3>
                <p className="text-xs font-mono text-[#D4AF72] break-words">{provider.models}</p>
              </div>

              <div className="pt-3 border-t border-[#292D29] flex items-center gap-1.5 text-[11px] text-[#B4B7B0]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B] shrink-0" />
                <span>BYOK &bull; Auto Fallback</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#B4B7B0] font-mono max-w-2xl mx-auto">
          Requires valid user API credentials. Vision tasks strictly route to multimodal models.
        </div>
      </div>
    </section>
  );
};

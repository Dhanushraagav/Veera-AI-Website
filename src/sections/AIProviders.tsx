import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "../config/site";
import { Cpu, CheckCircle2 } from "lucide-react";

export const AIProviders: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <Cpu className="w-3.5 h-3.5 text-zinc-300" />
            <span>AI ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Choose the intelligence behind Veera AI.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Choose the model that fits your workflow. Veera AI seamlessly integrates three premier AI backends so you can tailor your assistant for speed, deep reasoning, or model flexibility.
          </p>
        </div>

        {/* 3 Provider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SITE_CONFIG.AI_PROVIDERS.map((provider, i) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-[#292D29]">
                    {provider.badge}
                  </span>
                  <span className="text-xs font-mono text-[#087F5B] font-semibold">
                    {provider.latency}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{provider.name}</h3>
                  <div className="text-xs font-medium text-zinc-400">{provider.tagline}</div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {provider.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[#292D29] space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B] shrink-0 mt-0.5" />
                  <span className="text-zinc-300 font-sans">{provider.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature summary row */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-[#292D29] max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs">
          <div>
            <span className="text-zinc-500 font-mono block mb-1">FLEXIBLE ROUTING</span>
            <span className="text-white font-medium">Switch models anytime during session</span>
          </div>
          <div>
            <span className="text-zinc-500 font-mono block mb-1">LOCAL CREDENTIALS</span>
            <span className="text-white font-medium">API keys never logged or bundled</span>
          </div>
          <div>
            <span className="text-zinc-500 font-mono block mb-1">ZERO LATENCY LOCK-IN</span>
            <span className="text-white font-medium">Native desktop networking layer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

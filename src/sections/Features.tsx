import React from "react";
import { motion } from "framer-motion";
import { Crop, Brain, Code, Shuffle } from "lucide-react";
import { SITE_CONFIG, type FeatureItem } from "../config/site";

const iconMap: Record<string, React.ElementType> = {
  Crop,
  Brain,
  Code,
  Shuffle,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden border-t border-[#292D29] bg-[#080908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <span>ENGINEERED FOR ACCURACY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF]">
            Precision problem solving.
          </h2>
          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed">
            Every feature in Veera AI is focused on visual screenshot understanding, verified answers, and clean code generation.
          </p>
        </div>

        {/* The 4 Distinctive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SITE_CONFIG.FEATURES.map((feature: FeatureItem, idx: number) => {
            const Icon = iconMap[feature.iconName] || Brain;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#D4AF72]/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow border sheen on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-[#D4AF72]/30 transition-all" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#D4AF72] group-hover:bg-[#087F5B]/15 group-hover:border-[#087F5B]/40 transition-all">
                      <Icon className="w-5 h-5 text-[#087F5B]" />
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#191D19] border border-[#292D29] text-[#D4AF72]">
                      {feature.number}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF72] block mb-1">
                      {feature.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-[#F7F5EF] group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-[#B4B7B0]">
                  <span>WINDOWS DESKTOP</span>
                  <span className="text-[#087F5B] font-semibold">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

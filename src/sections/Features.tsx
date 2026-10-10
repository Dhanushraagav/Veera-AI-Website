import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  FileText, 
  Target, 
  GitBranch, 
  Activity, 
  BarChart3, 
  Layers, 
  Monitor, 
  ShieldCheck,
  Command,
} from "lucide-react";
import { SITE_CONFIG, type FeatureItem } from "../config/site";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  FileText,
  Target,
  GitBranch,
  Activity,
  BarChart3,
  Layers,
  Monitor,
  ShieldCheck,
  Command,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <span>ENGINEERED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Intelligent by design.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Every feature in Veera AI is purpose-built to assist you live with sub-300ms intelligence, strict resume grounding, and complete privacy.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.FEATURES.map((feature: FeatureItem, idx: number) => {
            const Icon = iconMap[feature.iconName] || Cpu;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow border sheen on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/30 transition-all" />

                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                      {feature.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>DESKTOP SUITE</span>
                  <span>VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "../config/site";
import { Sliders, Mic, Brain, ArrowRight } from "lucide-react";

const stepIcons = [Sliders, Mic, Brain];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative overflow-hidden border-t border-[#292D29] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <span>DESKTOP WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF]">
            Configure. Listen. Solve.
          </h2>
          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed">
            Run natively inside the Windows desktop app with direct control over your sessions, keys, and triggers.
          </p>
        </div>

        {/* 3 Step Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SITE_CONFIG.WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Brain;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-[#D4AF72]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold font-mono text-zinc-600 group-hover:text-[#D4AF72] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#087F5B] group-hover:bg-[#087F5B]/15 group-hover:border-[#087F5B]/40 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#F7F5EF] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B4B7B0] leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>STEP 0{idx + 1} OF 03</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#087F5B] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-[#B4B7B0] font-mono">
          Note: Audio processing and question solving execute locally through your configured desktop client &mdash; not in the browser.
        </div>
      </div>
    </section>
  );
};

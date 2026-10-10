import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "../config/site";
import { ArrowRight, Mic, Sparkles, Brain, CheckCircle2 } from "lucide-react";

const stepIcons = [Mic, Sparkles, Brain, CheckCircle2];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <span>LIVE INTERVIEW PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            From spoken question to intelligent answer.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Veera AI continuously turns live interview audio into smart, context-aware answer suggestions — in four simple steps.
          </p>
        </div>

        {/* 4 Steps Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top sheen */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold font-mono text-zinc-500 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-[#087F5B] mb-1">
                    PHASE {step.number} &bull; {step.label}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-200 mb-3 leading-snug">
                    {step.summary}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {step.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>STEP 0{idx + 1} OF 04</span>
                  <div className="flex items-center gap-1 text-zinc-400 group-hover:text-zinc-200">
                    <span>Active Workflow</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
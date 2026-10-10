import React from "react";
import { motion } from "framer-motion";
import { FileText, Briefcase, HelpCircle, CheckCircle2, Plus, Sparkles, Building2, MessageSquare } from "lucide-react";

export const ContextAwareAI: React.FC = () => {
  const contextPillars = [
    {
      title: "Your Resume & Projects",
      desc: "Anchors technical stack, achievements, and metrics directly to your verified career history.",
      icon: FileText,
      tag: "CANDIDATE GROUNDING",
    },
    {
      title: "Target Job Description",
      desc: "Aligns suggested talking points with the specific responsibilities and criteria of the job.",
      icon: Briefcase,
      tag: "ROLE ALIGNMENT",
    },
    {
      title: "Company & Seniority",
      desc: "Tunes language, depth, and architectural expectations for the target organization.",
      icon: Building2,
      tag: "COMPANY SPEC",
    },
    {
      title: "Conversation Continuity",
      desc: "Maintains session timeline to seamlessly resolve follow-up questions ('What tech did you use for that?').",
      icon: MessageSquare,
      tag: "SHORT-TERM MEMORY",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>GROUNDED INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            It knows your context.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Generic AI invents details. Veera AI grounds every suggestion in your real experience, the job description, and the conversation so far.
          </p>
        </div>

        {/* Visual Context Equation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#121512] border border-[#292D29] shadow-2xl mb-16 relative overflow-hidden"
        >
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider text-center mb-6">
            The Grounded Formulation Formula
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-4 text-center">
            {/* 1. Resume */}
            <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-[#292D29] space-y-1.5">
              <FileText className="w-6 h-6 text-zinc-300 mx-auto" />
              <div className="text-sm font-semibold text-white">Your Resume</div>
              <div className="text-xs text-zinc-400">Skills, Projects, Experience</div>
            </div>

            {/* Plus */}
            <div className="flex justify-center">
              <Plus className="w-5 h-5 text-zinc-500" />
            </div>

            {/* 2. Job Description */}
            <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-[#292D29] space-y-1.5">
              <Briefcase className="w-6 h-6 text-zinc-300 mx-auto" />
              <div className="text-sm font-semibold text-white">Job Description</div>
              <div className="text-xs text-zinc-400">Role, Stack, Seniority</div>
            </div>

            {/* Plus */}
            <div className="flex justify-center">
              <Plus className="w-5 h-5 text-zinc-500" />
            </div>

            {/* 3. Spoken Question */}
            <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-[#292D29] space-y-1.5">
              <HelpCircle className="w-6 h-6 text-zinc-300 mx-auto" />
              <div className="text-sm font-semibold text-white">Interview Question</div>
              <div className="text-xs text-zinc-400">Captured in real time</div>
            </div>
          </div>

          {/* Equal Result */}
          <div className="mt-6 pt-6 border-t border-[#292D29] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#087F5B]/20 border border-[#087F5B]/30 flex items-center justify-center text-[#087F5B] shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">Context-Aware Answer Formulation</div>
                <div className="text-xs text-zinc-400">Natural, concise talking points strictly grounded in your actual work.</div>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#087F5B]/10 text-[#087F5B] border border-[#087F5B]/25 whitespace-nowrap">
              ZERO FABRICATED EXPERIENCE
            </span>
          </div>
        </motion.div>

        {/* 4 Context Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contextPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-white/15 transition-all space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-white">
                  <Icon className="w-4 h-4 text-zinc-300" />
                </div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">{pillar.tag}</div>
                <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

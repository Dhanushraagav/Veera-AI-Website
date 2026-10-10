import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, HardDrive, Key, UserCheck } from "lucide-react";

export const PrivacySection: React.FC = () => {
  const privacyPillars = [
    {
      icon: UserCheck,
      title: "No Mandatory Account System",
      desc: "Veera AI requires no cloud login, email sign-up, or tracking database. Your license validates directly against your workstation hardware ID.",
    },
    {
      icon: HardDrive,
      title: "Runtime-Only Session Memory",
      desc: "Speech transcripts and AI suggestions reside in volatile system RAM during your active session. They are immediately cleared when closed.",
    },
    {
      icon: Key,
      title: "Protected API Key Management",
      desc: "Credentials for Gemini, Groq, or OpenRouter are stored locally and resolved securely in native code without being logged or exposed.",
    },
    {
      icon: Shield,
      title: "Full User Configuration",
      desc: "You retain complete control over permitted audio inputs, model choices, resume documents, and session lifecycles.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <Lock className="w-3.5 h-3.5 text-zinc-300" />
            <span>CONFIDENTIALITY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Your interview context stays yours.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Your career details and interview conversations stay on your device. Veera AI works in temporary memory — nothing is stored in the cloud.
          </p>
        </div>

        {/* 4 Privacy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {privacyPillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#121512] border border-[#292D29] hover:border-white/15 transition-all space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-white mb-2">
                  <Icon className="w-4 h-4 text-[#087F5B]" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
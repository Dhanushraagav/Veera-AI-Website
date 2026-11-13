import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  HardDrive,
  Key,
  Shield,
  CheckCircle2,
  ServerOff,
  EyeOff,
  FileKey,
} from "lucide-react";

export const PrivacySection: React.FC = () => {
  const securityPillars = [
    {
      icon: ServerOff,
      title: "Direct Client-to-API Inference",
      badge: "ZERO RELAY",
      desc: "All audio transcription, vision OCR, and reasoning requests originate straight from your desktop application to your chosen AI provider endpoints via TLS 1.3 encryption. No proprietary proxy or middleman server ever sees or inspects your session data.",
    },
    {
      icon: FileKey,
      title: "Hardware-Backed DPAPI Vault",
      badge: "WINDOWS NATIVE",
      desc: "Your personal provider API keys are saved exclusively on your local machine, encrypted at rest using the native Windows Data Protection API (DPAPI). Keys never touch cloud keyrings or remote databases.",
    },
    {
      icon: Shield,
      title: "Volatile Ephemeral Memory",
      badge: "RAM ONLY",
      desc: "Audio buffers, speech transcripts, cropped screenshots, and AI responses reside purely in volatile system memory during your active practice session. Once you end the session or close the app, the memory is wiped permanently.",
    },
    {
      icon: EyeOff,
      title: "Zero User Telemetry & Tracking",
      badge: "NO ANALYTICS",
      desc: "Veera AI contains zero advertising SDKs, behavioral tracking scripts, or audio analytics. We don't record who you are, what questions you practice, or what solutions you generate.",
    },
  ];

  return (
    <section id="privacy" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#070807]">
      {/* Subtle emerald and gold ambient aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#00F5D4]/[0.05] via-[#087F5B]/[0.03] to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <Lock className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>TRANSPARENT ARCHITECTURAL SECURITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF] leading-tight">
            Private by design. <br />
            <span className="brand-gradient-text">Zero intermediate storage.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed max-w-2xl mx-auto">
            Veera AI operates locally on your machine with direct socket communication to your configured provider accounts.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="max-w-4xl mx-auto mb-14 p-6 sm:p-7 rounded-2xl bg-[#0f120f] border border-[#292D29] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            {/* Node 1: Local PC */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141814] border border-[#292D29] w-full sm:w-auto">
              <div className="w-8 h-8 rounded-lg bg-[#087F5B]/20 border border-[#087F5B]/40 flex items-center justify-center text-[#00F5D4]">
                <HardDrive className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-bold">Your Windows PC</div>
                <div className="text-[10px] text-zinc-400">DPAPI Local Vault</div>
              </div>
            </div>

            {/* Glowing Conduit with Direct Connection Badge */}
            <div className="flex-1 flex flex-col items-center justify-center py-2 sm:py-0 w-full">
              <div className="flex items-center gap-1.5 text-[10px] text-[#00F5D4] font-semibold mb-1">
                <CheckCircle2 className="w-3 h-3 text-[#00F5D4]" />
                <span>Direct TLS 1.3 Encrypted Socket</span>
              </div>
              <div className="w-full h-[2px] bg-gradient-to-r from-[#00F5D4] via-[#D4AF72] to-[#00F5D4] relative">
                <div className="absolute inset-0 bg-[#00F5D4] animate-pulse" />
              </div>
              <span className="text-[9px] text-zinc-500 mt-1 uppercase">Zero Intermediary Proxy Servers</span>
            </div>

            {/* Node 2: AI Provider Endpoint */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141814] border border-[#292D29] w-full sm:w-auto">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF72]/20 border border-[#D4AF72]/40 flex items-center justify-center text-[#D4AF72]">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-bold">AI Provider APIs</div>
                <div className="text-[10px] text-zinc-400">Groq / Anthropic / OpenAI</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {securityPillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#101310] border border-[#292D29] hover:border-[#00F5D4]/30 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-[#292D29] flex items-center justify-center text-[#00F5D4] group-hover:bg-[#087F5B]/20 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[#D4AF72]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F7F5EF]">{item.title}</h3>
                  <p className="text-xs text-[#B4B7B0] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#292D29] flex items-center gap-1.5 text-[11px] font-mono text-[#00F5D4]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Enforced at application kernel level</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Third-Party Provider Notice */}
        <div className="mt-12 text-center text-xs text-[#B4B7B0] font-mono max-w-2xl mx-auto leading-relaxed">
          Note: Direct network inference calls connect straight from your machine to your chosen external AI provider endpoints per their respective API privacy and data usage terms.
        </div>
      </div>
    </section>
  );
};

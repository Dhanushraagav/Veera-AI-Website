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
    <section id="privacy" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#1e2822] bg-[#040605]">
      {/* Subtle emerald and gold ambient aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#00F5D4]/[0.05] via-[#D4AF72]/[0.03] to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/35 text-xs font-mono text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Lock className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase">2050 HARDWARE CRYPTOGRAPHY // ZERO-TRUST AIRGAP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cyber font-extrabold tracking-tight text-[#F7F5EF] leading-tight">
            Private by design. <br />
            <span className="brand-gradient-text drop-shadow-[0_0_35px_rgba(0,245,212,0.35)]">Zero intermediate storage.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9aa39e] leading-relaxed max-w-2xl mx-auto">
            Veera AI operates locally on your machine with direct hardware-secured socket communication to your configured provider accounts.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto mb-14 p-6 sm:p-8 rounded-2xl cyber-card shadow-2xl relative overflow-hidden">
          <div className="cyber-reticle cyber-reticle-tl" />
          <div className="cyber-reticle cyber-reticle-tr" />
          <div className="cyber-reticle cyber-reticle-bl" />
          <div className="cyber-reticle cyber-reticle-br" />

          <div className="text-[10px] font-mono text-[#D4AF72] mb-4 uppercase tracking-widest flex items-center justify-between">
            <span>// DIRECT KERNEL SOCKET TELEMETRY</span>
            <span className="text-[#00F5D4]">ENCRYPTION: TLS 1.3 / DPAPI</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            {/* Node 1: Local PC */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#040605] border border-[#00F5D4]/30 w-full sm:w-auto shadow-[0_0_15px_rgba(0,245,212,0.1)]">
              <div className="w-9 h-9 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/40 flex items-center justify-center text-[#00F5D4]">
                <HardDrive className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-cyber text-xs font-bold">Your Windows PC</div>
                <div className="text-[10px] text-[#00F5D4]">DPAPI Kernel Storage</div>
              </div>
            </div>

            {/* Glowing Conduit with Direct Connection Badge */}
            <div className="flex-1 flex flex-col items-center justify-center py-2 sm:py-0 w-full px-4">
              <div className="flex items-center gap-1.5 text-[10px] text-[#00F5D4] font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span className="tracking-wider uppercase">Direct TLS 1.3 Encrypted Socket</span>
              </div>
              <div className="w-full h-[3px] bg-[#1e2822] rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4] via-[#D4AF72] to-[#00F5D4] animate-pulse" />
              </div>
              <span className="text-[9px] text-zinc-500 mt-1 uppercase font-mono tracking-wider">Zero Intermediary Proxy Servers // Direct Client-to-API</span>
            </div>

            {/* Node 2: AI Provider Endpoint */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#040605] border border-[#D4AF72]/30 w-full sm:w-auto shadow-[0_0_15px_rgba(212,175,114,0.1)]">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF72]/10 border border-[#D4AF72]/40 flex items-center justify-center text-[#D4AF72]">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-cyber text-xs font-bold">AI Provider APIs</div>
                <div className="text-[10px] text-[#D4AF72]">Groq / Anthropic / OpenAI</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto">
          {securityPillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="p-6 rounded-2xl cyber-card flex flex-col justify-between space-y-4 group relative"
              >
                <div className="cyber-reticle cyber-reticle-tl" />
                <div className="cyber-reticle cyber-reticle-br" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4] group-hover:bg-[#00F5D4]/20 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-[#00F5D4]/20 text-[#D4AF72] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F7F5EF] font-cyber">{item.title}</h3>
                  <p className="text-xs text-[#9aa39e] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#1e2822] flex items-center gap-1.5 text-[11px] font-mono text-[#00F5D4]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="tracking-wide uppercase">Enforced at application kernel level</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Third-Party Provider Notice */}
        <div className="mt-12 text-center text-xs text-[#9aa39e] font-mono max-w-2xl mx-auto leading-relaxed p-4 rounded-xl cyber-card relative">
          <div className="cyber-reticle cyber-reticle-tl" />
          <div className="cyber-reticle cyber-reticle-br" />
          <span className="text-[#D4AF72] font-semibold uppercase">[ AIRGAP POLICY NOTICE ]:</span> Direct network inference calls connect straight from your machine to your chosen external AI provider endpoints per their respective API privacy and data usage terms.
        </div>
      </div>
    </section>
  );
};

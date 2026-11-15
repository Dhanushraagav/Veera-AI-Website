import React, { useState } from "react";
import {
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Key,
  Shuffle,
  ArrowRight,
} from "lucide-react";
import { FunnyJugglingBot } from "../components/FunnyJugglingBot";

interface ProviderSpec {
  id: string;
  name: string;
  tag: string;
  bestFor: string;
  latency: string;
  models: string;
  badgeColor: string;
}

const SUPPORTED_PROVIDERS: ProviderSpec[] = [
  {
    id: "groq",
    name: "Groq",
    tag: "LPU Inference Engine",
    bestFor: "Real-time Whisper transcription & sub-250ms instant aptitude answers",
    latency: "<220ms",
    models: "Llama 3.3 70B • Whisper Large v3",
    badgeColor: "#FF6B4A",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    tag: "Deep Architectural Reasoning",
    bestFor: "Complex system design, STAR behavioral matrix & nuanced technical trade-offs",
    latency: "380ms",
    models: "Claude 3.5 Sonnet • Claude 3.7 Sonnet",
    badgeColor: "#D4AF72",
  },
  {
    id: "openai",
    name: "OpenAI",
    tag: "Multimodal Vision & Code",
    bestFor: "Screenshot OCR parsing, LeetCode algorithms & geometry MCQ extraction",
    latency: "340ms",
    models: "GPT-4o • GPT-4o mini",
    badgeColor: "#10A37F",
  },
  {
    id: "gemini",
    name: "Google Gemini",
    tag: "Long-Context Multimodal",
    bestFor: "Massive context retention, code analysis & reasoning depth",
    latency: "290ms",
    models: "Gemini 2.0 Flash • Gemini 1.5 Pro",
    badgeColor: "#4285F4",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    tag: "Universal Gateway",
    bestFor: "Access to 100+ open-source models (DeepSeek R1, Qwen, Mistral) & fallback routing",
    latency: "Varies",
    models: "DeepSeek R1 • Qwen 2.5 • Mistral",
    badgeColor: "#00F5D4",
  },
];

export const AIProviders: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<ProviderSpec>(SUPPORTED_PROVIDERS[0]);
  const [simulatingFailover, setSimulatingFailover] = useState<boolean>(false);
  const [activeRouteStatus, setActiveRouteStatus] = useState<string>("Primary (Groq)");

  const handleTriggerFailoverDemo = () => {
    setSimulatingFailover(true);
    setActiveRouteStatus("HTTP 429 Rate Limit Detected on Primary...");
    setTimeout(() => {
      setActiveRouteStatus("Auto-rerouted to Anthropic Claude in 118ms (Zero Session Loss)");
      setTimeout(() => {
        setSimulatingFailover(false);
        setActiveRouteStatus("Primary Healthy • Dynamic Failover Active");
      }, 3500);
    }, 1200);
  };

  return (
    <section id="providers" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#070807]">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[400px] bg-gradient-to-b from-[#00F5D4]/[0.05] via-[#D4AF72]/[0.04] to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/35 text-xs font-mono text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Cpu className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase">2050 NEURAL LATTICE // ARBITRATED PROVIDER FABRIC</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cyber font-extrabold tracking-tight text-[#F7F5EF] leading-tight">
            Bring your own keys. <br />
            <span className="brand-gradient-text drop-shadow-[0_0_35px_rgba(0,245,212,0.35)]">Zero vendor lock-in.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9aa39e] leading-relaxed max-w-2xl mx-auto">
            Configure your personal API keys in desktop Settings. Veera AI handles task-specific provider routing, transcription dispatch, and automatic sub-150ms failover when rate limits are hit.
          </p>
        </div>

        {/* Mascot Easter Egg Animation */}
        <div className="flex justify-center mb-10">
          <FunnyJugglingBot />
        </div>

        {/* Interactive Provider Cards & Failover Lab */}
        <div className="w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Left Column: Supported Providers List */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#D4AF72] mb-1">
              <span>SUPPORTED NATIVE PROVIDERS</span>
              <span className="text-zinc-500">SELECT TO INSPECT</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SUPPORTED_PROVIDERS.map((provider) => {
                const isSelected = selectedProvider.id === provider.id;
                return (
                  <button
                    key={provider.id}
                    onClick={() => setSelectedProvider(provider)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? "bg-[#141a14] border-[#00F5D4]/50 shadow-[0_0_20px_rgba(0,245,212,0.15)]"
                        : "bg-[#101310] border-[#292D29] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: provider.badgeColor }}
                        />
                        <span className="font-bold font-mono text-sm text-[#F7F5EF]">
                          {provider.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[#D4AF72]">
                        {provider.latency}
                      </span>
                    </div>

                    <p className="text-xs text-[#B4B7B0] leading-snug">
                      {provider.bestFor}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>{provider.models}</span>
                      <ArrowRight className={`w-3 h-3 ${isSelected ? "text-[#00F5D4]" : "text-zinc-600"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Failover & Quota Routing Simulator */}
          <div className="cyber-card p-6 rounded-2xl flex flex-col justify-between space-y-5">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#00F5D4] font-bold flex items-center gap-1.5 uppercase tracking-wide">
                  <Shuffle className="w-3.5 h-3.5 text-[#00F5D4]" />
                  RESILIENT QUOTA FAILOVER
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#00F5D4]/10 text-[#00F5D4] font-bold border border-[#00F5D4]/30">
                  // ARMED
                </span>
              </div>

              <p className="text-xs text-[#B4B7B0] leading-relaxed">
                If your primary provider encounters rate limits (HTTP 429), quota exhaustion, or temporary latency spikes, Veera AI instantly redirects the request to your configured backup provider with zero chat interruption.
              </p>

              {/* Status Box */}
              <div className="p-3.5 rounded-xl bg-[#040605] border border-[#00F5D4]/20 space-y-2 font-mono text-xs">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                  <span>// LIVE ROUTER TELEMETRY</span>
                  <span className="text-[9px] text-[#00F5D4]">CYCLE: 118ms</span>
                </div>
                <div className={`text-xs font-bold tracking-wide ${simulatingFailover ? "text-amber-300 animate-pulse" : "text-[#00F5D4]"}`}>
                  {activeRouteStatus}
                </div>
                <div className="text-[10px] text-zinc-400 pt-1 border-t border-white/5">
                  Fallback Target: <strong className="text-white">Anthropic Claude / OpenRouter</strong>
                </div>
              </div>

              <button
                onClick={handleTriggerFailoverDemo}
                disabled={simulatingFailover}
                className="w-full py-3 px-4 cyber-btn-primary text-xs font-bold cursor-pointer transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-black" />
                <span>{simulatingFailover ? "[ SIMULATING AUTO-FAILOVER... ]" : "[ SIMULATE RATE LIMIT FAILOVER ]"}</span>
              </button>
            </div>

            <div className="pt-3 border-t border-[#1e2822] text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
              <span>Direct client-to-API inference. Zero proxy servers.</span>
            </div>
          </div>
        </div>

        {/* 4 Architectural Reliability Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px] 2xl:max-w-[1550px] mx-auto">
          <div className="cyber-card p-5 rounded-xl space-y-3">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#D4AF72]">
              <Key className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">Personal Key Ownership</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              Use your personal API keys. Usage limits, rate quotas, and tier billing remain entirely under your accounts with zero markups.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-xl space-y-3">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
              <Shuffle className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">Smart Task Routing</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              Dynamically routes speech transcription, vision OCR, coding solutions, and system design to whichever configured model performs best.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-xl space-y-3">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-lg bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72]">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">Sub-150ms Failover</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              If an endpoint returns an error or HTTP 429, the internal router gracefully falls back to your secondary configured model instantly.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-xl space-y-3">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
              <ShieldCheck className="w-4 h-4 text-[#00F5D4]" />
            </div>
            <h3 className="text-sm font-bold text-[#F7F5EF] font-cyber">Direct Local Encryption</h3>
            <p className="text-xs text-[#9aa39e] leading-relaxed">
              All keys are encrypted locally using Windows DPAPI. Requests are dispatched directly via TLS 1.3 straight to provider endpoints.
            </p>
          </div>
        </div>

        {/* Responsible BYOK Notice */}
        <div className="mt-10 p-4 rounded-xl cyber-card max-w-3xl mx-auto text-center text-xs text-[#9aa39e] font-mono leading-relaxed relative">
          <div className="cyber-reticle cyber-reticle-tl" />
          <div className="cyber-reticle cyber-reticle-br" />
          <span className="text-[#D4AF72] font-semibold tracking-wider uppercase">[ USER ACCOUNT TELEMETRY ]:</span> Bring-Your-Own-Key (BYOK). Requests are billed directly to your respective provider developer accounts. No middleman subscription fees or proprietary token taxes.
        </div>
      </div>
    </section>
  );
};

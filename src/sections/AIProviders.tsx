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
  const [activeRouteStatus, setActiveRouteStatus] = useState<string>("Primary Route (Groq) &bull; Healthy");

  const handleTriggerFailoverDemo = () => {
    setSimulatingFailover(true);
    setActiveRouteStatus("HTTP 429 Rate Limit Detected on Primary...");
    setTimeout(() => {
      setActiveRouteStatus("Auto-rerouted to Anthropic Claude in 118ms (Zero Session Loss)");
      setTimeout(() => {
        setSimulatingFailover(false);
        setActiveRouteStatus("Primary Healthy &bull; Dynamic Failover Active");
      }, 3500);
    }, 1200);
  };

  return (
    <section id="providers" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#1a241f] bg-[#060907]">
      {/* Zero-Lag Hardware-Accelerated Ambient Glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none -z-10" />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4]">
            <Cpu className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase font-semibold">PROVIDER FABRIC &bull; DYNAMIC ROUTING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Bring your own keys. <br />
            <span className="brand-gradient-text">Zero vendor lock-in.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
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
            <div className="flex items-center justify-between text-xs font-mono text-[#D4AF72] mb-1 font-semibold">
              <span>SUPPORTED NATIVE PROVIDERS</span>
              <span className="text-slate-400">SELECT TO INSPECT</span>
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
                        ? "bg-[#0e1712] border-[#00F5D4]/50 shadow-md"
                        : "bg-[#0a0f0c] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: provider.badgeColor }}
                        />
                        <span className="font-bold font-mono text-sm text-white">
                          {provider.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 border border-white/10 text-[#D4AF72]">
                        {provider.latency}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-snug font-normal">
                      {provider.bestFor}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{provider.models}</span>
                      <ArrowRight className={`w-3 h-3 ${isSelected ? "text-[#00F5D4]" : "text-slate-500"}`} />
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
                  ARMED
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                If your primary provider encounters rate limits (HTTP 429), quota exhaustion, or temporary latency spikes, Veera AI instantly redirects the request to your configured backup provider with zero session loss.
              </p>

              {/* Status Box */}
              <div className="p-3.5 rounded-xl bg-[#090e0b] border border-white/10 space-y-2 font-mono text-xs">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>// ROUTER TELEMETRY</span>
                  <span className="text-[9px] text-[#00F5D4]">118ms FAILOVER</span>
                </div>
                <div className={`text-xs font-bold tracking-wide ${simulatingFailover ? "text-amber-300 animate-pulse" : "text-[#00F5D4]"}`}>
                  {activeRouteStatus}
                </div>
                <div className="text-[10px] text-slate-400 pt-1 border-t border-white/5">
                  Fallback Target: <strong className="text-white">Anthropic Claude / OpenRouter</strong>
                </div>
              </div>

              <button
                onClick={handleTriggerFailoverDemo}
                disabled={simulatingFailover}
                className="w-full py-3 px-4 cyber-btn-primary text-xs font-bold cursor-pointer transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-[#040605]" />
                <span>{simulatingFailover ? "Failover in Progress..." : "Simulate Rate Limit Failover"}</span>
              </button>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
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
            <h3 className="text-sm font-bold text-white">Personal Key Ownership</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Use your personal API keys. Usage limits, rate quotas, and tier billing remain entirely under your accounts with zero markups.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-xl space-y-3">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
              <Shuffle className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Smart Task Routing</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Dynamically routes speech transcription, vision OCR, coding solutions, and system design to whichever configured model performs best.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-xl space-y-3">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-lg bg-[#D4AF72]/10 border border-[#D4AF72]/30 flex items-center justify-center text-[#D4AF72]">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Sub-150ms Failover</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              If an endpoint returns an error or HTTP 429, the internal router gracefully falls back to your secondary configured model instantly.
            </p>
          </div>

          <div className="cyber-card p-5 rounded-xl space-y-3">
            <div className="cyber-reticle cyber-reticle-tl" />
            <div className="cyber-reticle cyber-reticle-br" />
            <div className="w-9 h-9 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
              <ShieldCheck className="w-4 h-4 text-[#00F5D4]" />
            </div>
            <h3 className="text-sm font-bold text-white">Direct Local Encryption</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              All keys are encrypted locally using Windows DPAPI. Requests are dispatched directly via TLS 1.3 straight to provider endpoints.
            </p>
          </div>
        </div>

        {/* Responsible BYOK Notice */}
        <div className="mt-10 p-4 rounded-xl cyber-card max-w-3xl mx-auto text-center text-xs text-slate-300 font-mono leading-relaxed relative">
          <div className="cyber-reticle cyber-reticle-tl" />
          <div className="cyber-reticle cyber-reticle-br" />
          <span className="text-[#D4AF72] font-semibold tracking-wider uppercase">[ USER ACCOUNT NOTICE ]:</span> Bring-Your-Own-Key (BYOK). Requests are billed directly to your respective provider developer accounts. No middleman subscription fees or proprietary token taxes.
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Zap,
  Check,
  Copy,
  Sparkles,
  Mic,
  Code2,
  EyeOff,
} from "lucide-react";

interface SampleScenario {
  id: string;
  category: string;
  question: string;
  provider: string;
  latency: string;
  complexity?: string;
  directAnswer: string;
  bulletPoints: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}

const SCENARIOS: SampleScenario[] = [
  {
    id: "system-design",
    category: "System Design",
    question: "How do you design a distributed rate limiter for 100k requests/sec across 4 regions?",
    provider: "Groq Llama 3.3 70B",
    latency: "210ms",
    complexity: "O(1) time • Zero cross-region lock overhead",
    directAnswer:
      "Use Token Bucket algorithm with local in-memory token pools reconciled asynchronously to Redis Cluster via sliding-window hash counters.",
    bulletPoints: [
      "Local node cache handles 99% of checks in <1ms without network hops.",
      "Redis Cluster with HINCRBYFLOAT syncs aggregated token consumption every 100ms.",
      "Fallback to local graceful degradation if inter-region network partitions occur.",
    ],
    codeSnippet: {
      language: "Python / Redis",
      code: `def allow_request(user_id: str, limit: int = 100, window: int = 60) -> bool:
    # 1. Check ultra-fast local memory bucket
    if local_bucket.consume(user_id):
        return True
    # 2. Reconcile with regional Redis pipeline
    current_tokens = redis.eval(TOKEN_BUCKET_LUA, 1, user_id, limit, window)
    return current_tokens > 0`,
    },
  },
  {
    id: "algorithms",
    category: "Coding & Complexity",
    question: "Design an LRU Cache with O(1) get and put operations.",
    provider: "Claude 3.5 Sonnet",
    latency: "280ms",
    complexity: "Time: O(1) | Space: O(capacity)",
    directAnswer:
      "Pair a Hash Map with a Doubly Linked List. The hash map stores key-to-node pointers for O(1) lookup, while the linked list maintains access recency order for O(1) eviction.",
    bulletPoints: [
      "Most recently accessed nodes move directly to head.",
      "Evict from tail when count exceeds maximum capacity.",
      "Dummy head and tail nodes eliminate null-pointer edge cases.",
    ],
    codeSnippet: {
      language: "TypeScript",
      code: `class LRUCache {
  private map = new Map<number, Node>();
  private head = new Node(0, 0);
  private tail = new Node(0, 0);

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
  }
}`,
    },
  },
  {
    id: "behavioral",
    category: "STAR Behavioral",
    question: "Tell me about a time you strongly disagreed with a senior engineer's architectural decision.",
    provider: "OpenAI GPT-4o",
    latency: "340ms",
    directAnswer:
      "I advocated for an asynchronous event-driven queue instead of synchronous RPC calls during a high-traffic microservices refactor.",
    bulletPoints: [
      "Situation & Task: Senior engineer proposed synchronous REST chaining across 5 services for a checkout pipeline.",
      "Action: Built a rapid benchmark prototype showing cascading 504 timeouts under 8,000 req/min, presented data respectfully with a graceful fallback plan.",
      "Result: Team adopted Kafka-backed queues, eliminating cascading failures and reducing p99 latency from 1.4s to 120ms.",
    ],
  },
];

export const LiveHudStage: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<SampleScenario>(SCENARIOS[0]);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const content = `${activeScenario.directAnswer}\n\n${activeScenario.bulletPoints.join("\n")}${
      activeScenario.codeSnippet ? `\n\n${activeScenario.codeSnippet.code}` : ""
    }`;
    navigator.clipboard?.writeText?.(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative group">
      {/* Outer Holographic Glow Halo */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#00F5D4]/60 via-[#D4AF72]/40 to-[#8B5CF6]/30 shadow-[0_30px_90px_-20px_rgba(0,245,212,0.25)]">
        {/* Sci-Fi Corner Reticles */}
        <div className="cyber-reticle cyber-reticle-tl" />
        <div className="cyber-reticle cyber-reticle-tr" />
        <div className="cyber-reticle cyber-reticle-bl" />
        <div className="cyber-reticle cyber-reticle-br" />

        {/* Main Floating Glass HUD Window (2050 Cockpit) */}
        <div className="rounded-2xl bg-[#060907]/95 backdrop-blur-2xl border border-[#00F5D4]/20 overflow-hidden text-[#F7F5EF] flex flex-col shadow-2xl">
          {/* Top Window Titlebar (2050 Cyber Cockpit) */}
          <div className="px-4 py-3 bg-[#0a0f0c] border-b border-[#00F5D4]/20 flex flex-wrap items-center justify-between gap-3 select-none">
            {/* Left Controls & Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_rgba(0,245,212,0.6)]" />
              </div>

              <div className="h-4 w-[1px] bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#0a0f0c] border border-[#00F5D4]/60 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-[#00F5D4] rounded-full animate-ping" />
                </div>
                <span className="text-xs font-cyber font-bold tracking-wider text-[#F7F5EF]">
                  QUANTUM HUD CORE
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-semibold">
                  v3.0.1 // PROD
                </span>
              </div>
            </div>

            {/* Middle Live Status Indicators */}
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] shadow-[0_0_12px_rgba(0,245,212,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                <span className="tracking-wide">NEURAL EAR: 48kHz ACTIVE</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111714] border border-[#D4AF72]/30 text-[#D4AF72]">
                <Zap className="w-3 h-3 text-[#D4AF72]" />
                <span>{activeScenario.latency} LATENCY</span>
              </span>
            </div>

            {/* Right Cloaking & Hotkey Indicators */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#00F5D4]/15 border border-[#00F5D4]/50 text-[10px] font-mono text-[#00F5D4] font-bold shadow-[0_0_10px_rgba(0,245,212,0.25)]" title="Window excluded from screen captures and video calls">
                <EyeOff className="w-3 h-3" />
                <span className="hidden md:inline">DWM CLOAK: 100%</span>
              </span>

              <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-black border border-[#00F5D4]/30 text-[10px] font-mono text-[#00F5D4] font-bold">
                Ctrl + D
              </kbd>
            </div>
          </div>

          {/* Interactive Question Mode Switcher Tabs */}
          <div className="px-4 py-2 bg-[#050806] border-b border-[#00F5D4]/15 flex items-center justify-between gap-2 overflow-x-auto">
            <span className="text-[10px] font-mono text-[#9aa39e] uppercase shrink-0 hidden sm:inline tracking-wider">
              // TELEMETRY SIMULATOR:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenario(sc)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
                    activeScenario.id === sc.id
                      ? "bg-[#00F5D4]/20 text-[#00F5D4] border border-[#00F5D4]/50 shadow-[0_0_15px_rgba(0,245,212,0.25)] font-bold"
                      : "text-[#9aa39e] hover:text-[#F7F5EF] hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  {sc.category}
                </button>
              ))}
            </div>
          </div>

          {/* Live Content Feed */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Detected Question Banner with Animated Multi-Frequency Equalizer */}
            <div className="p-4 rounded-xl bg-[#0a0f0c] border border-[#00F5D4]/25 space-y-2.5 relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-[#00F5D4]">
                  <Mic className="w-3.5 h-3.5 text-[#00F5D4]" />
                  <span className="font-bold uppercase tracking-wider">
                    INTERVIEWER QUESTION DETECTED [SPEECH_ISOLATION_OK]
                  </span>
                </div>

                {/* Animated Soundwave Equalizer (8 Frequency Bands) */}
                <div className="flex items-center gap-1 h-3.5 px-2.5 py-0.5 rounded bg-black/60 border border-[#00F5D4]/30 shadow-inner">
                  <span className="w-0.5 h-2 rounded bg-[#00F5D4] animate-pulse" />
                  <span className="w-0.5 h-3.5 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "120ms" }} />
                  <span className="w-0.5 h-1.5 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "240ms" }} />
                  <span className="w-0.5 h-3 rounded bg-[#0DFA9E] animate-pulse" style={{ animationDelay: "60ms" }} />
                  <span className="w-0.5 h-2.5 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "180ms" }} />
                  <span className="w-0.5 h-1 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "300ms" }} />
                  <span className="w-0.5 h-3.5 rounded bg-[#D4AF72] animate-pulse" style={{ animationDelay: "90ms" }} />
                  <span className="w-0.5 h-2 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "210ms" }} />
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#F7F5EF] leading-snug">
                "{activeScenario.question}"
              </p>
            </div>

            {/* Grounded AI Response Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Direct Answer-First Conclusion (Cyber Synthesis) */}
                <div className="p-4 rounded-xl bg-[#08120e] border border-[#00F5D4]/40 shadow-[0_0_20px_rgba(0,245,212,0.12)] space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#00F5D4] font-bold flex items-center gap-1.5 uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" />
                      COGNITIVE SYNTHESIS [DIRECT CONCLUSION FIRST]
                    </span>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#9aa39e] hover:text-[#00F5D4] transition-colors cursor-pointer px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/5"
                      title="Copy full suggested response"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-[#00F5D4]" />
                          <span className="text-[#00F5D4]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F7F5EF] font-medium leading-relaxed">
                    {activeScenario.directAnswer}
                  </p>

                  {/* Bullet Takeaways */}
                  <div className="pt-2 space-y-1.5 border-t border-white/10">
                    {activeScenario.bulletPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#9aa39e] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] mt-1.5 shrink-0 shadow-[0_0_6px_#00F5D4]" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Syntax Highlighted Code Snippet */}
                {activeScenario.codeSnippet && (
                  <div className="rounded-xl bg-[#040705] border border-[#00F5D4]/25 overflow-hidden text-xs shadow-lg">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-[#0a0f0c] border-b border-[#00F5D4]/20">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#D4AF72]">
                        <Code2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                        <span className="font-bold uppercase tracking-wider">{activeScenario.codeSnippet.language} // CODE SYNTHESIS</span>
                      </div>

                      {activeScenario.complexity && (
                        <span className="text-[10px] font-mono text-[#00F5D4] font-bold px-2 py-0.5 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30">
                          {activeScenario.complexity}
                        </span>
                      )}
                    </div>

                    <pre className="p-3.5 font-mono text-[11px] text-[#00F5D4] overflow-x-auto leading-relaxed max-h-40 selection:bg-[#00F5D4]/20">
                      <code>{activeScenario.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom HUD Bar */}
          <div className="px-4 py-2.5 bg-[#101410] border-t border-[#292D29] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#B4B7B0]">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span className="text-[#F7F5EF]">Zero Cloud Relay:</span>
              <span className="text-[#B4B7B0]">Direct local-to-provider inference</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-500">Provider:</span>
              <span className="text-[#D4AF72] font-semibold">{activeScenario.provider}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

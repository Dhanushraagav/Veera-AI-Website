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
    <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
      {/* Outer Glow Halo */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#00F5D4]/40 via-[#D4AF72]/30 to-transparent shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)]">
        {/* Main Floating Glass HUD Window */}
        <div className="rounded-2xl bg-[#0c0f0d]/95 backdrop-blur-2xl border border-white/[0.08] overflow-hidden text-[#F7F5EF] flex flex-col">
          {/* Top Window Titlebar (Tauri Styled) */}
          <div className="px-4 py-3 bg-[#131713]/80 border-b border-[#292D29] flex flex-wrap items-center justify-between gap-3 select-none">
            {/* Left Controls & Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <div className="h-4 w-[1px] bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#191D19] border border-[#D4AF72]/40 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 text-[#D4AF72]">
                    <path
                      d="M5 6.5L12 18.5L19 6.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#F7F5EF]">
                  VEERA HUD
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] border border-[#292D29] text-[#D4AF72] font-semibold">
                  v3.0.1
                </span>
              </div>
            </div>

            {/* Middle Live Status Indicators */}
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#087F5B]/15 border border-[#087F5B]/40 text-[#00F5D4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
                <span>LISTENING (SYSTEM MIC)</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#191D19] border border-[#292D29] text-[#D4AF72]">
                <Zap className="w-3 h-3 text-[#D4AF72]" />
                <span>{activeScenario.latency}</span>
              </span>
            </div>

            {/* Right Cloaking & Hotkey Indicators */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#087F5B]/20 border border-[#087F5B]/40 text-[10px] font-mono text-[#00F5D4] font-medium" title="Window excluded from screen captures and video calls">
                <EyeOff className="w-3 h-3" />
                <span className="hidden md:inline">STEALTH CLOAKED</span>
              </span>

              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-[#B4B7B0]">
                Ctrl + D
              </kbd>
            </div>
          </div>

          {/* Interactive Question Mode Switcher Tabs */}
          <div className="px-4 py-2 bg-[#090b09] border-b border-[#292D29] flex items-center justify-between gap-2 overflow-x-auto">
            <span className="text-[10px] font-mono text-[#B4B7B0] uppercase shrink-0 hidden sm:inline">
              Simulate Live Question:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenario(sc)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
                    activeScenario.id === sc.id
                      ? "bg-[#191D19] text-[#00F5D4] border border-[#00F5D4]/40 shadow-sm"
                      : "text-[#B4B7B0] hover:text-[#F7F5EF] hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  {sc.category}
                </button>
              ))}
            </div>
          </div>

          {/* Live Content Feed */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Detected Question Banner with Animated Waveform */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#121612] border border-[#292D29] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-[#D4AF72]">
                  <Mic className="w-3.5 h-3.5 text-[#00F5D4]" />
                  <span className="font-semibold uppercase tracking-wider">
                    Interviewer Question Detected
                  </span>
                </div>

                {/* Animated Soundwave Audio Bars */}
                <div className="flex items-center gap-0.5 h-3 px-2 py-0.5 rounded bg-black/40 border border-white/5">
                  <span className="w-0.5 h-2 rounded bg-[#00F5D4] animate-pulse" />
                  <span className="w-0.5 h-3 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "150ms" }} />
                  <span className="w-0.5 h-1.5 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "300ms" }} />
                  <span className="w-0.5 h-2.5 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "75ms" }} />
                  <span className="w-0.5 h-1 rounded bg-[#00F5D4] animate-pulse" style={{ animationDelay: "220ms" }} />
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
                {/* Direct Answer-First Conclusion */}
                <div className="p-4 rounded-xl bg-[#141a14] border border-[#087F5B]/30 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#00F5D4] font-semibold flex items-center gap-1.5 uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      Suggested Solution (Direct Answer)
                    </span>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#B4B7B0] hover:text-[#00F5D4] transition-colors cursor-pointer px-2 py-0.5 rounded bg-white/[0.04]"
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
                  <div className="pt-2 space-y-1.5 border-t border-white/5">
                    {activeScenario.bulletPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#B4B7B0] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF72] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Syntax Highlighted Code Snippet */}
                {activeScenario.codeSnippet && (
                  <div className="rounded-xl bg-[#090b09] border border-[#292D29] overflow-hidden text-xs">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-[#121512] border-b border-[#222722]">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#D4AF72]">
                        <Code2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                        <span className="font-semibold uppercase">{activeScenario.codeSnippet.language}</span>
                      </div>

                      {activeScenario.complexity && (
                        <span className="text-[10px] font-mono text-[#B4B7B0]">
                          {activeScenario.complexity}
                        </span>
                      )}
                    </div>

                    <pre className="p-3.5 font-mono text-[11px] text-emerald-300/90 overflow-x-auto leading-relaxed max-h-40">
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

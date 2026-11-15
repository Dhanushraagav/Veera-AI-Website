import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { FunnyDetectiveBot } from "../components/FunnyDetectiveBot";

const CATEGORIES = [
  "All",
  "Stealth & Screen Share",
  "Keys & Providers",
  "Audio & Languages",
  "Privacy & Security",
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = SITE_CONFIG.FAQS.filter((faq) => {
    if (selectedCategory === "All") return true;
    return (faq as { category?: string }).category === selectedCategory;
  });

  return (
    <section id="faq" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#1e2822] bg-[#040605]">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/35 text-xs font-mono text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="tracking-wider uppercase">2050 PROTOCOL KNOWLEDGE BASE // DECLASSIFIED SPECS</span>
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <h2 className="text-3xl sm:text-5xl font-cyber font-extrabold tracking-tight text-[#F7F5EF] leading-tight">
              Frequently asked <span className="brand-gradient-text drop-shadow-[0_0_35px_rgba(0,245,212,0.35)]">protocols.</span>
            </h2>
            <FunnyDetectiveBot isInvestigating={openIndex !== null} />
          </div>

          <p className="text-sm sm:text-base text-[#9aa39e] leading-relaxed">
            Essential facts about Stealth Mode hardware exclusion, provider key ownership, hotkey controls, and audio capabilities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap max-w-3xl mx-auto mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/60 shadow-[0_0_15px_rgba(0,245,212,0.2)] font-bold"
                  : "bg-[#040605] text-[#9aa39e] border border-[#1e2822] hover:text-white hover:border-[#00F5D4]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="w-full max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const categoryName = (faq as { category?: string }).category;
            return (
              <div
                key={faq.question}
                className="cyber-card rounded-xl overflow-hidden transition-all duration-200 relative"
              >
                <div className="cyber-reticle cyber-reticle-tl" />
                <div className="cyber-reticle cyber-reticle-br" />

                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    {categoryName && (
                      <span className="text-[10px] font-mono text-[#D4AF72] uppercase tracking-wider block">
                        // PROTOCOL: {categoryName}
                      </span>
                    )}
                    <span className="text-sm sm:text-base font-cyber font-bold text-[#F7F5EF] tracking-tight block">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                    isOpen 
                      ? "bg-[#00F5D4]/20 border-[#00F5D4]/50 text-[#00F5D4] shadow-[0_0_12px_rgba(0,245,212,0.3)]" 
                      : "bg-[#040605] border-[#1e2822] text-[#9aa39e]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4 text-[#00F5D4]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#9aa39e] leading-relaxed border-t border-[#1e2822] font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-[#9aa39e] font-mono">
          Have more questions? Check the desktop app documentation or open an issue on GitHub.
        </div>
      </div>
    </section>
  );
};

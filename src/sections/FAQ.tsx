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
    <section id="faq" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#0c0d0c]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full metallic-badge text-xs font-mono text-[#D4AF72]">
            <HelpCircle className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>KNOWLEDGE BASE &amp; VERIFIED SPECS</span>
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F5EF] leading-tight">
              Frequently asked questions.
            </h2>
            <FunnyDetectiveBot isInvestigating={openIndex !== null} />
          </div>

          <p className="text-sm sm:text-base text-[#B4B7B0] leading-relaxed">
            Essential facts about Stealth Mode hardware exclusion, provider key ownership, hotkey controls, and audio capabilities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-3xl mx-auto mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#191D19] text-[#00F5D4] border border-[#00F5D4]/40 shadow-sm"
                  : "bg-white/[0.03] text-[#B4B7B0] border border-white/5 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const categoryName = (faq as { category?: string }).category;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#121612] border border-[#292D29] hover:border-[#00F5D4]/30 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    {categoryName && (
                      <span className="text-[10px] font-mono text-[#D4AF72] uppercase tracking-wider block">
                        {categoryName}
                      </span>
                    )}
                    <span className="text-base font-semibold text-[#F7F5EF] tracking-tight block">
                      {faq.question}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-[#292D29] flex items-center justify-center shrink-0 text-[#00F5D4]">
                    {isOpen ? <Minus className="w-4 h-4 text-[#F7F5EF]" /> : <Plus className="w-4 h-4" />}
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
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#B4B7B0] leading-relaxed border-t border-white/[0.04]">
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
        <div className="mt-12 text-center text-xs text-zinc-500 font-mono">
          Have more questions? Check the desktop app documentation or open an issue on GitHub.
        </div>
      </div>
    </section>
  );
};

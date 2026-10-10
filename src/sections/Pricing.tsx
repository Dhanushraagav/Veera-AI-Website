import React from "react";
import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface PricingProps {
  onPurchaseClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onPurchaseClick }) => {
  const plan = SITE_CONFIG.PRICING;

  return (
    <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300 mb-4">
            <span>TRANSPARENT LICENSING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Simple, transparent licensing.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            One annual plan granting unlimited real-time desktop interview assistance across all supported AI models.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-[#121512] border border-[#292D29] p-8 sm:p-10 shadow-2xl overflow-hidden group"
          >
            {/* Top Sheen */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF72]/40 to-transparent" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
                {plan.planName}
              </span>
              {plan.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#087F5B]/10 text-[#087F5B] border border-[#087F5B]/25">
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
                {plan.price}
              </span>
              <span className="text-sm font-mono text-zinc-400">{plan.billingCycle}</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 mb-8 leading-relaxed font-normal">
              {plan.description}
            </p>

            {/* CTA Button */}
            <button
              onClick={onPurchaseClick}
              className="w-full py-3.5 px-6 rounded-xl metallic-button font-semibold text-sm transition-all duration-200 active:scale-[0.98] mb-8"
            >
              {plan.ctaText}
            </button>

            {/* Included Features List */}
            <div className="space-y-3 pt-6 border-t border-[#292D29]">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                Everything Included:
              </div>
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <div className="w-4 h-4 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#087F5B]">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#292D29] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3 h-3" /> Workstation Bound
              </span>
              <span>Manual key activation available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

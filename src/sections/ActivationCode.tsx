import React from "react";
import { motion } from "framer-motion";
import { Download, KeyRound } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface ActivationCodeProps {
  onDownloadClick: () => void;
}

export const ActivationCode: React.FC<ActivationCodeProps> = ({ onDownloadClick: _onDownloadClick }) => {
  return (
    <section id="activation" className="py-24 sm:py-32 relative overflow-hidden border-t border-[#292D29] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full metallic-badge text-xs font-mono text-zinc-300">
            <KeyRound className="w-3.5 h-3.5 text-zinc-400" />
            <span>DESKTOP LICENSE VALIDATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Already have an activation code?
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Your activation code is provided directly by Veera AI and is used to activate your Windows desktop application.
          </p>
        </div>

        {/* 5 Activation Steps */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {SITE_CONFIG.ACTIVATION_STEPS.map((stepItem, index) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-[#121512] border border-[#292D29] flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="w-7 h-7 rounded-lg bg-white/[0.05] border border-[#292D29] flex items-center justify-center font-mono text-xs font-bold text-zinc-300 mb-3">
                  0{stepItem.step}
                </span>
                <h4 className="text-sm font-semibold text-white mb-1.5 leading-snug">
                  {stepItem.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {stepItem.text}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500">
                Step 0{stepItem.step}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#292D29] text-center space-y-4">
          <p className="text-xs sm:text-sm text-zinc-300">
            Activation codes are validated locally against your device ID. Download the installer to begin setup.
          </p>
          <a
            href={SITE_CONFIG.DOWNLOAD_URL}
            download={SITE_CONFIG.INSTALLER_FILENAME}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl metallic-button font-semibold text-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Veera AI</span>
          </a>
        </div>
      </div>
    </section>
  );
};

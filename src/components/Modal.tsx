import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const PurchaseModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Payments are coming soon.",
  subtitle = "Online self-serve payment checkout is currently in preparation. License activation keys are provided directly to eligible candidates."
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#121512] border border-[#292D29] p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Top Sheen */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-300 mb-4">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>LICENSE ACCESS NOTICE</span>
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{subtitle}</p>

            <div className="space-y-4 my-6">
              <div className="p-4 rounded-xl bg-[#18181b]/70 border border-white/[0.06] flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-zinc-300 mt-0.5 shrink-0" />
                <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <span className="font-semibold text-white block mb-0.5">No Payment Information Required</span>
                  We do not collect credit cards or personal payment credentials. Access to Veera AI is currently managed via manual license keys.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5">
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider font-mono">
                  How to Access Veera AI
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#087F5B]/80 shrink-0" />
                  <span>Download and install the Windows desktop application</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#087F5B]/80 shrink-0" />
                  <span>Obtain your unique device activation code from the team</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#087F5B]/80 shrink-0" />
                  <span>Activate your workstation directly from the desktop UI</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full px-5 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
              >
                Understood
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

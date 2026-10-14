import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FunnyDetectiveBotProps {
  isInvestigating?: boolean;
}

export const FunnyDetectiveBot: React.FC<FunnyDetectiveBotProps> = ({ isInvestigating = false }) => {
  return (
    <div className="relative inline-flex items-center justify-center select-none" title="Detective Bot on the case!">
      <motion.div
        animate={
          isInvestigating
            ? {
                y: [0, -18, 0],
                rotate: [0, -12, 12, 0],
                scale: [1, 1.2, 0.95, 1],
              }
            : {
                y: [0, -4, 0],
                rotate: [-2, 2, -2],
              }
        }
        transition={
          isInvestigating
            ? { duration: 0.55, ease: "easeOut" }
            : { repeat: Infinity, duration: 2.4, ease: "easeInOut" }
        }
        className="w-16 h-16 sm:w-20 sm:h-20 relative drop-shadow-[0_8px_16px_rgba(212,175,114,0.3)]"
      >
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          {/* Lightbulb popping on spring when investigating / question clicked! 💡 */}
          <AnimatePresence>
            {isInvestigating && (
              <motion.g
                initial={{ opacity: 0, y: 10, scale: 0.2 }}
                animate={{ opacity: 1, y: -16, scale: 1.25 }}
                exit={{ opacity: 0, y: -24, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                {/* Glowing Lightbulb */}
                <circle cx="40" cy="8" r="8" fill="#FFD166" />
                <path d="M 36 12 L 44 12 L 42 16 L 38 16 Z" fill="#D4AF72" />
                {/* Light Rays */}
                <line x1="40" y1="-4" x2="40" y2="-1" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="2" x2="31" y2="4" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
                <line x1="52" y1="2" x2="49" y2="4" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Detective Sherlock Hat */}
          <g>
            {/* Hat Brim */}
            <path d="M 16 32 C 16 26, 64 26, 64 32 C 68 32, 70 36, 64 36 L 16 36 C 10 36, 12 32, 16 32 Z" fill="#6A5837" stroke="#12181F" strokeWidth="1.8" />
            {/* Hat Top */}
            <path d="M 24 30 C 24 16, 56 16, 56 30 Z" fill="#846F46" stroke="#12181F" strokeWidth="1.8" />
            <path d="M 24 28 C 30 24, 50 24, 56 28" stroke="#D4AF72" strokeWidth="1.5" fill="none" />
          </g>

          {/* Robot Head */}
          <rect x="22" y="34" width="36" height="30" rx="10" fill="#E2EDF8" stroke="#12181F" strokeWidth="2" />

          {/* Visor Screen */}
          <rect x="26" y="39" width="28" height="18" rx="6" fill="#0A1017" stroke="#00F5D4" strokeWidth="1.2" />

          {/* Normal Left Eye */}
          <circle cx="33" cy="48" r="3.5" fill="#00F5D4" />
          <circle cx="34" cy="47" r="1.2" fill="#FFFFFF" />

          {/* COMICALLY GIANT MAGNIFYING GLASS OVER RIGHT EYE! 🔍 */}
          <motion.g
            animate={{
              rotate: isInvestigating ? [-10, 15, -10] : [-4, 6, -4],
              scale: isInvestigating ? [1, 1.2, 1] : [1, 1.05, 1],
            }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            style={{ originX: "48px", originY: "48px" }}
          >
            {/* Lens Rim */}
            <circle cx="48" cy="48" r="11" fill="#00F5D4" fillOpacity="0.15" stroke="#D4AF72" strokeWidth="3" />
            <circle cx="48" cy="48" r="8.5" fill="#FFFFFF" fillOpacity="0.2" />

            {/* Giant Magnified Eye Inside Lens! */}
            <motion.circle
              animate={{
                scale: [1, 1.25, 1],
                cx: [48, 50, 48],
                cy: [48, 47, 48],
              }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              r="6.5"
              fill="#00F5D4"
            />
            <circle cx="50" cy="46" r="2.2" fill="#FFFFFF" />

            {/* Magnifying Glass Handle */}
            <path d="M 56 56 L 68 68" stroke="#6A5837" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 56 56 L 68 68" stroke="#D4AF72" strokeWidth="2.2" strokeLinecap="round" />
          </motion.g>

          {/* Detective Mustache / Smug Smile */}
          <path d="M 36 54 Q 40 57 44 54" stroke="#12181F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
};

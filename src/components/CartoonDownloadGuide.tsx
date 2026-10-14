import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CartoonDownloadGuideProps {
  isHovered: boolean;
  isClicked?: boolean;
}

export const CartoonDownloadGuide: React.FC<CartoonDownloadGuideProps> = ({ isHovered, isClicked }) => {
  // Auto-peek for 3.5 seconds on initial load to draw attention, then activate on hover
  const [initialPeek, setInitialPeek] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialPeek(true);
      const hideTimer = setTimeout(() => {
        setInitialPeek(false);
      }, 3800);
      return () => clearTimeout(hideTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const isVisible = isHovered || initialPeek || isClicked;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.88, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
          className="absolute top-full mt-2 right-0 flex flex-col items-end pointer-events-none z-50 select-none"
        >
          {/* Animated Comic Speech Bubble */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 4 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.08, type: "spring", stiffness: 500, damping: 25 }}
            className="relative mb-1 mr-4 bg-[#0E1311]/95 border border-[#00F5D4]/45 rounded-2xl px-3.5 py-2 shadow-2xl shadow-[#00F5D4]/20 backdrop-blur-xl flex items-center gap-2"
          >
            {/* Pulsing indicator dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]"></span>
            </span>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#F7F5EF] leading-tight">
                {isClicked ? (
                  <>
                    <span>Downloading...</span>
                    <span className="text-sm">🎉</span>
                  </>
                ) : (
                  <>
                    <span>Click this one!</span>
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
                      className="text-[#00F5D4] text-sm font-bold inline-block"
                    >
                      👆
                    </motion.span>
                  </>
                )}
              </div>
              <span className="text-[10px] font-mono text-[#D4AF72] tracking-wide mt-0.5">
                {isClicked ? "Enjoy Veera AI" : "Download for Windows"}
              </span>
            </div>

            {/* Bubble Tail pointing down towards the Mascot */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0E1311] border-r border-b border-[#00F5D4]/45 transform rotate-45" />
          </motion.div>

          {/* Cute Animated AI Robot Mascot */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="relative w-24 h-22 flex items-center justify-center mr-2"
          >
            <svg
              viewBox="0 0 100 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,245,212,0.25)] overflow-visible"
            >
              <defs>
                {/* Robot Body Metallic Gradient */}
                <linearGradient id="botBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="45%" stopColor="#E2EDF8" />
                  <stop offset="100%" stopColor="#BACEDF" />
                </linearGradient>

                {/* Visor Screen Gradient */}
                <linearGradient id="botVisorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#081014" />
                  <stop offset="100%" stopColor="#03080A" />
                </linearGradient>

                {/* Ear Headphone Gradient */}
                <linearGradient id="earGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>

                {/* Antenna Glow */}
                <filter id="beaconGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Antenna Stem */}
              <rect x="47.5" y="10" width="5" height="12" rx="2.5" fill="#BACEDF" />

              {/* Antenna Glowing Orb */}
              <motion.g
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <circle cx="50" cy="8" r="6" fill="#00F5D4" filter="url(#beaconGlow)" />
                <circle cx="50" cy="8" r="3" fill="#FFFFFF" />
              </motion.g>

              {/* Left Cyber Ear */}
              <rect x="14" y="32" width="7" height="20" rx="3.5" fill="url(#earGrad)" />
              <rect x="16" y="36" width="3" height="12" rx="1.5" fill="#00F5D4" />

              {/* Right Cyber Ear */}
              <rect x="79" y="32" width="7" height="20" rx="3.5" fill="url(#earGrad)" />
              <rect x="81" y="36" width="3" height="12" rx="1.5" fill="#00F5D4" />

              {/* Main Robot Capsule Head */}
              <rect
                x="20"
                y="18"
                width="60"
                height="50"
                rx="24"
                fill="url(#botBodyGrad)"
                stroke="#00F5D4"
                strokeWidth="1.8"
              />

              {/* Digital Face Visor */}
              <rect
                x="26"
                y="26"
                width="48"
                height="32"
                rx="15"
                fill="url(#botVisorGrad)"
                stroke="#00F5D4"
                strokeWidth="1.2"
                strokeOpacity="0.8"
              />

              {/* Visor Gloss Reflection Curve */}
              <path
                d="M 30 30 Q 50 24 70 30"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.35"
              />

              {/* Blinking / Smiling Anime Eyes */}
              <motion.g
                animate={{
                  scaleY: [1, 1, 0.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 2.8,
                  duration: 0.25,
                }}
                style={{ originX: "50px", originY: "41px" }}
              >
                {/* Left Happy Curved Eye */}
                <path
                  d="M 33 42 Q 38 34 43 42"
                  stroke="#00F5D4"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Right Happy Curved Eye */}
                <path
                  d="M 57 42 Q 62 34 67 42"
                  stroke="#00F5D4"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.g>

              {/* Cute Blushing Cheeks */}
              <ellipse cx="34" cy="48" rx="4" ry="2" fill="#FF69B4" opacity="0.65" />
              <ellipse cx="66" cy="48" rx="4" ry="2" fill="#FF69B4" opacity="0.65" />

              {/* Happy Smile Mouth */}
              <path
                d="M 46 47 Q 50 51 54 47"
                stroke="#00F5D4"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Left Friendly Waving Hand */}
              <motion.g
                animate={{
                  rotate: [-14, 18, -14],
                  y: [0, -3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                style={{ originX: "14px", originY: "58px" }}
              >
                <circle cx="12" cy="56" r="6" fill="#FFFFFF" stroke="#00F5D4" strokeWidth="1.5" />
                <path d="M 8 54 Q 12 50 16 54" stroke="#BACEDF" strokeWidth="1" fill="none" />
              </motion.g>

              {/* Right Cartoon Hand POINTING UP at the Download Button! 👆 */}
              <motion.g
                animate={{
                  y: [0, -9, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.55,
                  ease: "easeInOut",
                }}
              >
                {/* Glove Body */}
                <ellipse cx="88" cy="48" rx="7" ry="6" fill="#FFFFFF" stroke="#00F5D4" strokeWidth="1.5" />
                
                {/* Extended Index Finger pointing UP */}
                <path
                  d="M 87 46 L 87 28 Q 87 24 90 24 Q 93 24 93 28 L 93 46 Z"
                  fill="#FFFFFF"
                  stroke="#00F5D4"
                  strokeWidth="1.5"
                />

                {/* Finger Crease Detail */}
                <line x1="88" y1="34" x2="92" y2="34" stroke="#00F5D4" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

                {/* Energy Sparkle at finger tip */}
                <motion.g
                  animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                >
                  <circle cx="90" cy="20" r="2.5" fill="#00F5D4" filter="url(#beaconGlow)" />
                </motion.g>
              </motion.g>

              {/* Bottom Floating Hover Thruster Glow */}
              <motion.ellipse
                animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
                cx="50"
                cy="76"
                rx="18"
                ry="3.5"
                fill="#00F5D4"
                opacity="0.6"
                filter="url(#beaconGlow)"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

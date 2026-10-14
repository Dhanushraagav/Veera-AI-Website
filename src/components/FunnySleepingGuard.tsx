import React, { useState } from "react";
import { motion } from "framer-motion";

export const FunnySleepingGuard: React.FC = () => {
  const [isAwake, setIsAwake] = useState(false);

  const handlePoke = () => {
    setIsAwake(true);
    setTimeout(() => {
      setIsAwake(false);
    }, 3500);
  };

  return (
    <div
      onClick={handlePoke}
      onMouseEnter={() => setIsAwake(true)}
      onMouseLeave={() => setIsAwake(false)}
      className="relative inline-flex items-center justify-center cursor-pointer select-none group"
      title="Shhh... don't wake the footer guard!"
    >
      <motion.div
        animate={
          isAwake
            ? {
                y: [0, -18, 0],
                rotate: [0, -14, 14, -6, 0],
                scale: [1, 1.25, 0.95, 1],
              }
            : {
                y: [0, -3, 0],
                scaleX: [1, 1.05, 1],
                scaleY: [1, 0.96, 1],
              }
        }
        transition={
          isAwake
            ? { duration: 0.5, ease: "easeOut" }
            : { repeat: Infinity, duration: 2.6, ease: "easeInOut" }
        }
        className="w-16 h-16 sm:w-20 sm:h-20 relative drop-shadow-[0_4px_16px_rgba(0,245,212,0.25)]"
      >
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          {/* Sleeping Cap with hanging pom-pom */}
          <g>
            <path
              d="M 22 28 C 22 18, 54 18, 54 28 C 58 28, 68 18, 64 36"
              stroke="#EC4899"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Pom-pom at cap end */}
            <circle cx="64" cy="38" r="4.5" fill="#FFD166" />
          </g>

          {/* Chubby Head */}
          <rect x="20" y="26" width="38" height="34" rx="14" fill="#C5D3E8" stroke="#12181F" strokeWidth="2.2" />

          {/* Face Screen */}
          <rect x="24" y="32" width="30" height="20" rx="8" fill="#0A1017" stroke="#00F5D4" strokeWidth="1.2" />

          {!isAwake ? (
            /* ASLEEP STATE: Cute closed curved sleeping eyes with snot/bubble */
            <g>
              {/* Sleeping Eyes (curved lines) */}
              <path d="M 28 42 Q 33 46 38 42" stroke="#00F5D4" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 40 42 Q 45 46 50 42" stroke="#00F5D4" strokeWidth="2.2" strokeLinecap="round" fill="none" />

              {/* Rosy Sleeping Cheeks */}
              <circle cx="27" cy="46" r="2.5" fill="#FF4D8D" opacity="0.7" />
              <circle cx="51" cy="46" r="2.5" fill="#FF4D8D" opacity="0.7" />

              {/* Floating Zzz... Bubbles */}
              <motion.g
                animate={{ y: [0, -18, -32], x: [0, 6, 12], opacity: [0, 0.9, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
              >
                <text x="56" y="26" fill="#00F5D4" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  Z
                </text>
                <text x="63" y="18" fill="#FFD166" fontSize="13" fontWeight="bold" fontFamily="monospace">
                  z
                </text>
                <text x="70" y="10" fill="#EC4899" fontSize="15" fontWeight="bold" fontFamily="monospace">
                  z
                </text>
              </motion.g>
            </g>
          ) : (
            /* AWAKE JOLT STATE: Hilarious Shocked Wide Eyes & Salute! */
            <g>
              {/* Shocked Wide Anime Eyes */}
              <circle cx="33" cy="41" r="5" fill="#FFFFFF" />
              <circle cx="33" cy="41" r="2.4" fill="#12181F" />

              <circle cx="45" cy="41" r="5" fill="#FFFFFF" />
              <circle cx="45" cy="41" r="2.4" fill="#12181F" />

              {/* Shocked Open "O" Mouth */}
              <circle cx="39" cy="47" r="2.8" fill="#FF4D8D" />

              {/* Cartoon Sweat Drop 💦 */}
              <motion.path
                animate={{ y: [0, 4, 8], opacity: [1, 0.8, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                d="M 54 28 C 54 28 58 33 54 35 C 51 35 51 31 54 28 Z"
                fill="#00F5D4"
              />

              {/* Funny Cartoon Salute Hand */}
              <path d="M 52 46 L 62 34 L 56 30" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="56" cy="30" r="3" fill="#FFFFFF" stroke="#12181F" strokeWidth="1.2" />
            </g>
          )}

          {/* Pillow at bottom */}
          <rect x="16" y="58" width="46" height="10" rx="5" fill="#E2EDF8" stroke="#12181F" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
};

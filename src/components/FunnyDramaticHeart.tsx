import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FunnyDramaticHeart: React.FC = () => {
  const [isDramatic, setIsDramatic] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setIsDramatic(true);
    setClickCount((prev) => prev + 1);
    setTimeout(() => {
      setIsDramatic(false);
    }, 2800);
  };

  return (
    <div
      onClick={handleClick}
      className="inline-block relative cursor-pointer select-none ml-2 align-middle group"
      title="Click me for drama!"
    >
      <motion.div
        animate={
          isDramatic
            ? {
                rotate: [-15, 20, -25, 30, -10, 0],
                y: [0, -12, 4, -8, 0],
                scale: [1, 1.25, 0.9, 1.15, 1],
              }
            : {
                rotate: [-4, 5, -4],
                y: [0, -3, 0],
              }
        }
        transition={
          isDramatic
            ? { duration: 0.8, ease: "easeInOut" }
            : { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
        }
        className="w-8 h-8 sm:w-10 sm:h-10 relative drop-shadow-[0_4px_12px_rgba(255,77,141,0.5)]"
      >
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          {/* Main Cartoon Heart Body */}
          <path
            d="M 30 52 C 12 40 4 28 4 18 C 4 8 13 2 22 2 C 27 2 30 7 30 7 C 30 7 33 2 38 2 C 47 2 56 8 56 18 C 56 28 48 40 30 52 Z"
            fill="url(#heartGrad)"
            stroke="#12181F"
            strokeWidth="2.5"
          />

          <defs>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D8D" />
              <stop offset="100%" stopColor="#D81159" />
            </linearGradient>
          </defs>

          {/* Tiny Cartoon Stick Legs */}
          <motion.g
            animate={{ rotate: isDramatic ? [-15, 15, -15] : [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            <line x1="22" y1="50" x2="18" y2="58" stroke="#12181F" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="58" x2="12" y2="58" stroke="#12181F" strokeWidth="2.5" strokeLinecap="round" />

            <line x1="38" y1="50" x2="42" y2="58" stroke="#12181F" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="58" x2="48" y2="58" stroke="#12181F" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>

          {/* Face Elements */}
          {!isDramatic ? (
            /* Cool Sunglasses look (Idle state) */
            <g>
              {/* Cool Dark Sunglasses */}
              <rect x="12" y="16" width="16" height="11" rx="3" fill="#12181F" />
              <rect x="32" y="16" width="16" height="11" rx="3" fill="#12181F" />
              <line x1="28" y1="20" x2="32" y2="20" stroke="#12181F" strokeWidth="2.5" />
              {/* Sunglasses Glare */}
              <line x1="15" y1="18" x2="22" y2="25" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              <line x1="35" y1="18" x2="42" y2="25" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

              {/* Sassy Smirk */}
              <path d="M 26 34 Q 30 37 36 33" stroke="#12181F" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>
          ) : (
            /* Dramatic Crying Waterfall Face! (Clicked state) */
            <g>
              {/* Giant Crying Anime Eyes */}
              <circle cx="20" cy="22" r="7" fill="#FFFFFF" stroke="#12181F" strokeWidth="2" />
              <circle cx="40" cy="22" r="7" fill="#FFFFFF" stroke="#12181F" strokeWidth="2" />

              <ellipse cx="20" cy="23" r="3.5" fill="#12181F" />
              <ellipse cx="40" cy="23" r="3.5" fill="#12181F" />
              <circle cx="18" cy="21" r="1.5" fill="#FFFFFF" />
              <circle cx="38" cy="21" r="1.5" fill="#FFFFFF" />

              {/* Huge Open Wailing Mouth */}
              <ellipse cx="30" cy="36" rx="7" ry="6" fill="#780016" stroke="#12181F" strokeWidth="1.8" />
              <path d="M 26 38 Q 30 35 34 38" fill="#FF4D8D" />

              {/* Dramatic Waterfall Fountains Shooting Sideways! 💦 */}
              <motion.g
                animate={{ scaleX: [0.8, 1.4, 0.9, 1.3], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 0.25 }}
              >
                {/* Left Tear Waterfall */}
                <path
                  d="M 14 24 C 6 22 -6 28 -12 36"
                  stroke="#00F5D4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="-13" cy="38" r="3" fill="#00F5D4" />

                {/* Right Tear Waterfall */}
                <path
                  d="M 46 24 C 54 22 66 28 72 36"
                  stroke="#00F5D4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="73" cy="38" r="3" fill="#00F5D4" />
              </motion.g>
            </g>
          )}
        </svg>
      </motion.div>

      {/* Floating Comedy Reaction Emoji on Click */}
      <AnimatePresence>
        {isDramatic && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: 1, y: -24, scale: 1 }}
            exit={{ opacity: 0, y: -35 }}
            className="absolute -top-6 -right-6 pointer-events-none text-base"
          >
            {clickCount % 2 === 0 ? "💔😭" : "🤧🤦‍♂️"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

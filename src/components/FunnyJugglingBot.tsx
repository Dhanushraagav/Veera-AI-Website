import React, { useState } from "react";
import { motion } from "framer-motion";

export const FunnyJugglingBot: React.FC = () => {
  const [isHyper, setIsHyper] = useState(false);

  return (
    <div
      onClick={() => setIsHyper(!isHyper)}
      className="relative flex flex-col items-center justify-center cursor-pointer select-none group py-4"
      title="Click me: Overworked Provider Juggler!"
    >
      <motion.div
        animate={
          isHyper
            ? {
                y: [0, -16, 0],
                rotate: [-8, 8, -8],
              }
            : {
                y: [0, -6, 0],
                rotate: [-3, 3, -3],
              }
        }
        transition={{
          repeat: Infinity,
          duration: isHyper ? 0.45 : 1.6,
          ease: "easeInOut",
        }}
        className="w-24 h-24 sm:w-28 sm:h-28 relative drop-shadow-[0_8px_20px_rgba(0,245,212,0.3)]"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="juggleBotBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BACEDF" />
              <stop offset="100%" stopColor="#6C8294" />
            </linearGradient>
            <filter id="juggleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Steaming Coffee Cup on Head ☕ */}
          <g>
            <rect x="42" y="10" width="16" height="12" rx="2" fill="#D4AF72" stroke="#12181F" strokeWidth="1.5" />
            <path d="M 58 13 C 62 13 62 19 58 19" stroke="#12181F" strokeWidth="1.5" fill="none" />
            {/* Coffee Steam */}
            <motion.path
              animate={{ y: [0, -6, -12], opacity: [0.8, 0.4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              d="M 47 8 Q 50 4 47 0"
              stroke="#F7F5EF"
              strokeWidth="1.2"
              fill="none"
            />
            <motion.path
              animate={{ y: [0, -6, -12], opacity: [0.8, 0.4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0.5 }}
              d="M 53 8 Q 56 4 53 0"
              stroke="#F7F5EF"
              strokeWidth="1.2"
              fill="none"
            />
          </g>

          {/* Steam from Ears if Hyper 💨 */}
          {isHyper && (
            <g>
              <motion.path
                animate={{ x: [-2, -8, -14], opacity: [1, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 0.4 }}
                d="M 20 40 Q 12 36 6 42"
                stroke="#00F5D4"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <motion.path
                animate={{ x: [2, 8, 14], opacity: [1, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 0.4 }}
                d="M 80 40 Q 88 36 94 42"
                stroke="#00F5D4"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          )}

          {/* Robot Head */}
          <rect x="25" y="24" width="50" height="42" rx="14" fill="url(#juggleBotBody)" stroke="#12181F" strokeWidth="2.5" />

          {/* Visor Screen */}
          <rect x="30" y="32" width="40" height="24" rx="8" fill="#0A1017" stroke="#00F5D4" strokeWidth="1.5" />

          {/* Crazy Swirly Eyes / Stressed Eyes */}
          {isHyper ? (
            /* Swirling Hypnotic Spiral Eyes @_@ */
            <g>
              <motion.circle
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                style={{ originX: "40px", originY: "44px" }}
                cx="40"
                cy="44"
                r="7"
                stroke="#00F5D4"
                strokeWidth="2"
                strokeDasharray="4 3"
                fill="none"
              />
              <motion.circle
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                style={{ originX: "60px", originY: "44px" }}
                cx="60"
                cy="44"
                r="7"
                stroke="#EC4899"
                strokeWidth="2"
                strokeDasharray="4 3"
                fill="none"
              />
            </g>
          ) : (
            /* Wide Stressed Eyes looking around */
            <g>
              <circle cx="40" cy="44" r="7" fill="#FFFFFF" />
              <motion.circle
                animate={{ cx: [38, 42, 38], cy: [43, 45, 43] }}
                transition={{ repeat: Infinity, duration: 0.9 }}
                cx="40"
                cy="44"
                r="3.5"
                fill="#12181F"
              />
              <circle cx="60" cy="44" r="7" fill="#FFFFFF" />
              <motion.circle
                animate={{ cx: [58, 62, 58], cy: [43, 45, 43] }}
                transition={{ repeat: Infinity, duration: 0.9 }}
                cx="60"
                cy="44"
                r="3.5"
                fill="#12181F"
              />
            </g>
          )}

          {/* Wobbly Squiggle Mouth */}
          <motion.path
            animate={{
              d: isHyper
                ? ["M 38 52 Q 44 48 50 52 Q 56 56 62 52", "M 38 52 Q 44 56 50 52 Q 56 48 62 52", "M 38 52 Q 44 48 50 52 Q 56 56 62 52"]
                : ["M 42 52 Q 50 49 58 52", "M 42 52 Q 50 55 58 52", "M 42 52 Q 50 49 58 52"],
            }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            stroke="#00F5D4"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Wobbly Juggling Arms */}
          <motion.path
            animate={{
              rotate: [-15, 20, -15],
            }}
            transition={{ repeat: Infinity, duration: isHyper ? 0.3 : 0.8 }}
            style={{ originX: "25px", originY: "50px" }}
            d="M 25 50 Q 12 35 18 20"
            stroke="#12181F"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="18" cy="20" r="5" fill="#FFFFFF" stroke="#12181F" strokeWidth="1.8" />

          <motion.path
            animate={{
              rotate: [15, -20, 15],
            }}
            transition={{ repeat: Infinity, duration: isHyper ? 0.3 : 0.8 }}
            style={{ originX: "75px", originY: "50px" }}
            d="M 75 50 Q 88 35 82 20"
            stroke="#12181F"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="82" cy="20" r="5" fill="#FFFFFF" stroke="#12181F" strokeWidth="1.8" />

          {/* Unicycle Wheel at Bottom */}
          <line x1="50" y1="66" x2="50" y2="82" stroke="#12181F" strokeWidth="3" />
          <motion.circle
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            style={{ originX: "50px", originY: "88px" }}
            cx="50"
            cy="88"
            r="8"
            stroke="#00F5D4"
            strokeWidth="2.5"
            fill="#12181F"
          />

          {/* 4 JUGGLING GLOWING ORBS IN AN ORBITAL ARC! (OpenAI, Gemini, Claude, DeepSeek colors) */}
          <g>
            {/* Orb 1: Cyan / OpenAI */}
            <motion.circle
              animate={{
                cx: [20, 50, 80, 50, 20],
                cy: [16, 2, 16, 26, 16],
              }}
              transition={{ repeat: Infinity, duration: isHyper ? 0.6 : 1.6, ease: "easeInOut" }}
              r="4.5"
              fill="#00F5D4"
              filter="url(#juggleGlow)"
            />

            {/* Orb 2: Purple / Claude */}
            <motion.circle
              animate={{
                cx: [50, 80, 50, 20, 50],
                cy: [2, 16, 26, 16, 2],
              }}
              transition={{ repeat: Infinity, duration: isHyper ? 0.6 : 1.6, ease: "easeInOut" }}
              r="4.5"
              fill="#8B5CF6"
              filter="url(#juggleGlow)"
            />

            {/* Orb 3: Blue / Gemini */}
            <motion.circle
              animate={{
                cx: [80, 50, 20, 50, 80],
                cy: [16, 26, 16, 2, 16],
              }}
              transition={{ repeat: Infinity, duration: isHyper ? 0.6 : 1.6, ease: "easeInOut" }}
              r="4.5"
              fill="#3B82F6"
              filter="url(#juggleGlow)"
            />

            {/* Orb 4: Rose / DeepSeek */}
            <motion.circle
              animate={{
                cx: [50, 20, 50, 80, 50],
                cy: [26, 16, 2, 16, 26],
              }}
              transition={{ repeat: Infinity, duration: isHyper ? 0.6 : 1.6, ease: "easeInOut" }}
              r="4"
              fill="#EC4899"
              filter="url(#juggleGlow)"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

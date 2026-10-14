import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FunnyDramaticHeart: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isBroken, setIsBroken] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const runningTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // When cursor comes close or hovers, RUN AWAY! 🏃‍♂️💨
  const handleProximityEvade = () => {
    if (isBroken) return;

    // After 4-5 clever dodges, it gets a bit tired so the user CAN catch and touch it!
    if (dodgeCount >= 4) {
      // Let user touch it to trigger the heartbreak drama
      return;
    }

    setIsRunning(true);
    setDodgeCount((prev) => prev + 1);

    // Pick a funny new dodge location away from current mouse
    const directions = [
      { x: 55 + Math.random() * 50, y: (Math.random() - 0.5) * 40 },
      { x: -(55 + Math.random() * 50), y: (Math.random() - 0.5) * 40 },
      { x: (Math.random() - 0.5) * 80, y: -35 - Math.random() * 25 },
      { x: (Math.random() - 0.5) * 80, y: 35 + Math.random() * 25 },
    ];
    const newTarget = directions[Math.floor(Math.random() * directions.length)];

    setOffset({
      x: Math.max(-120, Math.min(120, offset.x + newTarget.x)),
      y: Math.max(-45, Math.min(45, offset.y + newTarget.y)),
    });

    if (runningTimeoutRef.current) clearTimeout(runningTimeoutRef.current);
    runningTimeoutRef.current = setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  // If touched / clicked: HEARTBREAK DRAMA! 💔😭
  const handleHeartbreak = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBroken(true);
    setIsRunning(false);

    // Dramatic sobbing for 4.2s, then heals with funny band-aid and returns home
    setTimeout(() => {
      setIsBroken(false);
      setDodgeCount(0);
      setOffset({ x: 0, y: 0 });
    }, 4200);
  };

  return (
    <div
      className="inline-block relative select-none ml-2 align-middle z-30"
      onMouseEnter={handleProximityEvade}
      onMouseMove={handleProximityEvade}
      style={{ touchAction: "none" }}
    >
      {/* Invisible Expanded Proximity Detection Halo (Triggers runaway before cursor directly touches) */}
      <div
        onMouseEnter={handleProximityEvade}
        className="absolute -inset-6 sm:-inset-8 rounded-full pointer-events-auto cursor-pointer"
        title={isBroken ? "You broke its heart! 💔" : "Try to catch me! 🏃‍♂️"}
      />

      {/* Main Animated Heart Container */}
      <motion.div
        animate={{
          x: offset.x,
          y: offset.y,
          rotate: isBroken
            ? [-12, 14, -16, 12, -8, 0]
            : isRunning
            ? [-16, 18, -16]
            : [-3, 4, -3],
          scale: isBroken ? [1, 1.3, 0.9, 1.1, 1] : isRunning ? [1, 1.1, 1] : 1,
        }}
        transition={
          isBroken
            ? { duration: 0.7, ease: "easeOut" }
            : isRunning
            ? { type: "spring", stiffness: 500, damping: 20 }
            : { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
        }
        onClick={handleHeartbreak}
        className="w-8 h-8 sm:w-10 sm:h-10 relative cursor-pointer drop-shadow-[0_4px_14px_rgba(255,77,141,0.55)]"
      >
        {/* Cartoon Running Dust Cloud Effect 💨 when scurrying away */}
        <AnimatePresence>
          {isRunning && !isBroken && (
            <motion.div
              initial={{ opacity: 0, scale: 0.4, x: 0 }}
              animate={{ opacity: 0.8, scale: 1.2, x: offset.x > 0 ? -16 : 16 }}
              exit={{ opacity: 0, scale: 1.6 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs pointer-events-none select-none"
            >
              💨
            </motion.div>
          )}
        </AnimatePresence>

        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D8D" />
              <stop offset="100%" stopColor="#D81159" />
            </linearGradient>

            <filter id="tearGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Tiny Cartoon Stick Legs - Frantically Windmilling / Running when escaping! */}
          <motion.g
            animate={
              isBroken
                ? { y: [0, 2, 0], rotate: [-6, 6, -6] }
                : isRunning
                ? { rotate: [0, 180, 360], y: [0, -4, 0] }
                : { rotate: [-4, 4, -4] }
            }
            transition={
              isRunning
                ? { repeat: Infinity, duration: 0.22, ease: "linear" }
                : { repeat: Infinity, duration: 0.6 }
            }
            style={{ originX: "30px", originY: "52px" }}
          >
            {/* Left Leg & Shoe */}
            <line x1="22" y1="50" x2="18" y2="58" stroke="#12181F" strokeWidth="2.8" strokeLinecap="round" />
            <ellipse cx="15" cy="58" rx="4" ry="2" fill="#12181F" />

            {/* Right Leg & Shoe */}
            <line x1="38" y1="50" x2="42" y2="58" stroke="#12181F" strokeWidth="2.8" strokeLinecap="round" />
            <ellipse cx="45" cy="58" rx="4" ry="2" fill="#12181F" />
          </motion.g>

          {/* HEART BODY: Split into cracked halves when broken! 💔 */}
          {!isBroken ? (
            /* INTACT HEART WITH SASSY SUNGLASSES */
            <g>
              <path
                d="M 30 52 C 12 40 4 28 4 18 C 4 8 13 2 22 2 C 27 2 30 7 30 7 C 30 7 33 2 38 2 C 47 2 56 8 56 18 C 56 28 48 40 30 52 Z"
                fill="url(#heartGrad)"
                stroke="#12181F"
                strokeWidth="2.6"
              />

              {/* Cool Dark Sunglasses */}
              <rect x="12" y="16" width="16" height="11" rx="3.5" fill="#12181F" />
              <rect x="32" y="16" width="16" height="11" rx="3.5" fill="#12181F" />
              <line x1="28" y1="20" x2="32" y2="20" stroke="#12181F" strokeWidth="2.5" />
              <line x1="15" y1="18" x2="22" y2="25" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" opacity="0.85" />
              <line x1="35" y1="18" x2="42" y2="25" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" opacity="0.85" />

              {/* Sassy Smug Smirk */}
              <path d="M 26 34 Q 30 38 36 33" stroke="#12181F" strokeWidth="2.2" strokeLinecap="round" fill="none" />

              {/* Sweat drop if running away */}
              {isRunning && (
                <path d="M 47 10 C 47 10 50 14 47 16 C 45 16 45 13 47 10 Z" fill="#00F5D4" />
              )}
            </g>
          ) : (
            /* HEARTBREAK STATE: CRACKED IN HALF WITH DRAMATIC WATERFALL TEARS! 💔😭 */
            <g>
              {/* Left Cracked Half */}
              <motion.path
                animate={{ rotate: [-8, -12, -8], x: [-1, -3, -1] }}
                transition={{ repeat: Infinity, duration: 0.4 }}
                style={{ originX: "22px", originY: "30px" }}
                d="M 30 8 C 30 8 27 2 22 2 C 13 2 4 8 4 18 C 4 28 12 40 30 52 L 28 42 L 33 34 L 27 26 L 31 18 L 30 8 Z"
                fill="url(#heartGrad)"
                stroke="#12181F"
                strokeWidth="2.6"
              />

              {/* Right Cracked Half */}
              <motion.path
                animate={{ rotate: [8, 12, 8], x: [1, 3, 1] }}
                transition={{ repeat: Infinity, duration: 0.4 }}
                style={{ originX: "38px", originY: "30px" }}
                d="M 30 8 L 31 18 L 27 26 L 33 34 L 28 42 L 30 52 C 48 40 56 28 56 18 C 56 8 47 2 38 2 C 33 2 30 8 30 8 Z"
                fill="url(#heartGrad)"
                stroke="#12181F"
                strokeWidth="2.6"
              />

              {/* Giant Crying Anime Eyes */}
              <circle cx="18" cy="22" r="7" fill="#FFFFFF" stroke="#12181F" strokeWidth="2.2" />
              <circle cx="42" cy="22" r="7" fill="#FFFFFF" stroke="#12181F" strokeWidth="2.2" />
              <ellipse cx="18" cy="23" r="3.5" fill="#12181F" />
              <ellipse cx="42" cy="23" r="3.5" fill="#12181F" />
              <circle cx="16" cy="21" r="1.6" fill="#FFFFFF" />
              <circle cx="40" cy="21" r="1.6" fill="#FFFFFF" />

              {/* Open Sobbing Mouth */}
              <ellipse cx="30" cy="38" rx="8" ry="6.5" fill="#6A040F" stroke="#12181F" strokeWidth="2" />
              <path d="M 25 40 Q 30 36 35 40" fill="#FF4D8D" />

              {/* DRAMATIC WATERFALL TEARS SHOOTING OUT SIDEWAYS! 💦 */}
              <motion.g
                animate={{ scaleX: [0.9, 1.4, 0.9], scaleY: [0.9, 1.2, 0.9], opacity: [0.85, 1, 0.85] }}
                transition={{ repeat: Infinity, duration: 0.22 }}
              >
                {/* Left Stream */}
                <path
                  d="M 12 24 C 4 20 -8 26 -16 36"
                  stroke="#00F5D4"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#tearGlow)"
                  fill="none"
                />
                <circle cx="-18" cy="38" r="3.5" fill="#00F5D4" filter="url(#tearGlow)" />

                {/* Right Stream */}
                <path
                  d="M 48 24 C 56 20 68 26 76 36"
                  stroke="#00F5D4"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#tearGlow)"
                  fill="none"
                />
                <circle cx="78" cy="38" r="3.5" fill="#00F5D4" filter="url(#tearGlow)" />
              </motion.g>

              {/* Shattered Broken Sunglasses Falling Down */}
              <motion.g
                animate={{ y: [0, 8, 14], rotate: [-10, 25, 45], opacity: [1, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 0.9 }}
              >
                <rect x="8" y="32" width="10" height="7" rx="2" fill="#12181F" />
                <rect x="42" y="32" width="10" height="7" rx="2" fill="#12181F" />
              </motion.g>
            </g>
          )}
        </svg>

        {/* Floating Heartbreak Emojis when broken */}
        <AnimatePresence>
          {isBroken && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 0 }}
              animate={{ opacity: 1, scale: 1.2, y: -26 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm pointer-events-none select-none whitespace-nowrap"
            >
              💔😭💦
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FunnyDramaticHeart: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [tauntText, setTauntText] = useState<string | null>(null);

  const heartRef = useRef<HTMLDivElement>(null);
  const runningTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const returnTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tauntTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastEvadeTime = useRef<number>(0);

  const TAUNTS = ["Nope! 💨", "Too slow! 😜", "Never! 😎", "Nice try! 💅", "Catch me? Never! 🏃‍♂️"];

  // Evade away from the cursor's coordinates
  const evade = useCallback((mouseX?: number, mouseY?: number) => {
    const now = Date.now();
    // 70ms throttle to allow snappy spring animation without stutter
    if (now - lastEvadeTime.current < 70) return;
    lastEvadeTime.current = now;

    setIsRunning(true);

    // Random cheeky taunt
    if (Math.random() > 0.4) {
      const randomTaunt = TAUNTS[Math.floor(Math.random() * TAUNTS.length)];
      setTauntText(randomTaunt);
      if (tauntTimeoutRef.current) clearTimeout(tauntTimeoutRef.current);
      tauntTimeoutRef.current = setTimeout(() => setTauntText(null), 1200);
    }

    setOffset((prev) => {
      let dirX = (Math.random() - 0.5) * 2;
      let dirY = (Math.random() - 0.5) * 2;

      if (heartRef.current && mouseX !== undefined && mouseY !== undefined) {
        const rect = heartRef.current.getBoundingClientRect();
        const heartX = rect.left + rect.width / 2;
        const heartY = rect.top + rect.height / 2;
        const diffX = heartX - mouseX;
        const diffY = heartY - mouseY;
        const dist = Math.hypot(diffX, diffY) || 1;
        dirX = diffX / dist;
        dirY = diffY / dist;
      }

      // High-velocity leap away from cursor
      const jump = 95 + Math.random() * 45;
      // Perpendicular side-dodge to prevent ever getting pinned
      const perpFactor = (Math.random() > 0.5 ? 1 : -1) * 40;
      const perpX = -dirY * perpFactor;
      const perpY = dirX * perpFactor;

      let nextX = prev.x + dirX * jump + perpX;
      let nextY = prev.y + dirY * jump + perpY;

      // Wrap around bounds so it never gets cornered or caught at screen edges
      if (nextX > 180) nextX = -130 + Math.random() * 30;
      else if (nextX < -180) nextX = 130 - Math.random() * 30;

      if (nextY > 50) nextY = -40;
      else if (nextY < -50) nextY = 40;

      return { x: nextX, y: nextY };
    });

    if (runningTimeoutRef.current) clearTimeout(runningTimeoutRef.current);
    runningTimeoutRef.current = setTimeout(() => {
      setIsRunning(false);
    }, 600);

    // If left alone for 3.5s, calmly swagger back home
    if (returnTimeoutRef.current) clearTimeout(returnTimeoutRef.current);
    returnTimeoutRef.current = setTimeout(() => {
      setOffset({ x: 0, y: 0 });
      setIsRunning(false);
      setTauntText(null);
    }, 3500);
  }, []);

  // Global proximity detector: flees whenever cursor comes within 125px!
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      if (!heartRef.current) return;
      const rect = heartRef.current.getBoundingClientRect();
      const heartX = rect.left + rect.width / 2;
      const heartY = rect.top + rect.height / 2;

      const dist = Math.hypot(heartX - e.clientX, heartY - e.clientY);
      // If cursor approaches within 125px radius, flee instantly
      if (dist < 125) {
        evade(e.clientX, e.clientY);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (runningTimeoutRef.current) clearTimeout(runningTimeoutRef.current);
      if (returnTimeoutRef.current) clearTimeout(returnTimeoutRef.current);
      if (tauntTimeoutRef.current) clearTimeout(tauntTimeoutRef.current);
    };
  }, [evade]);

  return (
    <div
      ref={heartRef}
      className="inline-block relative select-none ml-2 align-middle z-30"
      style={{ touchAction: "none" }}
    >
      {/* Main Animated Heart Container */}
      <motion.div
        animate={{
          x: offset.x,
          y: offset.y,
          rotate: isRunning ? [-18, 20, -18] : [-3, 4, -3],
          scale: isRunning ? [1, 1.15, 1] : 1,
        }}
        transition={
          isRunning
            ? { type: "spring", stiffness: 650, damping: 22, mass: 0.6 }
            : { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
        }
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          evade(e.clientX, e.clientY);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          if (e.touches[0]) {
            evade(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onMouseEnter={(e) => {
          evade(e.clientX, e.clientY);
        }}
        className="w-8 h-8 sm:w-10 sm:h-10 relative cursor-pointer drop-shadow-[0_4px_14px_rgba(255,77,141,0.55)]"
        title="Can't catch me! 😎"
      >
        {/* Floating Cheeky Taunt Bubble */}
        <AnimatePresence>
          {tauntText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: -24 }}
              exit={{ opacity: 0, scale: 0.6, y: -32 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold font-mono text-[#00F5D4] bg-[#0E120E]/90 px-2 py-0.5 rounded-full border border-[#00F5D4]/40 shadow-lg pointer-events-none select-none whitespace-nowrap z-40"
            >
              {tauntText}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cartoon Running Dust Cloud Effect 💨 when scurrying away */}
        <AnimatePresence>
          {isRunning && (
            <motion.div
              initial={{ opacity: 0, scale: 0.4, x: 0 }}
              animate={{ opacity: 0.9, scale: 1.3, x: offset.x > 0 ? -18 : 18 }}
              exit={{ opacity: 0, scale: 1.6 }}
              transition={{ duration: 0.35 }}
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
          </defs>

          {/* Tiny Cartoon Stick Legs - Frantically Windmilling / Running when escaping! */}
          <motion.g
            animate={
              isRunning
                ? { rotate: [0, 180, 360], y: [0, -4, 0] }
                : { rotate: [-4, 4, -4] }
            }
            transition={
              isRunning
                ? { repeat: Infinity, duration: 0.2, ease: "linear" }
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

          {/* INTACT HEART WITH SASSY SUNGLASSES */}
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
        </svg>
      </motion.div>
    </div>
  );
};

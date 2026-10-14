import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CartoonDownloadGuideProps {
  isHovered: boolean;
  isClicked?: boolean;
}

export const CartoonDownloadGuide: React.FC<CartoonDownloadGuideProps> = ({ isHovered, isClicked }) => {
  // Auto-peek for 3 seconds on initial load, then fully controlled by hover
  const [initialPeek, setInitialPeek] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialPeek(true);
      const hideTimer = setTimeout(() => {
        setInitialPeek(false);
      }, 3200);
      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const isVisible = isHovered || initialPeek || isClicked;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5, transition: { duration: 0.22 } }}
          transition={{ type: "spring", stiffness: 450, damping: 22 }}
          className="absolute top-full mt-1 right-2 pointer-events-none z-50 select-none flex items-center justify-center"
        >
          {/* Hilarious Cartoon Mascot Container with Squash & Stretch Bouncing */}
          <motion.div
            animate={
              isClicked
                ? {
                    rotate: [0, 360],
                    scale: [1, 1.35, 1],
                    y: [0, -25, 0],
                  }
                : {
                    y: [0, -14, 0],
                    scaleX: [1, 0.92, 1.14, 0.96, 1],
                    scaleY: [1, 1.18, 0.86, 1.08, 1],
                    rotate: [0, -4, 4, -2, 0],
                  }
            }
            transition={
              isClicked
                ? { duration: 0.65, ease: "easeOut" }
                : {
                    repeat: Infinity,
                    duration: 0.75,
                    ease: "easeInOut",
                  }
            }
            className="relative w-28 h-28 sm:w-32 sm:h-32 drop-shadow-[0_12px_24px_rgba(0,245,212,0.4)]"
          >
            <svg
              viewBox="0 0 130 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              <defs>
                {/* Vibrant Cyber-Toon Body Gradient */}
                <linearGradient id="funnyBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F5D4" />
                  <stop offset="45%" stopColor="#06D6A0" />
                  <stop offset="85%" stopColor="#028090" />
                  <stop offset="100%" stopColor="#005B66" />
                </linearGradient>

                {/* Belly Patch Gradient */}
                <linearGradient id="funnyBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8E7" />
                  <stop offset="100%" stopColor="#FFE082" />
                </linearGradient>

                {/* Goofy Spring Glow */}
                <filter id="springGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* FLOATING BOING-BOING SPRING ANTENNA WITH CRAZY WOBBLE */}
              <motion.g
                animate={{
                  rotate: [-28, 32, -22, 26, -28],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.65,
                  ease: "easeInOut",
                }}
                style={{ originX: "65px", originY: "38px" }}
              >
                {/* Coiled Wobbly Spring Wire */}
                <path
                  d="M 65 38 Q 55 30 65 24 Q 75 18 65 12 Q 57 7 65 4"
                  stroke="#FFD166"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Glowing Yellow Star / Crazy Bulb on Antenna Tip */}
                <circle cx="65" cy="4" r="7.5" fill="#FFD166" filter="url(#springGlow)" />
                <circle cx="65" cy="4" r="4.5" fill="#FFFFFF" />

                {/* Funny Energy Sparkles around antenna tip */}
                <line x1="65" y1="-8" x2="65" y2="-4" stroke="#FFE49E" strokeWidth="2" strokeLinecap="round" />
                <line x1="53" y1="4" x2="57" y2="4" stroke="#FFE49E" strokeWidth="2" strokeLinecap="round" />
                <line x1="73" y1="4" x2="77" y2="4" stroke="#FFE49E" strokeWidth="2" strokeLinecap="round" />
              </motion.g>

              {/* LITTLE CARTOON SHOES / FEET KICKING */}
              <motion.g
                animate={{
                  y: [0, 4, 0],
                  rotate: [-6, 6, -6],
                }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
              >
                {/* Left Shoe */}
                <ellipse cx="48" cy="112" rx="10" ry="5.5" fill="#1B262C" stroke="#00F5D4" strokeWidth="2" />
                <ellipse cx="48" cy="111" rx="5" ry="2.5" fill="#00F5D4" opacity="0.6" />

                {/* Right Shoe */}
                <ellipse cx="82" cy="112" rx="10" ry="5.5" fill="#1B262C" stroke="#00F5D4" strokeWidth="2" />
                <ellipse cx="82" cy="111" rx="5" ry="2.5" fill="#00F5D4" opacity="0.6" />
              </motion.g>

              {/* CHUBBY GOOFY BLOB/BEAR BODY */}
              <path
                d="M 38 48 C 38 28, 92 28, 92 48 C 104 74, 104 104, 65 106 C 26 104, 26 74, 38 48 Z"
                fill="url(#funnyBodyGrad)"
                stroke="#1B262C"
                strokeWidth="3"
              />

              {/* CHUBBY ROUND BELLY PATCH */}
              <ellipse cx="65" cy="80" rx="22" ry="19" fill="url(#funnyBellyGrad)" opacity="0.95" />

              {/* CRAZY MISMATCHED GOOGLY EYES! (One Big, One Medium, Looking Straight UP at the Button) */}
              <g>
                {/* LEFT GOOGLY EYE (Huge Round Eye) */}
                <circle cx="48" cy="50" r="16" fill="#FFFFFF" stroke="#1B262C" strokeWidth="3" />

                {/* Left Moving Pupil Looking UP */}
                <motion.g
                  animate={{
                    y: [-4, -1, -4],
                    x: [1, -2, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                >
                  <circle cx="48" cy="46" r="6.5" fill="#1B262C" />
                  {/* Hilarious Eye Highlights */}
                  <circle cx="51" cy="43" r="2.8" fill="#FFFFFF" />
                  <circle cx="46" cy="48" r="1.4" fill="#FFFFFF" />
                </motion.g>

                {/* RIGHT GOOGLY EYE (Slightly Smaller & Derpy) */}
                <circle cx="80" cy="52" r="13" fill="#FFFFFF" stroke="#1B262C" strokeWidth="3" />

                {/* Right Moving Pupil Looking UP & slightly inwards (Comical Derp Look) */}
                <motion.g
                  animate={{
                    y: [-4, -1, -4],
                    x: [-1, 2, -1],
                  }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                >
                  <circle cx="78" cy="48" r="5.5" fill="#1B262C" />
                  <circle cx="80" cy="45" r="2.3" fill="#FFFFFF" />
                  <circle cx="76" cy="50" r="1.2" fill="#FFFFFF" />
                </motion.g>
              </g>

              {/* CUTE GOOFY BLUSH CIRCLES */}
              <ellipse cx="32" cy="64" rx="6" ry="4" fill="#FF4D8D" opacity="0.8" />
              <ellipse cx="98" cy="66" rx="6" ry="4" fill="#FF4D8D" opacity="0.8" />

              {/* HILARIOUS OPEN MOUTH WITH BUCK TEETH & WOBBLING TONGUE */}
              <g>
                {/* Big Wide Happy Cartoon Mouth */}
                <path
                  d="M 47 68 Q 65 92 83 68 Q 65 72 47 68 Z"
                  fill="#780016"
                  stroke="#1B262C"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />

                {/* Wobbly Pink Tongue Sticking Out */}
                <motion.path
                  animate={{
                    rotate: [-10, 10, -10],
                    scaleY: [1, 1.25, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 0.35, ease: "easeInOut" }}
                  style={{ originX: "65px", originY: "74px" }}
                  d="M 57 74 C 57 74, 57 88, 65 88 C 73 88, 73 74, 73 74 Z"
                  fill="#FF4D8D"
                  stroke="#1B262C"
                  strokeWidth="1.8"
                />

                {/* Silly Buck Teeth */}
                <rect x="58" y="68" width="6.5" height="5.5" rx="1.5" fill="#FFFFFF" stroke="#1B262C" strokeWidth="1.4" />
                <rect x="65.5" y="68" width="6.5" height="5.5" rx="1.5" fill="#FFFFFF" stroke="#1B262C" strokeWidth="1.4" />
              </g>

              {/* LEFT CARTOON HAND - RAPIDLY JABBING UP AT THE BUTTON! */}
              <motion.g
                animate={{
                  y: [0, -18, 0],
                  rotate: [-8, 6, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.42,
                  ease: "easeInOut",
                }}
                style={{ originX: "24px", originY: "75px" }}
              >
                {/* Rubber Hose Arm */}
                <path
                  d="M 38 72 Q 20 62 24 38"
                  stroke="#1B262C"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 38 72 Q 20 62 24 38"
                  stroke="#00F5D4"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Big White Cartoon Glove */}
                <circle cx="24" cy="36" r="10.5" fill="#FFFFFF" stroke="#1B262C" strokeWidth="2.6" />

                {/* Exaggerated Index Finger Pointing STRAIGHT UP! 👆 */}
                <path
                  d="M 19 36 L 19 12 Q 19 7 24 7 Q 29 7 29 12 L 29 36 Z"
                  fill="#FFFFFF"
                  stroke="#1B262C"
                  strokeWidth="2.6"
                />

                {/* Funny Energy Pointers at fingertip */}
                <motion.g
                  animate={{ scale: [0.7, 1.4, 0.7], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 0.42 }}
                >
                  <circle cx="24" cy="4" r="3.5" fill="#FFD166" filter="url(#springGlow)" />
                </motion.g>
              </motion.g>

              {/* RIGHT CARTOON HAND - ALTERNATELY JABBING UP AT THE BUTTON! */}
              <motion.g
                animate={{
                  y: [-18, 0, -18],
                  rotate: [6, -8, 6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.42,
                  ease: "easeInOut",
                }}
                style={{ originX: "106px", originY: "75px" }}
              >
                {/* Rubber Hose Arm */}
                <path
                  d="M 92 72 Q 110 62 106 38"
                  stroke="#1B262C"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 92 72 Q 110 62 106 38"
                  stroke="#00F5D4"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Big White Cartoon Glove */}
                <circle cx="106" cy="36" r="10.5" fill="#FFFFFF" stroke="#1B262C" strokeWidth="2.6" />

                {/* Exaggerated Index Finger Pointing STRAIGHT UP! 👆 */}
                <path
                  d="M 101 36 L 101 12 Q 101 7 106 7 Q 111 7 111 12 L 111 36 Z"
                  fill="#FFFFFF"
                  stroke="#1B262C"
                  strokeWidth="2.6"
                />

                {/* Funny Energy Pointers at fingertip */}
                <motion.g
                  animate={{ scale: [1.4, 0.7, 1.4], opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 0.42 }}
                >
                  <circle cx="106" cy="4" r="3.5" fill="#FFD166" filter="url(#springGlow)" />
                </motion.g>
              </motion.g>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

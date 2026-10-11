"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  // stage: 0 = black, 1 = PRV reveal, 2 = full-name transformation, 3 = exit
  const [stage, setStage] = useState<number>(0);
  const [shouldSkip, setShouldSkip] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Check if intro was already played in this browser session
    const hasSeenIntro = sessionStorage.getItem("prv_intro_seen");
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    // Timeline: Total ~2.6 seconds
    // Stage 0: 0 - 300ms (Black screen)
    // Stage 1: 300ms - 1300ms (PRV Reveal)
    // Stage 2: 1300ms - 2200ms (Full name transformation)
    // Stage 3: 2200ms - 2600ms (Fade out intro, reveal hero)

    const timer1 = setTimeout(() => setStage(1), 250);
    const timer2 = setTimeout(() => setStage(2), 1250);
    const timer3 = setTimeout(() => setStage(3), 2200);
    const timerEnd = setTimeout(() => {
      sessionStorage.setItem("prv_intro_seen", "true");
      onComplete();
    }, 2650);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerEnd);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("prv_intro_seen", "true");
    setShouldSkip(true);
    onComplete();
  };

  if (shouldSkip) return null;

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] bg-[#040407] flex flex-col items-center justify-center select-none overflow-hidden"
          role="dialog"
          aria-label="Introduction Animation"
        >
          {/* Subtle Ambient Violet Core Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: stage >= 1 ? 0.25 : 0,
                scale: stage === 2 ? 1.2 : 0.8,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-96 h-96 rounded-full bg-[#8B5CF6]/20 blur-[120px]"
            />
          </div>

          {/* Centered Typography Transformation */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
            {stage === 1 && (
              <motion.div
                key="prv-reveal"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-[0.2em] text-[#F8FAFC]">
                  PR<span className="text-[#8B5CF6] drop-shadow-[0_0_25px_rgba(139,92,246,0.8)]">V</span>
                </h1>
                <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mt-4 opacity-80" />
              </motion.div>
            )}

            {stage >= 2 && (
              <motion.div
                key="fullname-reveal"
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative space-y-3"
              >
                <div className="inline-block">
                  <span className="text-[11px] font-mono tracking-[0.3em] text-slate-400 uppercase">
                    SYSTEM ARCHITECT // BACKEND &amp; AI
                  </span>
                </div>
                <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F8FAFC] uppercase">
                  PRIYANSHU{" "}
                  <span className="text-[#8B5CF6] drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                    RANJAN
                  </span>{" "}
                  VERMA
                </h1>
                <div className="h-[1px] w-48 mx-auto bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent opacity-90 mt-2" />
              </motion.div>
            )}
          </div>

          {/* Discreet Skip Button in Corner */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-[11px] font-mono tracking-widest text-slate-500 hover:text-[#F8FAFC] transition-colors uppercase border border-white/10 hover:border-[#8B5CF6]/50 px-3 py-1.5 rounded-full bg-[#040407]/80 backdrop-blur-md cursor-pointer"
          >
            SKIP [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

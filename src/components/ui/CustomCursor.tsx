"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect clickable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const clickable = target.closest("a, button, [role='button'], input, textarea, select, .interactive-card");
      setIsHovered(!!clickable);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousemove", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-element fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      {/* Center sharp vibranium dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-vibranium shadow-[0_0_8px_#a855f7]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer subtle orbital ring with geometric chevron notch */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border transition-colors duration-200 ${
          isHovered
            ? "border-vibranium/60 bg-vibranium/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            : "border-slate-500/30"
        }`}
        animate={{
          x: isHovered ? mousePosition.x - 20 : mousePosition.x - 14,
          y: isHovered ? mousePosition.y - 20 : mousePosition.y - 14,
          width: isHovered ? 40 : 28,
          height: isHovered ? 40 : 28,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 220, mass: 0.2 }}
      />
    </div>
  );
}

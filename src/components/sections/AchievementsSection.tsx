"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ACHIEVEMENTS_DATA } from "@/data/portfolioData";
import { Trophy, Code2, Users, Award, ExternalLink } from "lucide-react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  isFloat?: boolean;
}

function AnimatedCounter({ from, to, duration = 2, isFloat = false }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * ease;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(2) : Math.floor(count)}
    </span>
  );
}

export default function AchievementsSection() {
  const categoryIcons = [Code2, Users, Award];

  return (
    <section
      id="achievements"
      className="relative py-28 bg-[#060609] overflow-hidden border-t border-obsidian-border/50"
    >
      {/* African Chevron Accent */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-30 pointer-events-none" />

      {/* Background Diamond Lattice */}
      <div className="wakanda-geometric-bg absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
            <Trophy className="w-3 h-3 text-vibranium" />
            <span>SEC-05 // FIELD METRICS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            ACHIEVEMENTS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm font-mono max-w-2xl">
            Verified algorithmic problem solving, collaborative hackathon prototypes, and academic rigor.
          </p>
        </div>

        {/* 3 Large Cinematic Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = categoryIcons[idx] || Award;
            const isFloat = item.id === "academic-cgpa";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="obsidian-card rounded-2xl p-8 relative flex flex-col justify-between group hover:border-vibranium/60"
              >
                {/* Subtle corner glyph */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-500">
                  {`// 0${idx + 1}`}
                </div>

                <div>
                  <div className="p-3 rounded-xl bg-obsidian-800 border border-obsidian-border inline-flex text-vibranium group-hover:text-vibranium-neon group-hover:border-vibranium/40 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Large Counter Display */}
                  <div className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight flex items-baseline gap-1 mb-2">
                    <span className="text-glow-violet">
                      <AnimatedCounter
                        from={0}
                        to={item.metricNumber}
                        duration={2.2}
                        isFloat={isFloat}
                      />
                    </span>
                    <span className="text-vibranium-neon text-4xl">
                      {item.suffix}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-100 uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-vibranium mb-4">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Badge Tag */}
                <div className="mt-8 pt-4 border-t border-obsidian-border/70 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-obsidian-950 border border-vibranium/30 text-slate-300 tracking-wider">
                    {item.badge}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-vibranium shadow-[0_0_8px_#c084fc]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ACHIEVEMENTS_DATA, EDUCATION_DATA } from "@/data/portfolioData";
import { Trophy, Code2, Users, Award, GraduationCap, Calendar, MapPin } from "lucide-react";

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

    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
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

export default function EducationAndAchievementsSection() {
  const categoryIcons = [Code2, Users, Award];

  return (
    <section
      id="academics"
      className="relative py-28 bg-[#040407] overflow-hidden border-t border-obsidian-border/50"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
            <Trophy className="w-3 h-3 text-vibranium" />
            <span>SEC-04 // MILESTONES &amp; EDUCATION</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] uppercase tracking-tight">
            EDUCATION &amp; ACHIEVEMENTS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm font-mono max-w-2xl">
            Undergraduate Computer Science curriculum, verified LeetCode problem solving, and intensive hackathons.
          </p>
        </div>

        {/* Part 1: Education Card */}
        <div className="mb-14">
          {EDUCATION_DATA.map((entry, idx) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="obsidian-card rounded-2xl p-6 sm:p-8 relative border border-obsidian-border hover:border-vibranium/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-obsidian-800 border border-obsidian-border text-vibranium">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F8FAFC]">
                      {entry.institution}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                      <span className="text-slate-200 font-semibold">{entry.degree}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-vibranium" />
                        {entry.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 border border-obsidian-border text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-vibranium" />
                    <span>{entry.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 border border-vibranium/40 text-xs font-mono text-vibranium-neon font-bold shadow-[0_0_12px_rgba(139,92,246,0.15)]">
                    <Award className="w-3.5 h-3.5 text-vibranium-neon" />
                    <span>{entry.score}</span>
                  </div>
                </div>
              </div>

              {entry.highlights && entry.highlights.length > 0 && (
                <ul className="space-y-2 pt-4 border-t border-obsidian-border/70 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {entry.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-vibranium font-mono text-sm leading-none mt-1">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Part 2: 3 Statistics Achievement Cards */}
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
                className="obsidian-card rounded-2xl p-8 relative flex flex-col justify-between group hover:border-vibranium/60 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-500">
                  {`// 0${idx + 1}`}
                </div>

                <div>
                  <div className="p-3 rounded-xl bg-obsidian-800 border border-obsidian-border inline-flex text-vibranium group-hover:text-vibranium-neon group-hover:border-vibranium/40 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Counter */}
                  <div className="font-display font-black text-5xl sm:text-6xl text-[#F8FAFC] tracking-tight flex items-baseline gap-1 mb-2">
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

                  <h3 className="font-display font-bold text-lg text-[#F8FAFC] uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-vibranium mb-4">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
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

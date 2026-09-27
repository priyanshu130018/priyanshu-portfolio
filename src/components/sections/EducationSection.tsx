"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_DATA } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative py-28 bg-[#060609] overflow-hidden border-t border-obsidian-border/50"
    >
      {/* African Chevron Accent */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-30 pointer-events-none" />

      {/* Subtle Background Pattern */}
      <div className="wakanda-geometric-bg absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
            <GraduationCap className="w-3 h-3 text-vibranium" />
            <span>SEC-07 // ACADEMIC CHRONICLE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            EDUCATION
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm font-mono max-w-xl">
            Formal foundations in Computer Science, systems engineering, and mathematics.
          </p>
        </div>

        {/* Futuristic Vertical Timeline with Glowing Violet Nodes */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-obsidian-border/80 space-y-12">
          {/* Base metallic line with subtle gradient */}
          <div className="absolute top-0 -left-[2px] bottom-0 w-[2px] bg-gradient-to-b from-vibranium via-slate-700 to-transparent opacity-50" />

          {/* Animated Energy Traveling Along the Metallic Line */}
          <motion.div
            className="absolute -left-[3px] w-2 h-14 rounded-full bg-gradient-to-b from-transparent via-vibranium-neon to-transparent shadow-[0_0_16px_#c084fc] pointer-events-none z-10"
            animate={{ top: ["0%", "92%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {EDUCATION_DATA.map((entry, idx) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Violet Node Marker on Vertical Axis */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-vibranium opacity-50" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-vibranium border-2 border-[#060609] shadow-[0_0_12px_#a855f7]" />
                </div>
              </div>

              {/* Obsidian Timeline Card */}
              <div className="obsidian-card rounded-2xl p-6 sm:p-7 relative group hover:border-vibranium/50">
                {/* Header: Degree & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-vibranium-neon transition-colors">
                    {entry.institution}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-950 border border-obsidian-border text-xs font-mono text-vibranium-neon w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{entry.period}</span>
                  </div>
                </div>

                {/* Degree & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-300 mb-4">
                  <span className="text-slate-100 font-semibold">{entry.degree}</span>
                  <span className="text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3 h-3 text-vibranium" />
                    <span>{entry.location}</span>
                  </span>
                </div>

                {/* Score Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-obsidian-950 border border-vibranium/40 text-xs font-mono text-vibranium-neon font-bold mb-4 shadow-[0_0_12px_rgba(139,92,246,0.12)]">
                  <Award className="w-3.5 h-3.5" />
                  <span>{entry.score}</span>
                </div>

                {/* Highlights */}
                {entry.highlights && entry.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-3 border-t border-obsidian-border/70 text-xs text-slate-400 leading-relaxed font-sans">
                    {entry.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-vibranium font-mono text-xs leading-none mt-1">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

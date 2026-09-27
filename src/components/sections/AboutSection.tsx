"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Server,
  Cpu,
  Workflow,
  Sparkles,
  Database,
  Layers,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export default function AboutSection() {
  const focusIcons = [
    Server,
    Cpu,
    Workflow,
    Sparkles,
    Layers,
    Database,
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#060609] overflow-hidden border-t border-obsidian-border/50"
    >
      {/* African Chevron Accent */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-30 pointer-events-none" />

      {/* Subtle Background African Diamond Grid */}
      <div className="wakanda-geometric-bg absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-vibranium shadow-[0_0_6px_#a855f7]" />
            <span>SEC-02 // PROFILE DOSSIER</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            ABOUT
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
        </div>

        {/* Two-Column Cinematic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Portrait Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="obsidian-card rounded-2xl p-4 sm:p-5 relative group">
              {/* Vibranium Glowing Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-vibranium pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-vibranium pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-vibranium pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-vibranium pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-obsidian-950 border border-obsidian-border mb-4">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter contrast-[1.04] brightness-[1.01] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono bg-obsidian-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-obsidian-border">
                  <span className="text-slate-300 font-semibold">{PERSONAL_INFO.name}</span>
                  <span className="text-vibranium-neon font-bold">CGPA: {PERSONAL_INFO.cgpa}</span>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="space-y-2 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-obsidian-950/70 border border-obsidian-border/60">
                  <span className="text-slate-400">INSTITUTION</span>
                  <span className="text-slate-200 text-right font-medium">Acharya Institute of Tech</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-obsidian-950/70 border border-obsidian-border/60">
                  <span className="text-slate-400">LOCATION</span>
                  <span className="text-slate-200 font-medium">Bengaluru, India</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-obsidian-950/70 border border-obsidian-border/60">
                  <span className="text-slate-400">PERIOD</span>
                  <span className="text-vibranium-neon font-semibold">2023 – 2027</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative & Focus Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Professional Summary from Resume */}
            <div className="obsidian-card rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-vibranium mb-8">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
                <Terminal className="w-4 h-4 text-vibranium" />
                <span>OFFICIAL PROFESSIONAL SUMMARY</span>
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {PERSONAL_INFO.professionalSummary}
              </p>
            </div>

            {/* Core Engineering Focus Areas */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-xs tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                <span>CORE SPECIALIZATION PILLARS</span>
                <span className="h-px flex-1 bg-obsidian-border" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PERSONAL_INFO.focusAreas.map((area, idx) => {
                  const IconComponent = focusIcons[idx] || Server;
                  return (
                    <div
                      key={area.title}
                      className="p-3.5 rounded-xl bg-obsidian-850/80 border border-obsidian-border hover:border-vibranium/40 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-obsidian-700/80 text-vibranium group-hover:text-vibranium-neon transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="font-display text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                          {area.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        {area.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resume Technologies Mentioned */}
            <div className="obsidian-card rounded-2xl p-5 border border-obsidian-border/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                  VERIFIED RESUME TECHNOLOGIES
                </span>
                <span className="text-[10px] font-mono text-vibranium-neon">8 CORE STACKS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.resumeTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 border border-obsidian-border hover:border-vibranium/50 text-slate-200 text-xs font-mono tracking-wide transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-vibranium" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WakandaCoreCanvas from "@/components/3d/WakandaCoreCanvas";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  MapPin,
  GraduationCap,
  Award,
  ArrowRight,
  Send,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#040407]"
    >
      {/* 3D Wakandan Obsidian Core Scene */}
      <WakandaCoreCanvas />

      {/* Subtle African Chevron Geometric Accent at Top Edge */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-40 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* System Online Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-obsidian-border backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,0,0,0.6)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vibranium-neon opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-vibranium" />
              </span>
              <span className="text-[11px] font-mono tracking-widest text-slate-300 font-semibold">
                SYSTEM ONLINE
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-[10px] font-mono tracking-wider text-vibranium-neon">
                AI / BACKEND / ENGINEERING
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 hidden sm:inline">
                BENGALURU, INDIA
              </span>
            </motion.div>

            {/* Hero Main Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.95]">
                PRIYANSHU
              </h1>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 uppercase leading-[0.95]">
                RANJAN VERMA
              </h1>
            </motion.div>

            {/* Subtitle & Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-vibranium" />
              <p className="font-display text-lg sm:text-2xl font-bold tracking-wide text-vibranium-neon">
                {PERSONAL_INFO.headline}
              </p>
            </motion.div>

            {/* Cinematic Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl italic border-l-2 border-vibranium/40 pl-4 py-0.5"
            >
              &ldquo;{PERSONAL_INFO.quote}&rdquo;
            </motion.blockquote>

            {/* Small Information Badges (Bengaluru, B.E., CGPA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-850/80 border border-obsidian-border text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-vibranium" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-850/80 border border-obsidian-border text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-vibranium" />
                <span>{PERSONAL_INFO.degree}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-850/80 border border-vibranium/40 text-vibranium-neon font-semibold shadow-[0_0_10px_rgba(139,92,246,0.15)]">
                <Award className="w-3.5 h-3.5 text-vibranium-neon" />
                <span>CGPA: {PERSONAL_INFO.cgpa}</span>
              </div>
            </motion.div>

            {/* Buttons (VIEW PROJECTS, CONTACT ME, GITHUB, LINKEDIN) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              {/* VIEW PROJECTS */}
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-vibranium hover:bg-vibranium-dim text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* CONTACT ME */}
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-obsidian-border hover:border-vibranium/60 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <span>CONTACT ME</span>
                <Send className="w-3.5 h-3.5 text-vibranium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* GITHUB */}
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-obsidian-850/80 hover:bg-obsidian-800 text-slate-300 hover:text-white text-xs sm:text-sm font-mono tracking-wider uppercase border border-obsidian-border hover:border-slate-500 transition-all duration-200"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                <span>GITHUB</span>
              </a>

              {/* LINKEDIN */}
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-obsidian-850/80 hover:bg-obsidian-800 text-slate-300 hover:text-white text-xs sm:text-sm font-mono tracking-wider uppercase border border-obsidian-border hover:border-vibranium/50 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-vibranium" />
                <span>LINKEDIN</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Circular / Rounded Portrait Treatment */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              {/* Ambient Vibranium Glow Rings Behind Portrait */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-vibranium/20 via-transparent to-vibranium-neon/10 blur-2xl pointer-events-none" />
              
              {/* Outer Rotating Geometric Frame */}
              <div className="absolute -inset-2.5 rounded-full border border-vibranium/30 border-dashed animate-slow-spin pointer-events-none" />
              <div className="absolute -inset-5 rounded-full border border-slate-700/20 pointer-events-none" />

              {/* Small Orbiting Vibranium Particles */}
              <div className="absolute -top-3 left-1/4 w-1.5 h-1.5 rounded-full bg-vibranium-neon shadow-[0_0_8px_#c084fc] animate-ping pointer-events-none" />
              <div className="absolute top-1/3 -right-3 w-1 h-1 rounded-full bg-vibranium shadow-[0_0_6px_#a855f7] animate-pulse pointer-events-none" />
              <div className="absolute -bottom-2 right-1/4 w-2 h-2 rounded-full bg-vibranium/80 shadow-[0_0_10px_#9333ea] animate-pulse pointer-events-none" />
              <div className="absolute top-2/3 -left-2 w-1.5 h-1.5 rounded-full bg-slate-300 shadow-[0_0_6px_#ffffff] animate-ping pointer-events-none" />

              {/* Obsidian Bezel Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2.5 bg-gradient-to-b from-obsidian-700 via-obsidian-900 to-[#040407] border-2 border-obsidian-border shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.2)]">
                {/* Subtle Geometric Corner Markings */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-vibranium" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-vibranium" />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-vibranium" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-vibranium" />

                {/* Inner Image Mask */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-obsidian-600 bg-obsidian-950">
                  <Image
                    src={PERSONAL_INFO.avatarImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover object-top filter contrast-[1.05] brightness-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Cinematic Vignette Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-obsidian-950/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge on Bezel */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-obsidian-900/95 border border-vibranium/40 shadow-[0_4px_15px_rgba(0,0,0,0.8)] backdrop-blur-md whitespace-nowrap">
                  <span className="text-[10px] font-mono tracking-widest text-slate-200 uppercase font-semibold">
                    CSE // BENGALURU
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator at Bottom */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <button
            onClick={() => scrollTo("about")}
            className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll to About Me section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">
              SCROLL DOWN
            </span>
            <ChevronDown className="w-4 h-4 text-vibranium group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import {
  Github,
  ExternalLink,
  Info,
  X,
  Layers,
  Cpu,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";
import NammaVisual from "./projects/NammaVisual";
import VermithorVisual from "./projects/VermithorVisual";
import MananVisual from "./projects/MananVisual";
import WatchmanVisual from "./projects/WatchmanVisual";
import DetexaVisual from "./projects/DetexaVisual";
import DaliVisual from "./projects/DaliVisual";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const renderVisual = (type: ProjectItem["visualType"]) => {
    switch (type) {
      case "namma":
        return <NammaVisual />;
      case "vermithor":
        return <VermithorVisual />;
      case "manan":
        return <MananVisual />;
      case "watchman":
        return <WatchmanVisual />;
      case "detexa":
        return <DetexaVisual />;
      case "dali":
        return <DaliVisual />;
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#040407] overflow-hidden border-t border-obsidian-border/50"
    >
      {/* African Chevron Accent */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-30 pointer-events-none" />

      {/* Background Diamond Lattice */}
      <div className="wakanda-geometric-bg absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
            <Layers className="w-3 h-3 text-vibranium" />
            <span>SEC-04 // PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            PROJECTS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm font-mono max-w-2xl">
            Scalable backend architectures, AI/ML retrieval systems, and intelligent platforms built by Priyanshu Ranjan Verma.
          </p>
        </div>

        {/* Large Cinematic Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="obsidian-card rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between group hover:border-vibranium/50"
            >
              <div>
                {/* Top Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-obsidian-800 border border-obsidian-border text-vibranium-neon">
                      {project.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-950 border border-obsidian-border text-slate-500">
                    VERIFIED PROJECT
                  </span>
                </div>

                {/* Animated Visual Component */}
                <div className="mb-5">
                  {renderVisual(project.visualType)}
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide uppercase group-hover:text-vibranium-neon transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-vibranium mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-obsidian-950 border border-obsidian-border text-slate-300 text-[11px] font-mono tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-obsidian-border/70 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 hover:text-white text-xs font-mono tracking-wider uppercase border border-obsidian-border hover:border-vibranium/60 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5 text-vibranium" />
                    <span>GITHUB</span>
                  </a>

                  {/* View Project Live (if available) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-vibranium/20 hover:bg-vibranium/30 text-vibranium-neon text-xs font-mono tracking-wider uppercase border border-vibranium/40 transition-all duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>

                {/* Expandable Architecture Details Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-vibranium-neon transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>VIEW SPECS</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expandable Project Details Modal / Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-2xl bg-obsidian-900 border border-vibranium/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.2)] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-obsidian-800 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/50 transition-colors"
                aria-label="Close Project Specs"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-vibranium/20 text-vibranium-neon border border-vibranium/40">
                  {selectedProject.number}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-white uppercase mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-vibranium mb-4">
                {selectedProject.tagline}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Metrics Grid if available */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {selectedProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 rounded-xl bg-obsidian-950 border border-obsidian-border"
                    >
                      <div className="text-[10px] font-mono text-slate-400 mb-0.5">
                        {m.label}
                      </div>
                      <div className="text-xs font-mono font-bold text-vibranium-neon truncate">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Technical Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vibranium" />
                    <span>ENGINEERING HIGHLIGHTS</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-vibranium font-mono text-sm leading-none mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Notes */}
              {selectedProject.architectureSummary && (
                <div className="p-4 rounded-xl bg-obsidian-950/80 border border-obsidian-border mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                    <Cpu className="w-3.5 h-3.5 text-vibranium" />
                    <span>ARCHITECTURE SUMMARY</span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono">
                    {selectedProject.architectureSummary}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-2">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-obsidian-950 border border-vibranium/30 text-slate-200 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-obsidian-border">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-vibranium hover:bg-vibranium-dim text-white text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

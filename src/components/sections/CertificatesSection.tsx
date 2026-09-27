"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATIONS_DATA } from "@/data/portfolioData";
import { CertificationItem } from "@/types";
import {
  ShieldCheck,
  Award,
  Calendar,
  Sparkles,
  Maximize2,
  X,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-28 bg-[#040407] overflow-hidden border-t border-obsidian-border/50"
    >
      {/* African Chevron Accent */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-30 pointer-events-none" />

      {/* Background Geometric Pattern */}
      <div className="wakanda-geometric-bg absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
            <Award className="w-3 h-3 text-vibranium" />
            <span>SEC-06 // CREDENTIAL VAULT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            CERTIFICATES
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm font-mono max-w-2xl">
            Verified credentials in Generative AI, Cloud Infrastructure, Deep Learning, and Python Systems.
          </p>
        </div>

        {/* Certificate Vault Grid with 3D Perspective Tilt on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 [perspective:1200px]">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                rotateY: 4,
                rotateX: -3,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              onClick={() => setActiveCert(cert)}
              className="obsidian-card rounded-2xl p-6 relative flex flex-col justify-between group cursor-pointer overflow-hidden border border-obsidian-border hover:border-vibranium/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.2)] bg-gradient-to-b from-[#0e0e16]/90 to-[#07070b]/95 backdrop-blur-xl"
            >
              {/* Violet Scanline Passing Across On Hover */}
              <div className="holo-scanline opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Issuer & Credential Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border uppercase tracking-wider font-semibold ${
                      cert.issuer === "Oracle"
                        ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                        : "bg-blue-500/15 text-blue-300 border-blue-500/30"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-vibranium-neon transition-colors">
                    {cert.credentialCode}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-vibranium-neon transition-colors leading-snug mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Metadata Reveal on Hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
                  <div className="p-2.5 rounded-lg bg-obsidian-950/80 border border-obsidian-border text-[11px] font-mono space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>CATEGORY</span>
                      <span className="text-slate-200">{cert.category}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>STATUS</span>
                      <span className="text-emerald-400 font-semibold">VERIFIED RECORD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dates & Click Trigger Footer */}
              <div className="pt-4 border-t border-obsidian-border/70 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-vibranium" />
                  <span className="text-[11px]">
                    {cert.completedDate
                      ? `Completed: ${cert.completedDate}`
                      : `Issued: ${cert.issuedDate}`}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-vibranium-neon group-hover:translate-x-0.5 transition-transform text-xs">
                  <span>OPEN VAULT</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large Cinematic Certificate Viewer / Lightbox */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#08080d] border border-vibranium/60 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(139,92,246,0.3)] overflow-hidden"
            >
              {/* Subtle Scanning Beam Inside Lightbox */}
              <div className="holo-scanline" />

              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-obsidian-850 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/60 transition-colors cursor-pointer"
                aria-label="Close Certificate Dossier"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Digital Certificate Document Framing */}
              <div className="rounded-2xl border-2 border-obsidian-border bg-gradient-to-b from-[#0c0c14] to-[#07070b] p-6 sm:p-8 relative">
                {/* African Geometric Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-vibranium" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-vibranium" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-vibranium" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-vibranium" />

                <div className="flex items-center justify-between border-b border-obsidian-border pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-vibranium" />
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                      AUTHENTICATED CREDENTIAL RECORD
                    </span>
                  </div>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full uppercase font-bold ${
                      activeCert.issuer === "Oracle"
                        ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                        : "bg-blue-500/15 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {activeCert.issuer}
                  </span>
                </div>

                <div className="text-center my-6">
                  <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block mb-1">
                    THIS RECOGNITION IS FORMALLY CONFERRED UPON
                  </span>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide uppercase mb-3">
                    PRIYANSHU RANJAN VERMA
                  </h4>
                  <span className="text-xs font-mono text-slate-400 block mb-4">
                    FOR SUCCESSFUL COMPLETION & VERIFICATION OF
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-vibranium-neon max-w-xl mx-auto mb-4">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                    {activeCert.description}
                  </p>
                </div>

                {/* Metadata Ledger */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-obsidian-border text-xs font-mono">
                  <div className="p-3 rounded-xl bg-obsidian-950 border border-obsidian-border">
                    <span className="text-slate-500 text-[10px] block mb-0.5">ISSUING BODY</span>
                    <span className="text-slate-200 font-semibold">{activeCert.issuer}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian-950 border border-obsidian-border">
                    <span className="text-slate-500 text-[10px] block mb-0.5">COMPLETION / TIMELINE</span>
                    <span className="text-slate-200 font-semibold">
                      {activeCert.completedDate || activeCert.issuedDate}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian-950 border border-obsidian-border">
                    <span className="text-slate-500 text-[10px] block mb-0.5">VALIDITY STATUS</span>
                    <span className="text-vibranium-neon font-semibold">
                      {activeCert.validUntil ? `Valid to ${activeCert.validUntil}` : "Lifetime Verified"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Bottom Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-400">
                  CREDENTIAL CODE: <strong className="text-white">{activeCert.credentialCode}</strong>
                </span>

                <button
                  onClick={() => setActiveCert(null)}
                  className="px-5 py-2 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-slate-300 hover:text-white text-xs font-mono uppercase tracking-wider border border-obsidian-border transition-colors cursor-pointer"
                >
                  DISMISS VAULT
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

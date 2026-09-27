"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import WakandaPortalCanvas from "@/components/3d/WakandaPortalCanvas";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [msgSubject, setMsgSubject] = useState("");
  const [msgBody, setMsgBody] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDirectEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.links.email}?subject=${encodeURIComponent(
      msgSubject || "Project Collaboration Inquiry"
    )}&body=${encodeURIComponent(msgBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#040407] overflow-hidden border-t border-obsidian-border/50"
    >
      {/* African Chevron Accent */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-40 pointer-events-none" />

      {/* Subtle Background Pattern */}
      <div className="wakanda-geometric-bg absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
            <Sparkles className="w-3 h-3 text-vibranium" />
            <span>SEC-08 // TRANSMISSION TERMINAL</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            CONTACT
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
        </div>

        {/* Cinematic Grid: Left 3D Portal + Text, Right Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 3D Obsidian Portal & Cinematic Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* 3D Portal Scene */}
            <div className="w-full h-64 sm:h-72 relative rounded-2xl overflow-hidden bg-obsidian-950/70 border border-obsidian-border mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <WakandaPortalCanvas />
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-500">
                WAKANDAN VIBRANIUM PORTAL // ONLINE
              </div>
            </div>

            {/* Core Cinematic Text */}
            <div className="space-y-1 mb-6">
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight">
                LET&apos;S BUILD
              </h3>
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-vibranium-neon via-vibranium to-purple-400 uppercase tracking-tight leading-tight">
                SOMETHING INTELLIGENT.
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-lg mb-8">
              Open to engineering high-throughput backend services, autonomous AI/ML architectures, and challenging computer science collaborations.
            </p>

            {/* Direct Contact Metrics */}
            <div className="w-full space-y-3 font-mono text-xs">
              {/* Email item with mailto link & copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-850/90 border border-obsidian-border group hover:border-vibranium/40 transition-colors">
                <a
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                  className="flex items-center gap-3 flex-1 text-left"
                >
                  <div className="p-2 rounded-lg bg-obsidian-800 text-vibranium group-hover:text-vibranium-neon transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">OFFICIAL EMAIL (CLICK TO COMPOSE)</span>
                    <span className="text-slate-200 group-hover:text-white font-semibold transition-colors">
                      {PERSONAL_INFO.links.email}
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.links.email, "email")}
                  className="p-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
                  aria-label="Copy Email"
                  title="Copy email to clipboard"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone item with tel link & copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-850/90 border border-obsidian-border group hover:border-vibranium/40 transition-colors">
                <a
                  href={`tel:${PERSONAL_INFO.links.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 flex-1 text-left"
                >
                  <div className="p-2 rounded-lg bg-obsidian-800 text-vibranium group-hover:text-vibranium-neon transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">DIRECT PHONE (CLICK TO DIAL)</span>
                    <span className="text-slate-200 group-hover:text-white font-semibold transition-colors">
                      {PERSONAL_INFO.links.phone}
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.links.phone, "phone")}
                  className="p-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
                  aria-label="Copy Phone"
                  title="Copy phone to clipboard"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Big Buttons & Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="obsidian-card rounded-2xl p-6 sm:p-8 relative">
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-vibranium" />
                <span>PRIMARY CHANNELS</span>
              </h4>

              {/* Three Mandatory Buttons: EMAIL ME, GITHUB, LINKEDIN */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {/* EMAIL ME */}
                <a
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                  className="group flex flex-col items-center justify-center p-4 rounded-xl bg-vibranium hover:bg-vibranium-dim text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] text-center"
                >
                  <Mail className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform" />
                  <span>EMAIL ME</span>
                </a>

                {/* GITHUB */}
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-4 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 hover:text-white text-xs font-mono font-bold tracking-wider uppercase border border-obsidian-border hover:border-slate-500 transition-all duration-200 text-center"
                >
                  <Github className="w-5 h-5 mb-1.5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-transform" />
                  <span>GITHUB</span>
                </a>

                {/* LINKEDIN */}
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-4 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 hover:text-white text-xs font-mono font-bold tracking-wider uppercase border border-obsidian-border hover:border-vibranium/60 transition-all duration-200 text-center"
                >
                  <Linkedin className="w-5 h-5 mb-1.5 text-vibranium group-hover:scale-110 transition-transform" />
                  <span>LINKEDIN</span>
                </a>
              </div>

              {/* Direct Quick Transmission Composer */}
              <form onSubmit={handleDirectEmail} className="space-y-4 pt-4 border-t border-obsidian-border">
                <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase block">
                  SEND QUICK TRANSMISSION
                </span>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    SUBJECT // PURPOSE
                  </label>
                  <input
                    type="text"
                    value={msgSubject}
                    onChange={(e) => setMsgSubject(e.target.value)}
                    placeholder="Engineering Role / Project Architecture / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-950 border border-obsidian-border text-slate-200 text-xs font-mono placeholder:text-slate-600 focus:outline-none focus:border-vibranium/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    MESSAGE CONTENT
                  </label>
                  <textarea
                    rows={4}
                    value={msgBody}
                    onChange={(e) => setMsgBody(e.target.value)}
                    placeholder="Enter your message or project requirements..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-950 border border-obsidian-border text-slate-200 text-xs font-mono placeholder:text-slate-600 focus:outline-none focus:border-vibranium/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-obsidian-800 hover:bg-vibranium text-slate-200 hover:text-white text-xs font-mono font-bold tracking-wider uppercase border border-obsidian-border hover:border-vibranium transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <span>DISPATCH TRANSMISSION</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp, FileText } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040407] border-t border-obsidian-border text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-sm tracking-wider text-[#F8FAFC] uppercase">
              PRIYANSHU RANJAN VERMA
            </span>
            <span className="text-xs font-mono text-slate-500 mt-1">
              Backend Systems &amp; AI/ML Developer • Bengaluru, India
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              className="p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Priyanshu_Ranjan_Verma_Resume.pdf"
              className="p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-vibranium hover:text-white hover:border-vibranium/50 transition-colors"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-vibranium-neon transition-colors cursor-pointer"
          >
            <span>RETURN TO TOP</span>
            <div className="p-1.5 rounded-lg bg-obsidian-850 border border-obsidian-border">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-obsidian-border/50 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-2">
          <span>
            © {new Date().getFullYear()} Priyanshu Ranjan Verma. All rights reserved.
          </span>
          <span className="text-slate-500">
            ENGINEERING PORTFOLIO • BLACK // VIOLET // WHITE
          </span>
        </div>
      </div>
    </footer>
  );
}

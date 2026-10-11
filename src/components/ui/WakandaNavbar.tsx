"use client";

import React, { useState, useEffect } from "react";
import { NAVIGATION_ITEMS, PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, Github, Linkedin, ArrowUpRight, FileText } from "lucide-react";

export default function WakandaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAVIGATION_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#040407]/90 backdrop-blur-md border-b border-obsidian-border shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          >
            <div className="relative w-8 h-8 rounded-lg bg-obsidian-850 border border-obsidian-border group-hover:border-vibranium/60 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <span className="font-display font-bold text-xs tracking-wider text-vibranium group-hover:text-vibranium-neon transition-colors">
                PRV
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-vibranium/10 pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-sm font-semibold tracking-widest text-[#F8FAFC] group-hover:text-white uppercase transition-colors">
                PRIYANSHU RANJAN VERMA
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-mono">
                BACKEND • SYSTEMS • AI/ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-obsidian-900/70 border border-obsidian-border/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAVIGATION_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-[#F8FAFC] bg-vibranium/20 shadow-[0_0_12px_rgba(139,92,246,0.3)] border border-vibranium/40"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-vibranium-neon rounded-full shadow-[0_0_6px_#c084fc]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Resume Download */}
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Priyanshu_Ranjan_Verma_Resume.pdf"
              className="p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/40 transition-all duration-200"
              aria-label="Download Resume PDF"
              title="Download Resume"
            >
              <FileText className="w-4 h-4 text-vibranium" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/40 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-400 hover:text-white hover:border-vibranium/40 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-vibranium/15 hover:bg-vibranium/25 text-vibranium-neon text-xs font-semibold tracking-wider border border-vibranium/40 hover:border-vibranium transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-vibranium" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#040407]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 border-b border-obsidian-border">
          <nav className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase px-2 mb-2">
              SYSTEM SECTIONS
            </span>
            {NAVIGATION_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-white bg-vibranium/20 border border-vibranium/40 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-vibranium shadow-[0_0_8px_#c084fc]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-obsidian-border flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-obsidian-850 border border-obsidian-border text-slate-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  download="Priyanshu_Ranjan_Verma_Resume.pdf"
                  className="p-2.5 rounded-lg bg-obsidian-850 border border-obsidian-border text-vibranium"
                  aria-label="Download Resume"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="px-4 py-2 rounded-lg bg-vibranium text-white text-xs font-semibold tracking-wider"
              >
                CONTACT PRIYANSHU
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

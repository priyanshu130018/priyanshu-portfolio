"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden bg-[#040407]">
      {/* 1. Cinematic Hero with 3D Wakandan Obsidian Core & Profile Photo */}
      <HeroSection />

      {/* 2. About Me with Resume Professional Summary & Focus Pillars */}
      <AboutSection />

      {/* 3. Skills with 6 Clean Categories & Interactive Neural Illumination */}
      <SkillsSection />

      {/* 4. Projects with 6 Large Cinematic Cards & Architecture Modals */}
      <ProjectsSection />

      {/* 5. Achievements with Animated Statistic Counters */}
      <AchievementsSection />

      {/* 6. Certificates Gallery with Holographic Scanners & Dossier Lightbox */}
      <CertificatesSection />

      {/* 7. Education Vertical Timeline with Glowing Violet Nodes */}
      <EducationSection />

      {/* 8. Contact Section with 3D Rotating Portal & Direct Channels */}
      <ContactSection />

      {/* 9. Minimal Obsidian Footer */}
      <Footer />
    </main>
  );
}

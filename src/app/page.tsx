"use client";

import React, { useState } from "react";
import CinematicIntro from "@/components/ui/CinematicIntro";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import EducationAndAchievementsSection from "@/components/sections/EducationAndAchievementsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {/* 1. Cinematic Intro: PRV Reveal -> Full Name Transformation */}
      <CinematicIntro onComplete={() => setIntroFinished(true)} />

      {/* Thin Violet Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Main Portfolio Sections */}
      <main
        className={`relative z-10 overflow-hidden bg-[#040407] transition-opacity duration-700 ${
          introFinished ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Featured Projects (Vermithor, Namma Connect, Detexa, Tether + Additional Projects) */}
        <ProjectsSection />

        {/* 4. Technical Skills */}
        <SkillsSection />

        {/* 5. Engineering Approach & Areas of Expertise */}
        <ExpertiseSection />

        {/* 6. Education & Achievements */}
        <EducationAndAchievementsSection />

        {/* 7. Certifications */}
        <CertificatesSection />

        {/* 8. Contact Section */}
        <ContactSection />

        {/* 9. Minimal Footer */}
        <Footer />
      </main>
    </>
  );
}

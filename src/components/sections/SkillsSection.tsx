"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code,
  Globe,
  Database,
  BrainCircuit,
  Wrench,
  Binary,
  Sparkles,
} from "lucide-react";

export default function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code,
    "web-frameworks": Globe,
    databases: Database,
    "ai-ml": BrainCircuit,
    tools: Wrench,
    "core-cs": Binary,
  };

  // Interactive 3D/2D neural network canvas linked to hover state
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", onResize);

    // Generate cluster nodes for each category
    interface NodeItem {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      categoryId: string;
      label: string;
    }

    const nodes: NodeItem[] = [];
    const categoryPositions: Record<string, { x: number; y: number }> = {
      languages: { x: 0.2, y: 0.3 },
      "web-frameworks": { x: 0.5, y: 0.25 },
      databases: { x: 0.8, y: 0.35 },
      "ai-ml": { x: 0.3, y: 0.7 },
      tools: { x: 0.55, y: 0.75 },
      "core-cs": { x: 0.8, y: 0.7 },
    };

    SKILL_CATEGORIES.forEach((cat) => {
      const center = categoryPositions[cat.id] || { x: 0.5, y: 0.5 };
      cat.skills.forEach((skill, idx) => {
        const offsetAng = (idx / cat.skills.length) * Math.PI * 2;
        const dist = 35 + Math.random() * 45;
        nodes.push({
          x: center.x * width + Math.cos(offsetAng) * dist,
          y: center.y * height + Math.sin(offsetAng) * dist,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          baseRadius: cat.id === "ai-ml" || cat.id === "core-cs" ? 4.5 : 3.5,
          categoryId: cat.id,
          label: skill,
        });
      });
    });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw interconnecting energy lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            const isHighlighted =
              activeCategoryId !== null &&
              (nodes[i].categoryId === activeCategoryId ||
                nodes[j].categoryId === activeCategoryId);

            const isSameCategory = nodes[i].categoryId === nodes[j].categoryId;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (isHighlighted) {
              ctx.strokeStyle = `rgba(168, 85, 247, ${0.45 * (1 - dist / 120)})`;
              ctx.lineWidth = 1.6;
            } else if (isSameCategory) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.18 * (1 - dist / 120)})`;
              ctx.lineWidth = 1.0;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.04 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.5;
            }
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        // Slow float
        node.x += node.vx;
        node.y += node.vy;

        // Soft rebound
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        const isHighlighted = activeCategoryId === node.categoryId;

        ctx.beginPath();
        const r = isHighlighted
          ? node.baseRadius * 1.8 + Math.sin(time * 3) * 0.8
          : node.baseRadius;
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);

        if (isHighlighted) {
          ctx.fillStyle = "#c084fc";
          ctx.shadowColor = "#a855f7";
          ctx.shadowBlur = 14;
        } else {
          ctx.fillStyle = "#4b4b60";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label if active
        if (isHighlighted) {
          ctx.font = "10px monospace";
          ctx.fillStyle = "#e2e8f0";
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [activeCategoryId]);

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#040407] overflow-hidden border-t border-obsidian-border/50"
    >
      {/* African Chevron Accent */}
      <div className="african-chevron-divider absolute top-0 left-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
              <Sparkles className="w-3 h-3 text-vibranium" />
              <span>SEC-03 // SYSTEM ARSENAL</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              SKILLS
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
          </div>

          <p className="mt-4 md:mt-0 text-slate-400 text-xs sm:text-sm font-mono max-w-md">
            Hover over any technical category below to illuminate its corresponding neural node cluster in the vibranium matrix.
          </p>
        </div>

        {/* Interactive Neural Node Canvas Banner */}
        <div className="relative w-full h-44 sm:h-52 rounded-2xl bg-obsidian-900/60 border border-obsidian-border overflow-hidden mb-12 backdrop-blur-md">
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute top-3 left-4 flex items-center gap-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-vibranium animate-ping" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              {activeCategoryId
                ? `CLUSTER ENGAGED // ${activeCategoryId.toUpperCase()}`
                : "INTERACTIVE NODE CLUSTER // HOVER CATEGORY"}
            </span>
          </div>
        </div>

        {/* Clean 6-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || Code;
            const isHovered = activeCategoryId === cat.id;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveCategoryId(cat.id)}
                onMouseLeave={() => setActiveCategoryId(null)}
                className={`obsidian-card rounded-2xl p-6 relative transition-all duration-300 cursor-default ${
                  isHovered
                    ? "border-vibranium/60 shadow-[0_0_25px_rgba(139,92,246,0.2)] bg-obsidian-850/90"
                    : "hover:border-obsidian-borderHover"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isHovered
                          ? "bg-vibranium text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                          : "bg-obsidian-800 text-vibranium border border-obsidian-border"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white tracking-wide">
                        {cat.category}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                        {cat.code}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-950 border border-obsidian-border text-slate-400">
                    {cat.skills.length} ITEMS
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all duration-200 border ${
                        isHovered
                          ? "bg-vibranium/15 text-vibranium-neon border-vibranium/40 shadow-[0_0_8px_rgba(139,92,246,0.15)]"
                          : "bg-obsidian-950 text-slate-300 border-obsidian-border/90 hover:border-slate-600 hover:text-white"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

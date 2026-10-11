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
  Layers,
  Cloud,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code,
    "backend-distributed": Layers,
    frontend: Globe,
    "databases-caching": Database,
    "ai-ml": BrainCircuit,
    "ai-frameworks": Sparkles,
    "cloud-devops": Cloud,
    "testing-tools": Wrench,
    "core-cs": Binary,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 260);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", onResize);

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
      languages: { x: 0.15, y: 0.25 },
      "backend-distributed": { x: 0.4, y: 0.25 },
      frontend: { x: 0.65, y: 0.25 },
      "databases-caching": { x: 0.85, y: 0.35 },
      "ai-ml": { x: 0.2, y: 0.7 },
      "ai-frameworks": { x: 0.45, y: 0.7 },
      "cloud-devops": { x: 0.7, y: 0.7 },
      "testing-tools": { x: 0.88, y: 0.75 },
      "core-cs": { x: 0.5, y: 0.5 },
    };

    SKILL_CATEGORIES.forEach((cat) => {
      const center = categoryPositions[cat.id] || { x: 0.5, y: 0.5 };
      cat.skills.forEach((skill, idx) => {
        const offsetAng = (idx / cat.skills.length) * Math.PI * 2;
        const dist = 25 + Math.random() * 35;
        nodes.push({
          x: center.x * width + Math.cos(offsetAng) * dist,
          y: center.y * height + Math.sin(offsetAng) * dist,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseRadius: 3.5,
          categoryId: cat.id,
          label: skill,
        });
      });
    });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw energy lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 90) {
            const isHighlighted =
              activeCategoryId !== null &&
              (nodes[i].categoryId === activeCategoryId ||
                nodes[j].categoryId === activeCategoryId);

            const isSameCategory = nodes[i].categoryId === nodes[j].categoryId;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (isHighlighted) {
              ctx.strokeStyle = `rgba(168, 85, 247, ${0.45 * (1 - dist / 90)})`;
              ctx.lineWidth = 1.6;
            } else if (isSameCategory) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 90)})`;
              ctx.lineWidth = 1.0;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 * (1 - dist / 90)})`;
              ctx.lineWidth = 0.5;
            }
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;

        const isHighlighted = activeCategoryId === node.categoryId;

        ctx.beginPath();
        const r = isHighlighted
          ? node.baseRadius * 1.6 + Math.sin(time * 3) * 0.8
          : node.baseRadius;
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);

        if (isHighlighted) {
          ctx.fillStyle = "#c084fc";
          ctx.shadowColor = "#a855f7";
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = "#3e3e50";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        if (isHighlighted) {
          ctx.font = "9px monospace";
          ctx.fillStyle = "#f8fafc";
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-obsidian-border text-[11px] font-mono tracking-widest text-vibranium-neon mb-3">
              <Sparkles className="w-3 h-3 text-vibranium" />
              <span>SEC-02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] uppercase tracking-tight">
              TECHNICAL SKILLS
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-vibranium to-transparent mt-3 rounded-full" />
          </div>

          <p className="mt-4 md:mt-0 text-slate-400 text-xs sm:text-sm font-mono max-w-md">
            Grounded directly in both resumes. Hover over any technical domain to highlight its interconnected node cluster.
          </p>
        </div>

        {/* Interactive Neural Node Canvas Banner */}
        <div className="relative w-full h-36 sm:h-44 rounded-2xl bg-obsidian-900/60 border border-obsidian-border overflow-hidden mb-12 backdrop-blur-md">
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute top-3 left-4 flex items-center gap-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-vibranium animate-ping" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              {activeCategoryId
                ? `CLUSTER ENGAGED // ${activeCategoryId.toUpperCase()}`
                : "INTERACTIVE NODE CLUSTER // HOVER DOMAIN"}
            </span>
          </div>
        </div>

        {/* Categories Grid */}
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
                transition={{ duration: 0.5, delay: idx * 0.05 }}
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
                      <h3 className="font-display font-bold text-sm sm:text-base text-[#F8FAFC] tracking-wide">
                        {cat.category}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                        {cat.code}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-950 border border-obsidian-border text-slate-400">
                    {cat.skills.length}
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

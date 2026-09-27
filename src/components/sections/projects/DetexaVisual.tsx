"use client";

import React, { useEffect, useRef } from "react";

export default function DetexaVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 260);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", onResize);

    let t = 0;

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#07070b";
      ctx.fillRect(0, 0, width, height);

      // Radar scan circle on left
      const cx = width * 0.3;
      const cy = height * 0.52;
      const r = 55;

      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      // Radar sweep line
      const angle = t * 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Scattered transaction points
      const points = [
        { x: cx + 18, y: cy - 22, flag: false },
        { x: cx - 25, y: cy + 12, flag: false },
        { x: cx + 32, y: cy + 28, flag: true },
        { x: cx - 12, y: cy - 35, flag: false },
        { x: cx + 5, y: cy + 15, flag: false },
      ];

      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.flag ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.flag ? "#f43f5e" : "#8b5cf6";
        if (p.flag) {
          ctx.shadowColor = "#f43f5e";
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // SHAP Feature Bars on right
      const barX = width * 0.62;
      const barStartY = height * 0.28;
      const features = [
        { name: "TX_AMOUNT", val: 0.85, color: "#f43f5e" },
        { name: "GEO_VELOCITY", val: 0.72, color: "#fb7185" },
        { name: "DEVICE_RISK", val: 0.45, color: "#a855f7" },
        { name: "TIME_DRIFT", val: 0.3, color: "#64748b" },
      ];

      features.forEach((feat, idx) => {
        const fy = barStartY + idx * 26;

        ctx.font = "8px monospace";
        ctx.fillStyle = "#94a3b8";
        ctx.textAlign = "left";
        ctx.fillText(feat.name, barX, fy);

        // Bar background
        ctx.fillStyle = "#161622";
        ctx.fillRect(barX, fy + 4, 100, 5);

        // Animated Bar fill
        const barWidth = 100 * feat.val * (0.9 + Math.sin(t * 2 + idx) * 0.1);
        ctx.fillStyle = feat.color;
        ctx.fillRect(barX, fy + 4, barWidth, 5);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full h-48 sm:h-56 relative rounded-xl overflow-hidden border border-obsidian-border bg-obsidian-950">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2.5 left-3 px-2 py-0.5 rounded bg-obsidian-900/90 border border-obsidian-border text-[9px] font-mono text-slate-300">
        ISOLATION FOREST // RADAR
      </div>
      <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded bg-obsidian-900/90 border border-vibranium/40 text-[9px] font-mono text-vibranium-neon">
        SHAP VALUES // SCORING
      </div>
    </div>
  );
}

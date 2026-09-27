"use client";

import React, { useEffect, useRef } from "react";

export default function DaliVisual() {
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
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#07070b";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Rotating geometric diamond wireframes
      for (let i = 1; i <= 3; i++) {
        const size = 30 * i;
        const rot = t * (0.3 / i) * (i % 2 === 0 ? 1 : -1);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);

        ctx.strokeStyle = `rgba(139, 92, 246, ${0.4 / i})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size, 0);
        ctx.lineTo(0, size);
        ctx.lineTo(-size, 0);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
      }

      // Central core dot
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#a855f7";
      ctx.shadowColor = "#a855f7";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Subtle glyph markings
      ctx.font = "9px monospace";
      ctx.fillStyle = "#94a3b8";
      ctx.textAlign = "center";
      ctx.fillText("OPEN SOURCE // VERIFIED REPOSITORY", cx, cy + 55);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full h-48 sm:h-56 relative rounded-xl overflow-hidden border border-obsidian-border bg-obsidian-950 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded bg-obsidian-900/90 border border-vibranium/40 text-[9px] font-mono text-vibranium-neon">
        GITHUB REPO // STANDALONE
      </div>
    </div>
  );
}

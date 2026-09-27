"use client";

import React, { useEffect, useRef } from "react";

export default function NammaVisual() {
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

    const nodes = [
      { id: "hub", label: "MARKETPLACE", x: 0.5, y: 0.5, color: "#8b5cf6", r: 15 },
      { id: "user", label: "USERS", x: 0.18, y: 0.26, color: "#a855f7", r: 11 },
      { id: "provider", label: "PROVIDERS", x: 0.82, y: 0.26, color: "#c084fc", r: 11 },
      { id: "services", label: "SERVICES", x: 0.5, y: 0.16, color: "#94a3b8", r: 10 },
      { id: "recommendations", label: "RECOMMENDATIONS", x: 0.2, y: 0.74, color: "#38bdf8", r: 11 },
      { id: "trip-planning", label: "AI TRIP PLANNING", x: 0.8, y: 0.74, color: "#c084fc", r: 12 },
    ];

    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [1, 4],
      [2, 3],
      [4, 5],
    ];

    let t = 0;

    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Dark background with African diamond accents
      ctx.fillStyle = "#07070c";
      ctx.fillRect(0, 0, width, height);

      // Draw edges
      edges.forEach(([i, j]) => {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const x1 = n1.x * width;
        const y1 = n1.y * height;
        const x2 = n2.x * width;
        const y2 = n2.y * height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(139, 92, 246, 0.22)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Flowing data packet
        const progress = (t * 0.4 + (i + j) * 0.2) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#d8b4fe";
        ctx.shadowColor = "#a855f7";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((n, idx) => {
        const nx = n.x * width;
        const ny = n.y * height;

        // Outer glow
        ctx.beginPath();
        const pulse = Math.sin(t * 2 + idx) * 2;
        ctx.arc(nx, ny, n.r + pulse + 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.12)";
        ctx.fill();

        // Node base
        ctx.beginPath();
        ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "#12121a";
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill();

        // Inner center
        ctx.beginPath();
        ctx.arc(nx, ny, n.r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Label
        ctx.font = "bold 9px monospace";
        ctx.fillStyle = "#cbd5e1";
        ctx.textAlign = "center";
        ctx.fillText(n.label, nx, ny + n.r + 13);
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
      <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded bg-obsidian-900/90 border border-vibranium/40 text-[9px] font-mono text-vibranium-neon">
        MARKETPLACE GRAPH // ACTIVE
      </div>
    </div>
  );
}

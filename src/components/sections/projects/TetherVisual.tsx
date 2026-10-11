"use client";

import React, { useEffect, useRef } from "react";

export default function TetherVisual() {
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

    // Nodes representing distributed workers and probe targets
    const nodes = [
      { name: "CELERY WORKER", x: 0.2, y: 0.3, type: "worker", label: "WORKER A" },
      { name: "CELERY WORKER", x: 0.2, y: 0.7, type: "worker", label: "WORKER B" },
      { name: "REDIS LOCKS", x: 0.5, y: 0.5, type: "broker", label: "DISTRIBUTED LOCK" },
      { name: "TCP / HTTP / DNS", x: 0.8, y: 0.25, type: "target", label: "PROBE TARGETS" },
      { name: "ALERT DISPATCH", x: 0.8, y: 0.75, type: "alert", label: "SLACK / WEBHOOK" },
    ];

    const edges = [
      { from: 0, to: 2 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 2, to: 4 },
    ];

    let t = 0;

    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Dark network background
      ctx.fillStyle = "#07070b";
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      for (let y = 15; y < height; y += 22) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw edges
      edges.forEach((edge, i) => {
        const n1 = nodes[edge.from];
        const n2 = nodes[edge.to];
        const x1 = n1.x * width;
        const y1 = n1.y * height;
        const x2 = n2.x * width;
        const y2 = n2.y * height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(139, 92, 246, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Pulsing probe signal
        const progress = (t * 0.6 + i * 0.25) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#c084fc";
        ctx.shadowColor = "#a855f7";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((n, idx) => {
        const nx = n.x * width;
        const ny = n.y * height;
        const isBroker = n.type === "broker";
        const isAlert = n.type === "alert";

        // Glow ring
        ctx.beginPath();
        const pulse = Math.sin(t * 3 + idx) * 1.5;
        ctx.arc(nx, ny, 11 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = isBroker
          ? "rgba(168, 85, 247, 0.2)"
          : isAlert
          ? "rgba(139, 92, 246, 0.15)"
          : "rgba(255, 255, 255, 0.05)";
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(nx, ny, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#0e0e17";
        ctx.strokeStyle = isBroker ? "#a855f7" : "#8b5cf6";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(nx, ny, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#f8fafc";
        ctx.fill();

        // Node labels
        ctx.font = "bold 9px monospace";
        ctx.fillStyle = "#f8fafc";
        ctx.textAlign = "center";
        ctx.fillText(n.name, nx, ny + 20);

        ctx.font = "8px monospace";
        ctx.fillStyle = "#8b5cf6";
        ctx.fillText(n.label, nx, ny - 14);
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
      <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded bg-obsidian-900/90 border border-vibranium/40 text-[9px] font-mono text-vibranium-neon flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-vibranium animate-pulse" />
        <span>DISTRIBUTED PROBE // ACTIVE</span>
      </div>
    </div>
  );
}

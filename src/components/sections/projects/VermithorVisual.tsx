"use client";

import React, { useEffect, useRef } from "react";

export default function VermithorVisual() {
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

    // Root Cause DAG Nodes
    const serverNodes = [
      { name: "SERVER NODES", x: 0.16, y: 0.5, status: "TELEMETRY", r: 9 },
      { name: "ANOMALY DETECT", x: 0.38, y: 0.28, status: "Z-SCORE / IF", r: 10 },
      { name: "CLUSTERING", x: 0.38, y: 0.72, status: "HDBSCAN", r: 10 },
      { name: "ROOT CAUSE", x: 0.63, y: 0.5, status: "RCA GRAPH", r: 12 },
      { name: "AI INTELLIGENCE", x: 0.86, y: 0.5, status: "OLLAMA LAYER", r: 11 },
    ];

    const connections = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
    ];

    let t = 0;

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Dark server background
      ctx.fillStyle = "#07070b";
      ctx.fillRect(0, 0, width, height);

      // Subtle server rack grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      for (let y = 15; y < height; y += 22) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections
      connections.forEach(([from, to]) => {
        const n1 = serverNodes[from];
        const n2 = serverNodes[to];
        const x1 = n1.x * width;
        const y1 = n1.y * height;
        const x2 = n2.x * width;
        const y2 = n2.y * height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Pulsing anomaly pulse traveling across wire
        const progress = (t * 0.5 + from * 0.25) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = from === 1 ? "#f43f5e" : "#c084fc";
        ctx.shadowColor = from === 1 ? "#f43f5e" : "#a855f7";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw server nodes
      serverNodes.forEach((n, idx) => {
        const nx = n.x * width;
        const ny = n.y * height;

        const isAnomaly = n.status === "ANOMALY";
        const isRoot = n.status === "ROOT CAUSE";

        // Outer glow ring
        ctx.beginPath();
        const pulse = Math.sin(t * 3 + idx) * 2;
        ctx.arc(nx, ny, n.r + pulse + 3, 0, Math.PI * 2);
        ctx.fillStyle = isAnomaly
          ? "rgba(244, 63, 94, 0.15)"
          : isRoot
          ? "rgba(168, 85, 247, 0.25)"
          : "rgba(139, 92, 246, 0.12)";
        ctx.fill();

        // Node base
        ctx.beginPath();
        ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "#0e0e17";
        ctx.strokeStyle = isAnomaly
          ? "#f43f5e"
          : isRoot
          ? "#a855f7"
          : "#64748b";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(nx, ny, n.r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = isAnomaly ? "#f43f5e" : "#c084fc";
        ctx.fill();

        // Text
        ctx.font = "bold 9px monospace";
        ctx.fillStyle = "#cbd5e1";
        ctx.textAlign = "center";
        ctx.fillText(n.name, nx, ny + n.r + 13);

        ctx.font = "8px monospace";
        ctx.fillStyle = isAnomaly ? "#fb7185" : isRoot ? "#c084fc" : "#64748b";
        ctx.fillText(n.status, nx, ny - n.r - 5);
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
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
        <span>RCA TOPOLOGY // REAL-TIME</span>
      </div>
    </div>
  );
}

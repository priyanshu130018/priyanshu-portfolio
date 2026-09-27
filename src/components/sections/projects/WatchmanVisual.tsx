"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function WatchmanVisual() {
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

    // Film node clusters (genre/cast similarity)
    const movieNodes = [
      { title: "USER PREFS", x: 0.2, y: 0.5, r: 12, color: "#a855f7" },
      { title: "TMDB DATA", x: 0.44, y: 0.25, r: 9, color: "#8b5cf6" },
      { title: "SIMILARITY VEC", x: 0.44, y: 0.75, r: 9, color: "#8b5cf6" },
      { title: "REC GRAPH", x: 0.68, y: 0.5, r: 13, color: "#c084fc" },
      { title: "MOVIE NODES", x: 0.88, y: 0.35, r: 8, color: "#cbd5e1" },
      { title: "EXPLORATORY", x: 0.88, y: 0.65, r: 8, color: "#cbd5e1" },
    ];

    const edges = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [3, 5],
    ];

    let t = 0;

    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Dark purple cinematic surface
      ctx.fillStyle = "#06060c";
      ctx.fillRect(0, 0, width, height);

      // Draw edges
      edges.forEach(([from, to]) => {
        const n1 = movieNodes[from];
        const n2 = movieNodes[to];
        const x1 = n1.x * width;
        const y1 = n1.y * height;
        const x2 = n2.x * width;
        const y2 = n2.y * height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(168, 85, 247, 0.25)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Pulsing recommendation signal
        const progress = (t * 0.45 + (from + to) * 0.2) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#e879f9";
        ctx.shadowColor = "#e879f9";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw movie nodes
      movieNodes.forEach((n, idx) => {
        const nx = n.x * width;
        const ny = n.y * height;

        ctx.beginPath();
        const pulse = Math.sin(t * 2 + idx) * 1.5;
        ctx.arc(nx, ny, n.r + pulse + 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.14)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "#0f0f1c";
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.fill();

        ctx.font = "bold 8px monospace";
        ctx.fillStyle = "#cbd5e1";
        ctx.textAlign = "center";
        ctx.fillText(n.title, nx, ny + n.r + 12);
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
    <div className="w-full h-48 sm:h-56 relative rounded-xl overflow-hidden border border-obsidian-border bg-obsidian-950 flex items-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Official WatchMan Logo Badge */}
      <div className="absolute top-2.5 left-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-obsidian-900/90 border border-obsidian-border backdrop-blur-md">
        <div className="relative w-5 h-5 rounded-full overflow-hidden">
          <Image
            src="/images/watchman_logo.png"
            alt="WatchMan Logo"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-[10px] font-display font-bold text-amber-300 tracking-wider">
          WATCHMAN ENGINE
        </span>
      </div>

      <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded bg-obsidian-900/90 border border-vibranium/40 text-[9px] font-mono text-vibranium-neon">
        COSINE SIMILARITY // HYBRID
      </div>
    </div>
  );
}

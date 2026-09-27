"use client";

import React, { useEffect, useRef } from "react";

export default function MananVisual() {
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

    // Floating documents representation
    const docs = [
      { label: "INGESTION // PDF", ext: ".pdf", x: 0.18, y: 0.32, vy: 0.003 },
      { label: "OCR & MEMORY", ext: "IMG", x: 0.18, y: 0.68, vy: -0.003 },
    ];

    const pipeline = [
      { name: "SEMANTIC SEARCH", x: 0.44, y: 0.3, color: "#8b5cf6" },
      { name: "HYBRID RETRIEVAL", x: 0.44, y: 0.7, color: "#a855f7" },
      { name: "RAG NEURAL CORE", x: 0.7, y: 0.5, color: "#c084fc" },
      { name: "CONVERSATIONS", x: 0.88, y: 0.5, color: "#38bdf8" },
    ];

    let t = 0;

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#07070c";
      ctx.fillRect(0, 0, width, height);

      // Connecting neural lines
      ctx.strokeStyle = "rgba(139, 92, 246, 0.25)";
      ctx.lineWidth = 1.2;

      // Draw connection curves
      ctx.beginPath();
      ctx.moveTo(docs[0].x * width, docs[0].y * height);
      ctx.bezierCurveTo(
        pipeline[0].x * width * 0.7,
        docs[0].y * height,
        pipeline[0].x * width * 0.7,
        pipeline[0].y * height,
        pipeline[0].x * width,
        pipeline[0].y * height
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(docs[1].x * width, docs[1].y * height);
      ctx.bezierCurveTo(
        pipeline[1].x * width * 0.7,
        docs[1].y * height,
        pipeline[1].x * width * 0.7,
        pipeline[1].y * height,
        pipeline[1].x * width,
        pipeline[1].y * height
      );
      ctx.stroke();

      // Dense and Sparse to RRF
      ctx.beginPath();
      ctx.moveTo(pipeline[0].x * width, pipeline[0].y * height);
      ctx.lineTo(pipeline[2].x * width, pipeline[2].y * height);
      ctx.moveTo(pipeline[1].x * width, pipeline[1].y * height);
      ctx.lineTo(pipeline[2].x * width, pipeline[2].y * height);
      ctx.lineTo(pipeline[3].x * width, pipeline[3].y * height);
      ctx.stroke();

      // Floating Doc Cards on Left
      docs.forEach((d, idx) => {
        const floatY = Math.sin(t * 1.8 + idx * 2) * 5;
        const cx = d.x * width;
        const cy = d.y * height + floatY;

        ctx.fillStyle = "#111119";
        ctx.strokeStyle = "rgba(139, 92, 246, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(cx - 36, cy - 22, 72, 44, 6);
        ctx.fill();
        ctx.stroke();

        ctx.font = "bold 8px monospace";
        ctx.fillStyle = "#a855f7";
        ctx.textAlign = "center";
        ctx.fillText(d.ext, cx, cy - 6);

        ctx.font = "8px monospace";
        ctx.fillStyle = "#cbd5e1";
        ctx.fillText(d.label, cx, cy + 10);
      });

      // Pipeline Nodes
      pipeline.forEach((p, idx) => {
        const px = p.x * width;
        const py = p.y * height;

        ctx.beginPath();
        const pulse = Math.sin(t * 2.5 + idx) * 1.5;
        ctx.arc(px, py, 9 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.15)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#12121e";
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fill();

        ctx.font = "bold 8px monospace";
        ctx.fillStyle = "#cbd5e1";
        ctx.textAlign = "center";
        ctx.fillText(p.name, px, py + 18);
      });

      // Streaming token particle into output
      const tokenProgress = (t * 0.8) % 1;
      const tx = pipeline[2].x * width + (pipeline[3].x * width - pipeline[2].x * width) * tokenProgress;
      const ty = pipeline[2].y * height;
      ctx.beginPath();
      ctx.arc(tx, ty, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#38bdf8";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

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
        <span className="w-1.5 h-1.5 rounded-full bg-vibranium animate-ping" />
        <span>RAG PIPELINE // HNSW INDEX</span>
      </div>
    </div>
  );
}

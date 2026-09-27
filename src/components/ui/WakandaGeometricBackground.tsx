"use client";

import React, { useEffect, useRef } from "react";

export default function WakandaGeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // African geometric pattern nodes (diamonds and chevrons)
    const gridSize = 120;
    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Subtle base darkness
      ctx.fillStyle = "#040407";

      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          // Wave pulse offset
          const distFromCenter = Math.hypot(x - width / 2, y - height / 2);
          const wave = Math.sin(time * 1.5 - distFromCenter * 0.003);
          const alpha = 0.02 + Math.max(0, wave * 0.035);

          ctx.save();
          ctx.translate(x, y);

          // Subtle diamond wireframe
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(0, -gridSize / 2.8);
          ctx.lineTo(gridSize / 2.8, 0);
          ctx.lineTo(0, gridSize / 2.8);
          ctx.lineTo(-gridSize / 2.8, 0);
          ctx.closePath();
          ctx.stroke();

          // Inner chevron accents inspired by African textile geometry
          if ((i + j) % 2 === 0) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 1.3})`;
            ctx.beginPath();
            ctx.moveTo(-gridSize / 6, -gridSize / 10);
            ctx.lineTo(0, 0);
            ctx.lineTo(-gridSize / 6, gridSize / 10);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(gridSize / 6, -gridSize / 10);
            ctx.lineTo(0, 0);
            ctx.lineTo(gridSize / 6, gridSize / 10);
            ctx.stroke();
          }

          // Subtle glowing vertex node
          if ((i + j) % 3 === 0) {
            ctx.fillStyle = `rgba(192, 132, 252, ${alpha * 1.8})`;
            ctx.beginPath();
            ctx.arc(0, 0, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      {/* Dark radial vignette to keep focus centered and maintain high contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040407]/40 via-transparent to-[#040407] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,4,7,0.85)_80%)] pointer-events-none" />
    </div>
  );
}

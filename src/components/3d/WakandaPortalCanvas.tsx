"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function WakandaPortalCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const portalGroup = new THREE.Group();
    scene.add(portalGroup);

    // 1. Heavy Obsidian Portal Gate Ring
    const torusGeo = new THREE.TorusGeometry(2.0, 0.14, 24, 80);
    const obsidianMat = new THREE.MeshStandardMaterial({
      color: 0x08080d,
      roughness: 0.15,
      metalness: 0.9,
    });
    const portalRing = new THREE.Mesh(torusGeo, obsidianMat);
    portalGroup.add(portalRing);

    // 2. Outer Faceted Armor Segments (Wakandan Vibranium Segments)
    const segmentCount = 12;
    const segmentMat = new THREE.MeshStandardMaterial({
      color: 0x161622,
      roughness: 0.25,
      metalness: 0.85,
    });
    for (let i = 0; i < segmentCount; i++) {
      const angle = (i / segmentCount) * Math.PI * 2;
      const segGeo = new THREE.BoxGeometry(0.18, 0.35, 0.22);
      const segMesh = new THREE.Mesh(segGeo, segmentMat);
      segMesh.position.set(Math.cos(angle) * 2.0, Math.sin(angle) * 2.0, 0);
      segMesh.rotation.z = angle;
      portalGroup.add(segMesh);
    }

    // 3. Inner Swirling Vibranium Energy Vortex (Points)
    const vortexCount = 380;
    const vortexGeo = new THREE.BufferGeometry();
    const vortexPos = new Float32Array(vortexCount * 3);
    const vortexColors = new Float32Array(vortexCount * 3);
    const vortexSpeed: number[] = [];
    const vortexRadius: number[] = [];
    const vortexAngle: number[] = [];

    const pColor1 = new THREE.Color(0xa855f7);
    const pColor2 = new THREE.Color(0x6d28d9);
    const pColor3 = new THREE.Color(0xe2e8f0);

    for (let i = 0; i < vortexCount; i++) {
      const rad = 0.2 + Math.random() * 1.7;
      const ang = Math.random() * Math.PI * 2;
      vortexRadius.push(rad);
      vortexAngle.push(ang);
      vortexSpeed.push(0.015 + (1.9 - rad) * 0.015);

      vortexPos[i * 3] = Math.cos(ang) * rad;
      vortexPos[i * 3 + 1] = Math.sin(ang) * rad;
      vortexPos[i * 3 + 2] = (Math.random() - 0.5) * 0.3;

      const pick = Math.random();
      const c = pick > 0.6 ? pColor1 : pick > 0.2 ? pColor2 : pColor3;
      vortexColors[i * 3] = c.r;
      vortexColors[i * 3 + 1] = c.g;
      vortexColors[i * 3 + 2] = c.b;
    }

    vortexGeo.setAttribute("position", new THREE.BufferAttribute(vortexPos, 3));
    vortexGeo.setAttribute("color", new THREE.BufferAttribute(vortexColors, 3));

    const vortexMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const vortex = new THREE.Points(vortexGeo, vortexMat);
    portalGroup.add(vortex);

    // 4. Central Obsidian Monolith Core
    const coreGeo = new THREE.OctahedronGeometry(0.55, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050508,
      roughness: 0.1,
      metalness: 0.95,
      flatShading: true,
    });
    const centralCore = new THREE.Mesh(coreGeo, coreMat);
    portalGroup.add(centralCore);

    // 5. Lighting
    const ambLight = new THREE.AmbientLight(0x13131c, 1.5);
    scene.add(ambLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 8);
    purpleLight.position.set(0, 0, 1.5);
    portalGroup.add(purpleLight);

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      portalGroup.rotation.y = elapsed * 0.15 + mouseX * 0.3;
      portalGroup.rotation.x = Math.sin(elapsed * 0.1) * 0.1 + mouseY * 0.25;

      centralCore.rotation.y = -elapsed * 0.4;
      centralCore.rotation.z = elapsed * 0.2;

      // Animate swirling vortex particles
      const positions = vortexGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < vortexCount; i++) {
        vortexAngle[i] += vortexSpeed[i];
        positions[i * 3] = Math.cos(vortexAngle[i]) * vortexRadius[i];
        positions[i * 3 + 1] = Math.sin(vortexAngle[i]) * vortexRadius[i];
        positions[i * 3 + 2] = Math.sin(elapsed * 2 + i) * 0.15;
      }
      vortexGeo.attributes.position.needsUpdate = true;

      purpleLight.intensity = 2.8 + Math.sin(elapsed * 3) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      torusGeo.dispose();
      obsidianMat.dispose();
      segmentMat.dispose();
      vortexGeo.dispose();
      vortexMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-vibranium/40 bg-obsidian-900/80 shadow-[0_0_25px_rgba(139,92,246,0.3)] animate-pulse" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] relative pointer-events-none"
      aria-hidden="true"
    />
  );
}

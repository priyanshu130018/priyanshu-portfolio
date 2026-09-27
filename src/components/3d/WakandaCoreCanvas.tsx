"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function WakandaCoreCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
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
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040407, 0.045);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for entire Wakandan Artifact
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Faceted Obsidian Core (Geodesic / Icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(1.65, 2);
    const obsidianMaterial = new THREE.MeshStandardMaterial({
      color: 0x09090e,
      roughness: 0.18,
      metalness: 0.88,
      flatShading: true,
    });
    const obsidianCore = new THREE.Mesh(coreGeometry, obsidianMaterial);
    coreGroup.add(obsidianCore);

    // 2. Fissure / Vibranium Energy Wireframe
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.66, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const fissureMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    coreGroup.add(fissureMesh);

    // 3. Inner Glowing Pulsing Sphere
    const innerSphereGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x6b21a8,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    coreGroup.add(innerSphere);

    // 4. Concentric Thin Orbital Vibranium Rings
    const ringsGroup = new THREE.Group();
    coreGroup.add(ringsGroup);

    const ringDefs = [
      { radius: 2.35, tube: 0.014, rotX: 1.1, rotY: 0.4, speed: 0.005 },
      { radius: 2.85, tube: 0.012, rotX: 0.6, rotY: 1.3, speed: -0.004 },
      { radius: 3.35, tube: 0.01, rotX: 1.8, rotY: 0.9, speed: 0.003 },
    ];

    const rings: { mesh: THREE.Mesh; speed: number }[] = [];
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x222230,
      roughness: 0.25,
      metalness: 0.95,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.2,
    });

    ringDefs.forEach((def) => {
      const ringGeo = new THREE.TorusGeometry(def.radius, def.tube, 16, 120);
      const ringMesh = new THREE.Mesh(ringGeo, ringMaterial);
      ringMesh.rotation.x = def.rotX;
      ringMesh.rotation.y = def.rotY;
      ringsGroup.add(ringMesh);
      rings.push({ mesh: ringMesh, speed: def.speed });
    });

    // 5. Floating Obsidian / Metallic Fragments
    const fragmentsGroup = new THREE.Group();
    coreGroup.add(fragmentsGroup);
    const fragmentCount = 18;
    const fragmentMeshes: { mesh: THREE.Mesh; orbitRadius: number; speed: number; angle: number; yOffset: number }[] = [];

    const fragMat = new THREE.MeshStandardMaterial({
      color: 0x0c0c14,
      roughness: 0.3,
      metalness: 0.85,
      flatShading: true,
    });

    for (let i = 0; i < fragmentCount; i++) {
      const size = 0.08 + Math.random() * 0.16;
      const fragGeo = new THREE.TetrahedronGeometry(size);
      const fragMesh = new THREE.Mesh(fragGeo, fragMat);
      const orbitRadius = 2.1 + Math.random() * 1.8;
      const angle = (i / fragmentCount) * Math.PI * 2;
      const speed = (0.002 + Math.random() * 0.003) * (i % 2 === 0 ? 1 : -1);
      const yOffset = (Math.random() - 0.5) * 1.8;

      fragMesh.position.set(
        Math.cos(angle) * orbitRadius,
        yOffset,
        Math.sin(angle) * orbitRadius
      );
      fragmentsGroup.add(fragMesh);
      fragmentMeshes.push({ mesh: fragMesh, orbitRadius, speed, angle, yOffset });
    }

    // 6. Floating Particles (Vibranium purple and silver stardust)
    const particleCount = 260;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const purpleColor = new THREE.Color(0xa855f7);
    const silverColor = new THREE.Color(0x94a3b8);
    const deepViolet = new THREE.Color(0x6b21a8);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const colorMix = Math.random();
      const chosenColor = colorMix > 0.6 ? purpleColor : colorMix > 0.3 ? deepViolet : silverColor;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    coreGroup.add(particles);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0x0e0e16, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd8b4fe, 2.0);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7c3aed, 1.8);
    dirLight2.position.set(-4, -3, -3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xa855f7, 2.5, 6);
    pointLight.position.set(0, 0, 0);
    coreGroup.add(pointLight);

    // Parallax & Scroll variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Slow cinematic base rotation + mouse tilt
      coreGroup.rotation.y = elapsedTime * 0.12 + targetX * 0.45;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.1 + targetY * 0.35;

      // Scroll-based parallax shift
      coreGroup.position.y = -scrollY * 0.0018;

      // Pulse inner energy and fissure glow
      const pulse = Math.sin(elapsedTime * 2.2) * 0.2 + 0.6;
      wireframeMaterial.opacity = 0.35 + pulse * 0.3;
      pointLight.intensity = 2.0 + pulse * 1.5;

      // Rotate individual orbital rings
      rings.forEach((ring) => {
        ring.mesh.rotation.z += ring.speed;
        ring.mesh.rotation.y += ring.speed * 0.5;
      });

      // Orbit fragments
      fragmentMeshes.forEach((frag) => {
        frag.angle += frag.speed;
        frag.mesh.position.x = Math.cos(frag.angle) * frag.orbitRadius;
        frag.mesh.position.z = Math.sin(frag.angle) * frag.orbitRadius;
        frag.mesh.position.y = frag.yOffset + Math.sin(elapsedTime + frag.angle) * 0.15;
        frag.mesh.rotation.x += 0.01;
        frag.mesh.rotation.y += 0.015;
      });

      // Rotate particle cloud gently
      particles.rotation.y = -elapsedTime * 0.03;
      particles.rotation.x = Math.cos(elapsedTime * 0.02) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      // Memory cleanup
      coreGeometry.dispose();
      obsidianMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      ringMaterial.dispose();
      fragMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center pointer-events-none">
        <div className="relative w-64 h-64 rounded-full border border-vibranium/30 flex items-center justify-center animate-vibranium-pulse">
          <div className="w-48 h-48 rounded-full border border-obsidian-border bg-obsidian-900/60 shadow-[0_0_30px_rgba(139,92,246,0.2)]" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}

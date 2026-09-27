import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040406",
        foreground: "#f3f4f6",
        obsidian: {
          950: "#040407",
          900: "#08080c",
          850: "#0d0d13",
          800: "#13131b",
          700: "#1b1b26",
          600: "#262636",
          border: "#1f1f2e",
          borderHover: "#3f3f5a",
        },
        vibranium: {
          DEFAULT: "#8b5cf6",
          dim: "#6d28d9",
          dark: "#4c1d95",
          glow: "#a855f7",
          neon: "#c084fc",
          mist: "rgba(139, 92, 246, 0.12)",
          energy: "rgba(168, 85, 247, 0.25)",
        },
        metallic: {
          light: "#e2e8f0",
          silver: "#94a3b8",
          dark: "#475569",
          graphite: "#1e222a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-orbitron)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "vibranium-pulse": "vibraniumPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slow-spin": "spin 40s linear infinite",
        "reverse-spin": "reverseSpin 45s linear infinite",
        "subtle-float": "subtleFloat 6s ease-in-out infinite",
        "holo-scan": "holoScan 3s ease-in-out infinite",
        "line-sweep": "lineSweep 8s linear infinite",
      },
      keyframes: {
        vibraniumPulse: {
          "0%, 100%": { opacity: "0.35", filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))" },
          "50%": { opacity: "0.85", filter: "drop-shadow(0 0 18px rgba(168, 85, 247, 0.6))" },
        },
        reverseSpin: {
          "from": { transform: "rotate(360deg)" },
          "to": { transform: "rotate(0deg)" },
        },
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        holoScan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "0.7" },
          "100%": { transform: "translateY(250%)", opacity: "0" },
        },
        lineSweep: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

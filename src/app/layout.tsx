import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import WakandaNavbar from "@/components/ui/WakandaNavbar";
import WakandaGeometricBackground from "@/components/ui/WakandaGeometricBackground";

export const metadata: Metadata = {
  title: "Priyanshu Ranjan Verma | Backend & AI/ML Developer",
  description:
    "Computer Science Engineering Student & Backend / AI-ML Developer in Bengaluru, India. Building intelligent systems, scalable backends, and AI-powered experiences.",
  keywords: [
    "Priyanshu Ranjan Verma",
    "Backend Developer",
    "AI/ML Developer",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "pgvector",
    "RAG",
    "LangChain",
    "Docker",
    "Bengaluru",
    "Acharya Institute of Technology",
    "Namma Connect",
    "Vermithor",
    "Manan AI",
    "WatchMan",
    "Detexa",
    "Dali",
  ],
  authors: [{ name: "Priyanshu Ranjan Verma" }],
  creator: "Priyanshu Ranjan Verma",
  openGraph: {
    title: "Priyanshu Ranjan Verma | Backend & AI/ML Developer",
    description:
      "Building intelligent systems, scalable backends, and AI-powered experiences. Computer Science Engineering student at Acharya Institute of Technology, Bengaluru.",
    url: "https://github.com/priyanshu130018",
    siteName: "Priyanshu Ranjan Verma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Ranjan Verma | Backend & AI/ML Developer",
    description:
      "Building intelligent systems, scalable backends, and AI-powered experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#040407] text-slate-100 min-h-screen relative selection:bg-purple-600/40 selection:text-white">
        {/* Subtle Film Grain Texture */}
        <div className="grain-overlay" />

        {/* Ambient 3D African Geometric Background Lattice */}
        <WakandaGeometricBackground />

        {/* Custom High-Tech Obsidian & Vibranium Cursor */}
        <CustomCursor />

        {/* Sticky Transparent Black Navigation with Active Section Indicator */}
        <WakandaNavbar />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}

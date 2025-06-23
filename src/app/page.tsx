"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <main className={`relative min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0F1419]' : 'bg-white'
    }`}>
      <Navigation />
      <Hero />
    </main>
  );
}

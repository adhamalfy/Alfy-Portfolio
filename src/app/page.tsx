"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Techniques from "@/components/sections/Techniques";
import Contact from "@/components/sections/Contact";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme } = useTheme();
  const [showOverlay, setShowOverlay] = useState(true);  // Simple timer-based loading - no dependency on image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Main page timer completing...');
      setShowOverlay(false);
    }, 2200); // متزامن مع animation الحرف
    
    return () => clearTimeout(timer);
  }, []);
  const handleLoadingComplete = useCallback(() => {
    console.log('Loading complete callback called');
    setShowOverlay(false);
  }, []);

  console.log('Show overlay:', showOverlay);
  
  return (
    <>
      <LoadingOverlay 
        isVisible={showOverlay} 
        onComplete={handleLoadingComplete}
      />
      
      <main 
        className={`relative min-h-screen transition-all duration-500 ${
          theme === 'dark' ? 'bg-[#0F1419]' : 'bg-white'
        } ${showOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}      >        <Navigation />
        <Hero />
        <About />
        <Certifications />
        <Techniques />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

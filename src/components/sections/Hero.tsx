"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the main timeline
      const tl = gsap.timeline();

      // Animate background
      gsap.set(backgroundRef.current, { opacity: 0 });
      gsap.to(backgroundRef.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.out"
      });

      // Animate title with typewriter effect
      gsap.set(titleRef.current, { opacity: 0, y: 50 });
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(titleRef.current, {
        text: {
          value: "Full Stack Developer",
          delimiter: ""
        },
        duration: 2,
        ease: "none"
      }, "-=0.5");

      // Animate subtitle
      gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=1");

      // Animate CTA buttons
      gsap.set(ctaRef.current?.children || [], { opacity: 0, y: 20, scale: 0.8 });
      tl.to(ctaRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // Floating animation for the background elements
      gsap.to(".floating-circle", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 grid-bg"
      >
        {/* Floating geometric shapes */}
        <div className="floating-circle absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="floating-circle absolute top-40 right-32 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
        <div className="floating-circle absolute bottom-32 left-40 w-28 h-28 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="floating-circle absolute bottom-20 right-20 w-36 h-36 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient mb-6"
          >
            Alfy
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white/90 mb-8">
            <span 
              ref={subtitleRef}
              className="inline-block"
            >
              Creating Digital Experiences
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about building modern, responsive, and user-friendly applications
          using the latest technologies including React, Next.js, and cutting-edge animation libraries.
        </motion.p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="group relative px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

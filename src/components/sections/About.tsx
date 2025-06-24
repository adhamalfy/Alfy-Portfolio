"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useRef, useEffect } from "react";

const About = () => {
  const { theme } = useTheme();
  const aboutRef = useRef(null);
  
  // Add scroll-based animation for the entire About section
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to opacity and scale for show/hide effect
  const aboutOpacity = useTransform(aboutScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const aboutScale = useTransform(aboutScrollProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const aboutY = useTransform(aboutScrollProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  return (
    <motion.section 
      ref={aboutRef}
      id="about"
      className={`relative min-h-screen py-20 transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-[#0F1419]' 
          : 'bg-white'
      }`}
      style={{
        opacity: aboutOpacity,
        scale: aboutScale,
        y: aboutY
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23374151" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
            : 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236b7280" fill-opacity="0.08"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About
            <span className={`ml-4 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Me
            </span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`} />
        </motion.div>        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">          {/* Left Side - About Content */}
          <motion.div 
            className="lg:col-span-3 order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className={`p-8 md:p-12 rounded-2xl border shadow-xl ${
                theme === 'dark'
                  ? 'bg-gray-900/60 border-gray-700/50 backdrop-blur-sm'
                  : 'bg-white/80 border-gray-200/60 backdrop-blur-sm shadow-blue-100/50'
              }`}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <h3 className={`text-3xl font-bold mb-8 text-center ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                My Journey
              </h3>
              
              <div className="space-y-8">
                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Hi there! I&apos;m <span className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Adham Elalfy</span>, a passionate frontend developer with over 2 years of experience creating 
                  digital experiences that matter. My journey in web development started with a simple curiosity 
                  about how websites work, and it has evolved into a deep passion for crafting beautiful, 
                  functional, and user-centric applications.
                </p>

                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Throughout my career, I&apos;ve had the privilege of working with well-known brands and agencies, 
                  where I&apos;ve honed my skills in modern web technologies. I specialize in React, Next.js, and 
                  TypeScript, always staying up-to-date with the latest industry trends and best practices.
                </p>

                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  What drives me is the intersection of design and technology. I believe that great code should 
                  not only function flawlessly but also provide an exceptional user experience. Every project 
                  I work on is an opportunity to push the boundaries of what&apos;s possible on the web.
                </p>

                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community. I&apos;m always eager to take on 
                  new challenges and collaborate with like-minded individuals who share the same passion for                  creating amazing digital experiences.
                </p>
              </div>
            </motion.div>
          </motion.div>{/* Right Side - Experience Timeline */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Experience Timeline Component
const ExperienceTimeline = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const tubeRef = useRef(null);
  const spinnerRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  // Use scroll-based animation for dynamic tube filling from top to bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
    // Transform scroll progress to tube fill percentage (0% to 100%)
  const tubeProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Transform scroll progress to move the spinner from top to bottom with the filling
  const spinnerPosition = useTransform(scrollYProgress, [0, 1], [20, 550]);
  
  // Transform scroll progress to rotate the spinner with scroll
  const spinnerRotation = useTransform(scrollYProgress, [0, 1], [0, 720]); // 2 full rotations
  
  // Remove GSAP animation since we're using scroll-based rotation
  useEffect(() => {
    // No need for GSAP continuous rotation anymore
  }, [isInView]);

  return (
    <motion.div 
      ref={containerRef}
      className="flex flex-col items-center justify-center h-full min-h-[700px] w-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Experience Title - matching Hero section blue colors */}
      <h3 className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
        theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
      }`} style={{
        textShadow: theme === 'dark' 
          ? '0 0 20px rgba(59, 130, 246, 0.5)' 
          : '0 4px 20px rgba(59, 130, 246, 0.3)'
      }}>
        Experience
      </h3>

      {/* Larger Timeline Container */}
      <div className="flex flex-col items-center w-full" ref={ref}>
        {/* Company Logo/Circle - larger and matching Hero colors */}
        <motion.div
          className="relative z-10 mb-12"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center shadow-2xl ${
            theme === 'dark'
              ? 'bg-gray-900/95 border-blue-400 shadow-blue-400/20'
              : 'bg-white border-blue-500 shadow-blue-500/20'
          }`}>
            <motion.div 
              className={`w-12 h-12 rounded-full ${
                theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
              }`}
              animate={isInView ? { rotate: 360 } : { rotate: 0 }}
              transition={{ 
                duration: 2, 
                delay: 1,
                ease: "easeInOut"
              }}
              style={{
                boxShadow: theme === 'dark' 
                  ? '0 0 20px rgba(59, 130, 246, 0.6)' 
                  : '0 0 20px rgba(59, 130, 246, 0.4)'
              }}
            />
          </div>
        </motion.div>        {/* Extra Large Vertical Tube with scroll-based filling from top to bottom */}        <div className="relative flex flex-col items-center">
          {/* Outer tube - extra large and prominent */}
          <div 
            ref={tubeRef}
            className={`relative w-24 h-[600px] rounded-full border-4 shadow-2xl overflow-hidden ${
              theme === 'dark' 
                ? 'border-gray-600/80 bg-gray-800/60 shadow-gray-900/50' 
                : 'border-gray-300 bg-gray-100/60 shadow-gray-300/30'
            }`}>
            {/* Scroll-based inner filling from top to bottom - matching Hero section gradients */}
            <motion.div
              className={`absolute top-0 left-0 right-0 rounded-full ${
                theme === 'dark' 
                  ? 'bg-gradient-to-b from-blue-500 via-blue-400 to-purple-400' 
                  : 'bg-gradient-to-b from-blue-600 via-blue-500 to-purple-500'
              }`}
              style={{
                height: tubeProgress,
                maxHeight: '100%',
                transformOrigin: 'top',
                boxShadow: theme === 'dark' 
                  ? 'inset 0 0 30px rgba(59, 130, 246, 0.4)' 
                  : 'inset 0 0 30px rgba(59, 130, 246, 0.3)'
              }}
            />            {/* Enhanced CSS Pinwheel Spinner - inside tube, perfectly centered with scroll rotation */}
            <motion.div 
              ref={spinnerRef}
              className="absolute w-16 h-16 z-20"
              style={{
                top: spinnerPosition,
                left: 'calc(50% - 32px)',
                transform: 'none',
                rotate: spinnerRotation
              }}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-full">
                {/* Top-right petal */}
                <div 
                  className="absolute top-0 right-0 w-8 h-8 rounded-tl-full"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    transformOrigin: 'bottom left',
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
                  }}
                />
                {/* Bottom-right petal */}
                <div 
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-bl-full"
                  style={{
                    background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    transformOrigin: 'top left',
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.8)'
                  }}
                />
                {/* Bottom-left petal */}
                <div 
                  className="absolute bottom-0 left-0 w-8 h-8 rounded-br-full"
                  style={{
                    background: 'linear-gradient(315deg, #ec4899, #06b6d4)',
                    transformOrigin: 'top right',
                    boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)'
                  }}
                />
                {/* Top-left petal */}
                <div 
                  className="absolute top-0 left-0 w-8 h-8 rounded-tr-full"
                  style={{
                    background: 'linear-gradient(225deg, #06b6d4, #3b82f6)',
                    transformOrigin: 'bottom right',
                    boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)'
                  }}
                />
                {/* Center dot */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 1)'
                  }}
                />
              </div>
            </motion.div>
            
            {/* Enhanced shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent"
              animate={isInView ? {
                y: ['100%', '-100%']
              } : {}}
              transition={{
                duration: 3,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2
              }}
            />          </div>

          {/* Company Info - enhanced styling */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <h4 className={`text-2xl md:text-3xl font-bold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Avnology
            </h4>
            <p className={`text-lg font-medium ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              March 2025 - Present
            </p>
            <p className={`text-base mt-2 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Frontend Developer
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

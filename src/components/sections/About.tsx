"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useRef, useEffect } from "react";

const About = () => {
  const { theme } = useTheme();
  const aboutRef = useRef(null);
  
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
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
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23374151" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
            : 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236b7280" fill-opacity="0.08"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">          <motion.div 
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
                  }`}>Adham Elalfy</span>, a passionate frontend developer with over 2 years of hands-on experience 
                  building modern web applications. My professional journey has been shaped by working with 
                  innovative companies that value quality and cutting-edge technology.
                </p>

                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Currently, I&apos;m working as a <span className={`font-semibold ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>Frontend Developer at Avnology</span>, where I focus on creating exceptional user experiences 
                  using React, Next.js, and TypeScript. I specialize in building responsive, performant applications 
                  that deliver real value to users.
                </p>                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Alongside my development work, I serve as a <span className={`font-semibold ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`}>Frontend Instructor at Black Horse</span>, where I teach frontend technologies and web 
                  development fundamentals. This teaching role has strengthened my communication skills and 
                  deepened my understanding of core concepts by explaining them to others.
                </p>

                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Both roles complement each other perfectly - developing real-world applications while sharing 
                  knowledge through education. This combination has made me a well-rounded professional 
                  who excels in both technical implementation and knowledge transfer.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ExperienceTimeline = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const tubeRef = useRef(null);
  const spinnerRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const tubeProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const spinnerPosition = useTransform(scrollYProgress, [0, 1], [20, 450]);
  const spinnerRotation = useTransform(scrollYProgress, [0, 1], [0, 720]);
  
  useEffect(() => {
  }, [isInView]);

  return (
    <motion.div 
      ref={containerRef}
      className="flex flex-col items-center justify-center h-full min-h-[700px] w-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
        theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
      }`} style={{
        textShadow: theme === 'dark' 
          ? '0 0 20px rgba(59, 130, 246, 0.5)' 
          : '0 4px 20px rgba(59, 130, 246, 0.3)'
      }}>
        Experience
      </h3>      <div className="flex flex-col items-center w-full" ref={ref}>
        <div className="relative flex flex-row items-start justify-center gap-12 md:gap-16">
          
          <div className="flex flex-col items-center">
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <p className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                March 2025
              </p>
            </motion.div>

            <div 
              ref={tubeRef}
              className={`relative w-20 h-[500px] rounded-full border-4 shadow-2xl overflow-hidden ${
                theme === 'dark' 
                  ? 'border-gray-600/80 bg-gray-800/60 shadow-gray-900/50' 
                  : 'border-gray-300 bg-gray-100/60 shadow-gray-300/30'
              }`}>
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
                    ? 'inset 0 0 20px rgba(59, 130, 246, 0.4)' 
                    : 'inset 0 0 20px rgba(59, 130, 246, 0.3)'
                }}
              />

              <motion.div 
                ref={spinnerRef}
                className="absolute w-14 h-14 z-20"
                style={{
                  top: spinnerPosition,
                  left: 'calc(50% - 28px)',
                  transform: 'none',
                  rotate: spinnerRotation
                }}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <div 
                    className="absolute top-0 right-0 w-7 h-7 rounded-tl-full"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      transformOrigin: 'bottom left',
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-7 h-7 rounded-bl-full"
                    style={{
                      background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                      transformOrigin: 'top left',
                      boxShadow: '0 0 15px rgba(139, 92, 246, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-7 h-7 rounded-br-full"
                    style={{
                      background: 'linear-gradient(315deg, #ec4899, #06b6d4)',
                      transformOrigin: 'top right',
                      boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute top-0 left-0 w-7 h-7 rounded-tr-full"
                    style={{
                      background: 'linear-gradient(225deg, #06b6d4, #3b82f6)',
                      transformOrigin: 'bottom right',
                      boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 255, 255, 1)'
                    }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <p className={`text-lg font-semibold mb-3 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Present
              </p>
              <h4 className={`text-xl md:text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Avnology
              </h4>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Frontend Developer
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                July 2024
              </p>
            </motion.div>

            <div 
              className={`relative w-20 h-[500px] rounded-full border-4 shadow-2xl overflow-hidden ${
                theme === 'dark' 
                  ? 'border-gray-600/80 bg-gray-800/60 shadow-gray-900/50' 
                  : 'border-gray-300 bg-gray-100/60 shadow-gray-300/30'
              }`}>
              <motion.div
                className={`absolute top-0 left-0 right-0 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-b from-purple-500 via-pink-400 to-blue-400' 
                    : 'bg-gradient-to-b from-purple-600 via-pink-500 to-blue-500'
                }`}
                style={{
                  height: tubeProgress,
                  maxHeight: '100%',
                  transformOrigin: 'top',
                  boxShadow: theme === 'dark' 
                    ? 'inset 0 0 20px rgba(147, 51, 234, 0.4)' 
                    : 'inset 0 0 20px rgba(147, 51, 234, 0.3)'
                }}
              />

              <motion.div 
                className="absolute w-14 h-14 z-20"
                style={{
                  top: spinnerPosition,
                  left: 'calc(50% - 28px)',
                  transform: 'none',
                  rotate: spinnerRotation
                }}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <div 
                    className="absolute top-0 right-0 w-7 h-7 rounded-tl-full"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      transformOrigin: 'bottom left',
                      boxShadow: '0 0 15px rgba(139, 92, 246, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-7 h-7 rounded-bl-full"
                    style={{
                      background: 'linear-gradient(45deg, #ec4899, #06b6d4)',
                      transformOrigin: 'top left',
                      boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-7 h-7 rounded-br-full"
                    style={{
                      background: 'linear-gradient(315deg, #06b6d4, #3b82f6)',
                      transformOrigin: 'top right',
                      boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute top-0 left-0 w-7 h-7 rounded-tr-full"
                    style={{
                      background: 'linear-gradient(225deg, #3b82f6, #8b5cf6)',
                      transformOrigin: 'bottom right',
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
                    }}
                  />
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 255, 255, 1)'
                    }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <p className={`text-lg font-semibold mb-3 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                Present
              </p>
              <h4 className={`text-xl md:text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Black Horse
              </h4>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Frontend Instructor
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

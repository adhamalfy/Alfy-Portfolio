"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useRef } from "react";

const Techniques = () => {
  const { theme } = useTheme();
  const techniquesRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: techniquesRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const techniques = [
    ["HTML", "CSS", "JavaScript", "React"],
    ["Node.js", "Express", "MongoDB", "Git"],
    ["Tailwind CSS", "GSAP", "Next.js", "TypeScript"],
    ["Redux", "RESTful APIs", "Sass", "Jest"],
    ["Supabase"]
  ];

  return (
    <motion.section 
      ref={techniquesRef}
      id="techniques"      className={`relative min-h-screen py-20 transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-[#0F1419]' 
          : 'bg-white'
      }`}
      style={{
        opacity,
        scale,
        y
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
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Techniques
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`} />
        </motion.div>

        <div className="space-y-8">
          {techniques.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={itemVariants}
            >
              {row.map((technique, techIndex) => (                <motion.div
                  key={techIndex}
                  className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-gray-900/60 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/80 hover:border-blue-500/70 hover:shadow-blue-500/20'
                      : 'bg-white/80 border-gray-200/60 backdrop-blur-sm hover:bg-white hover:border-blue-300/70 shadow-lg hover:shadow-blue-200/30'
                  }`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                  whileTap={{ scale: 0.95 }}
                >                  <div className="text-center">
                    <h3 className={`text-lg md:text-xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    } group-hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
                      {technique}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Techniques;

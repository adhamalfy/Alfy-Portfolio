"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  // Track mouse movement for text animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) * 0.01,
          y: (e.clientY - centerY) * 0.01
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section 
      id="home"
      className={`relative min-h-screen flex items-center justify-center transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-[#0F1419]' 
          : 'bg-white'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, staggerChildren: 0.3 }}
    >
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-screen py-8 lg:py-0">
            {/* Left Side - Profile Image with Floating Text */}
          <motion.div 
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >            {/* Profile Image with floating text around it */}
            <div className="relative w-full max-w-xs sm:max-w-sm" ref={imageRef}>
                {/* Floating Text - "Adham" at top-left */}
              <motion.div
                className={`absolute -top-8 -left-12 text-4xl sm:text-5xl font-extrabold pointer-events-none select-none ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                }`}
                style={{
                  transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 6}px)`,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  letterSpacing: '-0.02em',
                  textShadow: theme === 'dark' 
                    ? '0 0 20px rgba(59, 130, 246, 0.5)' 
                    : '0 4px 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                Adham
              </motion.div>

              {/* Floating Text - "Elalfy" at bottom-right */}
              <motion.div
                className={`absolute -bottom-8 -right-12 text-4xl sm:text-5xl font-extrabold pointer-events-none select-none ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                }`}
                style={{
                  transform: `translate(${mousePosition.x * -6}px, ${mousePosition.y * -8}px)`,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  letterSpacing: '-0.02em',
                  textShadow: theme === 'dark' 
                    ? '0 0 20px rgba(59, 130, 246, 0.5)' 
                    : '0 4px 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                Elalfy
              </motion.div><motion.div 
                className={`relative w-64 h-80 sm:w-72 sm:h-96 lg:w-72 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border ${
                  theme === 'dark' 
                    ? 'border-gray-600/40 bg-gray-800/30' 
                    : 'border-slate-300/60 bg-white/80 shadow-blue-100/50'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Your actual image */}
                <Image 
                  src="/assets/hero/me.png" 
                  alt="Adham Elalfy - Frontend Developer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Code Box with All Text */}
          <motion.div 
            className="relative w-full order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          ><div 
              className={`backdrop-blur-sm border rounded-2xl shadow-2xl overflow-hidden w-full ${
                theme === 'dark'
                  ? 'bg-gray-900/95 border-gray-600/50'
                  : 'bg-white/90 border-slate-300/60 shadow-xl shadow-blue-100/20'
              }`}
            >
              {/* Code Editor Header */}              <div className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b ${
                theme === 'dark'
                  ? 'bg-gray-800/60 border-gray-600/50'
                  : 'bg-slate-100/80 border-slate-300/60'
              }`}>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                  }`}>
                    About Me
                  </span>
                </div>
                <div className={`text-xs font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  javascript
                </div>
              </div>              {/* Code Content with Personal Info */}
              <div className={`code-content p-0 relative ${
                theme === 'dark' ? '' : 'bg-white'
              }`}>
                <div className={theme === 'light' ? 'bg-white' : ''}>
                  <SyntaxHighlighter
                    language="javascript"
                    style={theme === 'dark' ? vscDarkPlus : prism}
                    customStyle={{
                      margin: 0,
                      padding: '1rem 1rem 1.5rem',
                      background: theme === 'dark' ? 'transparent' : '#ffffff',
                      fontSize: '0.75rem',
                      lineHeight: '1.5',
                      height: 'auto',
                      borderRadius: '0 0 0.5rem 0.5rem'
                    }}
                    showLineNumbers={true}
                    codeTagProps={{
                      style: {
                        fontSize: '0.8rem',
                        lineHeight: '1.6',
                        background: theme === 'dark' ? 'transparent' : '#ffffff',
                        color: theme === 'dark' ? 'inherit' : '#374151'
                      }
                    }}
                  >
                    {`const developer = {
  name: "Alfy",
  role: "Frontend Developer", 
  skills: ["React", "Next.js", "TypeScript"],
  status: "Building amazing web experiences"
};

console.log(\`Hi, I'm \${developer.name} 👋\`);
console.log(\`\${developer.role} | \${developer.status}\`);`}
                  </SyntaxHighlighter>
                </div>
              </div>            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

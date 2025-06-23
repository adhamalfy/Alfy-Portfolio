"use client";

import { useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-[#0F1419]' 
          : 'bg-gray-50'
      }`}
    >      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-screen py-8 lg:py-0">
          
          {/* Left Side - Profile Image Only */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            {/* Profile Image */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className={`relative w-64 h-80 sm:w-72 sm:h-96 lg:w-72 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border ${
                theme === 'dark' 
                  ? 'border-gray-600/40 bg-gray-800/30' 
                  : 'border-gray-300/40 bg-white/30'
              }`}>
                {/* Your actual image */}
                <Image 
                  src="/assets/hero/me.png" 
                  alt="Alfy - Frontend Developer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>          {/* Right Side - Code Box with All Text */}
          <div className="relative w-full order-1 lg:order-2">
            <div 
              className={`backdrop-blur-sm border rounded-2xl shadow-2xl overflow-hidden w-full ${
                theme === 'dark'
                  ? 'bg-gray-900/95 border-gray-600/50'
                  : 'bg-white/95 border-gray-300/50'
              }`}
            >
              {/* Code Editor Header */}
              <div className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b ${
                theme === 'dark'
                  ? 'bg-gray-800/60 border-gray-600/50'
                  : 'bg-gray-100/60 border-gray-300/50'
              }`}>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    About Me
                  </span>
                </div>
                <div className={`text-xs font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  javascript
                </div>
              </div>

              {/* Code Content with Personal Info */}
              <div className="code-content p-0">
                <SyntaxHighlighter
                  language="javascript"
                  style={theme === 'dark' ? vscDarkPlus : prism}
                  customStyle={{
                    margin: 0,
                    padding: '1rem 1rem 1.5rem',
                    background: 'transparent',
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    height: 'auto'
                  }}
                  showLineNumbers={true}
                  codeTagProps={{
                    style: {
                      fontSize: '0.8rem',
                      lineHeight: '1.6'
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

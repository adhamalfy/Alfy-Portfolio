"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Cenima",
      description: "A movie discovery platform that displays new movies with their stories and watch links through a dynamic API.",
      image: "/assets/projects/cenima.png",
      technologies: ["React", "API", "JavaScript", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Nile Cafe",
      description: "A restaurant platform showcasing menus from various restaurants, allowing users to explore dining options and make reservations.",
      image: "/assets/projects/nile-cafe.png",
      technologies: ["React", "JavaScript", "CSS", "Database"],
      liveUrl: "#",
      githubUrl: "#",
    }
  ];  return (
    <section 
      id="projects" 
      className={`py-6 ${
        theme === 'dark' ? 'bg-[#0F1419]' : 'bg-white'
      } min-h-screen w-full flex flex-col justify-center items-center`}
    >
      <div className="w-full max-w-full flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className={`text-4xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some projects I&apos;ve worked on
          </p>
        </div>

        {/* Playing Cards Layout */}
        <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full max-w-none flex justify-center items-center px-4">
          <AnimatePresence mode="wait">
            {selectedProject === null ? (
              // Cards Scattered Layout
              <motion.div
                key="cards-scattered"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full h-full flex justify-center items-center"
              >
                {projects.map((project, index) => {
                  // مواقع ريسبونسيف حسب حجم الشاشة
                  const positions = [
                    { x: -40, y: -10, rotate: -8 }, // مسافة أقل للموبايل
                    { x: 40, y: 8, rotate: 6 },
                  ];
                  const pos = positions[index] || { x: 0, y: 0, rotate: 0 };
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ 
                        x: pos.x,
                        y: pos.y,
                        rotate: pos.rotate,
                        scale: 0.8,
                        opacity: 0
                      }}
                      animate={{ 
                        x: pos.x,
                        y: pos.y,
                        rotate: pos.rotate,
                        scale: 0.8,
                        opacity: 1
                      }}
                      transition={{ 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        y: pos.y - 30,
                        rotate: pos.rotate + 5,
                        scale: 0.85,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 10 
                        }
                      }}
                      onClick={() => setSelectedProject(index)}
                      className={`absolute w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-2xl shadow-2xl cursor-pointer transform-gpu
                        ${theme === 'dark' 
                          ? 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600' 
                          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-300'
                        }`}
                      style={{ 
                        left: '50%',
                        top: '50%',
                        marginLeft: '-112px', // w-56 = 224px / 2 = 112px
                        marginTop: '-144px',  // h-72 = 288px / 2 = 144px
                        transformOrigin: 'center center',
                        zIndex: 10 + index,
                        boxShadow: theme === 'dark' 
                          ? '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                          : '0 25px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Card Corner */}
                      <div className="absolute top-4 left-4">
                        <div className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className={`text-3xl ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          ♠
                        </div>
                      </div>

                      {/* Card Center */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center">
                        <div className={`text-5xl sm:text-6xl lg:text-7xl mb-2 sm:mb-3 ${
                          theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                        }`}>
                          💻
                        </div>
                        <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-xs leading-relaxed px-1 sm:px-2 ${
                          theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Card Corner (Bottom Right - Rotated) */}
                      <div className="absolute bottom-4 right-4 transform rotate-180">
                        <div className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className={`text-3xl ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          ♠
                        </div>
                      </div>

                      {/* Card Pattern Background */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="grid grid-cols-6 grid-rows-8 h-full w-full gap-1 p-4">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <div key={i} className={`flex items-center justify-center text-xs ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              ♠
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Border Accent */}
                      <div className="absolute inset-2 rounded-xl border border-white/10 pointer-events-none"></div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // Selected Card with Others Stacked Below
              <motion.div
                key="selected-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center justify-center"
              >
                {/* Main Selected Card */}
                <motion.div
                  initial={{ scale: 0.8, y: 30, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-2xl shadow-2xl transform-gpu mb-6 sm:mb-8
                    ${theme === 'dark' 
                      ? 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600' 
                      : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-300'
                    }`}
                  style={{ 
                    boxShadow: theme === 'dark' 
                      ? '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                      : '0 30px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center ${
                      theme === 'dark' 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg' 
                        : 'bg-red-500 hover:bg-red-600 text-white shadow-lg'
                    }`}
                  >
                    <X size={18} />
                  </button>

                  {/* Card Corner */}
                  <div className="absolute top-4 left-4">
                    <div className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {selectedProject !== null ? selectedProject + 1 : ''}
                    </div>
                    <div className={`text-3xl ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      ♠
                    </div>
                  </div>

                  {/* Card Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center">
                    <div className={`text-5xl sm:text-6xl lg:text-7xl mb-2 sm:mb-3 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                    }`}>
                      💻
                    </div>
                    <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedProject !== null ? projects[selectedProject].title : ''}
                    </h3>
                    <p className={`text-xs leading-relaxed px-1 sm:px-2 mb-2 sm:mb-3 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                    }`}>
                      {selectedProject !== null ? projects[selectedProject].description : ''}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-2 sm:mb-3">
                      {selectedProject !== null && projects[selectedProject].technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs rounded-full font-medium ${
                            theme === 'dark' 
                              ? 'bg-blue-900/60 text-blue-200 border border-blue-700/50' 
                              : 'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 w-full px-2 sm:px-4">
                      <a
                        href={selectedProject !== null ? projects[selectedProject].liveUrl : '#'}
                        className={`flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                          theme === 'dark' 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-105' 
                            : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:scale-105'
                        }`}
                      >
                        <ExternalLink size={10} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={selectedProject !== null ? projects[selectedProject].githubUrl : '#'}
                        className={`flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                          theme === 'dark' 
                            ? 'bg-slate-700 hover:bg-slate-600 text-white shadow-lg hover:scale-105' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-lg hover:scale-105'
                        }`}
                      >
                        <Github size={10} className="mr-1" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Card Corner (Bottom Right - Rotated) */}
                  <div className="absolute bottom-4 right-4 transform rotate-180">
                    <div className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {selectedProject !== null ? selectedProject + 1 : ''}
                    </div>
                    <div className={`text-3xl ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      ♠
                    </div>
                  </div>

                  {/* Card Border Accent */}
                  <div className="absolute inset-2 rounded-xl border border-white/10 pointer-events-none"></div>

                  {/* Card Pattern Background */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="grid grid-cols-6 grid-rows-8 h-full w-full gap-1 p-4">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className={`flex items-center justify-center text-xs ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          ♠
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Other Cards Stacked Below */}
                <div className="relative">
                  {projects.map((project, index) => {
                    if (index === selectedProject) return null;
                    const stackIndex = selectedProject !== null && index > selectedProject ? index - 1 : index;
                    return (
                      <motion.div
                        key={index}
                        initial={{ 
                          y: 0,
                          x: 0,
                          rotate: 0,
                          scale: 1
                        }}
                        animate={{ 
                          y: stackIndex * 10,
                          x: stackIndex * 8,
                          rotate: stackIndex * 4,
                          scale: 0.7 - stackIndex * 0.05
                        }}
                        whileHover={{ 
                          y: stackIndex * 10 - 12,
                          scale: 0.7 - stackIndex * 0.05 + 0.05,
                          transition: { duration: 0.2 }
                        }}
                        onClick={() => setSelectedProject(index)}
                        className={`absolute w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-xl shadow-lg cursor-pointer transform-gpu
                          ${theme === 'dark' 
                            ? 'bg-gradient-to-br from-slate-700/70 via-slate-800/70 to-slate-900/70 border border-slate-600' 
                            : 'bg-gradient-to-br from-white/70 via-gray-50/70 to-gray-100/70 border border-gray-300'
                          }`}
                        style={{ 
                          zIndex: projects.length - stackIndex,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backdropFilter: 'blur(1px)'
                        }}
                      >
                        {/* Simplified Card Content */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className={`text-lg font-bold ${
                            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {index + 1}
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <h4 className={`text-lg font-semibold text-center ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {project.title}
                          </h4>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

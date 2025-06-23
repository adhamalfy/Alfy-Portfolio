"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated, useInView } from "@react-spring/web";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    once: true,
  });

  const containerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 280, friction: 60 },
  });

  const categories = ["all", "web", "mobile", "animation"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      longDescription: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, secure payment processing with Stripe, and an admin dashboard. Built with React, Node.js, Express, and MongoDB.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: [
        "User Authentication & Authorization",
        "Product Catalog & Search",
        "Shopping Cart & Checkout",
        "Payment Integration",
        "Admin Dashboard",
        "Responsive Design"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Modern task management application with real-time updates and team collaboration",
      longDescription: "A collaborative task management application featuring real-time updates, team workspaces, drag-and-drop functionality, and comprehensive project tracking. Built with Next.js, Socket.io, and PostgreSQL.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: [
        "Real-time Collaboration",
        "Drag & Drop Interface",
        "Team Workspaces",
        "Project Analytics",
        "Mobile Responsive",
        "Dark Mode Support"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Interactive portfolio with advanced animations using GSAP and Framer Motion",
      longDescription: "A cutting-edge portfolio website showcasing advanced animation techniques using GSAP, Framer Motion, and React Spring. Features smooth page transitions, interactive elements, and optimized performance.",
      image: "/api/placeholder/600/400",
      category: "animation",
      technologies: ["Next.js", "GSAP", "Framer Motion", "React Spring", "Three.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: [
        "Advanced Animations",
        "3D Elements",
        "Smooth Transitions",
        "Interactive UI",
        "Performance Optimized",
        "SEO Friendly"
      ]
    },
    {
      id: 4,
      title: "Weather App",
      description: "React Native weather application with location services and beautiful UI",
      longDescription: "A cross-platform weather application built with React Native, featuring location-based weather data, 7-day forecasts, weather maps, and push notifications. Includes beautiful animations and intuitive user interface.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Redux", "Expo", "Weather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: [
        "Location Services",
        "7-Day Forecast",
        "Weather Maps",
        "Push Notifications",
        "Offline Support",
        "Cross Platform"
      ]
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard with complex data visualizations and real-time updates",
      longDescription: "A comprehensive data visualization dashboard featuring interactive charts, real-time data updates, filtering capabilities, and export functionality. Built with React, D3.js, and Chart.js for powerful data representation.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "D3.js", "Chart.js", "WebSockets", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: [
        "Interactive Charts",
        "Real-time Data",
        "Advanced Filtering",
        "Data Export",
        "Responsive Design",
        "Custom Visualizations"
      ]
    },
    {
      id: 6,
      title: "3D Product Showcase",
      description: "Interactive 3D product viewer with animations and configurator",
      longDescription: "An immersive 3D product showcase allowing users to interact with products in a virtual environment. Features product customization, 360-degree views, animations, and AR preview capabilities using Three.js and React Three Fiber.",
      image: "/api/placeholder/600/400",
      category: "animation",
      technologies: ["Three.js", "React Three Fiber", "GSAP", "WebGL", "Blender"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: [
        "3D Product Views",
        "Interactive Controls",
        "Product Customization",
        "AR Preview",
        "Performance Optimized",
        "Mobile Compatible"
      ]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <animated.div ref={ref} style={containerSpring}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, featuring modern web applications,
              mobile apps, and interactive experiences with cutting-edge animations.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 backdrop-blur-sm cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)"
                  }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-green-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <motion.div
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-sm text-white font-medium">
                        {project.category.toUpperCase()}
                      </span>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Project Modal/Detail View would go here */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal content would be implemented here */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {projects.find(p => p.id === selectedProject)?.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-gray-300">
                      {projects.find(p => p.id === selectedProject)?.longDescription}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </animated.div>
      </div>
    </div>
  );
};

export default Projects;

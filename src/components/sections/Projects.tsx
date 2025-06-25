"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { theme } = useTheme();

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
      className={`py-16 px-4 ${
        theme === 'dark' ? 'bg-[#0F1419]' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some projects I&apos;ve worked on
          </p>
        </div>

        {/* Simple Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Project Image */}
              <div className={`h-48 flex items-center justify-center ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Project Image - {project.title}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded ${
                          theme === 'dark' 
                            ? 'bg-blue-900 text-blue-200' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className={`flex items-center px-4 py-2 rounded text-sm font-medium transition-colors ${
                      theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className={`flex items-center px-4 py-2 rounded text-sm font-medium transition-colors ${
                      theme === 'dark' 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

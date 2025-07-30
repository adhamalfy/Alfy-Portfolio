"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Cenima",
      description:
        "A movie discovery platform that displays new movies with their stories and watch links through a dynamic API.",
      image: "/assets/projects/cenima.png",
      technologies: ["React", "API", "JavaScript", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Nile Cafe",
      description:
        "A restaurant platform showcasing menus from various restaurants, allowing users to explore dining options and make reservations.",
      image: "/assets/projects/nile-cafe.png",
      technologies: ["React", "JavaScript", "CSS", "Database"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-16 ${
        theme === "dark" ? "bg-[#0F1419]" : "bg-white"
      } min-h-screen w-full flex flex-col justify-center items-center`}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <p
            className={`text-lg md:text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700"
                  : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200"
              }`}
              style={{
                boxShadow: theme === "dark"
                  ? "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                  : "0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Project Image/Icon */}
              <div 
                className={`h-48 flex items-center justify-center ${
                  theme === "dark" ? "bg-slate-700/50" : "bg-gray-100"
                }`}
              >
                <div
                  className={`text-6xl ${
                    theme === "dark" ? "text-slate-300" : "text-gray-600"
                  }`}
                >
                  💻
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        theme === "dark"
                          ? "bg-blue-900/60 text-blue-200 border border-blue-700/50"
                          : "bg-blue-100 text-blue-800 border border-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                        : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
                    }`}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-slate-700 hover:bg-slate-600 text-white shadow-lg"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-lg"
                    }`}
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </motion.a>
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
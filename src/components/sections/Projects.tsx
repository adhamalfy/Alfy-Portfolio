"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { theme } = useTheme();
  const projectsRef = useRef(null);
  
  // Add scroll-based animation
  const { scrollYProgress } = useScroll({
    target: projectsRef,
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

  const projects = [
    {
      title: "cenima",
      description: "This project displays new movies along with their stories and links to watch them through a dynamic API.",
      image: "/assets/projects/cenima.png", // مكان للصورة
      technologies: ["React", "API", "JavaScript", "CSS"],
      liveUrl: "#", // يمكنك إضافة الرابط الفعلي هنا
      githubUrl: "#", // يمكنك إضافة رابط GitHub هنا
      features: [
        "Dynamic movie API integration",
        "Movie stories and details",
        "Watch links",
        "Responsive design"
      ]
    },
    {
      title: "nile cafe",
      description: "Nile Cafe is a web platform that showcases the menus of various restaurants, allowing users to explore diverse dining options. It provides a seamless experience for users to view detailed menu items and make reservations at their favorite restaurants, ensuring a convenient and enjoyable dining experience.",
      image: "/assets/projects/nile-cafe.png", // مكان للصورة
      technologies: ["React", "Web Platform", "JavaScript", "CSS", "Database"],
      liveUrl: "#", // يمكنك إضافة الرابط الفعلي هنا
      githubUrl: "#", // يمكنك إضافة رابط GitHub هنا
      features: [
        "Restaurant menu showcase",
        "Detailed menu items view",
        "Reservation system",
        "User-friendly interface",
        "Diverse dining options"
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className={`py-20 px-4 transition-all duration-500 ${
        theme === 'dark' ? 'bg-[#0F1419]' : 'bg-gray-50'
      }`}
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Here are some of the projects I&apos;ve worked on, showcasing my skills in web development
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                theme === 'dark' ? 'bg-[#1a1f2e] border border-gray-700' : 'bg-white'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`w-full h-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <span className={`text-lg ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Project Image ({project.title})
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className={`p-2 rounded-full hover:scale-110 transition-transform ${
                        theme === 'dark' 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                      aria-label="View live project"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className={`p-2 rounded-full hover:scale-110 transition-transform ${
                        theme === 'dark' 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <p className={`mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full ${
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

                {/* Features */}
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Key Features:
                  </h4>
                  <ul className={`space-y-1 text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
                        }`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, useInView } from "@react-spring/web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<HTMLDivElement>(null);
  
  const [ref, inView] = useInView({
    once: true,
  });

  // React Spring animation for the main container
  const containerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 280, friction: 60 },
  });

  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "React", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-600 to-gray-700" },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-teal-600" },
        { name: "GSAP", level: 85, color: "from-green-500 to-green-600" },
        { name: "Framer Motion", level: 87, color: "from-purple-500 to-purple-600" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", level: 88, color: "from-green-600 to-green-700" },
        { name: "Express", level: 85, color: "from-gray-500 to-gray-600" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-700" },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-pink-600" },
        { name: "REST APIs", level: 90, color: "from-orange-500 to-orange-600" },
      ],
    },
    {
      category: "Tools & Others",
      techs: [
        { name: "Git", level: 92, color: "from-red-500 to-red-600" },
        { name: "Docker", level: 78, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 75, color: "from-yellow-500 to-yellow-600" },
        { name: "Figma", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "VS Code", level: 95, color: "from-blue-600 to-blue-700" },
        { name: "Webpack", level: 80, color: "from-teal-500 to-teal-600" },
      ],
    },
  ];

  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      icon: "🏆",
    },
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      year: "2022",
      icon: "📜",
    },
    {
      title: "JavaScript Algorithms",
      issuer: "HackerRank",
      year: "2023",
      icon: "🥇",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill progress bars with GSAP
      const progressBars = progressBarsRef.current?.querySelectorAll(".progress-bar");
        progressBars?.forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate skill cards stagger
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={skillsRef} className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
              across various technologies and frameworks.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/30 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {skillCategory.category}
                </h3>
                
                <div ref={progressBarsRef} className="space-y-6">
                  {skillCategory.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                        <span className="text-gray-400 text-sm">{tech.level}%</span>
                      </div>
                      
                      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`progress-bar absolute top-0 left-0 h-full bg-gradient-to-r ${tech.color} rounded-full origin-left`}
                          data-progress={tech.level}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: tech.level / 100 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: techIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Certifications & <span className="text-gradient">Achievements</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-blue-400 font-medium">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </animated.div>
      </div>
    </div>
  );
};

export default Skills;

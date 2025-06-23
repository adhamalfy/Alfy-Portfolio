"use client";

import { useRef } from "react";
import { useSpring, animated, useInView } from "@react-spring/web";
import { motion } from "framer-motion";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);  const [ref, inView] = useInView({
    once: true,
  });

  // React Spring animations
  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 280, friction: 60 },
    delay: 200,
  });

  const fadeInLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-50px)",
    config: { tension: 280, friction: 60 },
    delay: 400,
  });

  const fadeInRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(50px)",
    config: { tension: 280, friction: 60 },
    delay: 600,
  });

  const numberAnimation = useSpring({
    from: { number: 0 },
    to: { number: inView ? 100 : 0 },
    config: { duration: 2000 },
    delay: 800,
  });

  const experiences = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      icon: "🎨",
    },
    {
      title: "Backend Development", 
      description: "Building robust server-side applications with Node.js, Express, and database management.",
      icon: "⚙️",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with attention to detail and modern design principles.",
      icon: "💡",
    },
  ];

  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
    { number: 24, suffix: "/7", label: "Availability" },
  ];

  return (
    <div ref={aboutRef} className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <animated.div style={fadeInLeft}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About <span className="text-gradient">Me</span>
              </motion.h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-8"></div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I&apos;m a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless digital experiences. My journey in web development has been driven by curiosity 
                and a constant desire to learn and implement the latest technologies.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With expertise in modern frameworks and animation libraries like GSAP, Framer Motion, 
                and React Spring, I bring interfaces to life with smooth, engaging animations that 
                enhance user experience without sacrificing performance.
              </p>

              <motion.button
                className="group relative px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            </animated.div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="space-y-8">
            <animated.div style={fadeInRight}>
              {/* Experience Cards */}
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{exp.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </animated.div>
          </div>
        </div>

        {/* Stats Section */}
        <animated.div style={fadeInUp} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <animated.div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number === 100 ? (
                    <animated.span>
                      {numberAnimation.number.to(n => `${Math.floor(n)}${stat.suffix}`)}
                    </animated.span>
                  ) : (
                    `${stat.number}${stat.suffix}`
                  )}
                </animated.div>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default About;

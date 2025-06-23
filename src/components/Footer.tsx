"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/alfy",
      icon: "🐙",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/alfy",
      icon: "💼",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/alfy",
      icon: "🐦",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/alfy",
      icon: "📷",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient">Alfy</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate full-stack developer creating modern, 
              responsive web applications with cutting-edge animations 
              and user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                  whileHover={{ x: 10 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:alfy@example.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>📧</span>
                <span>alfy@example.com</span>
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>📱</span>
                <span>+1 (555) 123-4567</span>
              </motion.a>
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <span>📍</span>
                <span>New York, NY</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Alfy. All rights reserved. Built with Next.js, GSAP, Framer Motion & React Spring.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Back to Top</span>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
              <motion.span
                className="text-sm"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↑
              </motion.span>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
    </footer>
  );
};

export default Footer;

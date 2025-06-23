"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`relative w-full z-50 transition-all duration-300 mt-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Empty space for left */}
          <div className="flex-1"></div>          {/* Desktop Navigation - Centered */}
          <div className={`hidden md:flex items-center space-x-1 sm:space-x-2 transition-all duration-300 rounded-full px-4 sm:px-6 py-2 sm:py-3 ${
            scrolled
              ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-300/50 dark:border-gray-700/50 shadow-xl"
              : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300/30 dark:border-gray-700/30 shadow-lg"
          }`}>
            {navItems.map((item) => (              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? "text-white bg-blue-500 shadow-md"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/70 dark:hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}          </div>
            {/* Theme Toggle Button - Right side */}
          <div className="flex-1 flex justify-end">            <motion.button
              onClick={toggleTheme}
              className="p-2 sm:p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-gray-300/50 dark:border-gray-600/50 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >            <motion.div
              initial={false}
              animate={{ rotate: theme === 'light' ? 0 : 180 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-4 h-4 sm:w-5 sm:h-5"
            >              {theme === 'light' ? (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}</motion.div>
          </motion.button>
          </div>          {/* Mobile menu button */}
          <div className="md:hidden">            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 relative">
                <motion.span
                  className="absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className="absolute left-0 top-3 w-6 h-0.5 bg-current"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                />
                <motion.span
                  className="absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >              <div className="px-3 pt-3 pb-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 border border-gray-300/50 dark:border-gray-700/50 shadow-xl">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg cursor-pointer min-h-[48px] ${
                      activeSection === item.href.slice(1)
                        ? "text-white bg-blue-500 shadow-md"
                        : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/70 dark:hover:bg-gray-700/50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;

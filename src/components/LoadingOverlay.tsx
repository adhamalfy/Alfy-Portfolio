"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface LoadingOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
}

const LoadingOverlay = ({ isVisible, onComplete }: LoadingOverlayProps) => {
  const { theme } = useTheme();
  
  useEffect(() => {
    if (isVisible) {
      // بعد 2.5 ثانية ينتهي التحميل
      const timer = setTimeout(() => {
        onComplete();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;
  return (
    <motion.div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
          : 'bg-gradient-to-br from-gray-100 via-white to-gray-200'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* حرف الـ A يترسم كأنه بالقلم */}
      <div className="relative">        <motion.svg
          width="160"
          height="160"
          viewBox="0 0 120 120"
          className="drop-shadow-2xl"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1, 1, 4],
            opacity: [1, 1, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            times: [0, 0.2, 0.6, 1],
            ease: "easeInOut"
          }}        >{/* الخط الأيسر لحرف A */}
          <motion.path
            d="M30 90 L60 30"
            stroke={theme === 'dark' ? '#ffffff' : '#000000'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.1
            }}
          />
          
          {/* الخط الأيمن لحرف A */}
          <motion.path
            d="M60 30 L90 90"
            stroke={theme === 'dark' ? '#ffffff' : '#000000'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
            {/* الخط الأفقي لحرف A */}
          <motion.path
            d="M42 65 L78 65"
            stroke={theme === 'dark' ? '#ffffff' : '#000000'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.9
            }}          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default LoadingOverlay;



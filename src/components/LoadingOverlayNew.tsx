"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface LoadingOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
}

const LoadingOverlay = ({ isVisible, onComplete }: LoadingOverlayProps) => {  useEffect(() => {
    if (isVisible) {
      // Auto complete after animation with a reliable timer
      const timer = setTimeout(() => {
        console.log('Loading overlay completing...');
        onComplete();
      }, 1800); // Reduced to 1.8 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main Character Container */}
        <div className="relative flex items-center justify-center">
          {/* Pulse Background Circle */}
          <motion.div
            className="absolute w-32 h-32 rounded-full border border-blue-500/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Inner Glow */}
          <motion.div
            className="absolute w-24 h-24 rounded-full bg-blue-500/10 blur-md"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Character "A" */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl"
            initial={{
              scale: 0,
              rotate: -360,
              opacity: 0
            }}
            animate={{
              scale: [0, 1.1, 1],
              rotate: [-360, 0, 0],
              opacity: [0, 1, 1]
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              times: [0, 0.7, 1]
            }}
          >
            <motion.span 
              className="text-4xl font-bold text-slate-800"
              style={{
                fontFamily: "Inter, system-ui, sans-serif"
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              A
            </motion.span>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="absolute top-32 text-white text-lg font-medium tracking-wide text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Loading Portfolio...
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            className="absolute top-40 flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingOverlay;

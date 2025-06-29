"use client";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  return (
    <footer
      className={`w-full text-center py-4 text-gray-700 text-base relative transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#0F1419] text-gray-300 border-t border-[#23272e]"
          : "bg-white text-gray-700 border-t border-gray-200"
      }`}
    >
      © {year} Adham Elalfy. All rights reserved.
    </footer>
  );
};

export default Footer;

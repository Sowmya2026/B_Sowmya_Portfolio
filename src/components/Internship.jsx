/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Internship = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Define colors based on theme
  const COLORS = {
    primary: isDark ? "#A2AADB" : "#898AC4",
    secondary: isDark ? "#898AC4" : "#A2AADB",
    light: isDark ? "#1a1f37" : "#C0C9EE",
    background: isDark ? "#0d1220" : "#F0F2FF",
    text: isDark ? "#E5E7EB" : "#374151",
    cardBg: isDark ? "#1a1f37" : "#FFFFFF",
    cardBorder: isDark ? "#2D3748" : "#E5E7EB"
  };

  return (
    <section id="internship" className="py-16 px-4 md:px-8 bg-white dark:bg-[#0d1220] transition-colors duration-300">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-left mb-12 pt-[12px] px-[70px] transition-colors duration-300"
          style={{ color: COLORS.primary }}
        >
          Internship Experience
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-12 items-start px-[70px]">
          {/* Left Content - 3/4 width */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h3
                    className="text-xl font-bold transition-colors duration-300"
                    style={{ color: COLORS.primary }}
                  >
                    Software Developer Intern
                  </h3>
                  <div className="极细的flex items-center gap-2 mt-2 md:mt-0">
                    <FaCalendarAlt style={{ color: COLORS.primary }} />
                    <span style={{ color: COLORS.primary }}>
                      May 2024 – July 2024
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <FaMapMarkerAlt style={{ color: COLORS.primary }} />
                  <p style={{ color: COLORS.primary }}>
                    TechCiti Software Consulting Pvt Ltd, Bengaluru
                  </p>
                </div>

                <div
                  className="mb-8 p-6 rounded-xl transition-colors duration-300"
                  style={{ backgroundColor: COLORS.light }}
                >
                  <p
                    className="leading-relaxed text-center italic transition-colors duration-300"
                    style={{ color: COLORS.text }}
                  >
                    "Developed and optimized scalable machine learning model for
                    real-time applications, collaborating with senior developers
                    to implement new features and improve existing
                    functionality."
                  </p>
                </div>

                <div className="mb-8">
                  <h4
                    className="text-lg font-semibold mb-4 text-center transition-colors duration-300"
                    style={{ color: COLORS.primary }}
                  >
                    Technologies & Tools
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Machine Learning",
                      "Python",
                      "React",
                      "TensorFlow",
                      "Git",
                      "Agile Methodology",
                    ].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-2 rounded-lg text-sm font-medium text-center transition-colors duration-300"
                        style={{
                          backgroundColor: COLORS.secondary,
                          color: "#FFFFFF",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: COLORS.primary,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="text-center">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all"
                    style={{
                      backgroundColor: COLORS.primary,
                      color: "#FFFFFF",
                    }}
                    whileHover={{
                      scale: 1.05,
                      gap: "12px",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project Details
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Animation Design - 1/4 width */}
          <div className="md:col-span-1 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="sticky top-24"
            >
              {/* Timeline Visualization */}
              <motion.div
                className="w-full aspect-square rounded-2xl p-6 flex flex-col justify-center items-center relative transition-colors duration-300"
                style={{ backgroundColor: isDark ? "#1a1f37" : "#F8FAFC" }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline Circle */}
                <div className="relative w-32极细的 h-32 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={isDark ? "#374151" : "#E5E7EB"}
                      strokeWidth="3"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={COLORS.primary}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      strokeDashoffset="283"
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 70 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-2xl font-bold transition-colors duration-300"
                      style={{ color: COLORS.primary }}
                    >
                      3
                    </span>
                    <span className="text-sm ml-1 transition-colors duration-300" style={{ color: COLORS.primary }}>
                      mos
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h4
                    className="font-semibold mb-2 transition-colors duration-300"
                    style={{ color: COLORS.primary }}
                  >
                    Project Timeline
                  </h4>
                  <p className="text-sm transition-colors duration-300" style={{ color: isDark ? "#A0AEC0" : "#6B7280" }}>
                    Successful completion with excellent results
                  </p>
                </div>

                {/* Floating Achievement Icons */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: COLORS.primary }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-white text-xs">✓</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: COLORS.secondary }}
                  animate={{
                    y: [0, 4, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-white text-xs">★</span>
                </motion.div>
              </motion.div>

              {/* Key Achievements */}
              <div className="mt-6 space-y-4">
                <motion.div
                  className="p-4 rounded-lg text-center transition-colors duration-300"
                  style={{ backgroundColor: COLORS.secondary }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                >
                  <div
                    className="text-2xl font-bold mb-1 text-white"
                  >
                    100%
                  </div>
                  <div className="text-sm text-white">
                    On-Time Delivery
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 rounded-lg text-center transition-colors duration-300"
                  style={{ backgroundColor: COLORS.primary }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  <div
                    className="text-2xl font-bold mb-1 text-white"
                  >
                    4.9/5
                  </div>
                  <div className="text-sm text-white">
                    Client Satisfaction
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
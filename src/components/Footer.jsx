/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaEnvelope,
  FaCode,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8 px-4 md:px-8 transition-colors duration-300"
      style={{ backgroundColor: COLORS.primary }}
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-20 h-20 rounded-full"
          style={{ backgroundColor: COLORS.light }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-16 h-16 transform rotate-45"
          style={{ backgroundColor: COLORS.light }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full"
          style={{ backgroundColor: COLORS.light }}
        ></div>
        <div
          className="absolute bottom-10 left-1/4 w-14 h-14 transform rotate-45"
          style={{ backgroundColor: COLORS.light }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-white font-bold text-lg dark:text-black">B</span>
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-black">Beemer Sowmya</h3>
            </div>
            <p className="mb-4" style={{ color: COLORS.light }}>
              Crafting exceptional digital experiences with innovative solutions
              that make a difference.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://github.com/Sowmya2026"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all dark:black"
                style={{ backgroundColor: COLORS.secondary, color: "white" }}
                aria-label="GitHub"
              >
                <FaGithub size={18} className="text-white dark:text-black"/>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/beemer-sowmya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all"
                style={{ backgroundColor: COLORS.secondary, color: "white" }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} className="text-white dark:text-black"/>
              </motion.a>
              <motion.a
                href="mailto:sowmyamudhiraj64@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all"
                style={{ backgroundColor: COLORS.secondary, color: "white" }}
                aria-label="Email"
              >
                <FaEnvelope size={16} className="text-white dark:text-black"/>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-black">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="transition-colors hover:underline"
                      style={{ color: COLORS.light }}
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-black">
              Get In Touch
            </h4>

            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end">
                {/* Location Icon */}
                <svg
                  className="w-4 h-4 mr-2"
                  style={{ color: COLORS.light }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
                <p style={{ color: COLORS.light }}>Hyderabad, India</p>
              </div>

              <div className="flex items-center justify-center md:justify-end">
                {/* Phone Icon */}
                <svg
                  className="w-4 h-4 mr-2"
                  style={{ color: COLORS.light }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.9.37 1.77.72 2.59a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.82.35 1.69.59 2.59.72A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p style={{ color: COLORS.light }}>+91 8977424608</p>
              </div>

              <div className="flex items-center justify-center md:justify-end">
                <FaEnvelope
                  className="w-4 h-4 mr-2"
                  style={{ color: COLORS.light }}
                />
                <a
                  href="mailto:sowmyamudhiraj64@gmail.com"
                  className="transition-colors hover:underline"
                  style={{ color: COLORS.light }}
                >
                  sowmyamudhiraj64@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider with decorative elements */}
        <div className="relative my-8 flex items-center justify-center">
          <div
            className="flex-grow h-px"
            style={{ backgroundColor: `${COLORS.light}30` }}
          ></div>
          <div
            className="mx-4 w-2 h-2 rounded-full"
            style={{ backgroundColor: COLORS.light }}
          ></div>
          <div
            className="flex-grow h-px"
            style={{ backgroundColor: `${COLORS.light}30` }}
          ></div>
        </div>

        {/* Copyright and back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p
              className="flex items-center justify-center md:justify-start"
              style={{ color: COLORS.light }}
            >
              © {currentYear} Beemer Sowmya. Made with{" "}
             <FaHeart className="text-white dark:text-[#0d1220] mx-1" /> & React

            </p>
          </div>

          <div className="items-center space-x-6">
            <p
              className="text-sm hidden md:block pb-[50px]"
              style={{ color: COLORS.light }}
            >
              <FaCode className="inline mr-1" /> Crafted with care
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all group "
              style={{ backgroundColor: COLORS.secondary }}
              aria-label="Back to top"
            >
              <FaArrowUp size={14} className="text-white dark:text-black" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Top
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -left-4 bottom-20 w-8 h-8 rounded-full opacity-20"
          style={{ backgroundColor: COLORS.light }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-10 bottom-40 w-6 h-6 rounded-full opacity-30"
          style={{ backgroundColor: COLORS.light }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;

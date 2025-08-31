/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaChartBar,
  FaRobot,
  FaPaintBrush,
  FaBrain,
  FaLightbulb,
  FaUsers,
  FaCloud,
  FaClock,
  FaJava,
  FaDatabase,
  FaMobile,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaLaptopCode,
  FaUserCheck,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";
import { SiGoogledrive, SiMysql, SiUipath, SiAdobexd } from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const skillsRef = useRef(null);
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
    cardBorder: isDark ? "#2D3748" : "#A2AADB"
  };

  // Scroll to skills section when component mounts if URL has hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#skills" && skillsRef.current) {
      setTimeout(() => {
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  // Technical skills data organized by category
  const technicalSkills = [
    {
      category: "Programming & Development",
      icon: <FaCode className="text-2xl" />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Web Application Development", icon: <FaLaptopCode /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Android App Development", icon: <FaMobile /> },
        { name: "Google Firebase", icon: <SiGoogledrive /> },
      ],
    },
    {
      category: "Data & Analysis",
      icon: <FaChartBar className="text-2xl" />,
      skills: [
        { name: "Data Structures", icon: <FaLaptopCode /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Power BI", icon: <FaChartLine /> },
      ],
    },
    {
      category: "Automation & Tools",
      icon: <FaRobot className="text-2xl" />,
      skills: [
        { name: "UiPath Studio", icon: <SiUipath /> },
        { name: "GitHub", icon: <FaGitAlt /> },
      ],
    },
    {
      category: "UI/UX Design",
      icon: <FaPaintBrush className="text-2xl" />,
      skills: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Adobe XD", icon: <SiAdobexd /> },
        { name: "Wireframing", icon: <FaProjectDiagram /> },
        { name: "Prototyping", icon: <FaUserCheck /> },
        { name: "User Flows", icon: <FaProjectDiagram /> },
        { name: "Responsive Design", icon: <FaLaptopCode /> },
      ],
    },
  ];

  // Soft skills data
  const softSkills = [
    {
      name: "Problem-Solving & Critical Thinking",
      icon: <FaBrain />,
      description:
        "Analytical approach to breaking down complex problems and developing effective solutions.",
    },
    {
      name: "Creativity & Eye for Design",
      icon: <FaLightbulb />,
      description:
        "Ability to think outside the box and create visually appealing, user-friendly interfaces.",
    },
    {
      name: "Team Collaboration",
      icon: <FaUsers />,
      description:
        "Experience working in agile teams with clear communication and collaborative spirit.",
    },
    {
      name: "Adaptability & Learning",
      icon: <FaCloud />,
      description:
        "Eager to learn new technologies and adapt to changing project requirements.",
    },
    {
      name: "Time Management",
      icon: <FaClock />,
      description:
        "Skilled at prioritizing tasks and meeting deadlines in fast-paced environments.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div
      id="skills"
      ref={skillsRef}
      className="min-h-screen py-4 px-4 bg-white dark:bg-[#0d1220] transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-left mb-6 pt-16 px-44"
        style={{ color: COLORS.primary }}
      >
        My Skills
      </motion.h2>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-left mb-16 px-44"
      >
        <div
          className="rounded-lg p-1 flex shadow-inner"
          style={{ backgroundColor: COLORS.light }}
        >
          <motion.button
            onClick={() => setActiveTab("technical")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 text-lg font-medium flex items-center gap-2 transition-all rounded-xl ${
              activeTab === "technical"
                ? "text-white"
                : "text-primary hover:text-white"
            }`}
            style={{
              backgroundColor:
                activeTab === "technical" ? COLORS.primary : "transparent",
            }}
          >
            <FaCode />
            Technical Skills
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("soft")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 text-lg font-medium flex items-center gap-2 transition-all rounded-xl ${
              activeTab === "soft"
                ? "text-white"
                : "text-primary hover:text-white"
            }`}
            style={{
              backgroundColor:
                activeTab === "soft" ? COLORS.primary : "transparent",
            }}
          >
            <FaUsers />
            Soft Skills
          </motion.button>
        </div>
      </motion.div>

      {/* Technical Skills Tab */}
      {activeTab === "technical" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 max-w-6xl mx-auto"
        >
          {technicalSkills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="p-8 rounded-xl relative overflow-hidden group cursor-pointer border-2 shadow-lg"
              style={{ 
                backgroundColor: COLORS.cardBg,
                borderColor: COLORS.cardBorder
              }}
              variants={cardHoverVariants}
            >
              {/* Category header with blue background */}
              <div
                className="absolute top-0 left-0 right-0 py-4 px-6 rounded-t-xl text-white font-bold text-lg flex items-center gap-3"
                style={{ backgroundColor: COLORS.primary }}
              >
                {category.icon}
                {category.category}
              </div>

              <div className="mt-16">
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-lg transition-colors duration-300"
                      style={{ backgroundColor: COLORS.background }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: COLORS.light,
                      }}
                    >
                      <div
                        className="text-xl mb-2"
                        style={{ color: COLORS.primary }}
                      >
                        {skill.icon}
                      </div>
                      <span
                        className="text-sm text-center font-medium"
                        style={{ color: COLORS.text }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Soft Skills Tab */}
      {activeTab === "soft" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 max-w-6xl mx-auto"
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="p-6 rounded-xl flex flex-col h-full relative overflow-hidden group cursor-pointer border-2 shadow-lg"
              style={{ 
                backgroundColor: COLORS.cardBg,
                borderColor: COLORS.cardBorder
              }}
              variants={cardHoverVariants}
            >
              {/* Skill header with blue background */}
              <div
                className="py-3 px-4 rounded-t-xl text-white font-bold text-center mb-4 flex items-center justify-center gap-2"
                style={{ backgroundColor: COLORS.primary }}
              >
                {skill.icon}
                <span className="text-sm">{skill.name}</span>
              </div>

              <p className="text-sm text-center flex-grow" style={{ color: COLORS.text }}>
                {skill.description}
              </p>

              <div className="mt-4 flex justify-center">
                <div
                  className="w-8 h-1 rounded-full"
                  style={{ backgroundColor: COLORS.primary }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
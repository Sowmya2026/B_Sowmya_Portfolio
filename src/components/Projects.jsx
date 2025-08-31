/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Your project data
const projectsData = [
  {
    id: 1,
    title: "MealPicker – Mobile App for Meal Selection",
    description:
      "Built a mobile app for personalized meal selection, day-wise menu display, and real-time menu updates in the hostel mess with dual login for students and administrators.",
    technologies: ["Android App", "Firebase"],
    githubUrl: "极细的s://github.com/Sowmya2026/MealPicker",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "DormTrack – Hostel Attendance & Services App",
    description:
      "Engineered a mobile-based system for hostel attendance, event tracking, and issue reporting with automated notifications for improved efficiency.",
    technologies: ["Android App", "Firebase"],
    githubUrl: "https://github.com/Sowmya2026/DormTrack",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "MandirAtlas – Web Platform for Temple Exploration",
    description:
      "Designed a web platform for exploring Hindu temples across India, providing historical insights and festival details with state-wise organization.",
    technologies: ["App"],
    githubUrl: "https://github.com/Sowmya2026/MandirAtlas",
    demoUrl: "#",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
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
    cardBg: isDark ? "#1a1f37" : "#FFFFFF",
    cardBorder: isDark ? "#2D3748" : "#E5E7EB",
  };

  // Get all unique technologies for filtering
  const allTechnologies = [
    ...new Set(projectsData.flatMap((project) => project.technologies)),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  // Split the text into individual letters for animation
  const headingText = "MY PROJECTS";
  const letters = headingText.split("");

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col md:flex-row transition-colors duration-300 relative overflow-hidden"
     
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
  

        {/* Floating squares */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              width: `${15 + i * 8}px`,
              height: `${15 + i * 8}px`,
              top: `${20 + i * 8}%`,
              right: `${5 + i * 5}%`,
              backgroundColor: COLORS.secondary,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ backgroundColor: COLORS.primary }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(45deg, ${COLORS.primary}20, ${COLORS.secondary}20)`,
          }}
        />
      </div>

      {/* Vertical Left Side Heading - 20% width */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/5 text-white flex justify-center items-start pt-20 md:pt-20 px-9 relative z-10 transition-colors duration-300"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-2">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-10xl md:text-5xl font-bold tracking-wider"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Animated elements in the sidebar */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full opacity-20"
          style={{ backgroundColor: COLORS.primary }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 opacity-15"
          style={{ backgroundColor: COLORS.primary }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Projects Content - 80% width */}
      <div className="w-full md:w-4/5 py-12 md:py-16 px-4 md:px-8 relative z-10 dark:bg-[#0d1220]">
        {/* Header with description and filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <div
            className="text-sm md:text-base max-w-2xl mx-auto md:mx-0 transition-colors duration-300"
            style={{ color: COLORS.primary }}
          >
            <p>Here are some of the projects I've worked on.</p>
            <p>
              Each one represents a unique challenge and learning experience.
            </p>
          </div>
        </motion.div>

        {/* Technology Filter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex flex-wrap justify-center md:justify-start gap-3"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === "all"
                ? "text-white"
                : "text-white hover:opacity-80"
            } transition-colors duration-300`}
            style={{
              backgroundColor:
                activeFilter === "all" ? COLORS.primary : COLORS.light,
            }}
          >
            All Projects
          </button>

          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === tech
                  ? "text-white"
                  : "text-white hover:opacity-80"
              } transition-colors duration-300`}
              style={{
                backgroundColor:
                  activeFilter === tech ? COLORS.primary : COLORS.light,
              }}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line with animation */}
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 transition-colors duration-300"
            style={{
              backgroundColor: isDark ? "#374151" : "#E5E7EB",
              opacity: 0.6,
            }}
          >
            <motion.div
              className="w-full h-8 absolute top-0"
              style={{ backgroundColor: COLORS.primary }}
              initial={{ y: -100 }}
              animate={{ y: "100vh" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center gap-5 md:gap-6`}
              >
                {/* Project visual element */}
                <div className="relative w-full md:w-2/5 ml-8 md:ml-0">
                  <motion.div
                    className={`h-32 md:h-36 rounded-lg flex items-center justify-center transition-all duration-500 ${
                      hoveredProject === project.id ? "scale-105" : ""
                    }`}
                    style={{ backgroundColor: COLORS.secondary }}
                    whileHover={{
                      rotate: hoveredProject === project.id ? 2 : 0,
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white opacity-80">
                      {project.title.charAt(0)}
                    </div>

                    {/* Hover overlay with links */}
                    <motion.div
                      className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                        hoveredProject === project.id
                          ? "bg-opacity-90 backdrop-blur-sm"
                          : "bg-opacity-0 backdrop-blur-none"
                      }`}
                      style={{ backgroundColor: COLORS.primary }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 0.9 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 overflow-hidden"
                        style={{ backgroundColor: COLORS.secondary }}
                        whileHover={{
                          scale: 1.15,
                          rotate: 5,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {/* Background shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        <FaGithub size={18} className="relative z-10" />

                        {/* Tooltip */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            View Code
                          </div>
                        </div>
                      </motion.a>

                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 overflow-hidden"
                        style={{ backgroundColor: COLORS.secondary }}
                        whileHover={{
                          scale: 1.15,
                          rotate: -5,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {/* Background shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        <FaExternalLinkAlt
                          size={16}
                          className="relative z-10"
                        />

                        {/* Tooltip */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            Live Demo
                          </div>
                        </div>
                      </motion.a>

                      {/* Additional decorative elements that appear on hover */}
                      <motion.div
                        className="absolute top-4 right-4 text-white/60"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-4 left-4 text-white/60"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Floating elements around project card */}
                  <motion.div
                    className="absolute -top-2 -left-2 w-4 h-4 rounded-full opacity-60"
                    style={{ backgroundColor: COLORS.primary }}
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-2 -right-2 w-3 h-3 opacity-40"
                    style={{ backgroundColor: COLORS.secondary }}
                    animate={{
                      y: [0, 5, 0],
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7,
                    }}
                  />
                </div>

                {/* Project content */}
                <motion.div
                  className="w-full md:w-3/5 p-4 md:p-5 rounded-lg transition-colors duration-300"
                  style={{
                    backgroundColor: isDark ? "#1a1f37" : "#F0F2FF",
                    border: `1px solid ${isDark ? "#2D3748" : "#E5E7EB"}`,
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <h3
                    className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: COLORS.primary }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="mb-3 md:mb-4 text-xs md:text-sm transition-colors duration-300"
                    style={{ color: COLORS.text }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full transition-colors duration-300"
                        style={{
                          backgroundColor: isDark
                            ? "#2D3748"
                            : "rgba(255, 255, 255, 0.9)",
                          color: COLORS.primary,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: COLORS.light,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div
                    className="flex gap-3 pt-2 border-t transition-colors duration-300"
                    style={{ borderColor: `${COLORS.primary}30` }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 transition-colors hover:underline font-medium text-xs md:text-sm"
                      style={{ color: COLORS.primary }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaGithub size={12} /> Code
                    </motion.a>

                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 transition-colors hover:underline font-medium text-xs md:text-sm"
                      style={{ color: COLORS.primary }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
            style={{ color: COLORS.primary }}
          >
            <p className="text-base md:text-lg">
              No projects found with the selected technology.
            </p>
            <motion.button
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-5 py-1.5 rounded-full text-white text-sm transition-colors duration-300"
              style={{ backgroundColor: COLORS.primary }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
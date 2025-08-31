/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Define your color theme
  const COLORS = {
    primary: isDark ? "#A2AADB" : "#898AC4",
    secondary: isDark ? "#898AC4" : "#A2AADB",
    light: isDark ? "#0d1220" : "#C0C9EE",
    white: isDark ? "#0d1220" : "#FFFFFF",
    text: isDark ? "#E5E7EB" : "#374151",
    dark: isDark ? "#E5E7EB" : "#1F2937",
    cardBg: isDark ? "#0d1220" : "#FFFFFF",
  };

  const educationData = [
    {
      id: 1,
      degree: "M.Tech in Software Engineering",
      institution: "Chennai",
      period: "2021–2026",
      score: "8.78 CGPA",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      id: 2,
      degree: "12th Grade",
      institution: "SR Junior College",
      period: "2019–2021",
      score: "95.2%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: 3,
      degree: "SSC (10th Class)",
      institution: "TS Model School, Telangana",
      period: "2019",
      score: "9.5 CGPA",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 8h16M4 10h16m-6 4v6m-4-6v6"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section
        id="about"
        className="py-20 px-4 md:px-8 relative bg-white dark:bg-[#0d1220] transition-colors duration-300"
      >
        <div className="container mx-auto relative z-10 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-left mb-6 pt-[4px] px-[72px]"
            style={{ color: COLORS.primary }}
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-18 items-start ml-[40px]">
            {/* My Journey Section - Professional Version */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="p-8 rounded-3xl relative z-10"
                style={{ backgroundColor: COLORS.cardBg }}
              >
                <div className="flex items-center mb-6">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: COLORS.primary }}
                  >
                    My Professional Journey
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mr-4 mt-1"
                      style={{
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg" style={{ color: COLORS.text }}>
                      Passionate software developer and innovator focused on
                      creating impactful digital solutions that make a
                      difference in people's lives.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mr-4 mt-1"
                      style={{
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-lg" style={{ color: COLORS.text }}>
                      Currently pursuing M.Tech in Software Engineering,
                      bringing fresh perspectives and commitment to excellence
                      in every project.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mr-4 mt-1"
                      style={{
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg" style={{ color: COLORS.text }}>
                      Continuously exploring emerging technologies, contributing
                      to open-source initiatives, and developing innovative
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <span
                    className="px-4 py-2 rounded-xl text-sm font-medium flex items-center"
                    style={{
                      backgroundColor: COLORS.primary,
                      color: COLORS.white,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 31m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    Innovative Creator
                  </span>

                  <span
                    className="px-4 py-2 rounded-xl text-sm font-medium flex items-center"
                    style={{
                      backgroundColor: COLORS.primary,
                      color: COLORS.white,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Tech Innovator
                  </span>

                  <span
                    className="px-4 py-2 rounded-xl text-sm font-medium flex items-center"
                    style={{
                      backgroundColor: COLORS.primary,
                      color: COLORS.white,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Software Developer
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Education Steps Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
              ref={ref}
            >
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: COLORS.cardBg,
                }}
              >
                <div className="flex items-center mb-6 justify-end">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: COLORS.primary }}
                  >
                    Education Journey
                  </h3>
                </div>

                <div className="space-y-8 relative">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="space-y-8"
                  >
                    {educationData.map((item, index) => {
                      const scale = 0.8 + index * 0.1;
                      const scaleOffset = (1 - scale) * 400;

                      return (
                        <motion.div
                          key={item.id}
                          className="flex items-center z-10 relative"
                          variants={stepVariants}
                          custom={index}
                          style={{
                            marginLeft: `${
                              (educationData.length - 1 - index) * 40
                            }px`,
                            marginRight: "0",
                          }}
                        >
                          <div
                            className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                            style={{
                              backgroundColor: COLORS.primary,
                              border: `2px solid ${COLORS.white}`,
                              marginRight: "16px",
                              position: "relative",
                              left: `${scaleOffset}px`,
                              zIndex: 15,
                            }}
                          >
                            <div style={{ color: COLORS.white }}>
                              {item.icon}
                            </div>
                          </div>
                          <div
                            className="p-4 rounded-xl flex-1 shadow-md"
                            style={{
                              backgroundColor: COLORS.primary,
                              border: `2px solid ${COLORS.white}`,
                              transform: `scale(${scale})`,
                              transformOrigin: "right center",
                              minHeight: "96px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              color: COLORS.white,
                            }}
                          >
                            <h4 className="font-semibold text-lg mb-1">
                              {item.degree}
                            </h4>
                            <p className="mb-2 opacity-90">
                              {item.institution}
                            </p>
                            <div className="flex justify-between items-center">
                              <p className="text-sm opacity-90">
                                {item.period}
                              </p>
                              <p className="text-sm font-semibold">
                                {item.score}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

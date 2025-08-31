import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaDownload,
  FaBriefcase,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaFileDownload,
  FaStar,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "reviews",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Internship", href: "#internship", icon: <FaBriefcase /> },
    { name: "Reviews", href: "#reviews", icon: <FaStar /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
    // Added Reviews item
  ];

  const socialItems = [
    {
      name: "GitHub",
      href: "https://github.com/Sowmya2026",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/beemer-sowmya",
      icon: <FaLinkedin />,
    },
    { name: "Resume", href: "/resume.pdf", icon: <FaFileDownload /> },
  ];

  const StepConnector = ({ isActive, isHovered, index }) => {
    return (
      <div className="relative flex items-center justify-center h-16">
        <div
          className={`absolute w-0.5 h-full ${
            isActive || isHovered ? "bg-[#898AC4]" : "bg-[#C0C9EE]"
          } transition-colors duration-500`}
        />
        <motion.div
          className={`w-3 h-3 rotate-45 ${
            isActive ? "bg-[#898AC4]" : "bg-[#C0C9EE]"
          } z-10 transition-colors duration-500`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        />
        {isHovered && (
          <motion.div
            className="absolute w-3 h-3 rotate-45 bg-[#898AC4] z-20"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    );
  };

  const PentagonalIcon = ({
    icon,
    isActive,
    isHovered,
    name,
    index,
    href,
    isExternal = false,
  }) => {
    const Element = isExternal ? "a" : motion.a;
    const elementProps = isExternal
      ? {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {
          href: `#${name.toLowerCase()}`,
        };

    return (
      <motion.div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setHoveredItem(name.toLowerCase())}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <StepConnector
          isActive={isActive}
          isHovered={isHovered}
          index={index}
        />

        <Element
          {...elementProps}
          className={`relative flex items-center justify-center w-12 h-12 mt-2 cursor-pointer ${
            isActive || isHovered ? "text-white" : "text-[#898AC4]"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            className="absolute inset-0"
          >
            <polygon
              points="50,5 90,35 80,90 20,90 10,35"
              fill={isActive || isHovered ? "#898AC4" : "#C0C9EE"}
              className="transition-colors duration-300"
            />
          </svg>
          <span className="z-10 text-lg">{icon}</span>
        </Element>

        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute -bottom-8 text-xs font-medium text-[#898AC4] whitespace-nowrap"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {name}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Add Plaster font style */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Plaster&display=swap');
        .plaster-regular {
          font-family: "Plaster", system-ui;
          font-weight: 400;
          font-style: normal;
          background: linear-gradient(45deg, #898AC4, #A2AADB, #C0C9EE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
        }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-4">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute top-4 right-6">
            <div className="flex items-center h-20">
              {navItems.map((item, index) => (
                <PentagonalIcon
                  key={item.name}
                  icon={item.icon}
                  isActive={activeSection === item.name.toLowerCase()}
                  isHovered={hoveredItem === item.name.toLowerCase()}
                  name={item.name}
                  index={index}
                />
              ))}
            </div>

            <div className="flex items-center h-20 ml-18">
              {socialItems.map((item, index) => (
                <PentagonalIcon
                  key={item.name}
                  icon={item.icon}
                  isActive={false}
                  isHovered={hoveredItem === item.name.toLowerCase()}
                  name={item.name}
                  index={index + navItems.length}
                  href={item.href}
                  isExternal={true}
                />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none p-2 rounded-full hover:bg-[#C0C9EE]/20"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#898AC4] font-medium transition-colors flex items-center gap-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#898AC4]">{item.icon}</span>
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                {socialItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#898AC4] transition-colors p-2 rounded-full hover:bg-[#C0C9EE]/20 flex flex-col items-center"
                  >
                    {item.icon}
                    <span className="text-xs mt-1">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const initialAngleRef = useRef(0);
  const initialRotationRef = useRef(0);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    // Reset animation after 1 second
    setTimeout(() => {
      setIsButtonClicked(false);
      // Navigate to projects section
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  // Handle mouse events for rotation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate current angle
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const currentAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Calculate rotation based on initial angle difference
      const rotationDelta = currentAngle - initialAngleRef.current;
      setRotation(initialRotationRef.current + rotationDelta);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "default";
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "default";
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault();

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate initial angle
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    initialAngleRef.current = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    initialRotationRef.current = rotation;

    setIsDragging(true);
  };

  const handleMouseEnter = () => {
    if (!isDragging) {
      document.body.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      document.body.style.cursor = "default";
    }
  };

  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 md:px-8 bg-gradient-to-br from-white to-[#C0C9EE] dark:bg-gradient-to-br dark:from-[#1a1f37] dark:to-[#0d1220]"
>
      {/* Add custom font styles */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap');
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
        }
        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }
        .hero-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }
        
        /* Arrow button styles */
        .arrow-btn {
          position: relative;
          height: 60px;
          width: 220px;
          background: linear-gradient(135deg, #898AC4 0%, #A2AADB 100%);
          clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
          transition: all 0.3s ease;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 500;
        }
        
        .arrow-btn:hover:not(.btn-moving) {
          background: linear-gradient(135deg, #A2AADB 0%, #898AC4 100%);
          box-shadow: 0 10px 20px rgba(137, 138, 196, 0.4);
          transform: translateY(-2px);
        }
        
        .arrow-btn:active {
          transform: translateY(1px);
        }
        
        .btn-moving {
          animation: moveForward 1s forwards;
        }
        
        @keyframes moveForward {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          70% {
            transform: translateX(600px);
            opacity: 0.8;
          }
          100% {
            transform: translateX(800px);
            opacity: 0;
          }
        }
        
        .arrow-btn-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
        }
        
        /* Oversized rectangle container */
        .rectangle-container {
          position: absolute;
          bottom: -60px;
          right: -20px;
          width: 220px;
          height: 260px;
          z-index: 25;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
          transform-origin: top left;
          transition: transform 0.05s ease-out;
        }
        
        /* Main rectangle */
        .main-rectangle {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        
        .dark .main-rectangle {
          background: rgba(30, 30, 50, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Pin holder at top left - matching circle colors */
        .pin-holder {
          position: absolute;
          top: -15px;
          left: -15px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #A2AADB 0%, #898AC4 100%);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
          z-index: 30;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .pin-hole {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
        }
        
        /* Pin shadow effect */
        .pin-shadow {
          position: absolute;
          top: -12px;
          left: -12px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.1);
          filter: blur(3px);
          z-index: 29;
        }
        
        /* U-shaped window inside rectangle */
        .u-window {
          width: 180px;
          height: 200px;
          background: rgba(137, 138, 196, 0.1);
          border-radius: 90px 90px 0 0;
          border: 4px solid rgba(137, 138, 196, 0.7);
          backdrop-filter: blur(5px);
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          box-shadow: inset 0 0 20px rgba(137, 138, 196, 0.7),
                      0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .dark .u-window {
          border: 4px solid rgba(162, 170, 219, 0.5);
          box-shadow: inset 0 0 20px rgba(162, 170, 219, 0.5),
                      0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Profile image inside U-shape (without circle) */
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          border-radius: 90px 90px 0 0;
        }
        
        /* Reflection effect inside U-shape */
        .u-reflection {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.7), transparent);
          border-radius: 90px 90px 0 0;
          pointer-events: none;
        }
        
        .dark .u-reflection {
          background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
        }
        
        /* Decorative elements for rectangle */
        .rectangle-decoration {
          position: absolute;
          background: rgba(137, 138, 196, 0.1);
          border-radius: 50%;
        }
        
        /* Corner accents */
        .corner-accent {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(137, 138, 196, 0.7);
        }
        
        .corner-top-left {
          top: 10px;
          left: 10px;
          border-right: none;
          border-bottom: none;
          border-radius: 8px 0 0 0;
        }
        
        .corner-top-right {
          top: 10px;
          right: 10px;
          border-left: none;
          border-bottom: none;
          border-radius: 0 8px 0 0;
        }
        
        .corner-bottom-left {
          bottom: 10px;
          left: 10px;
          border-right: none;
          border-top: none;
          border-radius: 0 0 0 8px;
        }
        
        .corner-bottom-right {
          bottom: 10px;
          right: 10px;
          border-left: none;
          border-top: none;
          border-radius: 0 0 8px 0;
        }
        
        /* Floating elements around rectangle */
        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          z-index: 20;
          animation: floatAround 10s ease-in-out infinite;
        }
        
        @keyframes floatAround {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(5px, -8px);
          }
          50% {
            transform: translate(-5px, 5px);
          }
          75% {
            transform: translate(8px, 5px);
          }
        }
        
        /* Pin holders for circular element */
        .circle-pin-holder {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #A2AADB 0%, #898AC4 100%);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          z-index: 15;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .circle-pin-hole {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
        }
        
        .circle-pin-shadow {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.1);
          filter: blur(2px);
          z-index: 14;
        }

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

      <div className="absolute top-10 left-12 plaster-regular text-2xl md:text-3xl pt-[28px] px-[135px]">
        DigitalSowmya.dev
      </div>

      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        {/* Content moved to right side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="md:w-1/2 text-center md:text-right mb-12 md:mb-0 md:pl-12"
        >
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-[#898AC4] dark:text-[#A2AADB] font-medium mb-2 hero-text"
          >
            Hello, I am
          </motion.p>

          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold text-[#898AC4] dark:text-[#A2AADB] mb-4 hero-title"
          >
            Beemer Sowmya
          </motion.h1>

          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-5xl font-bold text-[#A2AADB] dark:text-[#898AC4] mb-6 hero-subtitle"
          >
            <span className="inline-block">Digital Creator</span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 hero-text"
          >
            Crafting exceptional digital experiences with innovative solutions.
            I blend creativity with technology to build visually stunning and
            functionally robust applications that make a difference.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end"
          >
            {/* Advanced Arrow-shaped button */}
            <motion.button
              onClick={handleButtonClick}
              className={`arrow-btn hero-text group ${
                isButtonClicked ? "btn-moving" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isDragging || isButtonClicked}
            >
              {/* Button content */}
              <span
                className={`relative z-10 ${
                  isButtonClicked ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              >
                Explore My Work
              </span>

              {/* Hover particles effect */}
              <div className="arrow-btn-particles">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${3 + i}px`,
                      height: `${3 + i}px`,
                      top: `${20 + i * 10}%`,
                      left: `${10 + i * 15}%`,
                      opacity: 0,
                      transition: "all 0.5s ease",
                    }}
                  />
                ))}
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Circular design with U-shaped window in rectangle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:w-2/5 flex justify-center relative"
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96"
            variants={floatingAnimation}
            animate="animate"
          >
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-[#A2AADB] border-dashed dark:border-[#898AC4]"
              variants={rotateAnimation}
              animate="animate"
            />

            {/* Middle ring */}
            <div className="absolute inset-4 rounded-full border-2 border-[#C0C9EE] opacity-70 dark:border-[#A2AADB]" />

            {/* Main circle */}
            <div className="absolute inset-8 bg-gradient-to-br from-[#A2AADB] to-[#898AC4] dark:from-[#898AC4] dark:to-[#A2AADB] rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

              {/* Decorative element in center */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20"></div>
              </div>
            </div>

            {/* Pin holders for circular element - positioned inside the circle */}
            <div
              className="circle-pin-shadow"
              style={{ top: "50px", left: "50px" }}
            ></div>
            <div
              className="circle-pin-holder"
              style={{ top: "50px", left: "50px" }}
            >
              <div className="circle-pin-hole"></div>
            </div>

            <div
              className="circle-pin-shadow"
              style={{ top: "50px", right: "50px" }}
            ></div>
            <div
              className="circle-pin-holder"
              style={{ top: "50px", right: "50px" }}
            >
              <div className="circle-pin-hole"></div>
            </div>

            <div
              className="circle-pin-shadow"
              style={{ bottom: "50px", right: "50px" }}
            ></div>
            <div
              className="circle-pin-holder"
              style={{ bottom: "50px", right: "50px" }}
            >
              <div className="circle-pin-hole"></div>
            </div>

            {/* Oversized rectangle with U-shaped window */}
            <div
              className="rectangle-container"
              ref={containerRef}
              style={{ transform: `rotate(${rotation}deg)` }}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="pin-shadow"></div>
              <div className="pin-holder">
                <div className="pin-hole"></div>
              </div>

              <div className="main-rectangle">
                {/* Corner accents */}
                <div className="corner-accent corner-top-left"></div>
                <div className="corner-accent corner-top-right"></div>
                <div className="corner-accent corner-bottom-left"></div>
                <div className="corner-accent corner-bottom-right"></div>

                {/* U-shaped window with profile image (no circle) */}
                <div className="u-window">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="Profile"
                    className="profile-img"
                  />
                  <div className="u-reflection"></div>
                </div>

                {/* Floating elements */}
                <div
                  className="floating-element"
                  style={{
                    top: "15px",
                    left: "20px",
                    width: "8px",
                    height: "8px",
                    animationDelay: "0s",
                  }}
                ></div>
                <div
                  className="floating-element"
                  style={{
                    bottom: "25px",
                    right: "15px",
                    width: "6px",
                    height: "6px",
                    animationDelay: "1.5s",
                  }}
                ></div>
                <div
                  className="floating-element"
                  style={{
                    top: "40px",
                    right: "30px",
                    width: "10px",
                    height: "10px",
                    animationDelay: "3s",
                  }}
                ></div>
              </div>

              {/* Decorative elements around rectangle */}
              <div
                className="rectangle-decoration"
                style={{
                  top: "-5px",
                  right: "25px",
                  width: "12px",
                  height: "12px",
                }}
              ></div>
              <div
                className="rectangle-decoration"
                style={{
                  bottom: "15px",
                  left: "-8px",
                  width: "8px",
                  height: "8px",
                }}
              ></div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/40 dark:bg-[#898AC4]/40"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />

            <motion.div
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#A2AADB]/30 dark:bg-[#C0C9EE]/30"
              animate={{
                y: [0, -15, 0],
                x: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute top-1/3 -right-2 w-10 h-10 rounded-full bg-white/50 dark:bg-[#1a1f37]/50"
              animate={{
                y: [0, -12, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
            />

            <motion.div
              className="absolute bottom-8 -left-2 w-6 h-6 rounded-full bg-white/40 dark:bg-[#898AC4]/40"
              animate={{
                y: [0, -8, 0],
                x: [0, 4, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

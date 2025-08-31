import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import ReviewsPage from "./components/ReviewsPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check system preference or saved theme
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme("system");
      applyTheme(systemDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  const applyTheme = (selectedTheme) => {
    if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (selectedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // System theme - follow OS preference
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const toggleTheme = () => {
    let newTheme;

    // Cycle through themes: light -> dark -> system -> light
    if (theme === "light") {
      newTheme = "dark";
    } else if (theme === "dark") {
      newTheme = "system";
    } else {
      newTheme = "light";
    }

    // Apply changes
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  // Don't render theme toggle until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <div className="max-w-[100vw] overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internship />
          <ReviewsPage />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <div className="max-w-[100vw] overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <ReviewsPage />
        <Contact />
        <Footer />
      </div>

      {/* Modern theme toggle switch with custom colors */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{
            background:
              theme === "light"
                ? "linear-gradient(135deg, #C0C9EE 0%, #A2AADB 100%)"
                : theme === "dark"
                ? "linear-gradient(135deg, #898AC4 0%, #A2AADB 100%)"
                : "linear-gradient(135deg, #C0C9EE 0%, #898AC4 100%)",
          }}
          aria-label="Toggle theme"
        >
          <div className="relative w-6 h-6">
            {/* Sun icon for light theme */}
            <svg
              className={`absolute inset-0 transition-all duration-300 ${
                theme === "light"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
              fill="white"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>

            {/* Moon icon for dark theme */}
            <svg
              className={`absolute inset-0 transition-all duration-300 ${
                theme === "dark"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
              fill="white"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>

            {/* System icon for system theme */}
            <svg
              className={`absolute inset-0 transition-all duration-300 ${
                theme === "system"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
              fill="white"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>

        {/* Tooltip showing current theme */}
        <div
          className="absolute right-16 bottom-2 text-xs px-2 py-1 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            backgroundColor: theme === "light" ? "#898AC4" : "#A2AADB",
            color: "white",
          }}
        >
          {theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System"}{" "}
          theme
        </div>
      </div>
    </div>
  );
}

export default App;

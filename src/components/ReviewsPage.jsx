/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGraduationCap, FaHeart } from "react-icons/fa";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
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
  };

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = localStorage.getItem("userReviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userReviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!newReview.name.trim() || !newReview.text.trim()) {
      setSubmitMessage("Please fill in all fields");
      setTimeout(() => setSubmitMessage(""), 3000);
      return;
    }

    setIsSubmitting(true);

    const review = {
      id: Date.now(),
      name: newReview.name,
      text: newReview.text,
      date: new Date().toLocaleDateString(),
    };

    // Simulate API call
    setTimeout(() => {
      setReviews([review, ...reviews]);
      setNewReview({
        name: "",
        text: "",
      });
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your review!");
      setTimeout(() => setSubmitMessage(""), 3000);
    }, 1000);
  };

  return (
    <div
      id="reviews"
      className="min-h-screen py-12 px-4 md:px-8 bg-white dark:bg-[#0d1220] transition-colors duration-300"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-left mb-[16px] pt-[44px] px-[69px]"
          style={{ color: COLORS.primary }}
        >
          Portfolio Reviews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-9 text-lg"
          style={{ color: COLORS.primary }}
        ></motion.p>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Side - 3/4 for submitting a review with cute card design */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-3/4"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden transition-colors duration-300"
              style={{
                border: `3px solid ${COLORS.light}`,
                background: isDark
                  ? "linear-gradient(145deg, #1a1f37 0%, #0d1220 100%)"
                  : "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
              }}
            >
              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: COLORS.primary }}
              ></div>
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-15"
                style={{ backgroundColor: COLORS.primary }}
              ></div>

              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md"
                  style={{ backgroundColor: COLORS.light }}
                >
                  <FaGraduationCap style={{ color: COLORS.primary }} />
                </div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  Student Portfolio Feedback
                </h2>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: COLORS.primary }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-offset-1 focus:border-transparent transition-all duration-300 outline-none"
                    style={{
                      border: `2px solid ${COLORS.secondary}`,
                      backgroundColor: isDark
                        ? "#2D3748"
                        : "rgba(255, 255, 255, 0.8)",
                      color: COLORS.primary,
                    }}
                    placeholder="What should I call you?"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: COLORS.primary }}
                  >
                    Your Feedback
                  </label>
                  <textarea
                    name="text"
                    value={newReview.text}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{
                      border: `2px solid ${COLORS.secondary}`,
                      backgroundColor: isDark
                        ? "#2D3748"
                        : "rgba(255, 255, 255, 0.8)",
                      color: COLORS.primary,
                    }}
                    placeholder="What are your thoughts on my portfolio and projects?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    backgroundColor: COLORS.primary,
                    color: "white",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                      Share Feedback
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div
                    className="p-3 rounded-lg text-center mt-3 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: `${COLORS.light}50`,
                      color: COLORS.primary,
                    }}
                  >
                    <FaHeart className="text-pink-500" />
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Additional cute info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-6 rounded-2xl shadow-md flex items-start gap-4 transition-colors duration-300"
              style={{
                backgroundColor: COLORS.light,
                border: `2px dashed ${COLORS.primary}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: isDark
                    ? "#2D3748"
                    : "rgba(255, 255, 255, 0.7)",
                }}
              >
                <span style={{ color: COLORS.primary }}>💡</span>
              </div>
              <div>
                <h3
                  className="font-bold mb-1"
                  style={{ color: COLORS.primary }}
                >
                  Feedback Tips
                </h3>
                <p className="text-sm" style={{ color: COLORS.primary }}>
                  Share what you liked, suggestions for improvement, or ideas
                  for new projects!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 1/4 for vertical scrolling reviews with animation lines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full lg:w-1/4 relative"
            style={{ height: "600px" }}
          >
            {/* Animated vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ backgroundColor: COLORS.primary }}
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* Animated dots moving along the line */}
              <motion.div
                className="absolute w-3 h-3 rounded-full left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: COLORS.primary }}
                animate={{
                  top: ["0%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              />
            </div>

            {/* Reviews container with scroll effect */}
            <div className="relative h-full overflow-hidden pl-12">
              {reviews.length > 0 ? (
                <motion.div
                  className="space-y-8"
                  animate={{ y: [0, -600] }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                  }}
                >
                  {reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-lg relative transition-colors duration-300"
                      style={{
                        backgroundColor: COLORS.primary,
                        color: "white",
                        border: `2px solid ${COLORS.secondary}`,
                      }}
                    >
                      {/* Connector line to the main vertical line */}
                      <div
                        className="absolute w-8 h-0.5 left-0 top-1/2 transform -translate-y-1/2 -translate-x-full"
                        style={{ backgroundColor: COLORS.primary }}
                      ></div>

                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white">{review.name}</h4>
                      </div>
                      <p className="text-sm text-white">"{review.text}"</p>
                      <p className="text-xs text-right mt-2 text-white opacity-75">
                        {review.date}
                      </p>
                    </motion.div>
                  ))}

                  {/* Duplicate set for seamless scrolling */}
                  {reviews.map((review) => (
                    <motion.div
                      key={`duplicate-${review.id}`}
                      className="p-4 rounded-lg relative transition-colors duration-300"
                      style={{
                        backgroundColor: COLORS.primary,
                        color: "white",
                        border: `2px solid ${COLORS.secondary}`,
                      }}
                    >
                      {/* Connector line to the main vertical line */}
                      <div
                        className="absolute w-8 h-0.5 left-0 top-1/2 transform -translate-y-1/2 -translate-x-full"
                        style={{ backgroundColor: COLORS.primary }}
                      ></div>

                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white">{review.name}</h4>
                      </div>
                      <p className="text-sm text-white">"{review.text}"</p>
                      <p className="text-xs text-right mt-2 text-white opacity-75">
                        {review.date}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p
                    className="text-center italic"
                    style={{ color: COLORS.primary }}
                  >
                    No reviews yet. Be the first to share feedback!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock, FaHeart, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
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
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send message via WhatsApp
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918977424608?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-[#0d1220] transition-colors duration-300">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-left mb-12 pt-[6px] px-[69px]"
          style={{ color: COLORS.primary }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Side - 1/4 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/4 p-6 rounded-2xl shadow-lg flex flex-col justify-center"
            style={{ backgroundColor: COLORS.light }}
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.primary }}>Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3" style={{ color: COLORS.primary }} />
                  <span style={{ color: COLORS.primary }}>Hyderabad, India</span>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="mt-1 mr-3" style={{ color: COLORS.primary }} />
                  <span style={{ color: COLORS.primary }}>+91 8977424608</span>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="mt-1 mr-3" style={{ color: COLORS.primary }} />
                  <span style={{ color: COLORS.primary }}>Mon-Fri: 9AM - 5PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.primary }}>Let's Connect</h3>
              <p className="mb-6" style={{ color: COLORS.primary }}>
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out using the form.
              </p>
              
              <div className="flex flex-col space-y-4">
                <motion.a 
                  href="mailto:sowmyamudhiraj64@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center py-3 px-6 rounded-lg font-medium gap-2 transition-colors"
                  style={{ 
                    backgroundColor: COLORS.primary,
                    color: 'white'
                  }}
                >
                  <FaEnvelope /> Email Directly
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - 3/4 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-3/4 p-8 rounded-2xl shadow-lg relative overflow-hidden flex items-center"
            style={{ backgroundColor: COLORS.light }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: COLORS.primary }}></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: COLORS.primary }}></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 w-full">
              {/* Animation Path Container - Centered with equal padding */}
              <div className="w-full md:w-2/5 flex flex-col items-center justify-center relative py-8">
                {/* Starting point - Receive Icon (BOTTOM) */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5
                  }}
                  className="z-10 mb-4"
                >
                  <FaCheckCircle 
                    size={30} 
                    style={{ color: COLORS.primary }} 
                  />
                </motion.div>
                
                {/* Space between receive icon and first set of dots */}
                <div className="h-4"></div>
                
                {/* First set of animated dots between receive and whatsapp icons */}
                <div className="relative h-16 w-2">
                  {/* Animated dots moving upward (from receive to whatsapp) */}
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      delay: 0.5,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      delay: 1,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      delay: 1.5,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                </div>
                
                {/* Space between first dots and whatsapp icon */}
                <div className="h-4"></div>
                
                {/* Middle point - WhatsApp Icon (MIDDLE) - Large size */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2
                  }}
                  className="my-4 z-10"
                >
                  <FaWhatsapp 
                    size={80}
                    style={{ color: COLORS.primary }} 
                  />
                </motion.div>
                
                {/* Space between whatsapp icon and second set of dots */}
                <div className="h-4"></div>
                
                {/* Second set of animated dots between whatsapp and send icons */}
                <div className="relative h-16 w-2">
                  {/* Animated dots moving upward (from whatsapp to send) */}
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      delay: 0.5,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                     Infinity,
                      duration: 2,
                      delay: 1,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 64],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      delay: 1.5,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                </div>
                
                {/* Space between second dots and send icon */}
                <div className="h-4"></div>
                
                {/* End point - Send Icon (TOP) */}
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5
                  }}
                  className="mt-4 z-10"
                >
                  <FaPaperPlane 
                    size={30} 
                    style={{ color: COLORS.primary }} 
                  />
                </motion.div>
              </div>
              
              {/* Contact Form - Compact Design */}
              <div className="w-full md:w-3/5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-md relative overflow-hidden mx-auto"
                  style={{ 
                    backgroundColor: COLORS.cardBg,
                    maxWidth: '400px'
                  }}
                >
                  {/* Form header with decorative elements */}
                  <div className="text-center mb-6 relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="absolute -top-2 -right-2"
                    >
                      <FaHeart 
                        size={20} 
                        style={{ color: COLORS.primary }} 
                        className="opacity-50"
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold" style={{ color: COLORS.primary }}>
                      Send a Message
                    </h3>
                    <div className="w-16 h-1 mx-auto mt-2 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="relative"
                    >
                      <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: COLORS.primary }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                        style={{ 
                          border: `2px solid ${COLORS.secondary}`,
                          backgroundColor: isDark ? '#2D3748' : 'rgba(255, 255, 255, 0.7)',
                          color: COLORS.primary
                        }}
                        placeholder="What should I call you?"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                      className="relative"
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: COLORS.primary }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                        style={{ 
                          border: `2px solid ${COLORS.secondary}`,
                          backgroundColor: isDark ? '#2D3748' : 'rgba(255, 255, 255, 0.7)',
                          color: COLORS.primary
                        }}
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                      className="relative"
                    >
                      <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: COLORS.primary }}>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                        style={{ 
                          border: `2px solid ${COLORS.secondary}`,
                          backgroundColor: isDark ? '#2D3748' : 'rgba(255, 255, 255, 0.7)',
                          color: COLORS.primary
                        }}
                        placeholder="What would you like to talk about?"
                      ></textarea>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="pt-2"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300 relative overflow-hidden"
                        style={{ 
                          backgroundColor: COLORS.primary,
                          color: 'white'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = COLORS.secondary;
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = COLORS.primary;
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 rounded-full border-2 border-t-transparent"
                              style={{ borderColor: 'white' }}
                            ></motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane /> 
                            <span>Send via WhatsApp</span>
                            <motion.div 
                              className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300"
                              style={{ backgroundColor: 'white' }}
                            ></motion.div>
                          </>
                        )}
                      </button>
                    </motion.div>
                    
                    {submitMessage && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-3 rounded-lg text-center mt-3 flex items-center justify-center gap-2 text-sm"
                        style={{ 
                          backgroundColor: `${COLORS.secondary}30`,
                          color: COLORS.primary
                        }}
                      >
                        <FaHeart className="text-pink-500" />
                        {submitMessage}
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <div className="card">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Education</h3>
      
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div 
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full"
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
              <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{edu.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
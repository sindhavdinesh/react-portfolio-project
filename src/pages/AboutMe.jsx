import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/about/About';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <About />
    </motion.div>
  );
};

export default AboutMe;
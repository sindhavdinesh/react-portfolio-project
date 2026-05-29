import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero/Hero';

const Preview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
};

export default Preview;
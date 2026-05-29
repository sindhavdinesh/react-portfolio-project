import React from 'react';
import { motion } from 'framer-motion';

const SubHeading = ({ children, center = true }) => {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        fontSize: '1.5rem',
        color: '#00f3ff',
        textAlign: center ? 'center' : 'left',
        marginBottom: '1rem'
      }}
    >
      {children}
    </motion.h3>
  );
};

export default SubHeading;
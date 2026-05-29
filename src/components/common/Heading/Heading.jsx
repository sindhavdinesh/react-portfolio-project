import React from 'react';
import { motion } from 'framer-motion';

const Heading = ({ title, subtitle, center = true, gradient = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{ textAlign: center ? 'center' : 'left', marginBottom: '3rem' }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: subtitle ? '1rem' : 0,
          background: gradient ? 'linear-gradient(135deg, #00f3ff, #ff00e4)' : 'none',
          WebkitBackgroundClip: gradient ? 'text' : 'none',
          backgroundClip: gradient ? 'text' : 'none',
          color: gradient ? 'transparent' : 'white'
        }}
      >
        {title}
      </h2>
      {subtitle && <p style={{ color: '#a0a0c0', fontSize: '1.1rem' }}>{subtitle}</p>}
    </motion.div>
  );
};

export default Heading;
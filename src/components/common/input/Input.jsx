import React from 'react';
import { motion } from 'framer-motion';

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  error
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      style={{ marginBottom: '1.5rem' }}
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '1rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: error ? '2px solid #ff4757' : '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 10,
          color: 'white',
          fontSize: '1rem',
          transition: 'all 0.3s'
        }}
      />
      {error && <p style={{ color: '#ff4757', fontSize: '0.8rem', marginTop: '0.5rem' }}>{error}</p>}
    </motion.div>
  );
};

export default Input;
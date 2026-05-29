import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = ''
}) => {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #00f3ff, #7000ff)',
      color: 'white',
      border: 'none'
    },
    secondary: {
      background: 'linear-gradient(135deg, #ff00e4, #7000ff)',
      color: 'white',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: '#00f3ff',
      border: '2px solid #00f3ff'
    }
  };

  const sizes = {
    small: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    large: { padding: '1rem 2rem', fontSize: '1.125rem' }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: 50,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.3s'
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default Button;
import React from 'react';
import { motion } from 'framer-motion';

const ButtonOutline = ({ children, onClick, href, target }) => {
  const buttonStyle = {
    padding: '0.8rem 2rem',
    background: 'transparent',
    border: '2px solid #00f3ff',
    borderRadius: 50,
    color: '#00f3ff',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s'
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={buttonStyle}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {buttonContent}
      </a>
    );
  }

  return <button onClick={onClick} style={buttonStyle}>{children}</button>;
};

export default ButtonOutline;
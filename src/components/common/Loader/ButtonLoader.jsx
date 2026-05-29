import React from 'react';
import './ButtonLoader.css';

const ButtonLoader = ({ text, loading }) => {
  return (
    <div className="button-loader">
      {loading ? (
        <>
          <span className="spinner"></span>
          <span>Loading...</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default ButtonLoader;
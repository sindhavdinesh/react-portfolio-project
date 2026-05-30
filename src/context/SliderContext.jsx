import React, { createContext, useState, useContext } from 'react';

export const SliderContext = createContext(null);

export const SliderProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <SliderContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        direction,
        setDirection,
        nextSlide,
        prevSlide
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('useSlider must be used within SliderProvider');
  }
  return context;
};

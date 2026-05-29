import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlider } from '../../context/slider';

const SliderTransition = ({ children, slideIndex }) => {
  const { direction } = useSlider();

  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SliderTransition;

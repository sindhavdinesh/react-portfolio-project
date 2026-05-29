import React from 'react';
import { motion } from 'framer-motion';
import MediaLibrary from '../components/media/MediaLibrary';

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MediaLibrary />
    </motion.div>
  );
};

export default GalleryPage;

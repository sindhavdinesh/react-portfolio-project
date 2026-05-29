import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { mediaLibraryData, mediaCategories } from '../../data/mediaLibrary';
import MediaCard from './MediaCard';
import styles from './MediaLibrary.module.css';

const MediaLibrary = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = mediaLibraryData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photo' || activeFilter === 'video') {
      return item.type === activeFilter;
    }
    return item.category === activeFilter;
  });

  const openItem = useCallback((item) => {
    const index = filteredItems.findIndex((m) => m.id === item.id);
    setSelectedIndex(index >= 0 ? index : 0);
    setSelected(item);
  }, [filteredItems]);

  const closeLightbox = () => setSelected(null);

  const goTo = useCallback((direction) => {
    if (filteredItems.length === 0) return;
    const nextIndex =
      direction === 'next'
        ? (selectedIndex + 1) % filteredItems.length
        : (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIndex(nextIndex);
    setSelected(filteredItems[nextIndex]);
  }, [filteredItems, selectedIndex]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goTo('next');
      if (e.key === 'ArrowLeft') goTo('prev');
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected, goTo]);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Photo & <span className={styles.gradientText}>Video Library</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A curated collection of my photos, event highlights, and developer videos. Explore moments captured in time and insights into my work.
        </motion.p>

        <motion.p
          className={styles.hint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Sindhav Dinesh — photos, events & developer videos. My real photos and work videos are available in the{' '}<span className={styles.gradientText}>Photo</span> and <span className={styles.gradientText}>Video</span> categories. The <span className={styles.gradientText}>All</span> category includes everything.
        </motion.p>

        <div className={styles.filters}>
          {mediaCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          className={styles.grid}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredItems.length === 0 ? (
            <p className={styles.empty}>Is category mein abhi koi item nahi hai.</p>
          ) : (
            filteredItems.map((item, index) => (
              <MediaCard key={item.id} item={item} index={index} onOpen={openItem} />
            ))
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeLightbox}
                aria-label="Close"
              >
                <FaTimes />
              </button>

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${styles.navPrev}`}
                    onClick={() => goTo('prev')}
                    aria-label="Previous"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${styles.navNext}`}
                    onClick={() => goTo('next')}
                    aria-label="Next"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}

              {selected.type === 'photo' ? (
                <img
                  className={styles.lightboxMedia}
                  src={selected.src}
                  alt={selected.title}
                />
              ) : (
                <video
                  className={styles.lightboxVideo}
                  src={selected.src}
                  controls
                  autoPlay
                  poster={selected.thumbnail}
                >
                  <track kind="captions" />
                </video>
              )}

              <div className={styles.lightboxInfo}>
                <h2 className={styles.lightboxTitle}>{selected.title}</h2>
                {selected.description && (
                  <p className={styles.lightboxDesc}>{selected.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediaLibrary;

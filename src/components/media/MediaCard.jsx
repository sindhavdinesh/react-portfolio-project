import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaImage, FaVideo } from 'react-icons/fa';
import styles from './MediaLibrary.module.css';

const MediaCard = ({ item, index, onOpen }) => {
  const [imgError, setImgError] = useState(false);
  const thumbSrc = item.type === 'video' ? (item.thumbnail ?? item.src) : item.src;

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}
      aria-label={`Open ${item.title}`}
    >
      {!imgError ? (
        <img
          className={styles.cardMedia}
          src={thumbSrc}
          alt={item.title}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className={styles.cardMedia}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 243, 255, 0.08)',
            color: '#a0a0c0',
            fontSize: '0.85rem',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          {item.type === 'video' ? 'Video' : 'Photo'} — file add karo
        </div>
      )}

      {item.type === 'video' && (
        <span className={styles.playIcon} aria-hidden>
          <FaPlay />
        </span>
      )}

      <span
        className={`${styles.badge} ${item.type === 'photo' ? styles.badgePhoto : styles.badgeVideo}`}
      >
        {item.type === 'photo' ? 'Photo' : 'Video'}
      </span>

      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <div className={styles.cardMeta}>
          {item.type === 'photo' ? <FaImage /> : <FaVideo />}
          {item.category && <span>{item.category}</span>}
          {item.date && <span>{item.date}</span>}
        </div>
      </div>
    </motion.article>
  );
};

export default MediaCard;

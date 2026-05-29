import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { creativeCompanions } from '../../data/data';
import styles from './CreativeCompanions.module.css';

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const CompanionCard = ({ companion, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.cardVisual}>
        <div className={styles.photoStage}>
          <div className={styles.imageWrapper}>
            <span className={styles.imageGlow} aria-hidden />
            <span className={styles.imageRing} aria-hidden />
            {!imgError ? (
              <img
                src={companion.image}
                alt={companion.name}
                className={styles.photo}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={styles.photoFallback} aria-hidden>
                {getInitials(companion.name)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.name}>{companion.name}</h3>
        <p className={styles.role}>{companion.role}</p>
        <p className={styles.bio}>{companion.bio}</p>
        <a
          href={companion.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinBtn}
          aria-label={`${companion.name} on LinkedIn`}
        >
          <FaLinkedin aria-hidden />
          LinkedIn Profile
        </a>
      </div>
    </motion.article>
  );
};

const CreativeCompanions = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>
          My <span className={styles.gradient}>Creative Companions</span>
        </h2>
        <p className={styles.subtitle}>
          Two amazing friends I collaborate and grow with — connect with them on LinkedIn.
        </p>
      </div>

      <div className={styles.grid}>
        {creativeCompanions.map((companion, index) => (
          <CompanionCard key={companion.id} companion={companion} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default CreativeCompanions;

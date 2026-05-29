import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, aboutContent } from '../../data/data';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  const scrollRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(aboutContent.image);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const cardOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const cardX = useTransform(scrollYProgress, [0.15, 0.55], [48, 0]);
  const cardScale = useTransform(scrollYProgress, [0.15, 0.55], [0.96, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.92]);
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleImageError = () => {
    if (imgSrc !== '/portfolio.png') {
      setImgSrc('/portfolio.png');
    }
  };

  return (
    <section ref={scrollRef} className={styles.scrollStage} aria-label="About introduction">
      <div className={styles.stickyWrap}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.circuitBg} aria-hidden>
            <svg className={styles.circuitSvg} viewBox="0 0 400 400" fill="none">
              <path d="M40 80 H120 V140 H200" stroke="currentColor" strokeWidth="1" />
              <path d="M360 120 H280 V200 H160" stroke="currentColor" strokeWidth="1" />
              <circle cx="120" cy="140" r="4" fill="currentColor" />
              <circle cx="280" cy="200" r="4" fill="currentColor" />
            </svg>
          </div>

          <motion.div className={styles.visualCol} style={{ scale: imageScale }}>
            <span className={styles.glowPurple} aria-hidden />
            <span className={styles.glowCyan} aria-hidden />
            <div className={styles.portraitFrame}>
              <img
                src={imgSrc}
                alt={personalInfo.name}
                className={styles.portrait}
                onError={handleImageError}
                loading="eager"
                decoding="async"
              />
              <motion.div
                className={styles.portraitFade}
                style={{ opacity: fadeOpacity }}
                aria-hidden
              />
            </div>
          </motion.div>

          <motion.article
            className={styles.storyCard}
            style={{
              opacity: cardOpacity,
              x: cardX,
              scale: cardScale,
            }}
          >
            <div className={styles.cardShine} aria-hidden />
            <h2 className={styles.cardTitle}>{aboutContent.heading}</h2>
            <div className={styles.cardBody}>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.badge}>{personalInfo.location}</span>
              <span className={styles.badgeAccent}>{personalInfo.title}</span>
            </div>
          </motion.article>

          <motion.p className={styles.scrollHint} style={{ opacity: hintOpacity }}>
            Scroll to read more ↓
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;

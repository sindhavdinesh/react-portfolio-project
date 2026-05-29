import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

const isValidLink = (url) => Boolean(url && url !== '#' && url.trim() !== '');

const ProjectCard = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);

  const showDemo   = isValidLink(project.liveDemo);
  const showGithub = isValidLink(project.github);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
    >
      {project.featured && (
        <div className={styles.featuredBadge}>
          <FaStar /> Featured
        </div>
      )}

      <div className={styles.imageWrap}>
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.imageFallback} aria-hidden>
            <span>{project.title.charAt(0)}</span>
          </div>
        )}

        <div className={styles.overlay}>
          <span className={styles.categoryTag}>{project.category}</span>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.tags}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>

        <div className={styles.btnRow}>
          {showGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGithub}
              aria-label={`GitHub — ${project.title}`}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          ) : (
            <span className={styles.btnDisabled} title="Coming soon">
              <FaGithub />
              <span>GitHub</span>
            </span>
          )}

          {showDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLive}
              aria-label={`Live Demo — ${project.title}`}
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className={styles.btnDisabled} title="Coming soon">
              <FaExternalLinkAlt />
              <span>Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

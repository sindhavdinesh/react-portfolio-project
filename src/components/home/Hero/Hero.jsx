import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../../data/data';
import SkillOrbit from './SkillOrbit';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.badge}>👋 Welcome to my portfolio</div>

          <h1 className={styles.title}>
            Hi, I&apos;m{' '}
            <span className={styles.gradientText}>{personalInfo.name}</span>
          </h1>

          <div className={styles.typedContainer}>
            <TypeAnimation
              sequence={[
                'BCA Student at Vidhyadeep University',
                2000,
                'Learning React & JavaScript',
                2000,
                'Frontend Developer in Training',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={styles.typedText}
            />
          </div>

          <p className={styles.bio}>{personalInfo.bio}</p>

          <div className={styles.buttonGroup}>
            <Link to="/projects" className={styles.primaryBtn}>
              View My Work
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download="Sindhav_Dinesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://github.com/sindhavdinesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-sindhav-41315a362/?skipRedirect=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Sind35407Dinesh" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className={styles.heroVisual}>
            <div className={styles.orbitStage}>
              <SkillOrbit />

              <figure className={styles.imageWrapper}>
                <div className={styles.imageGlow} aria-hidden />
                <div className={styles.imageRing} aria-hidden />
                <img
                  src="/portfolio.png"
                  alt={personalInfo.name}
                  className={styles.profileImg}
                  width={400}
                  height={400}
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

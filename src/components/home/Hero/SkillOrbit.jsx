import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';
import styles from './Hero.module.css';

const skills = [
  {
    id: 'html',
    label: 'HTML',
    Icon: SiHtml5,
    color: '#E34F26',
    position: styles.posHtml,
    delay: 0,
  },
  {
    id: 'css',
    label: 'CSS',
    Icon: SiCss,
    color: '#1572B6',
    position: styles.posCss,
    delay: 0.15,
  },
  {
    id: 'js',
    label: 'JavaScript',
    Icon: SiJavascript,
    color: '#F7DF1E',
    position: styles.posJs,
    delay: 0.3,
  },
  {
    id: 'react',
    label: 'React',
    Icon: SiReact,
    color: '#61DAFB',
    position: styles.posReact,
    delay: 0.45,
  },
  {
    id: 'node',
    label: 'Node.js',
    Icon: SiNodedotjs,
    color: '#339933',
    position: styles.posNode,
    delay: 0.6,
  },
];

const SkillOrbit = () => {
  return (
    <motion.div
      className={styles.skillOrbit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      aria-hidden
    >
      {skills.map(({ id, label, Icon, color, position, delay }) => (
        <motion.div
          key={id}
          className={`${styles.skillBadge} ${position}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 + delay }}
        >
          <motion.div
            className={styles.skillFloat}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + delay * 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className={styles.skillIconWrap} style={{ color }}>
              <Icon aria-hidden />
            </span>
            <span className={styles.srOnly}>{label}</span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillOrbit;

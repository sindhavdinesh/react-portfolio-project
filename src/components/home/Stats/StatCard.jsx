import React from 'react';
import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const StatCard = ({ stat }) => {
  return (
    <motion.div
      className={styles.statCard}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className={styles.statValue}>{stat.value}</div>
      <div className={styles.statLabel}>{stat.label}</div>
    </motion.div>
  );
};

export default StatCard;

import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const VerticalTimeline = ({ items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={styles.timelineItem}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <div className={styles.timelinePeriod}>{item.period}</div>
            <h3>{item.company || item.degree}</h3>
            {item.role && <h4>{item.role}</h4>}
            <p>{item.description}</p>
            {item.technologies && (
              <div className={styles.timelineTech}>
                {item.technologies.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
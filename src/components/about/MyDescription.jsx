import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { FaAward, FaUsers, FaCode, FaRocket } from 'react-icons/fa';
import styles from './About.module.css';

const MyDescription = () => {
  const features = [
    { icon: <FaCode />, title: 'Clean Code', desc: 'Writing readable, well-organized code' },
    { icon: <FaRocket />, title: 'Always Learning', desc: 'Improving through practice and projects' },
    { icon: <FaUsers />, title: 'Team Player', desc: 'Good at working with classmates and peers' },
    { icon: <FaAward />, title: 'Detail Focused', desc: 'Paying attention to small things that matter' },
  ];

  return (
    <div className={styles.description}>
      <p className={styles.bio}>
        I'm <strong>{personalInfo.name}</strong>, a first-year BCA student at Vidhyadeep University.
        I enjoy learning web development and building small projects that I can share with others.
      </p>
      
      <div className={styles.features}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyDescription;
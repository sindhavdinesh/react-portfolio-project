import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '1.5rem',
        borderRadius: 15,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{skill.name}</h3>
          <span style={{ fontSize: '0.8rem', color: '#00f3ff' }}>{skill.yearsOfExperience}+ years</span>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#a0a0c0' }}>
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div style={{ height: 8, background: 'rgba(255, 255, 255, 0.1)', borderRadius: 4, overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.05 }}
            viewport={{ once: true }}
            style={{
              height: '100%',
              background: `linear-gradient(90deg, ${skill.category === 'frontend' ? '#00f3ff' : skill.category === 'backend' ? '#ff00e4' : skill.category === 'database' ? '#7000ff' : '#00ff88'}, ${skill.category === 'frontend' ? '#7000ff' : skill.category === 'backend' ? '#00f3ff' : skill.category === 'database' ? '#ff00e4' : '#00f3ff'})`,
              borderRadius: 4
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
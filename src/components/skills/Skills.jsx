import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData, skillCategories } from '../../data/data';
import SkillCard from './SkillCard';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section style={{ padding: '8rem 0 4rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', background: 'linear-gradient(135deg, #00f3ff, #ff00e4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: '1rem' }}>
            My Skills
          </h2>
          <p style={{ textAlign: 'center', color: '#a0a0c0', marginBottom: '3rem' }}>
            Technologies and tools I work with
          </p>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.8rem 1.5rem',
                background: activeCategory === cat.id ? `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)` : 'rgba(255, 255, 255, 0.05)',
                border: activeCategory === cat.id ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 50,
                color: activeCategory === cat.id ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
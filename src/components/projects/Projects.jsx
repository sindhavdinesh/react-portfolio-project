import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, projectCategories } from '../../data/data';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'featured') return project.featured;
    return project.category === activeCategory;
  });

  return (
    <section style={{ padding: '8rem 0 4rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', background: 'linear-gradient(135deg, #00f3ff, #ff00e4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: '1rem' }}>
            My Projects
          </h2>
          <p style={{ textAlign: 'center', color: '#a0a0c0', marginBottom: '3rem' }}>
            Here are some of my best works
          </p>
        </motion.div>

        <ProjectFilter 
          categories={projectCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#a0a0c0' }}>
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
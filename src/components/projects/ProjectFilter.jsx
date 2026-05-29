import React from 'react';
import styles from './Projects.module.css';

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className={styles.filterBar}>
      <ul className={styles.filterList}>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              type="button"
              className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFilter;

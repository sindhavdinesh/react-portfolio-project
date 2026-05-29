import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero/Hero';
import About from '../components/about/About';
import ProjectsPage from './ProjectsPage';
import SkillsCloud from '../components/skills/SkillsCloud';

import Certificates from '../components/certificates/Certificates';
import ContactPage from './ContactPage';
import styles from './HomePage.module.css';

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash || !SECTION_IDS.includes(hash)) return;

    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className={styles.page}>
      <section id="home" className={styles.section} aria-label="Home">
        <Hero />
      </section>

      <section id="about" className={styles.section} aria-label="About">
        <About embedded />
      </section>

      <section id="projects" className={styles.section} aria-label="Projects">
        <ProjectsPage />
      </section>

      <section id="skills" className={styles.section} aria-label="Skills">
        <SkillsCloud />
      </section>

      <section id="certificates" className={styles.section} aria-label="Certificates">
        <Certificates />
      </section>

      <section id="contact" className={styles.section} aria-label="Contact">
        <ContactPage />
      </section>
    </div>
  );
};

export default HomePage;

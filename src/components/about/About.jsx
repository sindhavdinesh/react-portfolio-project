import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, education } from '../../data/data';
import { FaAward, FaUsers, FaCode, FaRocket } from 'react-icons/fa';
import AboutHero from './AboutHero';
import CreativeCompanions from './CreativeCompanions';
import layout from './AboutLayout.module.css';

const About = ({ embedded = false }) => {
  const features = [
    { icon: <FaCode />, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
    { icon: <FaRocket />, title: 'Fast Performance', desc: 'Optimized for speed and efficiency' },
    { icon: <FaUsers />, title: 'Team Player', desc: 'Excellent collaboration skills' },
    { icon: <FaAward />, title: 'Quality Focus', desc: 'Attention to every detail' },
  ];

  return (
    <section className={`page-shell ${layout.about} ${embedded ? layout.embedded : ''}`}>
      <div className={layout.container}>
        <motion.header
          className={layout.pageHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={layout.pageTitle}>About Me</h1>
          <p className={layout.pageSubtitle}>Get to know me better</p>
        </motion.header>

        <AboutHero />

        <div className={layout.featuresRow}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={layout.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={layout.featureIcon}>{feature.icon}</div>
              <h4 className={layout.featureTitle}>{feature.title}</h4>
              <p className={layout.featureDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className={layout.mainGrid}>
          <motion.div
            className={layout.panel}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={layout.sectionHeading}>Work Experience</h2>
            <div className={layout.timeline}>
              <div className={layout.timelineLineCyan} aria-hidden />
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={layout.timelineItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={layout.timelineDotCyan} aria-hidden />
                  <div className={layout.timelineContent}>
                    <div className={layout.timelinePeriodCyan}>{exp.period}</div>
                    <h3 className={layout.timelineCompany}>{exp.company}</h3>
                    <h4 className={layout.timelineRole}>{exp.role}</h4>
                    <p className={layout.timelineDesc}>{exp.description}</p>
                    <div className={layout.techTags}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className={layout.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={layout.panel}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className={layout.sectionHeadingPink}>Education</h2>
            <div className={layout.timeline}>
              <div className={layout.timelineLinePink} aria-hidden />
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  className={layout.timelineItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={layout.timelineDotPink} aria-hidden />
                  <div className={layout.timelineContent}>
                    <div className={layout.timelinePeriodPink}>{edu.period}</div>
                    <h3 className={layout.timelineCompany}>{edu.degree}</h3>
                    <h4 className={layout.timelineRole}>{edu.institution}</h4>
                    <p className={layout.timelineDesc}>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <CreativeCompanions />
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand, FaAward, FaBriefcase, FaCloud, FaGraduationCap } from 'react-icons/fa';
import styles from './Certificates.module.css';

const certificates = [
  {
    id: 1,
    title: 'Certificate of Participation',
    issuer: 'Red & White Skill Education',
    description: 'TECHWAR 2026 — C Tsunami Programming Competition. Organized by Red & White Skill Education.',
    date: '24-01-2026',
    image: '/images/certificates/cert-redwhite.jpeg',
    badge: 'competition',
    badgeLabel: '🏆 Competition',
  },
  {
    id: 2,
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. via Forage',
    description: 'Completed practical tasks: Project Setup, Kafka Integration, H2 Integration, REST API Integration & REST API Controller.',
    date: 'January 18, 2026',
    image: '/images/certificates/cert-forage-jpmorgan.jpeg',
    badge: 'professional',
    badgeLabel: '💼 Professional',
  },
  {
    id: 3,
    title: 'Solutions Architecture Job Simulation',
    issuer: 'Amazon Web Services (AWS) via Forage',
    description: 'Completed practical tasks: Designing a simple, scalable hosting architecture on AWS.',
    date: 'January 18, 2026',
    image: '/images/certificates/cert-aws-forage.jpeg',
    badge: 'cloud',
    badgeLabel: '☁ Cloud',
  },
  {
    id: 4,
    title: 'Vishisht Siddhi Sanmanpatra',
    issuer: 'B.N.B. High School, Vav',
    description: 'Kanya Kelavani Mahotsav & Shala Praveshotsav 2024–25 — Special Achievement Recognition. Taluka Kamrej, Jillo Surat.',
    date: '2025',
    image: '/images/certificates/cert-hsc.jpeg',
    badge: 'academic',
    badgeLabel: '🎓 Academic',
  },
];

const badgeIcons = {
  competition: <FaAward />,
  professional: <FaBriefcase />,
  cloud: <FaCloud />,
  academic: <FaGraduationCap />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const open = (cert) => {
    setSelected(cert);
  };

  const close = () => {
    setSelected(null);
  };

  React.useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section className={styles.section} id="certificates">
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            My <span className={styles.gradient}>Certificates</span>
          </h2>
          <p className={styles.subtitle}>Achievements, Recognitions & Professional Completions</p>
          <div className={styles.divider} />
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              onClick={() => open(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && open(cert)}
              aria-label={`View ${cert.title}`}
            >
              <div className={styles.imgWrap}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={styles.img}
                  loading="lazy"
                />
                <div className={styles.imgOverlay}>
                  <FaExpand className={styles.expandIcon} />
                </div>
              </div>

              <div className={styles.info}>
                <span className={`${styles.badge} ${styles[cert.badge]}`}>
                  {badgeIcons[cert.badge]}
                  {cert.badgeLabel}
                </span>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                <p className={styles.desc}>{cert.description}</p>
                <div className={styles.footer}>
                  <span className={styles.date}>📅 {cert.date}</span>
                  <button
                    type="button"
                    className={styles.viewBtn}
                    onClick={(e) => { e.stopPropagation(); open(cert); }}
                  >
                    View Full
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={close}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className={styles.lightboxImg}
              />
              <div className={styles.lightboxInfo}>
                <h3 className={styles.lightboxTitle}>{selected.title}</h3>
                <p className={styles.lightboxIssuer}>{selected.issuer} — {selected.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;

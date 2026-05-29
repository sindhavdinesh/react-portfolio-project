import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaGit, FaGithub,
  FaNodeJs, FaReact, FaBootstrap, FaPaintBrush, FaPhotoVideo,
} from 'react-icons/fa';
import {
  SiTypescript, SiCplusplus, SiGooglesheets,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbDeviceMobile, TbCircleLetterCFilled } from 'react-icons/tb';
import styles from './SkillsCloud.module.css';

const skills = [
  { id: 1,  label: 'HTML5',         icon: <FaHtml5 />,               color: '#e34f26', level: 95, category: 'Frontend'  },
  { id: 2,  label: 'CSS3',          icon: <FaCss3Alt />,             color: '#1572b6', level: 90, category: 'Frontend'  },
  { id: 3,  label: 'JavaScript',    icon: <FaJs />,                  color: '#f7df1e', level: 88, category: 'Frontend'  },
  { id: 4,  label: 'TypeScript',    icon: <SiTypescript />,          color: '#3178c6', level: 75, category: 'Frontend'  },
  { id: 5,  label: 'React JS',      icon: <FaReact />,               color: '#61dafb', level: 85, category: 'Frontend'  },
  { id: 6,  label: 'Bootstrap',     icon: <FaBootstrap />,           color: '#7952b3', level: 88, category: 'Styling'   },
  { id: 7,  label: 'Media Query',   icon: <TbDeviceMobile />,        color: '#06b6d4', level: 85, category: 'Styling'   },
  { id: 8,  label: 'Node JS',       icon: <FaNodeJs />,              color: '#3c873a', level: 78, category: 'Backend'   },
  { id: 9,  label: 'Python',        icon: <FaPython />,              color: '#3572a5', level: 80, category: 'Language'  },
  { id: 10, label: 'C',             icon: <TbCircleLetterCFilled />, color: '#a8b9cc', level: 72, category: 'Language'  },
  { id: 11, label: 'C++',           icon: <SiCplusplus />,           color: '#00599c', level: 70, category: 'Language'  },
  { id: 12, label: 'Git',           icon: <FaGit />,                 color: '#f05032', level: 85, category: 'Tools'     },
  { id: 13, label: 'GitHub',        icon: <FaGithub />,              color: '#e2e8f0', level: 88, category: 'Tools'     },
  { id: 14, label: 'VS Code',       icon: <VscVscode />,             color: '#007acc', level: 95, category: 'Tools'     },
  { id: 15, label: 'Google Sheets', icon: <SiGooglesheets />,        color: '#34a853', level: 80, category: 'Tools'     },
  { id: 16, label: 'Photoshop',     icon: <FaPaintBrush />,          color: '#31a8ff', level: 70, category: 'Creative'  },
  { id: 17, label: 'Premiere Pro',  icon: <FaPhotoVideo />,          color: '#9999ff', level: 65, category: 'Creative'  },
];

const categoryColors = {
  Frontend: '#61dafb',
  Styling:  '#c084fc',
  Backend:  '#4ade80',
  Language: '#fb923c',
  Tools:    '#facc15',
  Creative: '#f472b6',
};

// Positions of each icon in the arena (top%, left%)
const arenaPos = {
  1:  { top:  '10%', left:  '6%',  dur: 3.2, delay: 0.0 },
  2:  { top:  '58%', left:  '9%',  dur: 4.1, delay: 0.6 },
  3:  { top:  '26%', left: '26%',  dur: 3.7, delay: 1.0 },
  4:  { top:  '74%', left: '21%',  dur: 4.5, delay: 0.3 },
  5:  { top:  '43%', left: '50%',  dur: 3.5, delay: 1.5 },
  6:  { top:  '12%', left: '67%',  dur: 4.2, delay: 0.8 },
  7:  { top:  '65%', left: '56%',  dur: 3.9, delay: 2.0 },
  8:  { top:  '28%', left: '81%',  dur: 3.3, delay: 0.2 },
  9:  { top:  '50%', left: '37%',  dur: 4.8, delay: 1.2 },
  10: { top:  '82%', left: '42%',  dur: 3.6, delay: 0.7 },
  11: { top:  '17%', left: '44%',  dur: 4.0, delay: 1.8 },
  12: { top:  '63%', left: '77%',  dur: 3.4, delay: 0.4 },
  13: { top:  '38%', left: '14%',  dur: 4.6, delay: 1.3 },
  14: { top:  '80%', left: '67%',  dur: 3.8, delay: 0.9 },
  15: { top:   '7%', left: '86%',  dur: 4.3, delay: 1.6 },
  16: { top:  '85%', left: '28%',  dur: 3.1, delay: 2.2 },
  17: { top:  '46%', left: '88%',  dur: 4.4, delay: 0.6 },
};

const subtitleLines = [
  'Technologies I am learning',
  'Skills from my BCA coursework',
  'Tools I use for my projects',
  'What I have been practising',
  'My current tech stack',
  'Languages and frameworks I know',
  'Skills I am building up',
  'What I work with every day',
  'Picked up through hands-on projects',
  'Growing my skill set step by step',
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rowVariants = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SkillsCloud = () => {
  const [hovered, setHovered]    = useState(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [arenaHover, setArenaHover] = useState(null);
  const arenaRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Rotating subtitle
  useEffect(() => {
    const id = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % subtitleLines.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // Mouse parallax for arena
  const handleMouseMove = (e) => {
    const rect = arenaRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left - rect.width  / 2) / rect.width,
      y: (e.clientY - rect.top  - rect.height / 2) / rect.height,
    });
  };

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            My <span className={styles.grad}>Skills</span>
          </h2>

          <div className={styles.subtitleWrap}>
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                className={styles.subtitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {subtitleLines[lineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className={styles.divider} />
        </motion.div>

        <motion.div
          className={styles.arenaWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.arenaTopRow}>
            <span className={styles.arenaHint}>⚡ Interactive Skill Cloud — hover to explore</span>
            <span className={styles.arenaCount}>{skills.length} Technologies</span>
          </div>

          <div
            ref={arenaRef}
            className={styles.arena}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <div className={styles.arenaDots} />

            <span className={`${styles.corner} ${styles.cornerTL}`} />
            <span className={`${styles.corner} ${styles.cornerTR}`} />
            <span className={`${styles.corner} ${styles.cornerBL}`} />
            <span className={`${styles.corner} ${styles.cornerBR}`} />

            {skills.map((skill, i) => {
              const pos = arenaPos[skill.id];
              if (!pos) return null;
              const depth = 0.3 + (skill.id % 3) * 0.25; // 0.3 / 0.55 / 0.8
              const px = mouse.x * depth * 18;
              const py = mouse.y * depth * 14;
              const isHov = arenaHover === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  className={styles.floatOuter}
                  style={{ top: pos.top, left: pos.left }}
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.04 * i,
                    duration: 0.55,
                    type: 'spring',
                    stiffness: 180,
                    damping: 14,
                  }}
                >
                  <div
                    className={styles.floatInner}
                    style={{
                      '--dur':   `${pos.dur}s`,
                      '--delay': `${pos.delay}s`,
                      '--color': skill.color,
                      transform: `translate(${px}px, ${py}px)`,
                    }}
                    onMouseEnter={() => setArenaHover(skill.id)}
                    onMouseLeave={() => setArenaHover(null)}
                  >
                    <div
                      className={`${styles.pulseRing} ${isHov ? styles.pulseRingActive : ''}`}
                      style={{ '--color': skill.color }}
                    />

                    <div
                      className={`${styles.floatRing} ${isHov ? styles.floatRingHov : ''}`}
                      style={{ '--color': skill.color, color: skill.color }}
                    >
                      {skill.icon}
                    </div>

                    <AnimatePresence>
                      {isHov && (
                        <motion.div
                          className={styles.floatTooltip}
                          style={{ '--color': skill.color }}
                          initial={{ opacity: 0, y: 4, scale: 0.85 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.85 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className={styles.tooltipName}>{skill.label}</span>
                          <span
                            className={styles.tooltipCat}
                            style={{ color: categoryColors[skill.category] }}
                          >
                            {skill.category}
                          </span>
                          <span className={styles.tooltipLevel}>{skill.level}%</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className={styles.sectionBreak}>
          <div className={styles.breakLine} />
          <span className={styles.breakLabel}>Skills Proficiency</span>
          <div className={styles.breakLine} />
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className={styles.row}
              variants={rowVariants}
              onMouseEnter={() => setHovered(skill.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                '--skill-color': skill.color,
                '--cat-color': categoryColors[skill.category],
              }}
            >
              <div className={styles.left}>
                <div className={styles.iconBox} style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className={styles.nameWrap}>
                  <span className={styles.name}>{skill.label}</span>
                  <span
                    className={styles.catBadge}
                    style={{
                      background:  `${categoryColors[skill.category]}18`,
                      color:        categoryColors[skill.category],
                      borderColor: `${categoryColors[skill.category]}44`,
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>

              <div className={styles.barWrap}>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                  />
                  <motion.div
                    className={styles.dot}
                    style={{ background: skill.color, boxShadow: `0 0 12px ${skill.color}, 0 0 4px ${skill.color}` }}
                    initial={{ left: 0 }}
                    whileInView={{ left: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                  />
                </div>
                <span
                  className={styles.percent}
                  style={{ color: hovered === skill.id ? skill.color : undefined }}
                >
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.legend}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Object.entries(categoryColors).map(([cat, col]) => (
            <div key={cat} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: col }} />
              <span className={styles.legendLabel}>{cat}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsCloud;

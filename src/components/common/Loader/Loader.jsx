import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const HELLO = 'Hello';
const LOADING_MS = 3200;

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / LOADING_MS) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    const timer = setTimeout(() => {
      setProgress(100);
      setLoading(false);
    }, LOADING_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="fullscreen-loader"
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="loader-grid" aria-hidden />
            <div className="loader-scanline" aria-hidden />

            <div className="loader-bracket loader-bracket-l" aria-hidden>{'{'}</div>
            <div className="loader-bracket loader-bracket-r" aria-hidden>{'}'}</div>

            <div className="loader-container">
              <motion.p
                className="loader-tag"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <span className="loader-tag-dot" />
                portfolio.init()
              </motion.p>

              <h1 className="loader-heading" aria-label="Hello Developer">
                <span className="loader-hello">
                  {HELLO.split('').map((char, i) => (
                    <motion.span
                      key={`${char}-${i}`}
                      className="loader-hello-char"
                      initial={{ opacity: 0, y: 28, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.07,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>

                <motion.span
                  className="loader-developer"
                  initial={{ opacity: 0, x: -24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  Developer
                </motion.span>

                <motion.span
                  className="loader-cursor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    delay: 1.1,
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                  }}
                  aria-hidden
                />
              </h1>

              <motion.div
                className="loader-code-line"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.85, duration: 0.5 }}
              >
                <span className="loader-code-prompt">$</span>
                <span className="loader-code-text">
                  echo &quot;Hello Developer&quot;
                </span>
              </motion.div>

              <motion.div
                className="loader-progress-wrap"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <div className="loader-progress-header">
                  <span>Loading</span>
                  <span className="loader-percent">{progress}%</span>
                </div>
                <div className="loader-bar-track">
                  <motion.div
                    className="loader-bar"
                    style={{ width: `${progress}%` }}
                  />
                  <div className="loader-bar-glow" style={{ width: `${progress}%` }} />
                </div>
              </motion.div>
            </div>

            <div className="loader-glow loader-glow-1" aria-hidden />
            <div className="loader-glow loader-glow-2" aria-hidden />
            <div className="loader-glow loader-glow-3" aria-hidden />
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && children}
    </>
  );
};

export default Loader;

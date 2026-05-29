import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../../common/ThemeToggle/ThemeToggle';
import '../Header.css';

const navItems = [
  { id: 'home',         label: 'Home'         },
  { id: 'about',        label: 'About'        },
  { id: 'projects',     label: 'Projects'     },
  { id: 'skills',       label: 'Skills'       },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact',      label: 'Contact'      },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const hash = location.hash.replace('#', '');
    if (hash && navItems.some((item) => item.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSection(hash);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el) => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0, 0.15, 0.35, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = useCallback(
    (sectionId) => {
      setIsMenuOpen(false);

      if (location.pathname !== '/') {
        navigate(`/#${sectionId}`);
        return;
      }

      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `#${sectionId}`);
        setActiveSection(sectionId);
      }
    },
    [location.pathname, navigate]
  );

  const isActive = (sectionId) =>
    location.pathname === '/' && activeSection === sectionId;

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <Link
          to="/"
          className="logo"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              scrollToSection('home');
            }
          }}
        >
          <span className="logo-gradient">SD</span>
          <span className="logo-text">Sindhav</span>
        </Link>

        <nav className="nav-desktop" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              className={`nav-link ${isActive(item.id) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <nav
        className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`/#${item.id}`}
            className={`nav-mobile-link ${isActive(item.id) ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
        <div className="nav-mobile-theme">
          <span>Theme</span>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

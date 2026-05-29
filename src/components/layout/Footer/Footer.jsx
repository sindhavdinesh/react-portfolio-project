import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>
              <span className={styles.logoGradient}>D</span>inesh <span className={styles.logoGradient}>S</span>indhav
            </h3>
            <p className={styles.footerBio}>
              Building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              <a href="https://github.com/sindhavdinesh" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/dinesh-sindhav-41315a362/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://x.com/Sind35407Dinesh" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </a>
              <a href="https://www.instagram.com/mr_coder_dinesh?igsh=MXFjc2R6MDd6NWxlNQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            Made with <FaHeart className={styles.heartIcon} /> by Dinesh Sindhav
          </p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
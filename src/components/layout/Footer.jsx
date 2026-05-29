import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/#home' },
    { label: 'About', path: '/#about' },
    { label: 'Projects', path: '/#projects' },
    { label: 'Skills', path: '/#skills' },
    { label: 'Certificates', path: '/#certificates' },
    { label: 'Contact', path: '/#contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.logo}>
              <span className={styles.logoGradient}>SD</span>
              <span className={styles.logoName}> Sindhav Dinesh</span>
            </h3>
            <p className={styles.bio}>
              Building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {quickLinks.map((item) => (
                <li key={item.path} className={styles.linkItem}>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className={styles.social}>
              <a href="https://github.com/sindhavdinesh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/dinesh-sindhav-41315a362/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://x.com/Sind35407Dinesh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter /> Twitter
              </a>
              <a href="https://www.instagram.com/mr_coder_dinesh?igsh=MXFjc2R6MDd6NWxlNQ==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Made with <FaHeart className={styles.heart} /> by Sindhav Dinesh</p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

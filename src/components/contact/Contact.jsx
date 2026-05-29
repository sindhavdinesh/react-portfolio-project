
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsTelephoneFill, BsSendFill } from 'react-icons/bs';
import { personalInfo } from '../../data/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <BsTelephoneFill />,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: personalInfo.location,
      link: null
    }
  ];

  return (
    <section style={{ padding: '8rem 0 4rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #00f3ff, #ff00e4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '1rem'
            }}
          >
            Get In Touch
          </h2>

          <p
            style={{
              textAlign: 'center',
              color: '#a0a0c0',
              marginBottom: '3rem'
            }}
          >
            Let's work together on your next project
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '3rem'
          }}
        >
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '1.5rem',
                  borderRadius: 15,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    color: '#00f3ff',
                    marginBottom: '0.5rem'
                  }}
                >
                  {info.icon}
                </div>

                <h3 style={{ marginBottom: '0.5rem' }}>
                  {info.label}
                </h3>

                {info.link ? (
                  <a
                    href={info.link}
                    style={{
                      color: '#a0a0c0',
                      textDecoration: 'none'
                    }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p style={{ color: '#a0a0c0' }}>
                    {info.value}
                  </p>
                )}
              </motion.div>
            ))}

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1.5rem',
                borderRadius: 15,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ marginBottom: '1rem' }}>
                Follow Me
              </h3>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem'
                }}
              >
                <a
                  href="https://github.com/sindhavdinesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', fontSize: '1.5rem' }}
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/dinesh-sindhav-41315a362/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', fontSize: '1.5rem' }}
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://x.com/Sind35407Dinesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', fontSize: '1.5rem' }}
                >
                  <FaTwitter />
                </a>

              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '2rem',
              borderRadius: 20,
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(135deg, #00f3ff, #7000ff)',
                border: 'none',
                borderRadius: 10,
                color: 'white',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'transform 0.3s'
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}

              <BsSendFill />
            </button>

            {status === 'success' && (
              <p
                style={{
                  marginTop: '1rem',
                  textAlign: 'center',
                  color: '#2ed573'
                }}
              >
                Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
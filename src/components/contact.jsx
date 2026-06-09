import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; 

function Contact() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* EXCLUSIVE FOOTER NEON AURA */}
      <div className="contact-neon-core"></div>

      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Core Glass Box Card */}
        <div className="contact-glass-card">
          <motion.div className="status-badge-row" variants={itemVariants}>
            <div className="pulse-green-dot"></div>
            <span className="status-text">Available for Freelance & Full-time Roles</span>
          </motion.div>

          
          <motion.h2 className="contact-headline" variants={itemVariants}>
            Let’s build something useful together.
          </motion.h2>
          
          <motion.p className="contact-subtext" variants={itemVariants}>
            I am available for scalable frontend architectures, high-end portfolio improvements, 
            and practical React application engineering. Drop a message to start.
          </motion.p>

          {/* Premium Email Button CTA - Fully Functional */}
          <motion.div variants={itemVariants} className="cta-wrapper">
            <motion.a 
              className="contact-primary-btn" 
href="mailto:mazanibrar20@gmail.com?subject=Freelance%20Project%20Inquiry%20%E2%80%93%20Let%E2%80%99s%20Work%20Together"              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              <span>Send Email</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.66666 3.33334H13.3333C14.0667 3.33334 14.6667 3.93334 14.6667 4.66668V11.3333C14.6667 12.0667 14.0667 12.6667 13.3333 12.6667H2.66666C1.93333 12.6667 1.33333 12.0667 1.33333 11.3333V4.66668C1.33333 3.93334 1.93333 3.33334 2.66666 3.33334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6667 4.66666L8 9.33333L1.33333 4.66666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

          <hr className="contact-divider" />

          {/* Extra Essential Meta Footer Context */}
          <motion.div className="contact-footer-meta" variants={itemVariants}>
            <div className="meta-block">
              <span>Based In</span>
              <p>Pakistan, PK</p>
            </div>
            
            {/* Functional Call Block Added */}
            <div className="meta-block">
              <span>Direct Call</span>
              <p>
                <a href="tel:03485363805" className="phone-link">0348-5363805</a>
              </p>
            </div>

            <div className="meta-block">
              <span>Digital Spaces</span>
              <div className="social-links-grid">
                <a href="https://github.com/mazanabrar" target="_blank" rel="noreferrer">My GitHub</a>
                <a href="https://www.linkedin.com/in/mazan-abrar-02b679220?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
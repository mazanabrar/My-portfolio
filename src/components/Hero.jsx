import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  // Cascading cinematic text reveals configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 14 } 
    }
  };

  // Profile image framing spring inertia mechanics
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.88, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 45, damping: 15, delay: 0.4 }
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* High-End Spatial Background Matrix Elements */}
      <div className="hero-grid-overlay"></div>
      <div className="hero-ambient-glow"></div>

      <motion.div 
        className="hero-copy"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        
        <motion.h1 variants={itemVariants}>
          Hello, I'm <span className="highlight-blue">Mazan Abrar</span>
        </motion.h1>
        <motion.p className="eyebrow hero-eyebrow" variants={itemVariants}>
           Flutter Expert | Mobile Apps | UI/UX | Full Stack Developer
        </motion.p>
        
        <motion.p className="hero-description" variants={itemVariants}>
          A UI/UX passionate Flutter engineer specialized in architecting high-performance cross-platform mobile apps, supported by deterministic, production-ready PHP/Laravel backend cores.
        </motion.p>
        
        <motion.div className="hero-actions" variants={itemVariants}>
          <motion.a 
            className="button primary hero-primary-btn" 
            href="#projects"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <span>View Projects</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3.5 7.5H11.5M11.5 7.5L7.5 3.5M11.5 7.5L7.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Frame with Dual Ring Interactive Micro-Motion */}
      <motion.div 
        className="hero-image-frame-container"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-image-frame">
          <img className="me-image" src="/me.png" alt="Muhammad Mazan Ibrar" />
          {/* Arc Rings now live as isolated elements to allow absolute physics handling */}
          <div className="arc-ring ring-left"></div>
          <div className="arc-ring ring-right"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
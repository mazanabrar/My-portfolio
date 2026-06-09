import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiFlutter, SiDart, SiTailwindcss } from 'react-icons/si';
import './About.css';

function About() {
  const tools = [
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
    { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'UI/UX Design', icon: <FaFigma />, color: '#F24E1E' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' }
  ];

  // Cascading cinematic entry configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 65, damping: 14 } 
    }
  };

  return (
    <section className="about-section" id="about">
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.p className="eyebrow" variants={itemVariants}>
           ABOUT ME
        </motion.p>

        <motion.h2 className="about-headline" variants={itemVariants}>
           UI/UX-focused developer crafting intuitive cross-platform experiences.
        </motion.h2>

        <div className="about-grid">
          {/* Narrative Philosophy Block */}
          <motion.div 
            className="about-card narrative-card" 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="card-glass-glow"></div>
            <h3 className="section-sub-title">Core Architecture Philosophy</h3>
            <p className="highlight-lead">Design First, Experience Always</p>
            
            <p>
              I specialize in building clean, responsive, and user-focused interfaces where UI/UX plays the central role. My goal is to transform complex ideas into simple, intuitive, and meaningful digital experiences across mobile and web platforms.
            </p>
            <p>
              In today’s modern development era, I actively use AI as a support tool to speed up research, debugging, and development workflows. It helps me focus more on creativity, logic, and product thinking while building real-world applications.
            </p>

            {/* Note alert structure container */}
            <div className="about-ai-note">
              <span>
                <strong>Note:</strong> AI is a powerful assistant that enhances productivity, but it is not a replacement for technical skills, problem-solving ability, or human creativity.
              </span>
            </div>
          </motion.div>

          {/* Interactive Technology Toolkit Block */}
          <motion.div 
            className="about-card toolkit-card" 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="card-glass-glow"></div>
            <h3 className="section-sub-title">Technology Stack</h3>
            <p className="toolkit-desc">
              Modern tools and frameworks I use to build scalable, user-centered applications:
            </p>
            
            <div className="tech-badge-wall">
              {tools.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="tech-badge-pill"
                  whileHover={{ 
                    y: -5, 
                    scale: 1.04, 
                    borderColor: tech.color,
                    boxShadow: `0 10px 25px ${tech.color}15`
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 250, damping: 14 }}
                >
                  <span className="badge-icon-wrap" style={{ '--icon-brand-color': tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="badge-name">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css'; // Make sure the CSS path matches your structure

function Skills() {
  const skills = ['Flutter',
  'Dart',
  'UI/UX Design',
  'PHP',
  'Laravel',
  'React.js',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Bootstrap',
  'JavaScript',
  'Git'];

  // 1. Parent Grid Container Animation Configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Har skill pill 0.1s ke sequence automatic gap se cascade hogi
        delayChildren: 0.15,
      }
    }
  };

  // 2. Individual Pill Entrance Animation Settings
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 35,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 14 
      } 
    }
  };

  return (
    <section className="skills-section" id="skills">
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} /* Section 20% screen par aate hi animation trigger ho jayegi */
      >
        {/* Eyebrow Header */}
        <motion.p className="eyebrow" variants={itemVariants}>
         Skills & Expertise
        </motion.p>

        {/* Section Headline */}
        <motion.h2 className="skills-headline" variants={itemVariants}>
           Building modern UI/UX experiences and scalable digital products.
        </motion.h2>

        {/* Dynamic Animated Grid */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.div 
              key={skill} 
              className="skill-glass-pill"
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.04,
                backgroundColor: '#0c3cff', /* Solid custom brand deep blue / green color */
                borderColor: '#0c3cff'
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="skill-dot"></div>
              <span className="skill-name">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
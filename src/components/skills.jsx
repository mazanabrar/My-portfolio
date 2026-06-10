import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium Icons Mapping
import { FaReact, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiDart, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';

import './Skills.css';

function Skills() {
  const skillsData = [
    { name: 'Flutter', status: 'STABLE v3.19', speed: '4.2ms', type: 'Framework', icon: <SiFlutter />, color: '#02569B' },
    { name: 'Dart', status: 'OPTIMIZED', speed: '1.8ms', type: 'Language', icon: <SiDart />, color: '#0175C2' },
    { name: 'UI/UX Design', status: 'PIXEL PERFECT', speed: '0.0ms', type: 'Creative', icon: <MdOutlineDesignServices />, color: '#F24E1E' },
    { name: 'PHP', status: 'BACKEND v8.3', speed: '8.5ms', type: 'Language', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Laravel', status: 'SECURE REPO', speed: '11.1ms', type: 'Framework', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'React.js', status: 'DOM RENDERED', speed: '3.1ms', type: 'Library', icon: <FaReact />, color: '#61DAFB' },
    { name: 'HTML', status: 'VALIDATED', speed: '0.5ms', type: 'Markup', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', status: 'COMPILED', speed: '0.9ms', type: 'Style', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Tailwind CSS', status: 'JIT ACTIVE', speed: '2.0ms', type: 'Utility', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Bootstrap', status: 'RESPONSIVE', speed: '1.4ms', type: 'UI Kit', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'JavaScript', status: 'ES6 ASYNC', speed: '1.2ms', type: 'Language', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Git', status: 'PUSHED TO MAIN', speed: '15.4ms', type: 'VCS', icon: <FaGitAlt />, color: '#F05032' }
  ];

  const [activeLog, setActiveLog] = useState(skillsData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 } 
    }
  };

  return (
    <section className="skills-section" id="skills">
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.p className="eyebrow" variants={itemVariants}>
          Skills & Expertise
        </motion.p>

        <motion.h2 className="skills-headline" variants={itemVariants}>
          Building modern UI/UX experiences and scalable digital products.
        </motion.h2>

        <div className="skills-split-layout">
          
          {/* LEFT INTERACTIVE PANEL */}
          <div className="skills-left-grid">
            {skillsData.map((skill) => {
              const isActive = activeLog.name === skill.name;
              return (
                <motion.div 
                  key={skill.name} 
                  className={`skill-glass-pill ${isActive ? 'pill-active-state' : ''}`}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveLog(skill)}
                  whileHover={{ y: -4, scale: 1.025 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    '--hover-brand-color': skill.color,
                    '--hover-glow-footprint': `${skill.color}33` // Injecting 20% alpha layer for clean glows
                  }}
                >
                  <span className="skill-pill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-dot"></div>
                </motion.div>
              );
            })}
          </div>

          {/* 💻 RIGHT TELEMETRY COMPILER PANEL */}
          <div className="skills-visualizer-panel" style={{ '--active-accent-color': activeLog.color }}>
            <div className="compiler-header">
              <div className="compiler-dots">
                <span className="dot-c-1"></span>
                <span className="dot-c-2"></span>
                <span className="dot-c-3"></span>
              </div>
              <div className="compiler-title">Stack_Telemetry.sh</div>
            </div>
            
            <div className="compiler-body">
              <div className="compiler-line terminal-initial-log">
                <span className="term-cyan">~ dev-environment</span> $ status --check stack
              </div>
              <div className="compiler-line terminal-processing">
                <span className="term-green">[READY]</span> System telemetry module functional.
              </div>
              
              <div className="compiler-divider-line"></div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeLog.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.12 }}
                  className="live-compiled-node"
                >
                  <div className="compiler-line">
                    <span className="term-purple">🚀 [FETCH]</span> Target Core: <span className="term-white">"{activeLog.name}"</span>
                  </div>
                  <div className="compiler-line">
                    <span className="term-purple">⚙️ [TYPE]</span> Architecture Block: <span className="term-yellow">{activeLog.type}</span>
                  </div>
                  <div className="compiler-line">
                    <span className="term-green">✔ [STATUS]</span> Compilation Layer: <span className="term-cyan">{activeLog.status}</span>
                  </div>
                  <div className="compiler-line">
                    <span className="term-green">⏱ [SPEED]</span> Hot Reload Time: <span className="term-orange">{activeLog.speed}</span>
                  </div>
                  <div className="compiler-line terminal-cursor-line">
                    <span className="term-cyan">~ stream active</span> <span className="terminal-blinker">_</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
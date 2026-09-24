import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: .12, delayChildren: .15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 55, damping: 15 } } };
  const imageVariants = { hidden: { opacity: 0, scale: .9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 45, damping: 15, delay: .35 } } };
  const stack = ['Laravel', 'React', 'Flutter', 'FastAPI', 'PostgreSQL', 'AI'];
  return <section className="hero-section" id="hero">
    <div className="telecom-network-canvas"><div className="hero-grid-overlay" /><div className="telecom-tower tower-alpha"><div className="tower-core" /><div className="signal-wave wave-1" /><div className="signal-wave wave-2" /><div className="signal-wave wave-3" /></div><div className="telecom-tower tower-beta"><div className="tower-core" /><div className="signal-wave wave-1" /><div className="signal-wave wave-2" /></div><div className="telemetry-pipe horizontal-pipe-1"><div className="data-pulse-packet" /></div><div className="telemetry-pipe horizontal-pipe-2"><div className="data-pulse-packet velocity-fast" /></div><div className="telemetry-pipe vertical-pipe-1"><div className="data-pulse-packet velocity-slow" /></div><div className="wireless-node node-pos-1"><span className="node-ping" /></div><div className="wireless-node node-pos-2"><span className="node-ping" /></div><div className="wireless-node node-pos-3"><span className="node-ping" /></div></div>
    <div className="hero-ambient-glow" />
    <motion.div className="hero-copy" variants={containerVariants} initial="hidden" animate="visible">
      <motion.p className="eyebrow hero-eyebrow" variants={itemVariants}>FULL-STACK DEVELOPER · SAAS · MOBILE · AI</motion.p>
      <motion.h1 variants={itemVariants}>Hello, I'm <span className="highlight-blue">Mazan Abrar</span></motion.h1>
      <motion.p className="hero-description" variants={itemVariants}>I build complete digital products — from scalable backends and APIs to polished web, mobile, and AI-powered experiences.</motion.p>
      <motion.div className="hero-stack-row" variants={itemVariants}>{stack.map(x => <span key={x}>{x}</span>)}</motion.div>
      <motion.div className="hero-actions" variants={itemVariants}>
        <motion.a className="button primary hero-primary-btn" href="#projects" whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: .98 }}>Explore My Work <span>→</span></motion.a>
        <motion.a className="hero-secondary-btn" href="#contact" whileHover={{ y: -3 }}>Let's Work Together ↗</motion.a>
      </motion.div>
    </motion.div>
    <motion.div className="hero-image-frame-container" variants={imageVariants} initial="hidden" animate="visible"><span /><div className="hero-image-frame"><img className="me-image" src="/me.png" alt="Mazan Abrar" /><div className="arc-ring ring-left" /><div className="arc-ring ring-right" /></div></motion.div>
  </section>
}
export default Hero;

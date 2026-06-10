import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Project.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 🖼️ Data structure upgraded with dynamic assets, live links, and code bases
  const projects = [
    {
      id: 1,
      name: 'DRS App',
      tag: 'Government / National System',
      shortDesc: 'Secure device registration and verification system used for national-level tracking and compliance.',
      longDesc: 'A government-grade device registration and verification platform designed to handle secure identity validation, device tracking, and compliance workflows. Built with a strong focus on security, performance, and scalable architecture to support large-scale public sector operations.',
      client: 'Telecom Regulatory Authority',
      tech: ['Flutter', 'PHP', 'Laravel', 'PostgreSQL', 'REST APIs'],
      year: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // Injected dashboard preview
      liveLink: '#', // Replace with real URL
      sourceLink: '#' // Replace with github/gitlab link if open-source
    },
    {
      id: 2,
      name: 'Lodenza Store',
      tag: 'E-Commerce / Fashion',
      shortDesc: 'Modern fashion e-commerce platform with a focus on clean UI, branding, and user experience.',
      longDesc: 'A visually refined e-commerce platform built for a fashion brand, focusing on UI/UX consistency, product presentation, and conversion-friendly design. Implemented responsive layouts, optimized product pages, and smooth user interactions for better engagement.',
      client: 'Lodenza Fashion Brand',
      tech: ['React.js', 'Shopify', 'Tailwind CSS', 'JavaScript'],
      year: '2026',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', // Injected e-commerce web snapshot
      liveLink: '#',
      sourceLink: '#'
    },
    {
      id: 3,
      name: 'Help Desk Mobile App',
      tag: 'Enterprise Tool / Productivity',
      shortDesc: 'Cross-platform ticketing system for managing internal support requests and workflow tracking.',
      longDesc: 'A structured support and ticket management system designed for internal organizational use. It includes request handling, status tracking, and workflow routing to improve operational efficiency and communication between departments.',
      client: 'Internal Enterprise System',
      tech: ['Flutter', 'Firebase', 'Node.js', '.NET REST APIs integration'],
      year: '2025',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80', // Injected productivity workflow preview
      liveLink: '#',
      sourceLink: '#'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    }
  };

  return (
    <section className="projects-section" id="projects">
      {/* Cinematic Cyber Neon Core Blurs */}
      <div className="neon-orb-blue"></div>
      <div className="neon-orb-violet"></div>

      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className="eyebrow">Featured Projects</p>
        <h2 className="projects-headline">
          Creating seamless mobile experiences through thoughtful design and development.
        </h2>

        {/* The Asymmetric Magazine Layout */}
        <div className="magazine-project-grid">
          {projects.map((project, index) => (
            <motion.div 
              className={`mag-card slot-${index + 1}`}
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.01 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Glass Card Glowing Overlay Grid */}
              <div className="glass-shine-layer"></div>
              
              <div className="mag-card-header">
                <span className="mag-tag">{project.tag}</span>
                <span className="mag-year">{project.year}</span>
              </div>

              {/* ⚡ NEW: INJECTED VISUAL PREVIEW WRAPPER FOR AUTHENTICITY */}
              <div className="mag-visual-wrapper">
                <img 
                  className="project-visual-media" 
                  src={project.image} 
                  alt={`${project.name} Visual Preview`} 
                  loading="lazy"
                />
              </div>

              <div className="mag-card-body">
                <h3 className="mag-title">{project.name}</h3>
                <p className="mag-desc">{project.shortDesc}</p>
              </div>

              <div className="mag-card-footer">
                <span className="mag-action-text">Explore Case Study</span>
                <div className="mag-btn-circle">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* DETAILED GLASS MODAL COMPONENT (SLIDE-IN DETAILED VIEW) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="detailed-glass-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="close-panel-btn" onClick={() => setSelectedProject(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {/* ⚡ NEW: FULL-WIDTH HIGH QUALITY IN-DRAWER CASE STUDY MEDIA */}
              <div className="panel-hero-visual">
                <img src={selectedProject.image} alt={`${selectedProject.name} Expanded Mockup`} />
              </div>

              <span className="panel-tag">{selectedProject.tag}</span>
              <h2 className="panel-title">{selectedProject.name}</h2>
              
              <div className="panel-meta-row">
                <div><span>Client</span><p>{selectedProject.client}</p></div>
                <div><span>Timeline</span><p>{selectedProject.year}</p></div>
              </div>

              {/* ⚡ NEW: ACTION LINKS INJECTED TO ROUTE TO THE ACTUAL LIVE SYSTEMS */}
              <div className="panel-action-links">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="panel-btn-primary">
                  <span>Launch Live App</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
                <a href={selectedProject.sourceLink} target="_blank" rel="noopener noreferrer" className="panel-btn-secondary">
                  <span>Review Code Base</span>
                </a>
              </div>

              <hr className="panel-divider" />

              <div className="panel-body">
                <h3>Overview</h3>
                <p>{selectedProject.longDesc}</p>

                <h3>Stacks</h3>
                <div className="panel-tech-wrap">
                  {selectedProject.tech.map(t => <span key={t} className="panel-tech-pill">{t}</span>)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// React Icons Imported Perfectly
import { FaReact, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiFlutter, SiDart, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import './About.css';

function About() {
  const tools = [
    { 
      name: 'Flutter', 
      icon: <SiFlutter />, 
      color: '#02569B',
      filename: 'main.dart',
      code: `void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Pixel Perfect UI'),
        ),
      ),
    );
  }
}`
    },
    { 
      name: 'Dart', 
      icon: <SiDart />, 
      color: '#0175C2',
      filename: 'async_worker.dart',
      code: `Future<void> fetchTelemetry() async {
  try {
    final stream = await Worker.init();
    stream.listen((data) {
      print('🚀 Metric Stack: \${data.metrics}');
    });
  } catch (error) {
    throw Exception('Pipeline Broken');
  }
}`
    },
    { 
      name: 'React.js', 
      icon: <FaReact />, 
      color: '#61DAFB',
      filename: 'Portfolio.jsx',
      code: `import React from 'react';

export default function Experience() {
  return (
    <div className="interactive-node">
      <h1>Design First, Experience Always</h1>
      <p>Building high-performance reactive web apps.</p>
    </div>
  );
}`
    },
    { 
      name: 'Laravel', 
      icon: <FaLaravel />, 
      color: '#FF2D20',
      filename: 'api.php',
      code: `<?php

use App\\Http\\Controllers\\TelemetryController;
use Illuminate\\Support\\Facades\\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/v1/stack/status', [TelemetryController::class, 'index']);
    Route::post('/v1/deploy', [TelemetryController::class, 'store']);
});`
    },
    { 
      name: 'PHP', 
      icon: <FaPhp />, 
      color: '#777BB4',
      filename: 'Database.php',
      code: `<?php

class Database Connection {
    private pdo $conn;

    public function __construct() {
        $this->conn = new PDO("pgsql:host=localhost;dbname=prod", "dev", "secret");
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
}`
    },
    { 
      name: 'UI/UX Design', 
      icon: <FaFigma />, 
      color: '#F24E1E',
      filename: 'tokens.json',
      code: `{
  "global": {
    "brand-identity": "#F24E1E",
    "ambient-glow": "rgba(242, 78, 30, 0.15)",
    "typography": "Geist Sans",
    "spacing-system": "8px-bento-grid",
    "corner-radius": "28px"
  }
}`
    },
    { 
      name: 'Tailwind', 
      icon: <SiTailwindcss />, 
      color: '#06B6D4',
      filename: 'TailwindComponent.html',
      code: `<div class="relative flex items-center gap-4 p-5 backdrop-blur-md bg-slate-900/80 border border-white/10 rounded-[28px] shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-cyan-500/20">
  <div class="text-cyan-400 text-lg">✦</div>
  <span class="font-bold text-white">JIT Compiler Active</span>
</div>`
    },
    { 
      name: 'Bootstrap', 
      icon: <FaBootstrap />, 
      color: '#7952B3',
      filename: 'layout.html',
      code: `<div class="container-fluid padding-y-lg">
  <div class="row g-4 align-items-center justify-content-center">
    <div class="col-12 col-lg-7 bento-card-narrative">
      <h3 className="display-6 fw-bold">Grid Matrix</h3>
    </div>
  </div>
</div>`
    },
    { 
      name: 'HTML5', 
      icon: <FaHtml5 />, 
      color: '#E34F26',
      filename: 'index.html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Architecture Pipeline Portfolio</title>
</head>
<body>
    <main id="root" class="dom-rendering-active"></main>
</body>
</html>`
    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt />, 
      color: '#1572B6',
      filename: 'GlowEffects.css',
      code: `.about-code-ide:hover {
  border-color: var(--active-tech-color, var(--accent)) !important;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2), 
    0 0 35px -10px var(--active-tech-glow, var(--accent-glow)) !important;
}`
    }
  ];

  const [activeTech, setActiveTech] = useState(tools);

  // 🪐 Real-time Terminal Log Simulator Data Stream
  const mockLogs = [
    { text: "System pipeline checking init...", type: "info" },
    { text: "Compiling Flutter Widgets & Engine...", type: "process" },
    { text: "Hot Reload triggered: DOM re-rendered in 4.2ms", type: "success" },
    { text: "Syncing Laravel REST APIs & Token validation...", type: "process" },
    { text: "PostgreSQL Database handshake verified. [OK]", type: "success" },
    { text: "Optimizing Tailwind CSS layout structure...", type: "info" },
    { text: "Production build compiled with 0 warnings.", type: "success" }
  ];

  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogIndex((prevIndex) => (prevIndex + 1) % mockLogs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [mockLogs.length]);

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
      {/* 🟢 NEW: MASSIVE AMBIENT BACKGROUND GLOW ORBS (Pure Visual Power) */}
      <div className="about-ambient-glow main-glow-top-left"></div>
      <div className="about-ambient-glow main-glow-bottom-right"></div>

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

        <div className="about-grid main-narrative-split">
          
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

            <div className="about-ai-note">
              <span>
                <strong>Note:</strong> AI is a powerful assistant that enhances productivity, but it is not a replacement for technical skills, problem-solving ability, or human creativity.
              </span>
            </div>
          </motion.div>

          {/* ⚡ THE ARCHITECTURAL TECH PIPELINE */}
          <motion.div 
            className="about-card pipeline-visual-card" 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="card-glass-glow"></div>
            <div className="pipeline-card-header">
              <h3 className="section-sub-title">Development Lifecycle</h3>
              <p className="pipeline-lead">Architecture Pipeline</p>
            </div>
            
            <div className="pipeline-flow-container">
              <div className="pipeline-node node-figma" title="UI/UX Wireframing">
                <FaFigma />
                <span className="node-caption">Design</span>
              </div>
              
              <div className="pipeline-connector-line">
                <motion.div 
                  className="pipeline-pulse-dot"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>

              <div className="pipeline-node node-frontend" title="Cross-Platform Interface">
                <SiFlutter />
                <span className="node-caption">Frontend</span>
              </div>

              <div className="pipeline-connector-line">
                <motion.div 
                  className="pipeline-pulse-dot"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "linear" }}
                />
              </div>

              <div className="pipeline-node node-backend" title="Robust Server Architecture">
                <FaLaravel />
                <span className="node-caption">Backend</span>
              </div>

              <div className="pipeline-connector-line">
                <motion.div 
                  className="pipeline-pulse-dot"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1.2, ease: "linear" }}
                />
              </div>

              <div className="pipeline-node node-database" title="Data Integrity Layers">
                <SiPostgresql />
                <span className="node-caption">Database</span>
              </div>
            </div>

            <div className="pipeline-terminal-terminal">
              <div className="terminal-top-bar">
                <span className="term-dot-red"></span>
                <span className="term-text-title">live_compilation_stream.sh</span>
              </div>
              <div className="terminal-log-output">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLogIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className={`log-line-item type-${mockLogs[currentLogIndex].type}`}
                  >
                    {mockLogs[currentLogIndex].type === 'success' && '✔ '}
                    {mockLogs[currentLogIndex].type === 'process' && '⚙ '}
                    {mockLogs[currentLogIndex].type === 'info' && 'ℹ '}
                    {mockLogs[currentLogIndex].text}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 💻 VISUAL CODING SEGMENT SPLIT */}
        <div className="about-grid toolkit-and-code-split">
          
          {/* Left Block inside row 2: The Translucent Syntax Highlighted JSON Node */}
          <motion.div 
            className="about-code-ide" 
            variants={itemVariants}
            style={{ 
              '--active-tech-color': activeTech.color,
              '--active-tech-glow': `${activeTech.color}33` // Alpha-layer tint for glows
            }}
          >
            <div className="ide-header">
              <div className="ide-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="ide-tab-container">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTech.filename}
                    initial={{ y: 3, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -3, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="ide-tab active-tab"
                  >
                    <span className="tab-icon" style={{ color: activeTech.color }}>{activeTech.icon}</span>
                    {activeTech.filename}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="ide-body">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTech.name}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.18 }}
                >
                  <code className="raw-code-stream">
                    {activeTech.code}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Block inside row 2: Interactive Technology Toolkit Wall */}
          <motion.div 
            className="about-card toolkit-card" 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="card-glass-glow"></div>
            <h3 className="section-sub-title">Technology Stack</h3>
            <p className="toolkit-desc">
              Modern tools and frameworks I use to build scalable, user-centered applications (Hover to unpack source snippets):
            </p>
            
            <div className="tech-badge-wall">
              {tools.map((tech, index) => {
                const isActive = activeTech.name === tech.name;
                return (
                  <motion.div 
                    key={index} 
                    className={`tech-badge-pill ${isActive ? 'tech-badge-active' : ''}`}
                    onMouseEnter={() => setActiveTech(tech)}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.04
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 250, damping: 14 }}
                    style={{ 
                      '--pill-hover-color': tech.color,
                      '--pill-hover-glow': `${tech.color}1c`
                    }}
                  >
                    <span className="badge-icon-wrap" style={{ '--icon-brand-color': tech.color }}>
                      {tech.icon}
                    </span>
                    <span className="badge-name">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}

export default About;
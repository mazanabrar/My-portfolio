import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Project.css';

// Real products and independent concepts are clearly labelled.
const projects = [
  {
    "id": "obsidian",
    "name": "OBSIDIAN Auto Atelier",
    "type": "concept",
    "tag": "AUTOMOTIVE · LIVE WEBSITE CONCEPT",
    "description": "A cinematic automotive detailing site with animated service storytelling and a visual five-stage experience.",
    "detail": "A self-initiated detailing website concept demonstrating how responsive design, interactive service storytelling, and clear enquiry paths can support a premium business.",
    "tech": [
      "Responsive design",
      "JavaScript",
      "Motion",
      "UI/UX"
    ],
    "img": "/projects/obsidian.svg",
    "role": "UI Designer & Front-End Developer",
    "features": [
      "Visual five-stage journey",
      "Service storytelling",
      "Mobile-responsive presentation",
      "Clear enquiry CTA"
    ],
    "url": "https://obsidian-detailing-demo.vercel.app/",
    "note": "Portfolio concept, not a commissioned website. Before/after scenes and the enquiry form are illustrative simulations."
  },
  {
    "id": "ember",
    "name": "EMBER Restaurant Experience",
    "type": "concept",
    "tag": "RESTAURANT · INTERACTIVE CONCEPT",
    "description": "Interactive burger-building and restaurant website concept designed around an engaging digital menu.",
    "detail": "An independent restaurant website experiment with animated menu presentation and a custom burger-builder interaction. This is a frontend concept, not a production commerce application.",
    "tech": [
      "Interactive UI",
      "JavaScript",
      "Responsive design",
      "Motion"
    ],
    "img": "/projects/ember-concept.svg",
    "role": "UI Concept & Front-End Developer",
    "features": [
      "Interactive burger-builder concept",
      "Animated menu experiences",
      "Restaurant landing pages",
      "Mobile-friendly layouts"
    ],
    "note": "Independent concept. No restaurant transactions, real orders or paid customer results are claimed."
  },
  {
    "id": "jarvis",
    "name": "JARVIS Restaurant SaaS",
    "type": "product",
    "tag": "AI · RESTAURANT SAAS",
    "description": "AI-enabled restaurant operations prototype covering customer ordering, kitchen workflows and management insights.",
    "detail": "A restaurant operations platform prototype exploring touch and voice-based ordering, live kitchen display processes, menu management, business analytics and an AI assistant that answers questions using demonstration data.",
    "tech": [
      "React",
      "FastAPI",
      "PostgreSQL",
      "AI/LLM"
    ],
    "img": "/projects/jarvis.png",
    "role": "Full-Stack & AI Developer",
    "features": [
      "Kiosk ordering interface",
      "Kitchen display workflow",
      "Menu management & reports",
      "AI business questions"
    ],
    "note": "AI-powered development prototype; no verified commercial restaurant deployment or real customer metrics."
  },
  {
    "id": "cefrise",
    "name": "CEFRise",
    "type": "mobile",
    "tag": "EDTECH · FLUTTER",
    "description": "English learning mobile application with vocabulary, pronunciation and onboarding assessments.",
    "detail": "A Flutter-based CEFR English vocabulary application combining structured learning, audio pronunciation, visual references and assessment with Firebase and Supabase services.",
    "tech": [
      "Flutter",
      "Dart",
      "Firebase",
      "Supabase"
    ],
    "img": "/projects/cefrise.png",
    "role": "Flutter Developer",
    "features": [
      "CEFR vocabulary learning",
      "Pronunciation and references",
      "Onboarding level assessment",
      "Cloud-synced content"
    ],
    "note": "In development, around 80% complete as of October 2026; Play Store launch planned."
  },
  {
    "id": "ptamobile",
    "name": "PTA DRS & DVS Mobile Apps",
    "type": "mobile",
    "tag": "FLUTTER · API INTEGRATIONS",
    "description": "Mobile development for device-related services integrated with existing systems through REST APIs.",
    "detail": "Flutter application work on device-related services. DRS communicates with DIRBS-related functionality through backend APIs, and DVS has been released on the Google Play Store. Details are intentionally limited to public-safe information.",
    "tech": [
      "Flutter",
      "Dart",
      "Android",
      "REST APIs"
    ],
    "img": "/projects/mobile-integrations.svg",
    "role": "Flutter App Developer",
    "features": [
      "DRS / DIRBS-related API work",
      "Android mobile development",
      "Device service workflows",
      "DVS Play Store release"
    ],
    "note": "Public-safe description only. No private endpoints, sensitive user data, company assets or unverified store links."
  },
  {
    "id": "maintenance",
    "name": "Preventive Maintenance System",
    "type": "enterprise",
    "tag": "ENTERPRISE · OPERATIONAL PORTAL",
    "description": "Full-stack portal in use by departmental staff for inspections, compliance, reports and corrective actions.",
    "detail": "A React, Laravel and PostgreSQL portal delivered for real departmental use. After deployment I addressed report-generation problems, redesigned confusing dashboard elements and recommended better workflow steps based on users' operational feedback.",
    "tech": [
      "React",
      "Laravel",
      "PostgreSQL",
      "API"
    ],
    "img": "/projects/preventive.png",
    "role": "Full-Stack Developer",
    "features": [
      "Actual departmental use",
      "Fixed reports from user feedback",
      "Clearer operational dashboard",
      "Survey & corrective action flows"
    ],
    "note": "Main portal deployed and used by employees. Experimental Jarvis AI was not put into production. This case study excludes confidential screens and data."
  }
];
const filters=[['all','All work'],['concept','Website concepts'],['product','SaaS & AI'],['mobile','Mobile apps'],['enterprise','Enterprise']];

function Projects(){
 const [selected,setSelected]=useState(null);
 const [filter,setFilter]=useState('all');
 const visible=filter==='all'?projects:projects.filter(p=>p.type===filter);
 useEffect(()=>{if(!selected)return;const close=e=>{if(e.key==='Escape')setSelected(null)};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);},[selected]);
 return <section className="projects-section" id="projects">
   <div className="neon-orb-blue"/><div className="neon-orb-violet"/>
   <motion.div className="projects-container" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}}>
     <p className="eyebrow">Built by Mazan · Selected Work</p>
     <h2 className="projects-headline">Real software. Interactive concepts. Thoughtfully built.</h2>
     <p className="projects-intro">Explore working demonstrations, mobile development and enterprise software. Concepts, prototypes and operational projects are identified transparently.</p>
     <div className="bbm-filter-bar" role="group" aria-label="Filter projects">{filters.map(([key,label])=><button key={key} type="button" aria-pressed={filter===key} className={'bbm-filter-chip '+(filter===key?'active':'')} onClick={()=>setFilter(key)}>{label}</button>)}</div>
     <div className="magazine-project-grid">{visible.map((p,i)=><motion.article key={p.id} className={'mag-card slot-'+((i%4)+1)} whileHover={{y:-8,scale:1.008}}>
       <div className="glass-shine-layer"/>
       <div className="mag-card-header"><span className="mag-tag">{p.tag}</span><span className="mag-year">{String(i+1).padStart(2,'0')}</span></div>
       <button type="button" className="bbm-card-open" onClick={()=>setSelected(p)} aria-label={'Explore '+p.name}>
         <div className="mag-visual-wrapper"><img className="project-visual-media" src={p.img} alt={p.name+' project cover'} loading="lazy"/></div>
         <div className="mag-card-body"><h3 className="mag-title">{p.name}</h3><p className="mag-desc">{p.description}</p></div>
       </button>
       <div className="project-mini-stack">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
       <div className="mag-card-footer"><button className="bbm-explore" type="button" onClick={()=>setSelected(p)}>Explore case study ↗</button>{p.url&&<a className="bbm-live" href={p.url} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}</div>
     </motion.article>)}</div>
   </motion.div>
   <AnimatePresence>{selected&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
     <motion.div className="detailed-glass-panel" role="dialog" aria-label={selected.name+' case study'} aria-modal="true" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring',damping:25,stiffness:180}} onClick={e=>e.stopPropagation()}>
       <button type="button" className="close-panel-btn" aria-label="Close details" onClick={()=>setSelected(null)}>×</button>
       <div className="panel-hero-visual"><img src={selected.img} alt={selected.name+' cover'}/></div>
       <span className="panel-tag">{selected.tag}</span><h2 className="panel-title">{selected.name}</h2>
       <div className="panel-meta-row"><div><span>My role</span><p>{selected.role}</p></div><div><span>Project type</span><p>{selected.type==='concept'?'Independent concept':selected.tag.split('·')[0]}</p></div></div>
       {selected.url&&<div className="panel-action-links"><a className="panel-btn-primary" href={selected.url} target="_blank" rel="noopener noreferrer">Open interactive demo ↗</a><a className="panel-btn-secondary" href="#contact" onClick={()=>setSelected(null)}>Discuss a similar project</a></div>}
       <hr className="panel-divider"/>
       <div className="panel-body"><h3>What I built</h3><p>{selected.detail}</p><h3>Capabilities</h3><div className="case-highlight-grid">{selected.features.map(h=><div key={h}>✓ {h}</div>)}</div><h3>Technology</h3><div className="panel-tech-wrap">{selected.tech.map(t=><span key={t} className="panel-tech-pill">{t}</span>)}</div><p className="case-note">{selected.note}</p><a className="bbm-enquiry" href="mailto:mazanibrar20@gmail.com?subject=Built%20by%20Mazan%20Project%20Enquiry">Discuss your project ↗</a></div>
     </motion.div>
   </motion.div>}</AnimatePresence>
 </section>
}
export default Projects;

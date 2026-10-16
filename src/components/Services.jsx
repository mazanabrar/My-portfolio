import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';
const offers=[
 ['01','Premium websites','Beautiful mobile-friendly websites, service presentations and clear enquiry journeys.','OBSIDIAN is an independent working concept.'],
 ['02','Apps and business platforms','Flutter apps, dashboards, approval portals, reporting workflows and API integrations.','Explore real enterprise and mobile projects.'],
 ['03','AI and automation','Thoughtful AI interfaces and integrations around product needs and operational workflows.','Explore the JARVIS development prototype.']
];
export default function Services(){
 return <section className="bbm-services" id="services"><div className="bbm-service-container">
   <p className="eyebrow">BUILT BY MAZAN · SERVICES</p><h2>Digital products built around a real purpose.</h2>
   <p className="bbm-services-intro">Better design, useful functionality and a clear outcome for the people who use it.</p>
   <div className="bbm-offers">{offers.map(([id,title,summary,note],i)=><motion.article key={id} className="bbm-offer" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.07*i}}><span>{id} / ✦</span><h3>{title}</h3><p>{summary}</p><small>{note}</small></motion.article>)}</div>
   <div className="bbm-closer"><strong>Have a project in mind?</strong><a href="#contact">Let's discuss it ↗</a><a href="https://www.instagram.com/builtbymazan/" target="_blank" rel="noopener noreferrer">Built by Mazan on Instagram ↗</a></div>
 </div></section>;
}
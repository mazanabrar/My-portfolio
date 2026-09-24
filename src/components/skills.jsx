import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {FaReact,FaPhp,FaLaravel,FaGitAlt,FaPython} from 'react-icons/fa';
import {SiFlutter,SiDart,SiPostgresql,SiMysql,SiFirebase,SiFastapi,SiSupabase} from 'react-icons/si';
import './Skills.css';
function Skills(){
 const skills=[
  {name:'Laravel',type:'Backend framework',proof:'REST APIs · Auth · Workflows',icon:<FaLaravel/>,color:'#FF2D20'},
  {name:'React.js',type:'Web applications',proof:'Dashboards · SaaS interfaces',icon:<FaReact/>,color:'#61DAFB'},
  {name:'Flutter',type:'Mobile applications',proof:'Cross-platform product builds',icon:<SiFlutter/>,color:'#42A5F5'},
  {name:'FastAPI',type:'Python APIs',proof:'AI services · Async backends',icon:<SiFastapi/>,color:'#009688'},
  {name:'PHP',type:'Backend language',proof:'Business systems · APIs',icon:<FaPhp/>,color:'#777BB4'},
  {name:'Python',type:'Backend & AI',proof:'Agents · Integrations · Services',icon:<FaPython/>,color:'#FFD43B'},
  {name:'PostgreSQL',type:'Relational database',proof:'Production data modelling',icon:<SiPostgresql/>,color:'#4169E1'},
  {name:'MySQL',type:'Relational database',proof:'Web application data',icon:<SiMysql/>,color:'#4479A1'},
  {name:'Firebase',type:'Cloud platform',proof:'Auth · Firestore · Messaging',icon:<SiFirebase/>,color:'#FFCA28'},
  {name:'Supabase',type:'Cloud services',proof:'Storage · Product infrastructure',icon:<SiSupabase/>,color:'#3ECF8E'},
  {name:'Dart',type:'Mobile language',proof:'Flutter application logic',icon:<SiDart/>,color:'#0175C2'},
  {name:'Git',type:'Version control',proof:'Structured delivery workflow',icon:<FaGitAlt/>,color:'#F05032'}
 ];
 const [active,setActive]=useState(skills[0]);
 return <section className="skills-section" id="skills"><motion.div className="skills-container" initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}}>
  <p className="eyebrow">Capabilities & Stack</p><h2 className="skills-headline">The right technology for the product — not technology for its own sake.</h2>
  <div className="skills-split-layout"><div className="skills-left-grid">{skills.map(s=><motion.div key={s.name} className={`skill-glass-pill ${active.name===s.name?'pill-active-state':''}`} onMouseEnter={()=>setActive(s)} whileHover={{y:-4,scale:1.025}} style={{'--hover-brand-color':s.color,'--hover-glow-footprint':`${s.color}33`}}><span className="skill-pill-icon" style={{color:s.color}}>{s.icon}</span><span className="skill-name">{s.name}</span><div className="skill-dot"/></motion.div>)}</div>
  <div className="skills-visualizer-panel" style={{'--active-accent-color':active.color}}><div className="compiler-header"><div className="compiler-dots"><span className="dot-c-1"/><span className="dot-c-2"/><span className="dot-c-3"/></div><div className="compiler-title">product_stack.sh</div></div><div className="compiler-body"><div className="compiler-line"><span className="term-cyan">~ product-engineering</span> $ inspect --capability</div><div className="compiler-line"><span className="term-green">[READY]</span> Built around real product requirements.</div><div className="compiler-divider-line"/><AnimatePresence mode="wait"><motion.div key={active.name} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:8}}><div className="compiler-line"><span className="term-purple">◆ [STACK]</span> <span className="term-white">{active.name}</span></div><div className="compiler-line"><span className="term-purple">↳ [ROLE]</span> <span className="term-yellow">{active.type}</span></div><div className="compiler-line"><span className="term-green">✓ [USED FOR]</span> <span className="term-cyan">{active.proof}</span></div><div className="compiler-line terminal-cursor-line"><span className="term-cyan">~ ready to build</span> <span className="terminal-blinker">_</span></div></motion.div></AnimatePresence></div></div></div>
 </motion.div></section>
}
export default Skills;

import Navbar from './components/navbar'; // Match your exact file name (navbar or Navbar)
import Hero from './components/Hero';
import About from './components/About'; // <--- Fixed: Capital 'A' to match About.jsx
import Skills from './components/skills'; // Match your exact file name (skills or Skills)
import Projects from './components/projects'; // Match your exact file name (projects or Projects)
import Contact from './components/contact'; // Match your exact file name (contact or Contact)

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
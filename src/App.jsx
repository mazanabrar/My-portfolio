import Navbar from './components/navbar'; // Match your exact file name (navbar or Navbar)
import Hero from './components/Hero';
import About from './components/about'// <--- Fixed: Capital 'A' to match About.jsx
import Skills from './components/skills'; // Match your exact file name (skills or Skills)
import Projects from './components/projects'; // Match your exact file name (projects or Projects)
import Contact from './components/contact'; // Match your exact file name (contact or Contact)

import './App.css';

function App() {
  return (
    <>
      {/* Navbar ko top layer par azaad rakhne ke liye wrapper */}
      <div style={{ position: 'relative', zIndex: 999999 }}>
        <Navbar />
      </div>

      {/* Saara content ek main tag mein jo rigid layer 1 par rahega */}
      <main style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
export default App;
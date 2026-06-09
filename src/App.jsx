import Navbar from './components/navbar'
import Hero from './components/Hero';
import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';

import './App.css'

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
  )
}

export default App

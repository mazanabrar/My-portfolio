import React from 'react';
import './navbar.css'; 

function Navbar() {
  // Explicit mapping structure to prevent link ID mismatch errors
  const navLinks = [
    { name: 'About me', targetId: 'about' },
    { name: 'Skills', targetId: 'skills' },
    { name: 'Work', targetId: 'projects' },
    // Maps 'Work' directly to your <Projects /> component
  ];

  return (
    <header className="site-header-container">
      <div className="site-header">
        {/* Left Side: Brand Name - Fixed to snap directly to the top of Hero viewport */}
        <a className="brand" href="#hero">
          Home
        </a>

        {/* Center: Navigation Links */}
        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.name} className="nav-link" href={`#${link.targetId}`}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side: Action Button - Now smoothly redirects to your Real-time Glass Form */}
        <div className="header-actions">
          <a 
            href="#contact" 
            className="cta-button"
          >
            Let's chat
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
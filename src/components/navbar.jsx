import React, { useState, useEffect } from 'react';
import './navbar.css'; 

function Navbar() {
  // Theme State Controller (Checks local storage first so theme persists on refresh)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Sync theme attribute directly to the HTML document tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handler to toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Explicit mapping structure for smooth anchors
  const navLinks = [
    { name: 'About me', targetId: 'about' },
    { name: 'Skills', targetId: 'skills' },
    { name: 'Work', targetId: 'projects' },
  ];

  return (
    <header className="site-header-container">
      <div className="site-header">
        {/* Left Side: Brand Name */}
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

        {/* Right Side: Theme Toggler & Action Button */}
        <div className="header-actions">
          {/* 🌗 Premium Minimalist Theme Switcher Button */}
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              /* Sleek Moon Icon for Light Mode */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              /* Minimal Sun Icon for Dark Mode */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <a href="#contact" className="cta-button">
            Let's chat
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
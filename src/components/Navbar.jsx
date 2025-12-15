import React, { useState, useEffect } from "react";
import logo from '../assets/logo-v2.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark)
  }, [isDark])

  return (
    <nav className="container">
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="AuraUI Logo" className="logo-img" />
          <div className="logo">Aura<span className="gradient-text">UI</span></div>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact-form" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
        
        <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
        </div>

        <a href="#" className="btn nav-btn">Get Started</a>
      </div>
    </nav>
  )
};

export default Navbar;

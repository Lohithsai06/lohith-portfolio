import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css";
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Skills', to: '/skills' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Reset navbar state when route changes
  useEffect(() => {
    setShowNavbar(true);
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 10) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
    setLastScrollY(currentScrollY);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class when not at the top
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Hide/show navbar based on scroll direction
      if (window.scrollY > lastScrollY && !menuOpen) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      
      setLastScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-title">Lohith.dev</span>
        </Link>
        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`navbar-link${location.pathname === link.to ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Hamburger Icon */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-bar bar1"></span>
          <span className="hamburger-bar bar2"></span>
          <span className="hamburger-bar bar3"></span>
        </button>
        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}> 
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`mobile-link${location.pathname === link.to ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

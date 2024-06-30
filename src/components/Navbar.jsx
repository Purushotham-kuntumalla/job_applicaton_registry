// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaEye, FaBars, FaTimes } from 'react-icons/fa'; // Icons from react-icons library
import '../components/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <div className="logo">Job Tracker</div>
      <div className="hamburger-menu" onClick={handleToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-links ${isMobile ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMobileMenu}>
          <FaHome className='i' /> Home
        </Link>
        <Link to="/add" className="nav-link" onClick={closeMobileMenu}>
          <FaPlus className='i' /> Add Application
        </Link>
        <Link to="/applications" className="nav-link" onClick={closeMobileMenu}>
          <FaEye className='i' /> View Applications
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

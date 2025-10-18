import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo-section">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Rabbit Foot Logo" className="navbar-logo" />
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-left">
        <ul className="nav-links">
          <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
          <li><NavLink to="/brewery" onClick={closeMenu}>BREWERY</NavLink></li>
          <li><NavLink to="/events" onClick={closeMenu}>EVENTS</NavLink></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li><NavLink to="/menu" onClick={closeMenu}>MENU ▾</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>CONTACT US</NavLink></li>
        </ul>
        <button className="visit-btn">VISIT NOW</button>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
          <li><NavLink to="/brewery" onClick={closeMenu}>BREWERY</NavLink></li>
          <li><NavLink to="/events" onClick={closeMenu}>EVENTS</NavLink></li>
          <li><NavLink to="/menu" onClick={closeMenu}>MENU</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>CONTACT US</NavLink></li>
        </ul>
        <button className="visit-btn mobile-btn">VISIT NOW</button>
      </div>
    </nav>
  );
};

export default Navbar;

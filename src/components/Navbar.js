import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img
          src="https://as2.ftcdn.net/v2/jpg/04/96/47/13/1000_F_496471319_DbtjoUvKqyy2e9OfgBnK5mm2AXhKpa9m.jpg"
          alt="Logo"
        />
        <span className="site-name">LITHUSHOTS</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/form">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

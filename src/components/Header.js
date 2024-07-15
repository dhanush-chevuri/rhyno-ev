import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/DELL/rhyno-ev/src/styles/Header.css';
import logo from 'C:/Users/DELL/rhyno-ev/src/assets/images/logo.png';  
import instagramIcon from 'C:/Users/DELL/rhyno-ev/src/assets/instagram-icon.png';
import linkedinIcon from 'C:/Users/DELL/rhyno-ev/src/assets/linkedin-icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Rhyno EV" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li className="dropdown">
          <li><Link to="/products">Products</Link></li>
            <ul className="dropdown-content">
              <li><Link to="/products/se03-lite">SE03 Lite</Link></li>
              <li><Link to="/products/se03">SE03</Link></li>
              <li><Link to="/products/se03-max">SE03 Max</Link></li>
              <li><Link to="/compare">Compare All</Link></li>
            </ul>
          </li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/pre-book">Pre-book Now</Link></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </header>
  );
};

export default Header;

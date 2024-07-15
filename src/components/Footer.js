import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/DELL/rhyno-ev/src/styles/Footer.css';
import instagramIcon from 'C:/Users/DELL/rhyno-ev/src/assets/instagram-icon.png';
import linkedinIcon from 'C:/Users/DELL/rhyno-ev/src/assets/linkedin-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Policies</h4>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/refund-policy">Refund Policy</Link>
        <Link to="/website-policy">Website Policy</Link>
      </div>
      <div className="footer-section">
        <h4>Links</h4>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/rentals">Rentals</Link>
      </div>
      <div className="footer-section">
        <h4>Social</h4>
        <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">Career (LinkedIn)</a>
        <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <div className="social-icons">
          <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Rhyno EV. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

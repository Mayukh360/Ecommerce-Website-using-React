import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h3>Shop</h3>
        <ul className="footer-links">
          <li><a href="#">Men's Clothing</a></li>
          <li><a href="#">Women's Clothing</a></li>
          <li><a href="#">Kids' Clothing</a></li>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>About</h3>
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Connect</h3>
        <ul className="social-icons">
          <li><a href="https://twitter.com" className="icon-link twitter"><FaTwitter /></a></li>
          <li><a href="https://facebook.com" className="icon-link facebook"><FaFacebook /></a></li>
          <li><a href="https://instagram.com" className="icon-link instagram"><FaInstagram /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

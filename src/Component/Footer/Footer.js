import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer"  style={{
      background: "linear-gradient(to right, rgb(113, 4, 113), rgb(40, 38, 38))",
    }}>
      <div className="footer-col">
        <h3 style={{marginLeft: '29px'}}>Shop</h3>
        <ul className="footer-links">
         
        <li  className="font-bold"><Nav.Link as={Link} to="/productitem">Men's Clothing</Nav.Link></li>  
        <li  className="font-bold">  <Nav.Link as={Link} to="/womensclothing" >Women's Clothing</Nav.Link></li>
        <li  className="font-bold"><Nav.Link as={Link} to="/kidsclothing" >Kids' Clothing</Nav.Link></li>
        <li  className="font-bold"><Nav.Link as={Link} to="/shoes">Shoes</Nav.Link></li>
        <li  className="font-bold"><Nav.Link as={Link} to="/accessories">Electronics</Nav.Link></li>
        
        </ul>
      </div>
      <div className="footer-col">
        <h3 style={{marginLeft: '29px'}}>About</h3>
        <ul className="footer-links">
        <li  className="font-bold"><Nav.Link as={Link} to="/about">About Us</Nav.Link></li>
         
          <li  className="font-bold"><Nav.Link as={Link} to="/contact">Contact us</Nav.Link></li>
        
          <li  className="font-bold"><Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link></li>
         
          <li  className="font-bold"><Nav.Link as={Link} to="/terms">Terms and condition</Nav.Link></li>
          
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

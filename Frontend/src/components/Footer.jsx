import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col brand">
          <div className="logo">RentEase</div>
          <p className="tagline">Find your perfect rental property with our comprehensive platform. From cozy apartments to luxury homes, we have something for everyone.</p>
          <div className="socials">
            <a href="#" className="social"><span className="ico fb"/></a>
            <a href="#" className="social"><span className="ico tw"/></a>
            <a href="#" className="social"><span className="ico ig"/></a>
          </div>
        </div>
        <div className="footer-col links">
          <h5>Quick Links</h5>
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Made with Readdy</a>
        </div>
        <div className="footer-col links">
          <h5>Property Types</h5>
          <a href="#">Apartments</a>
          <a href="#">Houses</a>
          <a href="#">Condos</a>
          <a href="#">Townhouses</a>
          <a href="#">Luxury Rentals</a>
        </div>
      </div>
      <div className="footer-bottom">© 2024 RentEase. All rights reserved.</div>
    </footer>
  );
};

export default Footer;



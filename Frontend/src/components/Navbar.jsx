import React from 'react';
import './Navbar.css';

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">RentEase</a>
        </div>
        <div className="navbar-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/" className="nav-link active">Properties</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
          <a href="/profile" className="nav-link">Profile</a>
        </div>
        <div className="navbar-auth">
          <a href="/login" className="auth-btn login">Login</a>
          <a href="/signup" className="auth-btn signup">Sign In</a>
          <a href="/list-property" className="auth-btn list-property">List Property</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
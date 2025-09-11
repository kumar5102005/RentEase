import React, { useState } from 'react';
import './Navbar.css';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">RentEase</a>
        </div>
        <div className="navbar-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/" className="nav-link">Properties</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
          <a href="/profile" className="nav-link">Profile</a>
        </div>
        <div className="navbar-auth">
          <button onClick={openLoginModal} className="auth-btn login">Login</button>
          <a href="/signup" className="auth-btn signup">Sign In</a>
          <a href="/list-property" className="auth-btn list-property">List Property</a>
        </div>
      </div>
      {showLogin && <LoginModal closeModal={closeLoginModal} />}
    </nav>
  );
};

export default Navbar;
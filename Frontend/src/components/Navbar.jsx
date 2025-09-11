import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [alertUser, setAlertUser] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setAlertUser(e.detail.user);
      setTimeout(() => setAlertUser(null), 4000);
    };
    window.addEventListener('auth:success', handler);
    return () => window.removeEventListener('auth:success', handler);
  }, []);

  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);
  const openRegisterModal = () => setShowRegister(true);
  const closeRegisterModal = () => setShowRegister(false);
  
  return (
    <nav className="navbar">
      {alertUser && (
        <div style={{position:'fixed', top:12, left:'50%', transform:'translateX(-50%)', background:'#22c55e', color:'#fff', padding:'10px 16px', borderRadius:8, boxShadow:'0 6px 16px rgba(0,0,0,0.15)', zIndex:1100}}>
          Successfully auth as {alertUser.fullName || alertUser.email}
        </div>
      )}
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
          <button onClick={openRegisterModal} className="auth-btn signup">Sign Up</button>
          <a href="/list-property" className="auth-btn list-property">List Property</a>
        </div>
      </div>
      {showLogin && <LoginModal closeModal={closeLoginModal} />}
      {showRegister && <SignupModal closeModal={closeRegisterModal} />}
    </nav>
  );
};

export default Navbar;
import React from 'react';
import './LoginModal.css';

const LoginModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>×</button>
        <div className="modal-header">
          <div className="icon-container">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2>Welcome Back</h2>
          <p>Login to your RentEase account to continue</p>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
        <div className="modal-footer">
          <p>Don't have an account? <a href="#">Sign up here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
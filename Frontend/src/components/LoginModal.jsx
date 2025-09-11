import React, { useState } from 'react';
import './LoginModal.css';
import axios from 'axios';

const LoginModal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post('http://localhost:5000/auth/login', { email, password }, { withCredentials: true });
      window.dispatchEvent(new CustomEvent('auth:success', { detail: { user: data.user } }));
      setLoading(false);
      closeModal();
    } catch (err) {
      setLoading(false);
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

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
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="login-button" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
            {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
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
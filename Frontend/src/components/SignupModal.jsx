import React, { useState } from 'react';
import './SignupModal.css';
import axios from 'axios';

const StepDots = ({ step }) => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
    <span style={{ width: 28, height: 28, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: step === 1 ? '#2F54EB' : '#E6F0FF', color: step === 1 ? '#fff' : '#2F54EB', fontWeight: 600 }}>1</span>
    <span style={{ width: 28, height: 28, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: step === 2 ? '#2F54EB' : '#E6F0FF', color: step === 2 ? '#fff' : '#2F54EB', fontWeight: 600 }}>2</span>
  </div>
);

const SignupModal = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    subscribe: true,
    agree: false,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const next = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const back = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    try {
      await axios.post('http://localhost:5000/auth/signup', {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        street: form.street,
        city: form.city,
        state: form.state,
        zip: form.zip,
        country: form.country,
        subscribe: form.subscribe,
      }, { withCredentials: true });
      setMessage('Account created. You are now logged in.');
      setLoading(false);
      // fire global success event for navbar alert
      window.dispatchEvent(new CustomEvent('auth:success', { detail: { user: { fullName: form.fullName, email: form.email } } }));
      closeModal();
    } catch (err) {
      setLoading(false);
      setError(err?.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-overlay" onClick={closeModal}>
      <div className="signup-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="signup-close" onClick={closeModal}>×</button>

        <div className="signup-steps">
          <span className={`signup-step ${step === 1 ? 'active' : ''}`}>1</span>
          <span className={`signup-step ${step === 2 ? 'active' : ''}`}>2</span>
        </div>
        <div className="signup-title">Join RentEase</div>
        <div className="signup-subtitle">Create your account and find your perfect rental home</div>

        {step === 1 && (
          <form onSubmit={next}>
            <div className="signup-grid">
              <div className="signup-field">
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" name="fullName" placeholder="Enter your full name" value={form.fullName} onChange={onChange} />
              </div>
              <div className="signup-field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" placeholder="Enter your phone number" value={form.phone} onChange={onChange} />
              </div>
              <div className="signup-field" style={{ gridColumn: '1 / span 2' }}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" value={form.email} onChange={onChange} />
              </div>
              <div className="signup-field">
                <label htmlFor="password">Password *</label>
                <input type="password" id="password" name="password" placeholder="Create a password" value={form.password} onChange={onChange} />
              </div>
              <div className="signup-field">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" value={form.confirmPassword} onChange={onChange} />
              </div>
            </div>
            <div className="signup-actions">
              <button type="submit" className="btn-primary">Continue to Preferences →</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={submit}>
            <div className="signup-grid">
              <div className="signup-field" style={{ gridColumn: '1 / span 2' }}>
                <label htmlFor="street">Street Address</label>
                <input id="street" name="street" placeholder="Enter your street address" value={form.street} onChange={onChange} />
              </div>
              <div className="signup-field">
                <label htmlFor="city">City</label>
                <input id="city" name="city" placeholder="Enter your city" value={form.city} onChange={onChange} />
              </div>
              <div className="signup-field">
                <label htmlFor="state">State/Province</label>
                <input id="state" name="state" placeholder="Enter your state/province" value={form.state} onChange={onChange} />
              </div>
              <div className="signup-field">
                <label htmlFor="zip">ZIP/Postal Code</label>
                <input id="zip" name="zip" placeholder="Enter your ZIP/postal code" value={form.zip} onChange={onChange} />
              </div>
              <div className="signup-field">
                <label htmlFor="country">Country</label>
                <input id="country" name="country" placeholder="Enter your country" value={form.country} onChange={onChange} />
              </div>
            </div>

            <div className="signup-checks">
              <label>
                <input type="checkbox" name="subscribe" checked={form.subscribe} onChange={onChange} />
                Send me property updates and newsletters
              </label>
              <label>
                <input type="checkbox" name="agree" checked={form.agree} onChange={onChange} />
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <div className="signup-actions">
              <button onClick={back} className="btn-secondary">← Back</button>
              <button type="submit" className="btn-primary" disabled={!form.agree || loading}>{loading ? 'Creating...' : 'Create Account'}</button>
            </div>
            {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
            {message && <div style={{ color: 'green', marginTop: 8 }}>{message}</div>}
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupModal;



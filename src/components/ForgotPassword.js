import React from 'react'
import { useState } from 'react';
import { forgotPassword } from '../services/authService';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await forgotPassword(email);
        setMessage('Password reset link sent to your email');
        setError('');
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to send reset link');
        setMessage('');
      }
    };
  
    return (
      <div className="forgot-password-container">
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <h2>Forgot Password</h2>
          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
  
          <button type="submit" className="btn-reset">Send Reset Link</button>
          
          <div className="form-footer">
            <a href="/login">Back to Login</a>
          </div>
        </form>
      </div>
    );
  }
export default ForgotPassword

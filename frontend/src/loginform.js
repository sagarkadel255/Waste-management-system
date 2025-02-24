import React, { useState } from 'react';
import axiosInstance from './axios'; // Use the configured Axios instance
import './loginform.css';

const LoginForm = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(''); // Add error state for displaying validation messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });

      // Store the JWT token in localStorage (if your backend returns a token)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      console.log('Login successful', response.data);
      closeModal(); // Close the modal after successful login
    } catch (error) {
      // Handle errors from the backend
      const errorMessage = error.response?.data?.message || 'An error occurred during login';
      setError(errorMessage);
      console.error('Error logging in', errorMessage);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>

        <div className="form-container">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group remember-me">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="create-account">
            Don't have an account? <a href="/registerform">Create Account</a>
          </p>
        </div>

        <div className="modal-image">
          <img src={process.env.PUBLIC_URL + "/images/prson.jpg"} alt="background" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
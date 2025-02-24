import React, { useState } from 'react';
import axiosInstance from './axios'; // Ensure this is correctly configured
import './registerform.css';

const RegisterForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Input validation
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (name.length < 5) {
      setError('Name must be at least 5 characters long');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      setError('Email must be a valid Gmail address');
      return;
    }

    if (password.length < 9 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      setError('Password must be at least 9 characters long and contain both letters and numbers');
      return;
    }

    try {
      // Send a POST request to the backend
      const response = await axiosInstance.post('/auth/register', {
        name,
        email,
        password,
      });

      console.log('Registration successful', response.data);
      closeModal(); // Close the modal after successful registration
      window.location.href = '/'; // Redirect to home page
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred during registration';
      setError(errorMessage);
      console.error('Error registering user:', errorMessage);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>

        <div className="form-container">
          <h2>Register</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <button type="submit">Register</button>
          </form>
          <p className="create-account">
            Already have an account? <a href="/loginform">Sign in</a>
          </p>
        </div>

        <div className="modal-image">
          <img src={process.env.PUBLIC_URL + "/images/prson.jpg"} alt="background" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

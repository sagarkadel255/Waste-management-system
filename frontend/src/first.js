import React, { useState } from 'react';
import LoginForm from './loginform'; // Import LoginForm
import './first.css';

const First = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section id="home" className="first-section">
      <div className="home-content">
        <h1>Welcome Home <span>Waste Not, Want Not!</span></h1>
        <p>Join us in transforming waste into a sustainable future!</p>
        <button className="btn btn-success btn-lg" onClick={() => setShowLogin(true)}>
          Get Started
        </button>
      </div>

      <div className="home-img">
        <img 
          src={process.env.PUBLIC_URL + "/images/hospital.jpg"} 
          alt="Hospital setting for waste management" 
        />
      </div>

      {/* Show Login Form Modal when button is clicked */}
      {showLogin && <LoginForm closeModal={() => setShowLogin(false)} />}
    </section>
  );
};

export default First;
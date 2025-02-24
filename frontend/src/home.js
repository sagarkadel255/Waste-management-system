import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import First from "./first";
import Second from "./second";
import Third from "./third";
import About from "./about";
import Event from "./event";
import Service from "./service";
import Contact from "./contact";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";
import "./home.css";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeLogin = () => setShowLogin(false);
  const closeRegister = () => setShowRegister(false);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={openLogin}
              >
                <FontAwesomeIcon icon={faSignInAlt} /> Sign In
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-success btn-sm"
                onClick={openRegister}
              >
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <First /> {/* First component */}
        <Second /> {/* Second component */}
        <Third /> {/* Third component */}
      </section>
      <section id="events">
        <Event />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Modals for Login and Register */}
      {showLogin && <LoginForm closeModal={closeLogin} />}
      {showRegister && <RegisterForm closeModal={closeRegister} />}
    </div>
  );
};

export default Home;
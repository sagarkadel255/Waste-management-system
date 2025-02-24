import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <h3>Phone</h3>
          <p>9821687711</p>

          <h3>Email</h3>
          <p>sagarkadel987@gmail.com</p>

          <h3>Address</h3>
          <p>
            Lalitpur, Nepal
            <br />
            Mahalaxmi 6, Tikathali
          </p>

          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
import React from 'react';
import './second.css';

const Second = () => {
  return (
    <section id="second" className="second-section">
      <div className="second-page">
        <div className="container text-center">
          {/* Stay Connected Section */}
          <div className="stay-connected">
            <h2>Stay Connected</h2>
            <p className="lead">Feature to enhance your waste management experience</p>
            <p>Discover the key features of our waste management system to make your experience seamless and efficient.</p>
          </div>

          {/* Service Categories Section */}
          <div className="service-categories">
            <div className="row">
              <div className="col-md-4">
                <h3>Service Categories</h3>
                <p>Explore our main service categories with detailed descriptions and action buttons.</p>
                <a href="#services" className="btn btn-outline-primary">Learn more →</a>
              </div>

              {/* Upcoming Events Section */}
              <div className="col-md-4">
                <h3>Upcoming Events</h3>
                <p>Stay updated on upcoming events and join with a click of a button.</p>
                <a href="#events" className="btn btn-outline-primary">Learn more →</a>
              </div>

              {/* User Notifications Section */}
              <div className="col-md-4">
                <h3>User Notifications</h3>
                <p>Receive important details about us and keep track of your activities within the system.</p>
                <a href="#about" className="btn btn-outline-primary">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
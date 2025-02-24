import React from "react";
import "./about.css"; // Ensure this CSS file exists

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Leading the way in sustainable waste management.</p>
      </header>

      <section className="about-us-section">
        <div className="about-us-content">
          <h2>Who We Are</h2>
          <p>
            We provide innovative and eco-friendly waste management solutions to
            ensure a cleaner and greener future.
          </p>
        </div>
        <div className="about-us-image">
          <img src="/images/managingwaste.jpg" alt="Waste Management" />
        </div>
      </section>

      <section className="about-us-services">
        <h2>What We Do</h2>
        <div className="about-us-service-container">
          <div className="about-us-card">
            <h2>Waste Sorting</h2>
            <img src="/images/sortwaste.jpg" alt="Waste Sorting" />
            <p>Efficiently sorting waste into recyclable categories.</p>
            <p>
              Proper waste sorting helps in reducing pollution, conserving
              natural resources, and improving recycling efficiency. By
              separating waste at the source, we make it easier to process
              recyclable materials and reduce landfill waste.
            </p>
          </div>

          <div className="about-us-card">
            <h2>What is Recycling</h2>
            <img src="/images/wasterecycle.jpg" alt="Recycling" />
            <p>Reusing waste materials to reduce environmental impact.</p>
            <p>
              Recycling helps transform waste into valuable resources. It reduces
              the need for raw material extraction, saves energy, and decreases
              greenhouse gas emissions. Encouraging responsible recycling
              practices leads to a healthier planet.
            </p>
          </div>

          <div className="about-us-card">
            <h2>Managing Waste</h2>
            <img src="/images/managingwastes.jpg" alt="E-Waste" />
            <p>Proper disposal and management of electronic waste.</p>
            <p>
              Electronic waste contains hazardous materials that can harm the
              environment if not disposed of correctly. Our waste management
              strategies ensure safe disposal, recycling, and recovery of
              valuable materials from e-waste.
            </p>
          </div>

          <div className="about-us-card">
            <h2>Zero Waste</h2>
            <img src="/images/zerowast.jpg" alt="Zero Waste" />
            <p>Minimizing waste to create a sustainable environment.</p>
            <p>
              Zero waste initiatives focus on reducing waste generation,
              promoting composting, and encouraging sustainable consumption
              habits. By striving for a circular economy, we can significantly
              reduce environmental harm.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
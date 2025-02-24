import React from 'react';
import './third.css'; // Import the CSS file

const ThirdPage = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="third" className="third-section">
      {/* Top Half: Image with Hover Effect */}
      <div className="top-half">
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + "/images/dispose.jpg"} alt="Waste Management" className="image" />
        </div>
      </div>

      {/* Bottom Half: Three Clickable Boxes */}
      <div className="bottom-half">
        <div className="box" onClick={scrollToServices}>
          <h3>Recycling Revolution</h3>
          <p>Join the green team and recycle like a pro! Sign up now!</p>
        </div>
        <div className="box" onClick={scrollToServices}>
          <h3>Waste Disposal</h3>
          <p>Dispose of waste responsibly. Let us handle the dirty work!</p>
        </div>
        <div className="box" onClick={scrollToServices}>
          <h3>Composting</h3>
          <p>Turn your organic waste into nutrient-rich compost for your garden!</p>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
import React, { useState } from 'react';
import RequestServiceModal from './requestservice';  // Ensure the correct path
import './service.css';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const openModal = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);  // Open modal when service is selected
    setSuccessMessage(''); // Reset the success message when opening the modal
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false); // Close modal when called
  };

  return (
    <div className='service-page'>
      <header>
        <h1>Our Services – Efficient & Sustainable Waste Management</h1>
      </header>

      <section className="services">
        <div className="service-card" id="waste-collection">
          <h2>♻️ Waste Collection & Disposal</h2>
          <p>
            Scheduled waste pickup for residential, commercial, and industrial clients. Safe and compliant disposal of general, hazardous, and medical waste.
          </p>
          <button onClick={() => openModal("Waste Collection & Disposal")}>
            Learn More
          </button>
        </div>

        <div className="service-card" id="industrial-waste">
          <h2>🏭 Industrial & Commercial Waste Solutions</h2>
          <p>
            Customized waste management plans for businesses and factories. Bulk waste removal and disposal for large-scale operations.
          </p>
          <button onClick={() => openModal("Industrial & Commercial Waste Solutions")}>
            Learn More
          </button>
        </div>

        <div className="service-card" id="recycling">
          <h2>🔄 Recycling & Sustainability Initiatives</h2>
          <p>
            Sorting and recycling of plastics, metals, paper, and electronic waste. Organic waste composting solutions for sustainable waste reduction.
          </p>
          <button onClick={() => openModal("Recycling & Sustainability Initiatives")}>
            Learn More
          </button>
        </div>

        <div className="service-card" id="smart-waste">
          <h2>🚛 Smart Waste Management System</h2>
          <p>
            Real-time tracking of waste collection and disposal. Data-driven insights to optimize waste management efficiency.
          </p>
          <button onClick={() => openModal("Smart Waste Management System")}>
            Learn More
          </button>
        </div>

        <div className="service-card" id="hazardous-waste">
          <h2>🛑 Hazardous & Medical Waste Disposal</h2>
          <p>
            Proper handling and disposal of biohazardous and chemical waste. Compliance with environmental and safety regulations.
          </p>
          <button onClick={() => openModal("Hazardous & Medical Waste Disposal")}>
            Learn More
          </button>
        </div>
      </section>

      {/* Only render the modal if it's open */}
      {isModalOpen && (
        <RequestServiceModal 
          selectedService={selectedService} 
          closeModal={closeModal}
          setSuccessMessage={setSuccessMessage} // Pass down setSuccessMessage
        />
      )}

      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Service;
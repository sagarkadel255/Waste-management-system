import React, { useState } from 'react';
import axiosInstance from './axios'; // Import the Axios instance
import './requestservice.css';

const RequestServiceModal = ({ selectedService, closeModal, setSuccessMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    wasteType: '',
    pickupFrequency: '',
    businessType: '',
    wasteVolume: '',
    materials: '',
    composting: '',
    systemType: '',
    wasteCategory: '',
    disposalMethod: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log the payload for debugging

    try {
      // Send the form data to the backend
      const response = await axiosInstance.post('/services/submit', formData);

      // If the request is successful
      if (response.status === 201) {
        setSuccessMessage('Your request has been submitted successfully!');
        closeModal(); // Close the modal
      }
    } catch (error) {
      // Log the error for debugging
      console.error('Error submitting request:', error.response ? error.response.data : error.message);
      setSuccessMessage('Failed to submit request. Please try again.');
    }
  };

  // Render service-specific fields based on the selected service
  const renderServiceSpecificFields = () => {
    switch (selectedService) {
      case "Waste Collection & Disposal":
        return (
          <>
            <div className="rsm-form-group">
              <label htmlFor="wasteType">Type of Waste:</label>
              <select id="wasteType" name="wasteType" value={formData.wasteType} onChange={handleChange} required>
                <option value="general">General Waste</option>
                <option value="hazardous">Hazardous Waste</option>
                <option value="medical">Medical Waste</option>
              </select>
            </div>
            <div className="rsm-form-group">
              <label htmlFor="pickupFrequency">Pickup Frequency:</label>
              <select id="pickupFrequency" name="pickupFrequency" value={formData.pickupFrequency} onChange={handleChange} required>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </>
        );
      case "Industrial & Commercial Waste Solutions":
        return (
          <>
            <div className="rsm-form-group">
              <label htmlFor="businessType">Type of Business:</label>
              <input type="text" id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} required />
            </div>
            <div className="rsm-form-group">
              <label htmlFor="wasteVolume">Estimated Waste Volume (kg/month):</label>
              <input type="number" id="wasteVolume" name="wasteVolume" value={formData.wasteVolume} onChange={handleChange} required />
            </div>
          </>
        );
      case "Recycling & Sustainability Initiatives":
        return (
          <>
            <div className="rsm-form-group">
              <label htmlFor="materials">Materials to Recycle:</label>
              <input type="text" id="materials" name="materials" value={formData.materials} onChange={handleChange} placeholder="e.g., Plastic, Paper, Metal" required />
            </div>
            <div className="rsm-form-group">
              <label htmlFor="composting">Interested in Composting?</label>
              <select id="composting" name="composting" value={formData.composting} onChange={handleChange} required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </>
        );
      case "Smart Waste Management System":
        return (
          <>
            <div className="rsm-form-group">
              <label htmlFor="systemType">Type of System:</label>
              <select id="systemType" name="systemType" value={formData.systemType} onChange={handleChange} required>
                <option value="tracking">Real-Time Tracking</option>
                <option value="analytics">Data Analytics</option>
              </select>
            </div>
          </>
        );
      case "Hazardous & Medical Waste Disposal":
        return (
          <>
            <div className="rsm-form-group">
              <label htmlFor="wasteCategory">Waste Category:</label>
              <select id="wasteCategory" name="wasteCategory" value={formData.wasteCategory} onChange={handleChange} required>
                <option value="biohazard">Biohazard Waste</option>
                <option value="chemical">Chemical Waste</option>
              </select>
            </div>
            <div className="rsm-form-group">
              <label htmlFor="disposalMethod">Preferred Disposal Method:</label>
              <input type="text" id="disposalMethod" name="disposalMethod" value={formData.disposalMethod} onChange={handleChange} required />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rsm-modal-overlay">
      <div className="rsm-modal-content">
        <button className="rsm-close-button" onClick={closeModal}>×</button>
        <h2>Request Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="rsm-form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="rsm-form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="rsm-form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="rsm-form-group">
            <label htmlFor="service">Service:</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} required>
              <option value="Waste Collection & Disposal">Waste Collection & Disposal</option>
              <option value="Industrial & Commercial Waste Solutions">Industrial & Commercial Waste Solutions</option>
              <option value="Recycling & Sustainability Initiatives">Recycling & Sustainability Initiatives</option>
              <option value="Smart Waste Management System">Smart Waste Management System</option>
              <option value="Hazardous & Medical Waste Disposal">Hazardous & Medical Waste Disposal</option>
            </select>
          </div>
          {renderServiceSpecificFields()}
          <button type="submit" className="rsm-submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RequestServiceModal;
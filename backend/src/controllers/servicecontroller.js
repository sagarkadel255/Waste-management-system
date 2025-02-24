const Service = require('../models/service');

const submitServiceRequest = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      service,
      wasteType,
      pickupFrequency,
      businessType,
      wasteVolume,
      materials,
      composting,
      systemType,
      wasteCategory,
      disposalMethod,
    } = req.body;

    // Create a new service request
    const newService = await Service.create({
      name,
      email,
      phone,
      service,
      wasteType,
      pickupFrequency,
      businessType,
      wasteVolume,
      materials,
      composting,
      systemType,
      wasteCategory,
      disposalMethod,
    });

    res.status(201).json({
      message: 'Service request submitted successfully!',
      data: newService,
    });
  } catch (error) {
    console.error('Error submitting service request:', error);
    res.status(500).json({
      message: 'Failed to submit service request.',
      error: error.message,
    });
  }
};

module.exports = {
  submitServiceRequest,
};
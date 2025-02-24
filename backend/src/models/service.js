const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wasteType: {
    type: DataTypes.STRING,
    field: 'waste_type', // Map to the correct column name in the database
  },
  pickupFrequency: {
    type: DataTypes.STRING,
    field: 'pickup_frequency',
  },
  businessType: {
    type: DataTypes.STRING,
    field: 'business_type',
  },
  wasteVolume: {
    type: DataTypes.STRING,
    field: 'waste_volume',
  },
  materials: {
    type: DataTypes.STRING,
  },
  composting: {
    type: DataTypes.STRING,
  },
  systemType: {
    type: DataTypes.STRING,
    field: 'system_type',
  },
  wasteCategory: {
    type: DataTypes.STRING,
    field: 'waste_category',
  },
  disposalMethod: {
    type: DataTypes.STRING,
    field: 'disposal_method',
  },
}, {
  tableName: 'services', // Ensure the table name matches the database
  timestamps: true, // Enable createdAt and updatedAt
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Service;
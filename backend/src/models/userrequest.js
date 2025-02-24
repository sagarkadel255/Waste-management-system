const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./events');

const UserRequest = sequelize.define('UserRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Event,
      key: 'id',
    },
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'user_requests',
  timestamps: false,
});

module.exports = UserRequest;
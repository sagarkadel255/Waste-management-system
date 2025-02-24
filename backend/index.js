require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors'); // Import the cors package
const sequelize = require('./src/config/database'); // Path to database.js
const authRoutes = require('./src/routes/authRoutes'); // Path to authRoutes.js
const eventRoutes = require('./src/routes/eventroutes'); // Path to eventroutes.js
const userRequestRoutes = require('./src/routes/userrequestroutes'); // Path to userrequestroutes.js
const serviceRoutes = require('./src/routes/serviceroutes'); // Path to serviceroutes.js

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  credentials: true, // Allow cookies and credentials
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/events', eventRoutes); // Event routes
app.use('/api/user-requests', userRequestRoutes); // User request routes
app.use('/api/services', serviceRoutes); // Service request routes

// Debug environment variables
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const userRequestController = require('../controllers/userrequestcontroller'); // Path to userrequestcontroller.js

const router = express.Router();

// Submit a user request
router.post('/', userRequestController.submitrequest);

module.exports = router;
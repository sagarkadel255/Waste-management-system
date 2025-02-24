const express = require('express');
const eventController = require('../controllers/eventcontroller'); // Path to eventcontroller.js

const router = express.Router();

// Fetch all events
router.get('/', eventController.getallevents);

module.exports = router;
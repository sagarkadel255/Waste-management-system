const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/servicecontroller');

// POST /api/services/submit
router.post('/submit', serviceController.submitServiceRequest);

module.exports = router;
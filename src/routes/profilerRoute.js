// profilerRoute.js
const express = require('express');
const router = express.Router();
const profilerController = require('../controllers/profilerController');
router.get('/cpu-intensive', profilerController.cpuIntensiveTask); // Correct function reference
router.get('/simulate-io', profilerController.simulateIO); // Correct function reference

module.exports = router;

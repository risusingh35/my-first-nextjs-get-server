// readStreamRoutes.js
const express = require('express');
const router = express.Router();
const readStreamController = require('../controllers/readStreamController');

router.get('/', readStreamController.readStream);

module.exports = router;

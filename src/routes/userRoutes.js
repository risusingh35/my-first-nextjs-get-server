const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const multer = require('multer');

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get all users
router.get('/', userService.getAllUsers);

// Get user by ID
router.get('/:id', userService.getUserById);

// Create a new user
router.post('/', upload.single('image'), userService.createUser);

module.exports = router;

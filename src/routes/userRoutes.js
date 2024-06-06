const express = require('express');
const router = express.Router();
const userService=require('../services/userService')


// Get all users
router.get('/', userService.getAllUsers);

// Get user by ID
router.get('/:id', userService.getUserById);



module.exports = router;

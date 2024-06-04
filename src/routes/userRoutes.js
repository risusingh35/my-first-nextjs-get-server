const express = require('express');
const router = express.Router();
const userService=require('../services/userService')
// Example users array
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// Get all users
router.get('/', userService.getAllUsers);

// Get user by ID
router.get('/:id', userService.getUserById);



module.exports = router;

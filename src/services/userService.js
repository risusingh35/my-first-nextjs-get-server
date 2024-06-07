const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    console.log('req.body:', req.body);
    console.log('req.file:', req.file);

    const userData = {
      name: req.body.name,
      role: req.body.role,
      status: req.body.status,
      email: req.body.email,
      contact: req.body.contact,
      image: req.file ? req.file.buffer : null,
    };

    const user = await User.create(userData);

    // Emit notification to admin
    // const io = req.app.get("io");
    // io.emit("userCreated", { user });

    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

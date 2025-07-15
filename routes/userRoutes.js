const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.post('/', async (req, res) => {
  try {
    const { language, gender, birthYear } = req.body;

    if (!language || !gender || !birthYear) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = new User({ language, gender, birthYear });
    await user.save();

    res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ createAt: -1 });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

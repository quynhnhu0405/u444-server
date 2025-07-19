const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /feedback - submit feedback
router.post('/', async (req, res) => {
  try {
    const { experience, flavor, suggestion } = req.body;
    const feedback = new Feedback({ experience, flavor, suggestion });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted', feedback });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /feedback - get all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /feedback - submit feedback
router.post('/', async (req, res) => {
  try {
    const { tableNumber, experience, flavor, suggestion } = req.body;
    const feedback = new Feedback({ tableNumber, experience, flavor, suggestion });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted', feedback });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// PUT /feedback/:id/note - update note for a specific feedback
router.put('/:id/note', async (req, res) => {
  try {
    const { id } = req.params;
    const { note } = req.body;

    if (typeof note !== 'string') {
      return res.status(400).json({ error: 'Note must be a string.' });
    }

    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      { note },
      { new: true } // Trả về document sau khi update
    );

    if (!updatedFeedback) {
      return res.status(404).json({ error: 'Feedback not found.' });
    }

    res.json({ message: 'Note updated successfully', feedback: updatedFeedback });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
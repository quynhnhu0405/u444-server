const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  experience: { type: Number, min: 1, max: 5, required: true },
  flavor: { type: Number, min: 1, max: 5, required: true },
  suggestion: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema); 
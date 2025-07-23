const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  tableNumber: { type: String, required: true },
  experience: { type: Number, min: 1, max: 5, required: true },
  flavor: { type: Number, min: 1, max: 5, required: true },
  suggestion: { type: String },
  note: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema); 
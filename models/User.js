const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  language: { type: String, required: true },
  gender: { type: String, required: true },
  birthYear: { type: Number, required: true }, 
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);

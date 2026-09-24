const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  ownerName: { type: String, required: true }
});

module.exports = mongoose.model('Property', propertySchema);
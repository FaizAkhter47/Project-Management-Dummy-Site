const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// 1. Get all properties (Property Search & Listing)
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Add a new property (For Owner Dashboard)
router.post('/', async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
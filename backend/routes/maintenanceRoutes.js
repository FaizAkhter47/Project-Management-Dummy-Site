const express = require('express');
const router = express.Router();
const Maintenance = require('../models/Maintenance');

// Tenant submits issue
router.post('/', async (req, res) => {
  try {
    const request = await Maintenance.create(req.body);
    res.status(201).json({ message: 'Request created!', request });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// View all issues
router.get('/', async (req, res) => {
  try {
    const issues = await Maintenance.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
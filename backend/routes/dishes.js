// backend/routes/dishes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all dishes
router.get('/', (req, res) => {
  db.query('SELECT * FROM dishes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST a new dish
router.post('/', (req, res) => {
  const { name, description, price } = req.body;
  db.query(
    'INSERT INTO dishes (name, description, price) VALUES (?, ?, ?)',
    [name, description, price],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Dish added', dishId: result.insertId });
    }
  );
});

module.exports = router;

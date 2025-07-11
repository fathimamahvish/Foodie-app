const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const {
    customer_name,
    email,
    phone,
    address,
    items,
    total_amount,
    payment_method,
    payment_status,
    booking_date,
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (customer_name, email, phone, address, items, total_amount, payment_method, payment_status, booking_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [customer_name, email, phone, address, items, total_amount, payment_method, payment_status, booking_date],
    (err, result) => {
      if (err) {
        console.error("❌ MySQL error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Booking saved successfully!' });
    }
  );
});

router.get("/ping", (req, res) => {
  res.send("Bookings route is alive ✅");
});

module.exports = router;



const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dishRoutes = require("./routes/dishes");
const bookingRoutes = require("./routes/bookings");
const db = require("./db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dishes", dishRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello from backend");
});

app.get("/api/check-db", (req, res) => {
  db.query("SELECT DATABASE() AS db", (err, results) => {
    if (err) {
      console.error("❌ Query error:", err.message);
      return res.status(500).send("DB query failed: " + err.message);
    }
    res.send(`✅ Connected to DB: ${results[0].db}`);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home1.js";
import About from "./Components/About.js";
import Work from "./Components/Work.js";
import Testimonial from "./Components/Testimonial.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";
import Order from "./Components/Order";
import Cart from "./Components/Cart";
import Booking from "./Components/Booking";
import Payment from "./Components/Payment";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/order" element={<Order />} /> {/* ✅ New route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Booking = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const dish = location.state?.dish;
  const paymentMethod = location.state?.paymentMethod;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const saveBooking = async () => {
    const bookingData = {
      customer_name: name,
      phone: phone,
      booking_date: date,
      items: dish.name,
      total_amount: dish.price,
      payment_method: paymentMethod === "paypal" ? "PayPal" : "Cash on Delivery",
      payment_status: paymentMethod === "paypal" ? "Paid" : "Pending",
    };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();

      if (res.ok) {
        clearCart();
        setConfirmed(true);
        setError("");
      } else {
        setError("Failed to save booking: " + result.error);
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError("Server error. Please try again later.");
    }
  };

  const handleCODSubmit = async (e) => {
    e.preventDefault();
    await saveBooking();
  };

  if (!dish && !confirmed) {
    return (
      <div className="order-page">
        <h2 className="primary-heading">No dish selected</h2>
        <p>Please go to the cart and click “Buy” to select a dish.</p>
      </div>
    );
  }

  return (
    <div className="order-page">
      <h2 className="primary-heading">
        {confirmed ? "Booking Confirmed ✅" : "Confirm Your Booking"}
      </h2>

      <div className="booking-card">
        {!confirmed ? (
          <>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>
              <strong>₹{dish.price}</strong>
            </p>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {paymentMethod === "cod" ? (
              <form className="booking-form" onSubmit={handleCODSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <button className="primary-button" type="submit">
                  Confirm Booking
                </button>
              </form>
            ) : (
              <>
                <p>Enter your name and phone before proceeding to PayPal:</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />

                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: dish.price.toString(),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(async (details) => {
                      await saveBooking();
                    });
                  }}
                  onError={(err) => {
                    console.error("PayPal Error", err);
                    setError("PayPal payment failed.");
                  }}
                />
              </>
            )}
          </>
        ) : (
          <>
            <h3>Receipt</h3>
            <p>
              <strong>Dish:</strong> {dish.name}
            </p>
            <p>
              <strong>Price:</strong> ₹{dish.price}
            </p>
            <p>
              <strong>Payment Method:</strong>{" "}
              {paymentMethod === "paypal" ? "PayPal" : "Cash on Delivery"}
            </p>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <button
              className="add-to-cart-button"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;







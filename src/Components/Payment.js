import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dish = location.state?.dish;

  const [paymentMethod, setPaymentMethod] = useState("cod"); // default: COD

  if (!dish) {
    return (
      <div className="order-page">
        <h2 className="primary-heading">No dish selected</h2>
        <p>Please go back and select a dish to proceed.</p>
      </div>
    );
  }

  const handleContinue = () => {
    // Navigate to payment or booking confirmation based on method
    navigate("/confirm", {
      state: {
        dish,
        paymentMethod,
      },
    });
  };

  return (
    <div className="order-page">
      <h2 className="primary-heading">Choose Payment Method</h2>

      <div className="booking-card">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <p>
          <strong>Total: ₹{dish.price}</strong>
        </p>

        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery (COD)
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            Pay with PayPal
          </label>
        </div>

        <button className="primary-button" onClick={handleContinue}>
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;

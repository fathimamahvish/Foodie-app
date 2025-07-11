import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="order-page">
      <h2 className="primary-heading">Your Cart</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button className="primary-button" onClick={() => navigate("/order")}>
            Go to Menu
          </button>
        </div>
      ) : (
        <div className="dish-grid">
          {cart.map((dish, index) => (
            <div key={index} className="dish-card">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p><strong>₹{dish.price}</strong></p>
              <button className="add-to-cart-button" onClick={() => removeFromCart(dish.id)}>Remove</button>
              <button
                className="primary-button"
                onClick={() => navigate("/payment", { state: { dish } })}
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;



import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Order = () => {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("latest"); // 🔁 New: Sorting state
  const { cart, addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error("Error fetching dishes:", err));
  }, []);

  // 🔍 Filter dishes by search term
  let filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔁 Sort dishes based on selected option
  filteredDishes = [...filteredDishes].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0; // "latest" – no sorting (or handled server-side)
    }
  });

  return (
    <div className="order-page px-4 py-6">
      <h2 className="primary-heading text-3xl font-bold mb-4">Order Menu</h2>

      {/* 🔍 Search & 🔁 Filter Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full md:max-w-md"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="latest">Sort by: Latest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {/* ✅ Show cart item count */}
      {cart.length > 0 && (
        <p className="cart-count text-lg font-semibold mb-4">
          🛒 Items in Cart: {cart.length}
        </p>
      )}

      {/* 🍽️ Dish List */}
      {filteredDishes.length === 0 ? (
        <p className="text-gray-600">No dishes found.</p>
      ) : (
        <div className="dish-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="dish-card border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-1">{dish.name}</h3>
              <p className="text-gray-600 mb-2">{dish.description}</p>
              <p className="font-semibold text-green-700 mb-3">₹{dish.price}</p>
              <button
                className="add-to-cart-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => addToCart(dish)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;



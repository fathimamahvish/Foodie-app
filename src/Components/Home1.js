import React, { useEffect, useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/dishes")
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dishes:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeling, chopping
            & marinating, so you can cook fresh food.
          </p>
          <button
            className="secondary-button"
            onClick={() => navigate("/order")}
          >
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>

      {/* Dish List Section */}
      <div className="dish-list-section">
        <h2 className="primary-heading">Popular Dishes</h2>
        {loading ? (
          <p>Loading...</p>
        ) : dishes.length === 0 ? (
          <p>No dishes available.</p>
        ) : (
          <div className="dish-slider">
            {dishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <p>
                  <strong>₹{dish.price}</strong>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


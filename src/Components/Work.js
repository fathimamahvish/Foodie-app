import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Explore a wide variety of delicious,chef-crafted meals tailored to your taste. Whether you're craving comfort food or something fresh and healthy, we've got you covered.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your schedule with total flexibility. Whether it’s once a week or every day, you decide how often you want your meals delivered — no commitments, no hassle. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy quick and reliable doorstep delivery. Your meals arrive fresh, right on time, so you can focus on what matters most — enjoying great food.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Discover how simple and effortless healthy living can be. From
          selecting your favorite meals to enjoying them at your doorstep — we
          make nourishing your body an easy, enjoyable experience.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

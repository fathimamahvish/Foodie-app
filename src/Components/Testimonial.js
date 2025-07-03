import React from "react";
import ProfilePic from "../Assets/mine3.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What are they saying?</h1>
        <p className="primary-text">
          Hear from our happy customers who’ve transformed their routines with
          our service. From the quality of meals to the seamless delivery, real
          stories reflect real satisfaction.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile" src={ProfilePic} alt="" />
        <p>
          “Incredible service, always on time. I feel better, eat better, and
          I’ve recommended it to all my friends!” 
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Fathima Mahvish</h2>
      </div>
    </div>
  );
};

export default Testimonial;

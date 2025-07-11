import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Foodie Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/fathima-mahvish-094605346"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>
          <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
            <BsYoutube />
          </a>
          <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>87-228-77-020</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>End-to-End Encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

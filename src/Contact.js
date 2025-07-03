import React from "react";

const Contact = () => {
  return <div className="contact-page-wrapper">
    <h1 className="primary-heading">Having question in mind?</h1>
    <h2 className="primary-heading">Let us help you</h2>
    <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com"/>
        <button className="secondary-button">Submit</button>
    </div>
  </div>;
};

export default Contact;

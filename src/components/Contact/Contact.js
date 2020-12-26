import React from "react";
import "./Contact.scss";
import Social from "./../Social/Social";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="left-container">
        <h1>
          Contact <span>Me</span>
        </h1>
        <img src="./images/contact.svg" alt="" />
        <p>
          Discuss a project or just want to say hi? <br /> My Inbox is open for
          all.
        </p>
        <h6>
          Discuss a project or just want to say hi? My Inbox is open for all.
        </h6>
        <Social />
      </div>
      <div className="right-container">
        <img src="./images/contact.svg" alt="" />
      </div>
    </div>
  );
};

export default Contact;

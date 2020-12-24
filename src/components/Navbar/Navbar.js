import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="name">Bijan Kundu</div>
        <div className="nav-items">
          <div className="item">Home</div>
          <div className="item">Experience</div>
          <div className="item">Education</div>
          <div className="item">Works</div>
          <button className="item">HIRE</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

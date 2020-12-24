import React from "react";
import "./LandingPage.scss";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoWhatsapp } from "react-icons/io";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <div className="left-container">
          <p>
            Hey, I'm <span>Bijan</span>
          </p>
          <p>
            A passionate developer 🚀 having an experience of building Web &
            Mobile with JavaScript / Reactjs / Nodejs and some other cool
            libraries and frameworks.
          </p>
          <div className="social-icons">
            <div className="icons">
              <FaGithub size={50} color="#1b1c1d" />
            </div>
            <div className="icons">
              <FaLinkedin size={50} color="#0e76a8" />
            </div>
            <div className="icons">
              <FcGoogle size={50} />
            </div>
            <div className="icons">
              <IoLogoWhatsapp size={50} color="#2db842" />
            </div>
            <div className="icons">
              <FaFacebook size={50} color="#3b5998" />
            </div>
          </div>
          <div className="buttons-div">
            <button>Contact Me</button>
            <button>See my Resume</button>
          </div>
        </div>
        <div className="right-container">
          <img src="./Header-Img.svg" alt="" />
        </div>
      </div>
      <div className="wave-div">
        <img src="./landing.svg" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;

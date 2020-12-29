import React from "react";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <div className="internships">
        <h1>Internships</h1>
        <div className="intern">
          <h4>FRONTEND DEVELOPMENT INTERN</h4>
          <div>
            <h5>1 Nov - 30 Nov</h5>
          </div>
          <p>
            <em>Pantree By Thomson, Kochi, Kerala, India</em>
          </p>
          <ul>
            <li>
              Developed a web application for restaurant order management using
              ReactJs.
            </li>
          </ul>
        </div>
        <div className="intern">
          <h4>TRAINEE INTERN</h4>
          <div>
            <h5>Nov 2020 - Present</h5>
          </div>
          <p>
            <em>Ardent Computech Pvt. Ltd.,Kolkata ,India</em>
          </p>
          <ul>
            <li>
              Learning to build hybrid mobile application using React Native.
            </li>
          </ul>
        </div>
      </div>
      <div className="volunteer">
        <h1>Volunteer Experience</h1>
        <div className="intern">
          <h4>WEB DEVELOPMENT HEAD</h4>
          <div>
            <h5>2019 - Present</h5>
          </div>
          <p>
            <em>Xplorica, FIEM, Kolkata, India</em>
          </p>
          <ul>
            <li>Working on website for the club and maintainance.</li>
            <li>Leading a team with junior developers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

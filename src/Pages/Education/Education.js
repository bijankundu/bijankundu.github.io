import React from "react";
import "./Education.scss";
import { BsArrowUp } from "react-icons/bs";

const Education = () => {
  return (
    <div className="education-wrapper">
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="college">
            <h1>BACHELOR OF TECHNOLOGY, COMPUTER SCIENCE & ENGINEERING</h1>
            <div>
              <h6>2018 - Present</h6>
            </div>
            <p>
              <em>Future Institute Of Engineering & Management, Kolkata</em>
            </p>
          </div>
        </div>
      </div>
      <div className="down-arrow">
        <BsArrowUp size={70} />
      </div>
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="school1">
            <h1>CBSE [ HIGHER SECONDARY ]</h1>
            <div>
              <h6>2016 - 2018</h6>
            </div>
            <p>
              <em>Techno India Group Public School, Siliguri</em>
            </p>
          </div>
        </div>
      </div>
      <div className="down-arrow">
        <BsArrowUp size={70} />
      </div>
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="school2">
            <h1>ICSE [ SECONDARY ]</h1>
            <div>
              <h6>2008 - 2018</h6>
            </div>
            <p>
              <em>Don Bosco School, Siliguri</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

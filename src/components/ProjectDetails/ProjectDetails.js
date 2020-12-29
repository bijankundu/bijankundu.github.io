import React from "react";
import "./ProjectDetails.scss";
import { useParams } from "react-router-dom";
import { itemsArr } from "./../../data";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();

  const item = itemsArr[id - 1];

  return (
    <div className="project-details-wrapper">
      <h1>{item.name}</h1>
      <div className="project-details">
        <div className="inner-wrapper">
          <div className="link-desc">
            <h2>
              {`Project URL : `}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 0.7 }}
                >
                  {item.link}
                </motion.p>
              </a>
            </h2>
            <h3>DESCRIPTION</h3>
            <h5>{item.details === "" ? item.desc : item.details}</h5>
          </div>
          <div className="tools">
            <h3>TOOLS & TECHNOLOGIES USED :</h3>
            <ul>
              {item.tech.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={item.photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

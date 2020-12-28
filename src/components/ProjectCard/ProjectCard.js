import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      initial={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.3, y: -10 }}
      whileTap={{ scale: 0.5 }}
      className="card"
    >
      <div>
        <h1>{item.name}</h1>
        <p>{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

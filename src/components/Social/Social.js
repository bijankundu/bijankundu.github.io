import React, { useEffect } from "react";
import "./Social.scss";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

const Social = ({ theme, location = "top" }) => {
  useEffect(() => {}, [theme]);

  const socialVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: -20,
      scale: 1.2,
    },
    tap: {
      y: [-20, 20, -20, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="social-icons">
      <ReactTooltip />
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/bijankundu/" data-tip="Github">
        <motion.div variants={socialVariants} initial="initial" whileHover="hover" whileTap="tap" className="icons">
          <FaGithub size={50} color={theme === "light" ? "#1b1c1d" : "#fff"} />
        </motion.div>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/bijankundu/" data-tip="LinkedIn">
        <motion.div variants={socialVariants} initial="initial" whileHover="hover" whileTap="tap" className="icons">
          <FaLinkedin size={50} color="#0e76a8" />
        </motion.div>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="mailto:bijankundu025@gmail.com" data-tip="Email">
        <motion.div variants={socialVariants} initial="initial" whileHover="hover" whileTap="tap" className="icons">
          <FcGoogle size={50} />
        </motion.div>
      </a>
      {location !== "contact" && (
        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/bijan000/" data-tip="Stackoverflow">
          <motion.div variants={socialVariants} initial="initial" whileHover="hover" whileTap="tap" className="icons">
            <FaStackOverflow size={50} color="#f48024" />
          </motion.div>
        </a>
      )}
    </div>
  );
};

export default Social;

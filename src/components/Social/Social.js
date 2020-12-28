import React, { useEffect } from "react";
import "./Social.scss";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const Social = ({ theme, setTheme }) => {
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
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/bijankundu/"
      >
        <motion.div
          variants={socialVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="icons"
        >
          <FaGithub size={50} color={theme === "light" ? "#1b1c1d" : "#fff"} />
        </motion.div>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/bijankundu/"
      >
        <motion.div
          variants={socialVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="icons"
        >
          <FaLinkedin size={50} color="#0e76a8" />
        </motion.div>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:bijankundu025@gmail.com"
      >
        <motion.div
          variants={socialVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="icons"
        >
          <FcGoogle size={50} />
        </motion.div>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="http://wa.me/+919093426094"
      >
        <motion.div
          variants={socialVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="icons"
        >
          <IoLogoWhatsapp size={50} color="#2db842" />
        </motion.div>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/bijan000/"
      >
        <motion.div
          variants={socialVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="icons"
        >
          <FaFacebook size={50} color="#3b5998" />
        </motion.div>
      </a>
    </div>
  );
};

export default Social;

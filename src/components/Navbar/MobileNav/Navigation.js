import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ toggle, isOpen }) => (
  <motion.ul variants={variants} className={isOpen ? "block" : "hidden"}>
    <Link to="/">
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.5 }}
        onClick={toggle}
      >
        Home
      </motion.li>
    </Link>
    <Link to="/experience">
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.5 }}
        onClick={toggle}
      >
        Experience
      </motion.li>
    </Link>
    <Link to="/education">
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.5 }}
        onClick={toggle}
      >
        Education
      </motion.li>
    </Link>
    <Link to="/projects">
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.5 }}
        onClick={toggle}
      >
        Works
      </motion.li>
    </Link>
    <Link to="/contact">
      <motion.li
        variants={liVariants}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.5 }}
        className="hire-mobile"
        onClick={toggle}
      >
        HIRE
      </motion.li>
    </Link>
  </motion.ul>
);

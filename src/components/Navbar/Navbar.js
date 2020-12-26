import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const navBarVariant = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 1,
      },
    },
  };

  const navItemsVariant = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.5,
    },
    button: {
      scale: 1.2,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <div className="navbar-wrapper">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={navBarVariant}
      >
        <div className="name">Bijan Kundu</div>
        <div className="nav-items">
          <motion.div
            initial="initial"
            variants={navItemsVariant}
            whileHover="hover"
            className="item"
          >
            Home
          </motion.div>
          <motion.div
            initial="initial"
            variants={navItemsVariant}
            whileHover="hover"
            className="item"
          >
            Experience
          </motion.div>
          <motion.div
            initial="initial"
            variants={navItemsVariant}
            whileHover="hover"
            className="item"
          >
            Education
          </motion.div>
          <motion.div
            initial="initial"
            variants={navItemsVariant}
            whileHover="hover"
            className="item"
          >
            Works
          </motion.div>
          <motion.button
            initial="initial"
            variants={navItemsVariant}
            whileHover="button"
            className="item"
          >
            HIRE
          </motion.button>
        </div>
      </motion.div>
      <MobileNav />
    </div>
  );
};

export default Navbar;

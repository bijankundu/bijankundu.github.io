import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        <Link to="/" className="name">
          <div>Bijan Kundu</div>
        </Link>
        <div className="nav-items">
          <Link to="/" className="item">
            <motion.div
              initial="initial"
              variants={navItemsVariant}
              whileHover="hover"
            >
              Home
            </motion.div>
          </Link>
          <Link to="/experience" className="item">
            <motion.div
              initial="initial"
              variants={navItemsVariant}
              whileHover="hover"
              className="item"
            >
              Experience
            </motion.div>
          </Link>
          <Link to="/education" className="item">
            <motion.div
              initial="initial"
              variants={navItemsVariant}
              whileHover="hover"
              className="item"
            >
              Education
            </motion.div>
          </Link>
          <Link to="/projects" className="item">
            <motion.div
              initial="initial"
              variants={navItemsVariant}
              whileHover="hover"
              className="item"
            >
              Works
            </motion.div>
          </Link>
          <Link to="/contact" className="item">
            <motion.button
              initial="initial"
              variants={navItemsVariant}
              whileHover="button"
              className="item"
            >
              HIRE
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <MobileNav />
    </div>
  );
};

export default Navbar;

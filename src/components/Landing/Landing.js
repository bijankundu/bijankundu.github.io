import React, { useEffect } from "react";
import "./Landing.scss";
import Social from "./../Social/Social";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const LandingPage = ({ theme, setTheme }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.stop("hidden");
      controls.start("visible");
    } else {
      controls.stop("visible");
      controls.start("hidden");
    }
  }, [controls, inView]);

  const leftContainerVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.5,
      },
    },
  };
  const RightContainerVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.5,
    },
  };

  return (
    <div className="landing-wrapper">
      <div ref={ref} className="landing-container">
        <motion.div
          variants={leftContainerVariants}
          initial="hidden"
          animate={controls}
          className="left-container"
        >
          <p>
            Hey, I'm <span>Bijan</span>
          </p>
          <p>
            A passionate developer 🚀 having experience of building Web & Mobile
            with JavaScript / Reactjs / Nodejs and some other cool libraries and
            frameworks.
          </p>
          <motion.div
            variants={RightContainerVariants}
            initial="hidden"
            animate={controls}
            className="mobile-image"
          >
            <img src="./images/mobile-landing.svg" alt="" />
          </motion.div>
          <Social theme={theme} setTheme={setTheme} />
          <div className="buttons-div">
            <Link to="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="contact"
              >
                Contact Me
              </motion.button>
            </Link>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="resume"
            >
              See my Resume
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          variants={RightContainerVariants}
          initial="hidden"
          animate={controls}
          className="right-container"
        >
          <img src="./images/Header-Img.svg" alt="" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2.5 } }}
        className="wave-div"
      >
        <img src="./images/landing.svg" alt="" />
      </motion.div>
    </div>
  );
};

export default LandingPage;

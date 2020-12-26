import React, { useEffect } from "react";
import "./Projects.scss";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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

  const projectVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const headingVariant = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.5, duration: 1, stiffness: 200 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={projectVariants}
      initial="hidden"
      animate={controls}
      className="projects-wrapper"
    >
      <img src="./images/projects.svg" alt="" />
      <div className="projects">
        <motion.h1 variants={headingVariant}>
          <span>Projects</span> I've Done
        </motion.h1>
        <div className="projects-cards">
          <motion.div
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.5 }}
            className="card"
          >
            <div>
              <h1>Keeper</h1>
              <p>A google keep clone made using ReactJs.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.5 }}
            className="card"
          >
            <div>
              <h1>Budget Guru</h1>
              <p>An expense tracking app to manage all your expenses.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.5 }}
            className="card"
          >
            <div>
              <h1>Xplorica</h1>
              <p>FIEM’S techno-management club’s official website.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.5 }}
            className="card"
          >
            <div>
              <h1>Phoenix</h1>
              <p>FIEM’s official techno-management fest’s website.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.5 }}
            className="card"
          >
            <div>
              <h1>Inshorts API</h1>
              <p>An unofficial API for inshorts new platform.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.5 }}
            className="card"
          >
            <div>
              <h1>Fiber</h1>
              <p>A fictional website for comparing broadband deals.</p>
            </div>
          </motion.div>
        </div>
        <div className="all-projects">
          <motion.button
            initial={{ x: 0, scale: 1 }}
            whileHover={{
              x: [20, -20],
              scale: 1.2,
              transition: { x: { yoyo: Infinity } },
            }}
            whileTap={{
              scale: 0.7,
            }}
          >
            VIEW ALL THE PROJECTS <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

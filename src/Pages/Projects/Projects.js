import React, { useEffect } from "react";
import "./Projects.scss";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./../../components/ProjectCard/ProjectCard";
import { itemsArr } from "../../data";

const Projects = ({ landing }) => {
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
      <div className="projects">
        <motion.h1 variants={headingVariant}>
          <span>Projects</span> I've Done
        </motion.h1>
        <div className="projects-cards">
          {itemsArr.map((item) => {
            if (item.id <= 6) {
              return <ProjectCard key={item.id} item={item} />;
            } else if (landing === false) {
              return <ProjectCard key={item.id} item={item} />;
            }
          })}
        </div>
        {landing && (
          <div className="all-projects">
            <Link to="/projects">
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
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;

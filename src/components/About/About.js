import React, { useEffect } from "react";
import "./About.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3,
        delay: 0.2,
      },
    },
  };
  const RightContainerVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="about-wrapper">
      <img src="./images/projects.svg" alt="" />
      <div ref={ref} className="about">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={leftContainerVariants}
          className="left-div"
        >
          <div className="image-wrapper">
            <img src="./images/about me pic.jpeg" alt="" />
          </div>
        </motion.div>
        <motion.div
          variants={RightContainerVariants}
          initial="hidden"
          animate={controls}
          className="right-div"
        >
          <h1>
            About <span>Me</span>
          </h1>
          <div className="mobile-image-wrapper">
            <img src="./images/about me pic.jpeg" alt="" />
          </div>
          <p>
            I was never the best at academics or sports. I’m just a super
            curious guy. I usually like to share ideas and theories that
            interest me. I spend a lot of time building software and try new
            things. There’s so much more for me to learn. I sometimes document
            the logic, reasoning, and problems encountered during the process of
            learning. A combination of innovation and storytelling is what I
            aspire to do in my life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

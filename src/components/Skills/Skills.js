import React, { useEffect } from "react";
import "./Skills.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { IoLogoSass } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import {
  SiTailwindcss,
  SiPostman,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
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

  const cardVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: [1.5, 0.5, 1],
      opacity: 1,
      duration: 3,
      delay: 0.2,
    },
  };

  const skillsVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
        delay: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", duration: 1, stiffness: 200, delay: 0.2 },
    },
  };

  const date = new Date();
  return (
    <div ref={ref} className="skill-wrapper">
      <motion.h1 initial="hidden" animate={controls} variants={headingVariants}>
        What Can I <span>Do</span> For You?
      </motion.h1>
      <div className="services">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          className="service-card"
        >
          <div>
            <img src="./images/web dev.svg" alt="" />
            <h2>Web Design & Development</h2>
            <p>
              HTML, CSS, JavaScript? You name it.
              <br />I got it covered!
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          className="service-card"
        >
          <div>
            <img src="./images/responsive.svg" alt="" />
            <h2>Responsive Design</h2>
            <p>
              In {date.getFullYear()}, You can't go online without having a
              mobile responsive website
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          className="service-card"
        >
          <div>
            <img src="./images/automation.svg" alt="" />
            <h2>Automation & Scrapping</h2>
            <p>
              I can automate your tasks or scrape datas from different websites.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.h2 variants={skillsVariants} initial="hidden" animate={controls}>
        Languages, frameworks, libraries that I use to build amazing stuffs.
      </motion.h2>
      <motion.div
        variants={skillsVariants}
        initial="hidden"
        animate={controls}
        className="skills"
      >
        <div>
          <FaHtml5 size={70} color="#e44d26" />
        </div>
        <div>
          <FaCss3Alt size={70} color="#264de4" />
        </div>
        <div>
          <IoLogoJavascript size={70} color="#f5de19" />
        </div>
        <div>
          <IoLogoSass size={70} color="#cd6799" />
        </div>
        <div>
          <FaBootstrap size={70} color="#563d7c" />
        </div>
        <div>
          <SiTypescript size={70} color="#2f74c0" />
        </div>
        <div>
          <DiMongodb size={70} color="#449d45" />
        </div>
        <div>
          <IoLogoReact size={70} color="#00d8ff" />
        </div>
        <div>
          <FaNodeJs size={70} color="#539e43" />
        </div>
        <div>
          <SiTailwindcss size={70} color="#1ea4bb" />
        </div>
        <div>
          <SiPostman size={70} color="#f15a24" />
        </div>
        <div>
          <FaGitAlt size={70} color="#de4c36" />
        </div>
        <div>
          <SiFirebase size={70} color="#f6820c" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

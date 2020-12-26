import React from "react";
import { motion, useCycle } from "framer-motion";
import "./MobileNav.scss";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const MobileNav = () => {
  const { innerHeight: height } = window;
  const sidebar = {
    open: (height) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <nav>
      <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div className="background" custom={height} variants={sidebar} />
        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation />
      </motion.div>
      <h1>Bijan Kundu</h1>
    </nav>
  );
};

export default MobileNav;

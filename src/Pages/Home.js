import React from "react";
import Landing from "./../components/Landing/Landing";
import About from "./../components/About/About";
import Skills from "./../components/Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./../components/Contact/Contact";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <Landing theme={theme} setTheme={setTheme} />
      <Projects landing={true} />
      <Skills />
      <About />
      <Contact theme={theme} setTheme={setTheme} />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Top from "./components/utilityButtons/Top/Top";
import Dark from "./components/utilityButtons/Dark/Dark";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const temp = localStorage.theme ? localStorage.theme : "";
    setTheme(temp);
    if (temp === "") localStorage.setItem("theme", "light");
    else if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className={theme === "light" ? "bg-pattern" : "bg-honey"}>
      <Top />
      <Dark theme={theme} setTheme={setTheme} />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home theme={theme} setTheme={setTheme} />
        </Route>
        <Route path="/contact" exact>
          <Contact theme={theme} setTheme={setTheme} />
        </Route>
        <Route path="/experience" exact component={Experience} />
        <Route path="/projects" exact>
          <Projects landing={false} />
        </Route>
        <Route path="/projects/:id" exact component={ProjectDetails} />
        <Route path="/education" exact component={Education} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

import "./Dark.scss";

const Dark = ({ theme, setTheme }) => {
  const handleClick = () => {
    setTheme((prev) => {
      if (prev === "light") {
        localStorage.setItem("theme", "dark");
        return "dark";
      } else {
        localStorage.setItem("theme", "light");
        return "light";
      }
    });
  };

  return (
    <>
      <ReactTooltip />
      <button
        className="dark-button"
        data-tip={`Turn ${theme === "light" ? "off" : "on"} the lights`}
        onClick={() => {
          handleClick();
        }}
      >
        <div>{theme === "light" ? <FaSun color="#ffffff" /> : <FaMoon color="#ffffff" />}</div>
      </button>
    </>
  );
};

export default Dark;

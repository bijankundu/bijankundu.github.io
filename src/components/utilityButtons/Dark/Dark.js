import React, { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
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
    <button
      className="dark-button"
      onClick={() => {
        handleClick();
      }}
    >
      <div>
        {theme === "light" ? (
          <FaSun color="#ffffff" />
        ) : (
          <FaMoon color="#ffffff" />
        )}
      </div>
    </button>
  );
};

export default Dark;

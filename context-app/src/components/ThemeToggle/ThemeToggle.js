import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button className="clickMe" onClick={toggleTheme}>
      Click me
    </button>
  );
};

export default ThemeToggle;

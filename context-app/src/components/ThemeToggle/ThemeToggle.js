import React, { Component } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

export default class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => {
          const { toggleTheme } = themeContext;
          return (
            <button className="clickMe" onClick={toggleTheme}>
              Click me
            </button>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

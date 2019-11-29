import React, { Component } from "react";

import "./Navbar.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

export default class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuthenticated } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav
                  className="appNav"
                  style={{ background: theme.ui, color: theme.text }}
                >
                  <h1 className="appTitle">Hero App</h1>
                  <div>{isAuthenticated ? "Logged" : "Not Logged"}</div>
                  <ul className="appList">
                    <li className="appItem">Home</li>
                    <li className="appItem">About</li>
                    <li className="appItem">Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

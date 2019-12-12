import React, { useContext } from "react";

import "./Navbar.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="appNav" style={{ background: theme.ui, color: theme.text }}>
      <h1 className="appTitle">Music App</h1>
      <div>{isAuthenticated ? "Logged" : "Not Logged"}</div>
      <ul className="appList">
        <li className="appItem">Home</li>
        <li className="appItem">About</li>
        <li className="appItem">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

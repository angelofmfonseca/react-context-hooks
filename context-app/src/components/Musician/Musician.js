import React, { useContext } from "react";

import "./Musician.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Musician = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <section
      className="bookList"
      style={{ background: theme.bg, color: theme.text }}
    >
      <ul className="bookListList">
        <li className="bookListItem" style={{ background: theme.ui }}>
          Imagine Dragons
        </li>
        <li className="bookListItem" style={{ background: theme.ui }}>
          Pearl Jam
        </li>
        <li className="bookListItem" style={{ background: theme.ui }}>
          Incubus
        </li>
        <li className="bookListItem" style={{ background: theme.ui }}>
          Alter Bridge
        </li>
      </ul>
    </section>
  );
};

export default Musician;

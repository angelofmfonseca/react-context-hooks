import React, { Component } from "react";

import "./Avangers.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default class Avangers extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <section
              className="bookList"
              style={{ background: theme.bg, color: theme.text }}
            >
              <ul className="bookListList">
                <li className="bookListItem" style={{ background: theme.ui }}>
                  Iron Man
                </li>
                <li className="bookListItem" style={{ background: theme.ui }}>
                  Thor
                </li>
                <li className="bookListItem" style={{ background: theme.ui }}>
                  Hulk
                </li>
                <li className="bookListItem" style={{ background: theme.ui }}>
                  Captain America
                </li>
              </ul>
            </section>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

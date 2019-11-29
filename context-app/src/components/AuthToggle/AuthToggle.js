import React, { Component } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import "./AuthToggle.css";

export default class AuthToggle extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {AuthContext => {
          const { isAuthenticated, login, logout, toggleAuth } = AuthContext;
          const auth = isAuthenticated ? login : logout;
          return (
            <button
              className="login"
              onClick={toggleAuth}
              style={{ background: auth.bg }}
            >
              {isAuthenticated ? "Sair" : "Entrar"}
            </button>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

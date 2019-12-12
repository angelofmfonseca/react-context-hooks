import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import "./AuthToggle.css";

const AuthToggle = () => {
  const { isAuthenticated, login, logout, toggleAuth } = useContext(
    AuthContext
  );
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
};

export default AuthToggle;

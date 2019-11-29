import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Avangers from "./components/Avangers/Avangers";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import AuthToggle from "./components/AuthToggle/AuthToggle";

const App = () => {
  return (
    <section className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Avangers />
          <ThemeToggle />
          <AuthToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </section>
  );
};

export default App;

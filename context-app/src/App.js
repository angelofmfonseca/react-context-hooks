import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Musician from "./components/Musician/Musician";
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
          <Musician />
          <ThemeToggle />
          <AuthToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </section>
  );
};

export default App;

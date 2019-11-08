import React, { useState } from 'react';
import { useDark } from "../hooks/useDark";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDark(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div
        className="dark-mode__toggle"
        onClick={toggleMode}
        >
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

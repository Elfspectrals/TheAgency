// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Agency
        </Link>

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? '--active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/hitman"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? '--active' : ''}`
            }
          >
            Hire a Hitman
          </NavLink>
        </nav>

        <button
          className="header__toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;

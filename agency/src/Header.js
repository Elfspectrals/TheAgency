// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';          // icônes légères
import Dropdown from './Dropdown';

const Header = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );
  const [isOpen, setIsOpen] = useState(false);   // menu mobile

  /* ---------- Dark-mode ---------- */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  /* ---------- Mobile nav ---------- */
  const toggleMenu = () => setIsOpen((p) => !p);

  /* Fermeture auto quand on change de route */
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header" data-sticky>
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          Agency
        </Link>

        {/* Desktop navigation */}
        <nav className="header__nav" data-open={isOpen}>
  <NavLink
    to="/"
    end
    onClick={closeMenu}
    className={({ isActive }) =>
      `header__nav-link ${isActive ? '--active' : ''}`
    }
  >
    Home
  </NavLink>

  <Dropdown label="Services">
    <Dropdown.Item to="/hitman" onClick={closeMenu}>
      Hire a Hitman
    </Dropdown.Item>
    <Dropdown.Item to="/intel" onClick={closeMenu}>
      Gather Intelligence
    </Dropdown.Item>
    <Dropdown.Item to="/bodyguard" onClick={closeMenu}>
      Bodyguard
    </Dropdown.Item>
  </Dropdown>

  <NavLink
    to="/about"
    onClick={closeMenu}
    className={({ isActive }) =>
      `header__nav-link ${isActive ? '--active' : ''}`
    }
  >
    About&nbsp;Us
  </NavLink>
  <NavLink
    to="/about"
    onClick={closeMenu}
    className={({ isActive }) =>
      `header__nav-link ${isActive ? '--active' : ''}`
    }
  >
    About&nbsp;Us
  </NavLink>

  <Dropdown label="TeacherSection">
    <Dropdown.Item to="/admin" onClick={closeMenu}>
      Admin Dashboard
    </Dropdown.Item>
    <Dropdown.Item to="/design-guide" onClick={closeMenu}>
      Design Guide
    </Dropdown.Item>
  </Dropdown>
</nav>


        {/* Right-side actions */}
        <div className="header__actions">
          <button
            className="header__toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Burger */}
          <button
            className="header__burger"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop flou quand le menu est ouvert */}
      {isOpen && <div className="header__backdrop" onClick={closeMenu} />}
    </header>
  );
};

export default Header;

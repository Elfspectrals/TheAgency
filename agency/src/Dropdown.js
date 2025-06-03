// src/Dropdown.js
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';


const Dropdown = ({ label = 'Menu', children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Ferme en cliquant à l’extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="dropdown__toggle"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
      >
        {label}
        <ChevronDown size={16} className="dropdown__chevron" />
      </button>

      <ul className="dropdown__menu" data-open={open}>
        {/*
          Attends <Dropdown.Item> comme enfant ♥
          (voir composant d’aide ci-dessous)
        */}
        {children}
      </ul>
    </div>
  );
};

// Petit helper pour rendre l’API <Dropdown><Dropdown.Item … /></Dropdown>
Dropdown.Item = ({ to = '#', children, onClick }) => (
  <li className="dropdown__item">
    <a href={to} onClick={onClick} className="dropdown__link">
      {children}
    </a>
  </li>
);

export default Dropdown;

// src/components/MissionCards.jsx
import React from 'react';

const MissionCards = ({ items = [] }) => (
  <section className="mission">
    <div className="mission__grid">
      {items.map(({ icon: Icon, title, text }) => (
        <article key={title} className="mission__card">
          <Icon size={28} className="mission__icon" />
          <h3 className="mission__title">{title}</h3>
          <p className="mission__text">{text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default MissionCards;

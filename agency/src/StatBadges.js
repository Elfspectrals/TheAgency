// src/components/StatBadges.jsx
import React from 'react';

const StatBadges = ({ stats = [] }) => (
  <section className="stats">
    {stats.map(({ label, value }) => (
      <article key={label} className="stats__card">
        <span className="stats__value">{value}</span>
        <span className="stats__label">{label}</span>
      </article>
    ))}
  </section>
);

export default StatBadges;

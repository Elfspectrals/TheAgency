// src/components/Timeline.jsx
import React from 'react';

const Timeline = ({ events = [] }) => (
  <section className="timeline-section">
    <h2 className="timeline__heading">Our Journey</h2>
    <ul className="timeline">
      {events.map(({ year, label, desc }, idx) => (
        <li key={year} className="timeline__item">
          <div className="timeline__dot" />
          <div className="timeline__content">
            <h3 className="timeline__year">{year}</h3>
            <h4 className="timeline__label">{label}</h4>
            <p>{desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Timeline;

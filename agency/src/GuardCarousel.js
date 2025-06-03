// src/components/GuardCarousel.jsx
import React, { useState } from 'react';
import GuardCard from './GuardCard';
import Modal     from './Modal';

const GuardCarousel = ({ guards = [] }) => {
  const [sel, setSel] = useState(null);

  return (
    <section className="gcarousel">
      <h2 className="gcarousel__heading">Featured Bodyguards</h2>
      <div className="gcarousel__track">
        {guards.map((g) => (
          <GuardCard key={g.name} guard={g} onClick={setSel} />
        ))}
      </div>

      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && (
          <>
            <h3>{sel.name}</h3>
            <p style={{fontStyle:'italic',margin:'0 0 1rem'}}>{sel.role}</p>
            <p>{sel.bio}</p>
          </>
        )}
      </Modal>
    </section>
  );
};

export default GuardCarousel;

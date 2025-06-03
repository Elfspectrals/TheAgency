// src/components/IntelHero.jsx
import React from 'react';
import Button, { ButtonVariants } from './Button';

const IntelHero = () => (
  <section
    className="intel-hero"
    style={{ backgroundImage: 'url(/images/intel-hero.jpg)' }}
  >
    <div className="intel-hero__overlay" />
    <div className="intel-hero__container">
      <h1 className="intel-hero__title">Gather Intelligence</h1>
      <p className="intel-hero__subtitle">
        Real-time field data &amp; confidential dossier retrieval.
      </p>
      <Button
        text="Request new intel"
        variant={ButtonVariants.HIRE}
        onClick={() => window.alert('Request dispatched')}
      />
    </div>
  </section>
);

export default IntelHero;

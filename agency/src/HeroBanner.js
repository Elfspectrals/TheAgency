// src/components/HeroBanner.jsx
import React from 'react';
import Button, { ButtonVariants } from './Button';

const HeroBanner = ({
  title = 'Who We Are',
  subtitle = 'Elite covert solutions for any scenario.',
  bgSrc = '/images/about-hero.jpg',
  cta = [{ label: 'Hire us', to: '/hitman' }],
  overlay = true,
}) => (
  <section
    className="hero"
    style={{ backgroundImage: `url(${bgSrc})` }}
  >
    {overlay && <div className="hero__overlay" />}
    <div className="hero__container">
      <h1 className="hero__title">{title}</h1>
      <p className="hero__subtitle">{subtitle}</p>
      <div className="hero__actions">
        {cta.map(({ label, to }) => (
          <Button
            key={label}
            text={label}
            variant={ButtonVariants.HIRE}
            onClick={() => (window.location.href = to)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default HeroBanner;

import React from 'react';
import Button, { ButtonVariants } from './Button';

const HomeHero = () => (
  <section
    className="home-hero"
    style={{ backgroundImage: 'url(/images/home-banner.jpg)' }}
  >
    <div className="home-hero__overlay" />
    <div className="home-hero__inner">
      <h1 className="home-hero__title">The Agency</h1>
      <p className="home-hero__subtitle">
        Elite operatives • Surgical solutions • Zero witnesses
      </p>
      <Button
        text="Hire a Hitman"
        variant={ButtonVariants.HIRE}
        onClick={() => (window.location.href = '/hitman')}
      />
    </div>
  </section>
);

export default HomeHero;

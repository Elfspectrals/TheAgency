import React from 'react';
import Button, { ButtonVariants } from './Button';

const CTASection = () => (
  <section className="home-cta">
    <h2 className="home-cta__text">Ready to make it happen?</h2>
    <Button
      text="Contact the Agency"
      variant={ButtonVariants.WARNING}
      onClick={() => (window.location.href = '/contact')}
    />
  </section>
);

export default CTASection;

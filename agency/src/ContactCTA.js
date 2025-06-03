// src/components/ContactCTA.jsx
import React from 'react';
import Button, { ButtonVariants } from './Button';

const ContactCTA = () => (
  <section className="cta">
    <h2 className="cta__text">Ready to feel truly safe?</h2>
    <Button
      text="Get in touch"
      variant={ButtonVariants.WARNING}
      onClick={() => (window.location.href = '/contact')}
    />
  </section>
);

export default ContactCTA;

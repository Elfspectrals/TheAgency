// src/components/PackageCards.jsx
import React from 'react';
import Button, { ButtonVariants } from './Button';

const PackageCards = ({ plans = [] }) => (
  <section className="pkg">
    <h2 className="pkg__heading">Service Packages</h2>
    <div className="pkg__grid">
      {plans.map(({ tier, price, perks }) => (
        <article key={tier} className="pkg__card">
          <h3 className="pkg__tier">{tier}</h3>
          <p className="pkg__price">${price.toLocaleString()}/day</p>
          <ul className="pkg__perks">
            {perks.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <Button
            text="Choose"
            variant={ButtonVariants.PRIMARY}
            onClick={() => window.alert(`${tier} selected`)}
          />
        </article>
      ))}
    </div>
  </section>
);

export default PackageCards;

// src/pages/BodyGuard.jsx
import React from 'react';
import BodyguardHero from './BodyguardHero';
import PackageCards  from './PackageCards';
import GuardCarousel from './GuardCarousel';
import ContactCTA    from './ContactCTA';

const packages = [
  { tier:'Standard', price:2500, perks:['1 guard','Escort 8h','Local only'] },
  { tier:'VIP',      price:4500, perks:['2 guards','Escort 24h','Worldwide'] },
  { tier:'Elite',    price:9000, perks:['Team of 4','Bulletproof limo','Global rapid evac'] },
];

const guards = [
  { name:'Atlas',  role:'Close-quarters specialist', img:'https://picsum.photos/seed/55/160', bio:'10 y military police, Krav-Maga instructor.' },
  { name:'Echo',   role:'Medic / Driver',            img:'https://picsum.photos/seed/56/160', bio:'Ex-SpecOps field medic, advanced evasive driving.' },
  { name:'Viper',  role:'Counter-sniper',            img:'https://picsum.photos/seed/57/160', bio:'Former marksman, 600 m confirmed protective shots.' },
];

const BodyGuard = () => (
  <div>
    <BodyguardHero />

    <section className="width-container" style={{padding:'0 1rem'}}>
      <PackageCards plans={packages} />
    </section>

    <GuardCarousel guards={guards} />

    <ContactCTA />
  </div>
);

export default BodyGuard;

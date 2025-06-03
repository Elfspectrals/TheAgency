import React from 'react';
import { Crosshair, ShieldCheck, Map } from 'lucide-react';

const services = [
  { icon: Crosshair, label: 'Hire a Hitman',    to: '/hitman'  },
  { icon: Map,        label: 'Gather Intel',    to: '/intel'   },
  { icon: ShieldCheck,label: 'Bodyguard Unit',  to: '/bodyguard'},
];

const ServiceGrid = () => (
  <section className="svc">
    <h2 className="svc__heading">What We Do</h2>
    <div className="svc__grid">
      {services.map(({ icon:Icon, label, to }) => (
        <a key={label} href={to} className="svc__card">
          <Icon size={32} className="svc__icon" />
          <span className="svc__label">{label}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ServiceGrid;

// src/pages/GatherIntelligence.jsx
import React, { useState } from 'react';
import IntelHero      from './IntelHero';
import FilterBar      from './FilterBar';
import StatBadges     from './StatBadges';
import IntelTable     from './IntelTable';

/* --- mock data --- */
const intelRows = [
  {
    id:1, agent:'Silver Bald', img:'https://picsum.photos/seed/47/100',
    summary:'Shipment schedule obtained', risk:'Low',
    location:'Rotterdam, NL', date:'2025-05-28',
    details:'Complete cargo manifest intercepted from port authority system.'
  },
  {
    id:2, agent:'Red Fox', img:'https://picsum.photos/seed/13/100',
    summary:'New security rota', risk:'Medium',
    location:'Berlin, DE', date:'2025-05-25',
    details:'Weekly guard rotation leaked via internal whistle-blower.'
  },
  {
    id:3, agent:'Night Owl', img:'https://picsum.photos/seed/99/100',
    summary:'Prototype photos', risk:'High',
    location:'Kyoto, JP', date:'2025-05-20',
    details:'Images of confidential prototype captured inside R&D facility.'
  },
];

const GatherIntelligence = () => {
  const [filters, setFilters] = useState({ q:'', level:'', from:'', to:'' });

  /* Filter logic – basic contains/equals */
  const filtered = intelRows.filter(r => {
    if (filters.q && !r.summary.toLowerCase().includes(filters.q.toLowerCase())) return false;
    if (filters.level && r.risk !== filters.level) return false;
    if (filters.from && r.date < filters.from) return false;
    if (filters.to   && r.date > filters.to)   return false;
    return true;
  });

  const stats = [
    { label:'Total Reports', value:intelRows.length },
    { label:'High Risk',     value:intelRows.filter(r=>r.risk==='High').length },
    { label:'Low Risk',      value:intelRows.filter(r=>r.risk==='Low').length },
  ];

  return (
    <div>
      <IntelHero />
      <section className="width-container" style={{padding:'0 1rem'}}>
        <FilterBar state={filters} setState={setFilters} />
        <StatBadges stats={stats} />
        <IntelTable rows={filtered} />
      </section>
    </div>
  );
};

export default GatherIntelligence;

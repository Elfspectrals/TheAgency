// src/pages/Hitman.jsx
import React from 'react';
import Table from './Table';
import agents from './agents';      

const Hitman = () => (
  <main className="page page--hitman">
    <h1 className="page__title">Available Agents</h1>
    <Table data={agents} />
  </main>
);

export default Hitman;

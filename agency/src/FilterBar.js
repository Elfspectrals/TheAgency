// src/components/FilterBar.jsx
import React from 'react';

const FilterBar = ({ state, setState }) => (
  <form className="filter">
    <input
      type="search"
      placeholder="Keyword…"
      value={state.q}
      onChange={(e) => setState({ ...state, q: e.target.value })}
    />
    <select
      value={state.level}
      onChange={(e) => setState({ ...state, level: e.target.value })}
    >
      <option value="">Risk — All</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <input
      type="date"
      value={state.from}
      onChange={(e) => setState({ ...state, from: e.target.value })}
    />
    <input
      type="date"
      value={state.to}
      onChange={(e) => setState({ ...state, to: e.target.value })}
    />
  </form>
);

export default FilterBar;

// src/components/GuardCard.jsx
import React from 'react';
import Avatar from './Avatar';

const GuardCard = ({ guard, onClick }) => (
  <button className="gcard" onClick={() => onClick(guard)}>
    <Avatar shape="rounded" url={guard.img} size={96} alt={guard.name} />
    <span className="gcard__name">{guard.name}</span>
  </button>
);

export default GuardCard;

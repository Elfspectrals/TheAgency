// src/components/Location.jsx
import React from 'react';
import { MapPin } from 'lucide-react';

const Location = ({ text = 'Unknown' }) => (
  <span className="location">
    <MapPin size={14} className="location__icon" />
    {text}
  </span>
);

export default Location;

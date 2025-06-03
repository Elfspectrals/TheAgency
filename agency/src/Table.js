// src/components/Table.jsx
import React from 'react';
import Button, { ButtonVariants } from './Button';
import Location from './Location';
import Avatar from './Avatar';

const Table = ({ data = [] }) => (
  <div className="width-container">
    <table className="table width-full">
      <thead>
        <tr>
          <th>Code Name</th>
          <th>Skills</th>
          <th>Rating</th>
          <th>Avatar</th>            {/* ← nouvelle colonne  */}
          <th>Location</th>
          <th />                     {/* vide pour le bouton */}
        </tr>
      </thead>

      <tbody>
        {data.map((agent) => (
          <tr key={agent.id}>
            <td>{agent.codeName}</td>
            <td>{agent.skills.join(', ')}</td>
            <td>{agent.rating.toFixed(1)}</td>

            {/* Avatar arrondi */}
            <td>
              <Avatar
                shape="rounded"
                url="https://picsum.photos/seed/${agent.id}/80"
                size={56}
                alt={agent.codeName}
              />
            </td>

            {/* Localisation */}
            <td>
              <Location text={agent.location} />
            </td>

            {/* Bouton Hire */}
            <td>
              <Button
                text="Hire"
                variant={ButtonVariants.WARNING}
                onClick={() =>
                  window.alert(
                    `You hired ${agent.codeName} for $${agent.price.toLocaleString()}`
                  )
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;

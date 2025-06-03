// src/components/Table.jsx
import React, { useState } from 'react';
import Button, { ButtonVariants } from './Button';
import Location from './Location';
import Avatar from './Avatar';
import Modal from './Modal';

const Table = ({ data = [] }) => {
  const [selected, setSelected] = useState(null);   // agent sélectionné

  return (
    <div className="width-container">
      <table className="table width-full">
        <thead>
          <tr>
            <th>Code Name</th>
            <th>Skills</th>
            <th>Rating</th>
            <th>Avatar</th>
            <th>Location</th>
            <th />
            <th /> {/* colonne More info */}
          </tr>
        </thead>

        <tbody>
          {data.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.codeName}</td>
              <td>{agent.skills.join(', ')}</td>
              <td>{agent.rating.toFixed(1)}</td>
              <td>
                <Avatar
                  shape="rounded"
                  url={`https://picsum.photos/seed/${agent.id}/80`}
                  size={56}
                  alt={agent.codeName}
                />
              </td>
              <td>
                <Location text={agent.location} />
              </td>
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
              <td>
                <Button
                  text="More info"
                  variant={ButtonVariants.SECONDARY}
                  onClick={() => setSelected(agent)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ---------- Modale ---------- */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <h2>{selected.codeName}</h2>
            <p><strong>Skills&nbsp;:</strong> {selected.skills.join(', ')}</p>
            <p><strong>Rating&nbsp;:</strong> {selected.rating}</p>
            <p><strong>Base price&nbsp;:</strong> $
              {selected.price.toLocaleString()}
            </p>
            <p><strong>Location&nbsp;:</strong> {selected.location}</p>
            <p style={{ marginTop: '1rem' }}>{selected.about}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Table;

// src/components/IntelTable.jsx
import React, { useState } from 'react';
import Avatar  from './Avatar';
import Location from './Location';
import Button, { ButtonVariants } from './Button';
import Modal   from './Modal';

const IntelTable = ({ rows = [] }) => {
  const [sel, setSel] = useState(null);

  return (
    <>
      <table className="table intel-table width-full">
        <thead>
          <tr>
            <th>Agent</th>
            <th>Summary</th>
            <th>Risk</th>
            <th>Location</th>
            <th>Date</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>
                <Avatar shape="rounded" url={r.img} size={48} alt={r.agent}/>
              </td>
              <td>{r.summary}</td>
              <td>
                <span className={`risk risk--${r.risk.toLowerCase()}`}>{r.risk}</span>
              </td>
              <td><Location text={r.location}/></td>
              <td>{r.date}</td>
              <td>
                <Button
                  text="Details"
                  variant={ButtonVariants.PRIMARY}
                  onClick={() => setSel(r)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal */}
      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && (
          <>
            <h3>{sel.summary}</h3>
            <p style={{margin:'1rem 0'}}><strong>Collected:</strong> {sel.date}</p>
            <p><strong>Agent:</strong> {sel.agent}</p>
            <p><strong>Risk level:</strong> {sel.risk}</p>
            <p><strong>Location:</strong> {sel.location}</p>
            <p style={{marginTop:'1rem'}}>{sel.details}</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default IntelTable;

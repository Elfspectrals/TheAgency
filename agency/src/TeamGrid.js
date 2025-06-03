// src/components/TeamGrid.jsx
import React, { useState } from 'react';
import Avatar from './styles/Avatar';
import Modal from './Modal';

const TeamGrid = ({ members = [] }) => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="team">
            <h2 className="team__heading">Meet the Team</h2>
            <div className="team__grid">
                {members.map((m) => (
                    <button
                        key={m.name}
                        className="team__item"
                        onClick={() => setSelected(m)}
                    >
                        <Avatar shape="rounded" url={m.img} size={88} alt={m.name} />
                        <span className="team__name">{m.name}</span>
                        <span className="team__role">{m.role}</span>
                    </button>
                ))}
            </div>

            <Modal open={!!selected} onClose={() => setSelected(null)}>
                {selected && (
                    <>
                        <Avatar
                            shape="rounded"
                            url={selected.img}
                            size={100}
                            alt={selected.name}
                        />
                        <h3 style={{ margin: '1rem 0 .25rem' }}>{selected.name}</h3>
                        <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
                            {selected.role}
                        </p>
                        <p>{selected.bio}</p>
                    </>
                )}
            </Modal>
        </section>
    );
};

export default TeamGrid;

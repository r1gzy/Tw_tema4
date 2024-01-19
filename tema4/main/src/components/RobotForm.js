import React, { useState } from 'react';

function RobotForm({ onAdd }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [mass, setMass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, type, mass: mass >= 500 ? mass : '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
      <input id="type" placeholder="type" value={type} onChange={e => setType(e.target.value)} />
      <input id="mass" placeholder="mass" value={mass} onChange={e => setMass(e.target.value)} />
      <button type="submit">add</button>
    </form>
  );
}

export default RobotForm;

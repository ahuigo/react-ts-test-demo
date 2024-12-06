import React from 'react';
export function Hello({ name = 'World' }) {
  return <div>
    <label htmlFor="test">{name}</label>
  </div>;
}
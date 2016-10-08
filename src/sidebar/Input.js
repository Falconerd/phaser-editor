import React from 'react';

const style = {
  container: {
    display: 'flex'
  },
  label: {
    width: 50
  },
  input: {
    flex: 1,
    width: '100%'
  }
};

export default ({ text, gridSize, onChange }) => (
  <div style={style.container}>
    <label style={style.label}>{text}</label>
    <input
      style={style.input}
      type="number"
      onChange={e => onChange(e.target.value)}
      defaultValue={gridSize}
    />
  </div>
);

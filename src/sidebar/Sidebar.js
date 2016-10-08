import React from 'react';
import InputChangeGridSize from './InputChangeGridSize';

const style = {
  width: 200,
  padding: 16
};

export default ({ someProp }) => (
  <div style={style}>
    <InputChangeGridSize text="Sup" />
  </div>
);

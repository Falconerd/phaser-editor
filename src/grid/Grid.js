import React from 'react';

const style = {
  backgroundColor: '#333',
  width: '100%',
  height: '100%'
};

export default ({ gridSize }) => (
  <div style={style}>
    <div id="grid-canvas"></div>
  </div>
);

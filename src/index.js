import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import watch from 'redux-watch';
import Sidebar from './sidebar/Sidebar';
import Scene from './scene/Scene';
import sidebarReducer from './sidebar/reducer';

const initialState = {
  gridSize: 64,
  entities: []
};

const store = window.store = createStore(sidebarReducer, initialState);

const style = {
  backgroundColor: '#222',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex'
};

const App = () => (
  <div style={style}>
    <Scene />
    <Sidebar someProp='broohaha' />
  </div>
);

store.subscribe(watch(store.getState, 'gridSize')((newVal, oldVal, objectPath) => {
  console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// Set up PIXI stuff?

const renderer = new PIXI.WebGLRenderer(window.innerWidth - 232, window.innerHeight);
document.getElementById('grid-canvas').appendChild(renderer.view);

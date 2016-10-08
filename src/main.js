import app from './components/app';


/*
import PIXI from 'pixi.js';
import delay from 'delay';
import clickdrag from 'clickdrag';
import { EventEmitter } from 'events';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { navigate, gridSizeChange } from './actions';
import { NAVIGATE_RIGHT, NAVIGATE_LEFT, NAVIGATE_UP, NAVIGATE_DOWN, GRID_SIZE_CHANGE } from './actionTypes';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PanelRight } from './components/panel-right';

// STATE
const initialState = {
  position: { x: 0, y: 0 },
  gridSize: 64
};

// REDUX SETUP
function app(state = initialState, action) {
  let grid, position;
  switch (action.type) {
    case NAVIGATE_RIGHT:
      grid = action.grid;
      position = { x: state.position.x + 1, y: state.position.y };
      // Update the grid text
      grid.updatePosition(position);
      // Return updated state
      return Object.assign({}, state, { position });
    case NAVIGATE_LEFT:
      grid = action.grid;
      position = { x: state.position.x - 1, y: state.position.y };
      // Update the grid text
      grid.updatePosition(position);
      // Return updated state
      return Object.assign({}, state, { position });
    case NAVIGATE_UP:
      grid = action.grid;
      position = { x: state.position.x, y: state.position.y + 1 };
      // Update the grid text
      grid.updatePosition(position);
      // Return updated state
      return Object.assign({}, state, { position });
    case NAVIGATE_DOWN:
      grid = action.grid;
      position = { x: state.position.x, y: state.position.y - 1};
      // Update the grid text
      grid.updatePosition(position);
      // Return updated state
      return Object.assign({}, state, { position });
    case GRID_SIZE_CHANGE:
      grid = action.grid;
      grid.updateSize(action.size);
      return Object.assign({}, state, { gridSize: action.size });
    default:
      return state;
  }
}

const store = window.store = createStore(app);

// REACT
class ReactApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="container">
          <div id="topbar">topbar</div>
          <div id="content">
            <div id="right">
              <div id="scene"></div>
            </div>
            <div id="sidebar">
              <PanelRight />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  <ReactApp></ReactApp>,
  document.getElementById('app')
);

const sceneWidth = window.innerWidth - 200;
const sceneHeight = window.innerHeight - 40;

// SETUP RENDERER
const renderer = new PIXI.WebGLRenderer(sceneWidth, sceneHeight, { transparent: true });
document.getElementById('scene').appendChild(renderer.view);

// SETUP INPUT
const drag = clickdrag(renderer.view);

// SETUP STAGE
const stage = new PIXI.Container();

const unsubscribe = store.subscribe(() => console.log('STATE:', store.getState()));

// render the stage any time the state changes
store.subscribe(() => {
  renderer.render(stage);
});

// GRID
class Grid {
  constructor(x = 0, y = 0, size = 32) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.graphics = new PIXI.Graphics();
    this.graphics.lineStyle(1, 0xFFFFFF, 0.2);

    this.ytext = [];
    this.xtext = [];

    for (let y = 0; y <= sceneHeight; y += this.size) {
      this.graphics.moveTo(0, y);
      this.graphics.lineTo(sceneWidth, y);
      const text = new PIXI.Text(y / this.size, { fill: 0xFFFFFF, fontSize: 24 });
      text.x = 0;
      text.y = y;
      text.alpha = 0.2;
      this.ytext.push(text);
    }

    for (let x = 0; x <= sceneWidth; x += this.size) {
      this.graphics.moveTo(x, 0);
      this.graphics.lineTo(x, sceneHeight);
      const text = new PIXI.Text(x / this.size, { fill: 0xFFFFFF, fontSize: 24 });
      text.x = x;
      text.y = 0;
      text.alpha = 0.2;
      this.xtext.push(text);
    }
  }

  updatePosition(position) {
    // If i prevents the top left from showing a number
    this.xtext.forEach((text, i) => {
      if (i) text.text = i + position.x;
    });
    this.ytext.forEach((text, i) => {
      if (i) text.text = i - position.y;
    });
  }
}
const grid = new Grid(0, 0, store.getState().gridSize);
grid.ytext.forEach(text => stage.addChild(text));
grid.xtext.forEach(text => stage.addChild(text));
stage.addChild(grid.graphics);

// delay(0).then(() => store.dispatch(navigate(grid, 'right')));
// delay(2000).then(() => store.dispatch(navigate(grid, 'down')));
// delay(4000).then(() => store.dispatch(navigate(grid, 'left')));
// delay(6000).then(() => store.dispatch(navigate(grid, 'up')));
// delay(6200).then(() => store.dispatch(navigate(grid, 'up')));
// delay(6400).then(() => store.dispatch(navigate(grid, 'up')));
// delay(6600).then(() => store.dispatch(navigate(grid, 'up')));

let dragLocked = false;

drag.on('move', (e) => {
  if (dragLocked) return;
  dragLocked = true;
  delay(100).then(() => dragLocked = false);

  if (e.movementX === 1 && e.movementY === 0) {
    store.dispatch(navigate(grid, 'right'));
  }
  if (e.movementX === -1 && e.movementY === 0) {
    store.dispatch(navigate(grid, 'left'));
  }
  if (e.movementX === 0 && e.movementY === 1) {
    store.dispatch(navigate(grid, 'down'));
  }
  if (e.movementX === 0 && e.movementY === -1) {
    store.dispatch(navigate(grid, 'up'));
  }
  if (e.movementX === 1 && e.movementY === 1) {
    store.dispatch(navigate(grid, 'right'));
    store.dispatch(navigate(grid, 'down'));
  }
  if (e.movementX === -1 && e.movementY === -1) {
    store.dispatch(navigate(grid, 'left'));
    store.dispatch(navigate(grid, 'up'));
  }
});

// Initial render
renderer.render(stage);

// LOOP IS CURRENTLY NOT NECESSARY
// import createGameLoop from 'browser-game-loop';
// const loop = createGameLoop({
  // updateTimeStep: 1000 / 30,
  // fpsFilterStrength: 20,
  // slow: 1,
  // input: () => {},
  // update: (step) => {
    // renderer.render(stage);
    // grid.ytext.forEach(text => text.text = 'woosh');
  // },
  // render: (interp) => {}
// });

// loop.start();
*/

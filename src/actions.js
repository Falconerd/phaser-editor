import { NAVIGATE_RIGHT, NAVIGATE_LEFT, NAVIGATE_UP, NAVIGATE_DOWN, GRID_SIZE_CHANGE } from './actionTypes';

export function navigateRight(grid) {
  return {
    type: NAVIGATE_RIGHT,
    grid
  };
}

export function navigate(grid, direction) {
  switch (direction) {
    case 'right':
      return { type: NAVIGATE_RIGHT, grid };
    case 'left':
      return { type: NAVIGATE_LEFT, grid };
    case 'up':
      return { type: NAVIGATE_UP, grid };
    case 'down':
      return { type: NAVIGATE_DOWN, grid };
    default:
      return { type: 'NULL' };
  }
}

export function gridSizeChange(grid, size) {
  return { type: GRID_SIZE_CHANGE, size };
}

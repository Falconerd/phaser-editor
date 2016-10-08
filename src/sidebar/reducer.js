export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_GRID_SIZE':
      return Object.assign({}, state, { gridSize: parseInt(action.payload) });
    default:
      return state;
  }
};

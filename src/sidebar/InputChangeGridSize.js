import { connect } from 'react-redux';
import { changeGridSize } from './actions';
import Input from './Input';

const mapStateToProps = (state, ownProps) => {
  return {
    gridSize: state.gridSize
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (gridSize) => {
      dispatch(changeGridSize(gridSize));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

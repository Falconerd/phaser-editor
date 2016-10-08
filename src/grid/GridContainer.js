import { connect } from 'react-redux';
import Grid from './Grid';

const mapStateToProps = (state, ownProps) => {
  return {
    gridSize: state.gridSize
  };
};

export default connect(
  mapStateToProps
)(Grid);

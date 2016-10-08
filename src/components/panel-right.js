import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gridSizeChange } from '../actions';


const style = {
  input: {
    main: {
      display: 'flex'
    },
    label: {
      width: '30%'
    },
    input: {
      width: '70%'
    }
  },
};

const mapStateToProps = state => {
  return {
    gridSize: state.gridSize
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: size => {
      dispatch(setGridSize(size));
    }
  };
}

class Button extends Component {
  render() {
    return (
      <button>Clicky{this.props}</button>
    );
  }
}

export const PanelRight = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);



/*
class Input extends Component {
  onChange() {
    console.log('CHANGE', this.context.store.getState());
  }

  render() {
    return (
      <div style={style.input.main}>
        <label style={style.input.label}>{this.props.label}</label>
        <input
          style={style.input.input}
          type={this.props.type}
          onChange={() => this.onChange()}
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: React.PropTypes.string
};

export class PanelRight extends Component {
  render() {
    return (
      <div>
        <Input
          type="number"
          label="Grid Size"
          onChange={this.props.onGridSizeChange}
        />
      </div>
    );
  }
}
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewTodo from './new-todo';
import { addTodo } from '../actions/index';

function onChangeNewTodo(e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addTodo(e.target.value));
    e.target.value = '';
  }
}

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo
      onChange={e => onChangeNewTodo(e, dispatch)}
    />
    {todos.map(todo => <p key={todo}>{todo}</p>)}
  </div>
);

function mapStateToProps(todos) {
  return { todos };
}

export default connect(mapStateToProps)(Todos);

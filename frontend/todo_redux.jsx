import React from 'react';
import ReactDOM from 'react-dom';
import { requestToDos } from './actions/todo_actions';

import { fetchTodos } from './util/todo_api_util.js';
import configureStore from './store/store';
import allTodos from './reducers/selector';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, rootEl);
});

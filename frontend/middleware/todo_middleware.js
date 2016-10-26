import { applyMiddleware } from 'redux';
import { REQUEST_TODOS, RECEIVE_TODOS, receiveToDos }
  from '../actions/todo_actions.js';
import { fetchTodos } from '../util/todo_api_util';

const TodoMiddleware = ({ state, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      let success = data => dispatch(receiveToDos(data));
      let error = e => console.log(e);
      fetchTodos(success, error);
      next(action);
      break;
    default:
      next(action);
  }
};


export default TodoMiddleware;

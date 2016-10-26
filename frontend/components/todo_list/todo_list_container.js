import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selector';
import { requestToDos } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestToDos: () => dispatch(requestToDos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

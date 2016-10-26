import React from 'react';
import requestToDos from '../../actions/todo_actions';

class TodoList extends React.Component {
  componentDidMount() { requestToDos() }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ul>
        this.props.todos.map(todo => (<li key={todo.id}>{todo.title}</li>))
      </ul>
    )
  }
}

export default TodoList;

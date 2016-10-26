export const  REQUEST_TODOS = 'REQUEST_TODOS';
export const  RECEIVE_TODOS = 'RECEIVE_TODOS';

export const requestToDos = () => ({
  type: REQUEST_TODOS
});

export const receiveToDos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

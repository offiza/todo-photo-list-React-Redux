import {
  TODO_COMPLETE,
  TODO_CREATE,
  TODO_REMOVE
} from '../types/todo';
import { TodoAction, TodoState } from '../types';

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state: TodoState = initialState,
  action: any
) => {
  switch (action.type) {
    case TODO_CREATE:
      return { ...state, todos: [...state.todos, action.payload] };
    case TODO_REMOVE:
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      return { ...state, todos: state.todos.filter((todo) => { todo.id !== action.payload }) };
    case TODO_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          console.log(todo);
          // if (todo.id === action.payload)
          //   todo.completed = !todo.completed
        })
      };
    default:
      return state;
  }
};

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
      return {
        ...state,
        todos: state.todos.filter((todo) => { return todo.id !== action.payload })
      }
    case TODO_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload)
            todo.completed = !todo.completed
          return todo;
        })
      };
    default:
      return state;
  }
};

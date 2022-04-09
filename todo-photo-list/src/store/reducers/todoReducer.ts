import {
  TODO_COMPLETE,
  TODO_CREATE,
  TODO_REMOVE,
  TODO_EDIT
} from '../types/todo';
import { TodoState } from '../types';
import { Todo } from '../../../libs/common';

const todos: Todo[] = JSON.parse(`${localStorage.getItem('todos')}`);

const initialState: TodoState = {
  todos: todos ? [...todos] : []
};

const completeTodo = (todos: Todo[], action: any) => {
  let todoIndex = -1;
  let lastTodo: Todo | null = null;

  const newTodos: Todo[] = todos.map(function (todo, index) {
    if (todo.id === action.payload) {
      todo.completed = !todo.completed
      if (todo.completed) {
        todoIndex = index;
        lastTodo = todo;
      }
    }
    return todo;
  })

  if (todoIndex !== -1 && lastTodo) {
    newTodos.splice(todoIndex, 1);
    newTodos.push(lastTodo);
  }

  return newTodos;
}

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
        todos: completeTodo(state.todos, action)
      };
    case TODO_EDIT:
      return {
        ...state,
        todos: state.todos.map(function (todo) {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title
          }
          return todo;
        }),
      }
    default:
      return state;
  }
};

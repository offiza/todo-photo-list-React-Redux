import { Todo } from '../../../libs/common';
import {
  TODO_COMPLETE,
  TODO_CREATE,
  TODO_REMOVE
} from '../types/todo';

export const createTodo = (todo: Todo) => ({
  type: TODO_CREATE,
  payload: todo,
});

export const removeTodo = (id: String) => ({
  type: TODO_REMOVE,
  payload: id,
});

export const completeTodo = (id: String) => ({
  type: TODO_COMPLETE,
  payload: id,
});

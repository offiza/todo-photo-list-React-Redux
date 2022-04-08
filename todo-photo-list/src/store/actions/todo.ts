import { Todo } from '../../../libs/common';
import {
  TODO_COMPLETE,
  TODO_CREATE,
  TODO_REMOVE,
  TODO_EDIT
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

export const editTodo = (id: String, title: String) => ({
  type: TODO_EDIT,
  payload: { id, title }
})
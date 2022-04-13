import { Todo } from "../../libs/common";

export interface TodoState {
  todos: Todo[];
}

export interface TodoAction {
  type: string;
  payload?: [] | string;
}
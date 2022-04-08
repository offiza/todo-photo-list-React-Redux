import { Todo } from "../../libs/common";

export interface RootState {
  todos: TodoState;
}

export interface TodoState {
  todos: Todo[];
}

export interface TodoAction {
  type: string;
  payload?: [] | string;
}

export type TodoDispatch = (dispatch: TodoAction) => TodoState;

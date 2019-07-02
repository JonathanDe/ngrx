import { Action } from '@ngrx/store';
import { Todo } from './model/todo.model';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const BORRAR_TODO = '[TODO] Borrar todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {}
}

export type Acciones =
  | AgregarTodoAction
  | ToggleTodoAction
  | EditTodoAction
  | BorrarTodoAction
  | ToggleAllTodoAction;

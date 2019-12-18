import {
	FetchTodosAction,
	DeleteTodoAction,
	ReceiveTodosAction
} from './todos';

export enum ActionTypes {
	fetchTodos,
	receiveTodos,
	deleteTodo
}

export type Action = FetchTodosAction | ReceiveTodosAction | DeleteTodoAction;

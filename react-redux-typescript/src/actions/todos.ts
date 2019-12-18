import axios from 'axios';
import { Dispatch } from 'react';
import { ActionTypes } from './types';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface ReceiveTodosAction {
	type: ActionTypes.receiveTodos;
	payload: Todo[];
}

export interface FetchTodosAction {
	type: ActionTypes.fetchTodos;
}

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
	return async (dispatch: Dispatch<FetchTodosAction | ReceiveTodosAction>) => {
		dispatch({
			type: ActionTypes.fetchTodos
		});

		const response = await axios.get<Todo[]>(url);

		dispatch({
			type: ActionTypes.receiveTodos,
			payload: response.data
		});
	};
};

export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id
	};
};

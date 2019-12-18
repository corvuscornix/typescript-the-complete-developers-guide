import { Todo, ActionTypes, Action } from '../actions';

export function todos(state: Todo[] = [], action: Action) {
	switch (action.type) {
		case ActionTypes.receiveTodos:
			return action.payload;
		case ActionTypes.deleteTodo:
			return state.filter(todo => todo.id !== action.payload);
		default:
			return state;
	}
}

export function isFetching(state: boolean = false, action: Action) {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return true;
		case ActionTypes.receiveTodos:
			return false;
		default:
			return state;
	}
}

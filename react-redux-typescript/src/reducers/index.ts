import { combineReducers, Reducer } from 'redux';
import { todos, isFetching } from './todos';
// import { Todo } from '../actions';

// export interface StoreState {
// 	todos: Todo[];
// 	isFetching: boolean;
// }

export const reducers = combineReducers({
	todos,
	isFetching
});

// A very cool hack to derive the state schema directly from the Reducer! (rather than manually defining it as the commented code above)
type ExtractStateFromReducer<R> = R extends Reducer<infer T, any> ? T : never;
export type StoreState = ExtractStateFromReducer<typeof reducers>;

import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	isFetching: boolean;
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

export class _App extends React.Component<AppProps> {
	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
		}
	}

	onButtonClick = () => {
		this.props.fetchTodos();
	};

	onTodoClick = (id: number) => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div
					key={todo.id}
					onClick={() => {
						this.onTodoClick(todo.id);
					}}
				>
					{todo.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				<div>{this.props.isFetching ? 'Loading...' : this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = ({ todos, isFetching }: StoreState): StoreState => {
	return { todos, isFetching };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

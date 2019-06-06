import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import uuid from 'uuid/v4';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ task: 'Play with Timi', done: false, id: uuid() }, //
				{ task: 'Exercise', done: false, id: uuid() }
			]
		};

		this.addTodo = this.addTodo.bind(this);
		// this.removeTodo = this.removeTodo.bind(this);
	}

	addTodo(todo) {
		// todo is an object passed from NewTodoForm
		let newTodo = { ...todo, id: uuid() };
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	removeTodo(id) {
		this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.todos.map(task => (
						<Todo
							{...task} //
							key={task.id}
							remove={() => this.removeTodo(task.id)}
						/> // Passing { ...task } object with all the porps
					))}
				</ul>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;

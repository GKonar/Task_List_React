import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import uuid from 'uuid/v4';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ task: 'Play with Timi', isDone: false, id: uuid() }, //
				{ task: 'Exercise', isDone: false, id: uuid() }
			]
		};

		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.checkTodo = this.checkTodo.bind(this);
	}

	addTodo(todo) {
		let newTodo = {
			...todo,
			id: uuid(),
			isDone: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	removeTodo(id) {
		this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
	}

	updateTodo(id, updatedTask) {
		const updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});

		this.setState({ todos: updatedTodos });
	}

	checkTodo(id) {
		const todoIdx = this.state.todos.findIndex(todo => todo.id === id);
		const newTodos = [...this.state.todos];
		newTodos[todoIdx].isDone = !newTodos[todoIdx].isDone;
		console.log('check');
		this.setState({ todos: newTodos });
	}

	render() {
		return (
			<div>
				<NewTodoForm addTodo={this.addTodo} />
				<ul>
					{this.state.todos.map(task => (
						<Todo
							{...task} //
							key={task.id}
							remove={this.removeTodo}
							edit={this.updateTodo}
							check={this.checkTodo}
							update={this.updateTodo}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoList;

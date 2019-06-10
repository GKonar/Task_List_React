import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		const todosJSON = localStorage.getItem('todos');
		const todos = todosJSON !== null ? JSON.parse(todosJSON) : [];

		this.state = {
			todos: todos
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
			isCompleted: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });

		// save todos into local storage
		localStorage.setItem('todos', JSON.stringify([...this.state.todos, newTodo]));
	}

	removeTodo(id) {
		this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });

		// save todos into local storage after remove
		localStorage.setItem('todos', JSON.stringify([...this.state.todos]));
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
		newTodos[todoIdx].isCompleted = !newTodos[todoIdx].isCompleted;
		this.setState({ todos: newTodos });
	}

	render() {
		return (
			<div className="TodoList-box">
				<h1 className="TodoList-h1">ToDO Board !</h1>
				<p className="TodoList-p">React Todo list app</p>
				<ul className="TodoList">
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
				<NewTodoForm addTodo={this.addTodo} todos={this.state.todos} />
			</div>
		);
	}
}

export default TodoList;

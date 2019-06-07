import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.task === '') {
			return;
		} else {
			this.props.addTodo(this.state);
			this.setState({ task: '' });
		}
	}

	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="todoInput">New todo: </label>
				<div className="NewTodoForm-container">
					<input
						name="task"
						type="text" //
						id="todoInput"
						value={this.state.task}
						onChange={this.handleChange}
					/>
					<button>Add</button>
				</div>
			</form>
		);
	}
}

export default NewTodoForm;

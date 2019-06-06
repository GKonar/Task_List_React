import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	toggleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleRemove(e) {
		this.props.remove(this.props.id);
	}

	handleUpdate(e) {
		e.preventDefault();
		this.props.update(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}

	handleCheck(e) {
		this.props.check(this.props.id);
	}

	render() {
		const isCompleted = this.props.isCompleted;
		let result;
		if (this.state.isEditing) {
			result = (
				<div>
					<form onSubmit={this.handleUpdate}>
						<input
							type="text" //
							value={this.state.task}
							name="task"
							onChange={this.handleChange}
						/>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<li>
					<span className={!isCompleted ? 'Todo' : 'Todo-completed'} onClick={this.handleCheck}>
						{this.props.task}
					</span>
					<button onClick={this.toggleEdit}>Edit</button>
					<button onClick={this.handleRemove}>X</button>
				</li>
			);
		}
		return result;
	}
}

export default Todo;

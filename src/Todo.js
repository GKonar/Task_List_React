import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task,
			clicked: false
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
		setTimeout(() => {
			this.props.remove(this.props.id);
		}, 700);
		this.setState({ clicked: true });
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
					<form className="Todo-form" onSubmit={this.handleUpdate}>
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
				<li className={this.state.clicked ? 'Todo-container Todo-clicked' : 'Todo-container'}>
					<span className={!isCompleted ? 'Todo' : 'Todo-completed'} onClick={this.handleCheck}>
						{this.props.task}
					</span>
					<div className="Todo-icons">
						<span className="Todo-edit" onClick={this.toggleEdit}>
							<i className="fas fa-pen" />
						</span>
						<span className="Todo-delete" onClick={this.handleRemove}>
							<i className="fas fa-trash-alt" />
						</span>
					</div>
				</li>
			);
		}
		return result;
	}
}

export default Todo;

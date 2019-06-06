import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove(e) {
		this.props.remove(this.props.id);
	}

	render() {
		return (
			<li className="Todo">
				{this.props.task}
				{this.props.done}
				<button>Edit</button>
				<button onClick={this.handleRemove}>X</button>
			</li>
		);
	}
}

export default Todo;

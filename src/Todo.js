import React, { Component } from 'react';

class Todo extends Component {
	render() {
		// console.log(this.props);
		return (
			<li className="Todo">
				{this.props.task}
				{this.props.done}
				<button>Edit</button>
				<button onClick={this.props.remove}>X</button>
			</li>
		);
	}
}

export default Todo;

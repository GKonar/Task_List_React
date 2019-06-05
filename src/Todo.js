import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div>
				{this.props.todo}
				<button>X</button>
			</div>
		);
	}
}

export default Todo;

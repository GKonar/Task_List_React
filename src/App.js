import React from 'react';
import './App.css';
import Todo from './Todo';

function App() {
	return (
		<div className="App">
			<h1>App</h1>
			<Todo todo={'clean the toilet'} />
		</div>
	);
}

export default App;

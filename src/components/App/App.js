import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://api.github.com/users/comum');

			setUser(result.data);
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<p>{user.name}</p>
		</div>
	);
}

export default App;

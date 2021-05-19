import React, { useState, useEffect } from 'react';
import Table from './Components/Table';
import './App.css';
import TableContext from './tableContext';
import AddEntry from './Components/AddEntry';
import Changes from './Components/Changes';
import axios from 'axios';
// import data from './Components/data.json';

function App() {
	let [error, setError] = useState(null);
	let [isLoaded, setLoaded] = useState(false);
	let [peopleList, setPeopleList] = useState([]);
	// let [peopleList, setPeopleList] = useState(data);
	// let [isLoaded, setLoaded] = useState(true);

	useEffect(() => {
		axios
			.get('http://178.128.196.163:3000/api/records')
			.then((result) => {
				setLoaded(true);
				setPeopleList(result.data);
			})
			.catch((error) => {
				setLoaded(true);
				setError(error);
			});
	}, []);

	function addEntry(name, age, _id, __v) {
		setPeopleList(
			peopleList.concat([
				{ _id, data: { name, age }, __v, index: peopleList.length + 1 },
			])
		);
	}

	function removeEntry(id) {
		// if (peopleList[index].__v == 0) {
		// 	console.log('Не надо удалять');
		// } else {
		// 	setPeopleList(peopleList.filter((persone) => persone._id !== id));
		// }
	}

	if (error) return <p>Error {error.message}</p>;
	else if (!isLoaded) return <p>Loading...</p>;
	else
		return (
			<TableContext.Provider value={{ peopleList, addEntry, removeEntry }}>
				<div className='content-container'>
					<AddEntry key='add-entry' />
					<Table key='table' />
					<Changes />
				</div>
			</TableContext.Provider>
		);
}

export default App;

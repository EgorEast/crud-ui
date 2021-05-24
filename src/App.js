import React, { useState, useEffect } from 'react';
import Table from './Components/Table';
import './App.css';
import TableContext from './tableContext';
import AddEntry from './Components/AddEntry';
import axios from 'axios';

function App() {
	const rootUrl = 'http://178.128.196.163:3000/api/records';
	const [error, setError] = useState(null);
	const [isLoaded, setLoaded] = useState(false);
	const [peopleList, setPeopleList] = useState([]);
	const [isUpdated, setUpdated] = useState(true);

	useEffect(() => {
		axios
			.get(rootUrl)
			.then((result) => {
				setLoaded(true);
				setPeopleList(result.data);
				setUpdated(false);
			})
			.catch((error) => {
				setLoaded(true);
				setError(error);
			});
	}, [isUpdated]);

	function addEntry(name, age, _id, __v) {
		axios
			.put(rootUrl, {
				_id,
				data: { name, age },
				__v,
			})
			.then((response) => {})
			.catch((error) => {
				console.log(error);
			});
		setUpdated(true);
	}

	function removeEntry(id) {
		axios.delete(`${rootUrl}/${id}`);
		setUpdated(true);
	}

	function saveChangesPersone(id, name, age) {
		axios
			.post(`${rootUrl}/${id}`, {
				data: { name, age },
			})
			.then((response) => {})
			.catch((error) => {
				console.log(error);
			});
		setUpdated(true);
	}

	if (error) return <p>Error {error.message}</p>;
	else if (!isLoaded) return <p>Loading...</p>;
	else
		return (
			<TableContext.Provider
				value={{
					rootUrl,
					peopleList,
					addEntry,
					removeEntry,
					saveChangesPersone,
				}}
			>
				<div className='content-container'>
					<AddEntry key='add-entry' />
					<Table key='table' />
				</div>
			</TableContext.Provider>
		);
}

export default App;

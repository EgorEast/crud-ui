import React, { useState } from 'react';
import Table from './Components/Table';
import './App.css';
import TableContext from './tableContext';
import data from './Components/data.json';
import AddEntry from './Components/AddEntry';

function App() {
	let [listOfPeople, setPersone] = useState(data.listOfPeople);

	function addEntry(firstName, lastName, age) {
		setPersone(
			listOfPeople.concat([
				{ firstName, lastName, age, id: listOfPeople.length + 1 },
			])
		);
	}

	function removeEntry(id) {
		setPersone(listOfPeople.filter((persone) => persone.id !== id));
	}

	return (
		<TableContext.Provider value={{ listOfPeople, addEntry, removeEntry }}>
			<AddEntry key='add-entry' />
			<Table key='table' />
		</TableContext.Provider>
	);
}

export default App;

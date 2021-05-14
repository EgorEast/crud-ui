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

	return (
		<TableContext.Provider value={{ listOfPeople, setPersone }}>
			<AddEntry onCreate={addEntry} />
			<Table key='table' />
		</TableContext.Provider>
	);
}

export default App;

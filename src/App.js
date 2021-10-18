import React, { useState, useEffect, useMemo } from 'react';
import Table from './Components/Table';
import './App.css';
import TableContext from './tableContext';
import AddEntry from './Components/AddEntry';
import axios from 'axios';
import UserListService from './UserList/UserListService';

function App() {
	const rootUrl = 'http://178.128.196.163:3000/api/records';
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [peopleList, setPeopleList] = useState([]);
	const [isTrouthLocalStorage, setIsTrouthLocalStorage] = useState(false);

	const userListService = useMemo(() => {
		return new UserListService();
	}, []);

	useEffect(() => {
		let data = [];
		if (isTrouthLocalStorage) {
			data = userListService.getPersonList();
		} else {
			data = axios.get(rootUrl);
		}

		data
			.then((result) => {
				setIsLoaded(true);
				setPeopleList(result.data);
				setError(null);
			})
			.catch((error) => {
				setError(error);
			});
	}, [userListService, isLoaded, isTrouthLocalStorage]);

	function addEntry(name, age, _id, __v) {
		let promise;

		if (isTrouthLocalStorage) {
			promise = userListService.addPerson({
				_id,
				data: { name, age },
				__v,
			});
		} else {
			promise = axios.put(rootUrl, {
				_id,
				data: { name, age },
				__v,
			});
		}
		promise
			.then((result) => {
				setPeopleList((prev) => [...prev, result.data]);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function removeEntry(id) {
		let promise;
		if (isTrouthLocalStorage) {
			promise = userListService.deletePerson(id);
		} else {
			promise = axios.delete(`${rootUrl}/${id}`);
		}
		promise
			.then((response) => {
				if (response.data) {
					const newList = peopleList.filter((elem) =>
						elem._id !== id ? elem : null
					);
					setPeopleList(newList);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function saveChangesPersone(id, name, age) {
		let promise;
		if (isTrouthLocalStorage) {
			promise = userListService.updatePerson(id, {
				data: { name, age },
			});
		} else {
			promise = axios.post(`${rootUrl}/${id}`, {
				data: { name, age },
			});
		}
		promise
			.then((response) => {})
			.catch((error) => {
				console.log(error);
			});
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
					{isTrouthLocalStorage ? (
						<h1 className='local-storage-version-h1'>
							Work through Local Storage
						</h1>
					) : null}
					<AddEntry key='add-entry' />
					<Table key='table' />
					<div className='buttons'>
						<button
							onClick={() => {
								setPeopleList([]);
								setIsLoaded(false);
								setIsTrouthLocalStorage(false);
							}}
						>
							Through Server
						</button>
						<button
							onClick={() => {
								setPeopleList([]);
								setIsLoaded(false);
								setIsTrouthLocalStorage(true);
							}}
						>
							Through Local Storage
						</button>
					</div>
				</div>
			</TableContext.Provider>
		);
}

export default App;

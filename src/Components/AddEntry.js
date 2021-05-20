import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';
import axios from 'axios';

function randInt(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

let newID = (idLenght, rootUrl) => {
	let isCorrectId = true;
	let id = '';
	const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

	do {
		let coincidence = false;

		id = '';

		while (id.length < idLenght) {
			const rand = randInt(0, 15);
			id += rand < 10 ? rand : letters[rand - 10];
		}
		axios.get(`${rootUrl}/${id}`).then((result) => {
			if (result.data === null) coincidence = false;
			else coincidence = true;
		});

		if (coincidence) isCorrectId = false;
		else isCorrectId = true;
	} while (!isCorrectId);
	return id;
};

function AddEntry() {
	let { rootUrl, addEntry } = useContext(TableContext);

	let [name, setName] = useState('');
	let [age, setAge] = useState('');
	let id;

	function submitHandler(event) {
		event.preventDefault();

		if (name && age) {
			id = newID(24, rootUrl);

			addEntry(name, age, id, 0);
			setName('');
			setAge('');
			id = 0;
		} else console.log('Заполните все поля');
	}

	return (
		<form className='add-form' onSubmit={submitHandler}>
			<input
				type='text'
				className='add-form__input'
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
				placeholder='Name'
			></input>
			<input
				type='number'
				className='add-form__input'
				value={age}
				onChange={(event) => {
					setAge(event.target.value);
				}}
				placeholder='Age'
			></input>
			<button className='add-btn' type='submit'>
				add
			</button>
		</form>
	);
}
export default AddEntry;

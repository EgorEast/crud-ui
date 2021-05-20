import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';
import axios from 'axios';

function randInt(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

let newID = (idLenght) => {
	let isCorrectId = true;
	let id = '';
	const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

	do {
		id = '';
		while (id.length < idLenght) {
			const rand = randInt(0, 15);
			id += rand < 10 ? rand : letters[rand - 10];
		}

		axios
			.get(`http://178.128.196.163:3000/api/records/${id}`)
			.then((result) => {
				if (result.data === null) isCorrectId = true;
				else isCorrectId = false;
			});
	} while (!isCorrectId);
	return id;
};

function AddEntry() {
	let { addEntry } = useContext(TableContext);

	let [name, setName] = useState('');
	let [age, setAge] = useState('');
	let id;

	function submitHandler(event) {
		event.preventDefault();

		id = newID(24);

		if (name && age) {
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

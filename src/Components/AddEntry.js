import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';

function randInt(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

let newID = (idLenght, peopleList) => {
	let isCorrectId = true;
	let id = '';
	const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
	do {
		while (id.length < idLenght) {
			const rand = randInt(0, 15);
			id += rand < 10 ? rand : letters[rand - 10];
		}
		isCorrectId = true;
		peopleList.forEach((persone) => {
			if (id === persone._id) {
				isCorrectId = false;
				console.log('ne poluchaetsa');
				return;
			}
		});
	} while (!isCorrectId);
	return id;
};

function AddEntry() {
	let { addEntry, peopleList } = useContext(TableContext);

	let [name, setName] = useState('');
	let [age, setAge] = useState('');
	let id;

	function submitHandler(event) {
		event.preventDefault();

		id = newID(24, peopleList);

		if (name && age) {
			addEntry(name, age, id, 0);
			setName('');
			id = 0;
			setAge('');
		} else console.log('Заполните все поля');
	}

	return (
		<form className='add-form' onSubmit={submitHandler}>
			<input
				type='text'
				className='add-form__input'
				value={name}
				name='firstName'
				onChange={(event) => {
					setName(event.target.value);
				}}
				placeholder='Name'
			></input>
			<input
				type='number'
				className='add-form__input'
				value={age}
				name='age'
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

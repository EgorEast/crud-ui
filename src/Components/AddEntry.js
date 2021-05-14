import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';

function AddEntry() {
	let { addEntry } = useContext(TableContext);

	let [firstname, setFirstname] = useState('');
	let [lastname, setLastname] = useState('');
	let [age, setAge] = useState('');

	function submitHandler(event) {
		event.preventDefault();

		if (firstname && lastname && age) {
			addEntry(firstname, lastname, age);
			setFirstname('');
			setLastname('');
			setAge('');
		} else console.log('Заполните все поля');
	}

	return (
		<form className='add-form' onSubmit={submitHandler}>
			<div>
				<input
					type='text'
					className='input'
					value={firstname}
					name='firstname'
					onChange={(event) => {
						setFirstname(event.target.value);
					}}
					placeholder='FIrstname'
				></input>
				<input
					type='text'
					className='input'
					value={lastname}
					name='lastname'
					onChange={(event) => {
						setLastname(event.target.value);
					}}
					placeholder='Lastname'
				></input>
				<input
					type='number'
					className='input'
					value={age}
					name='age'
					onChange={(event) => {
						setAge(event.target.value);
					}}
					placeholder='Age'
				></input>
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
}
export default AddEntry;

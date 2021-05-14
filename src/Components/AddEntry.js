import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';

function AddEntry() {
	let { addEntry } = useContext(TableContext);

	let [firstName, setFirstname] = useState('');
	let [lastName, setLastname] = useState('');
	let [age, setAge] = useState('');

	function submitHandler(event) {
		event.preventDefault();

		if (firstName && lastName && age) {
			addEntry(firstName, lastName, age);
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
					value={firstName}
					name='firstName'
					onChange={(event) => {
						setFirstname(event.target.value);
					}}
					placeholder='FIrst Name'
				></input>
				<input
					type='text'
					className='input'
					value={lastName}
					name='lastName'
					onChange={(event) => {
						setLastname(event.target.value);
					}}
					placeholder='Last Name'
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

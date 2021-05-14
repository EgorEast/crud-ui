import React, { useState } from 'react';

function AddEntry({ onCreate = () => {} }) {
	let [firstName, setFirstName] = useState('');
	let [lastName, setLastName] = useState('');
	let [age, setAge] = useState('');

	function submitHandler(event) {
		event.preventDefault();
		if (firstName && lastName && age) {
			onCreate(firstName, lastName, age);
			setFirstName('');
			setLastName('');
			setAge('');
		} else console.log('Заполните все поля');
	}

	return (
		<form className='add-form' onSubmit={submitHandler}>
			<input
				type='text'
				className='input'
				value={firstName}
				name='firstName'
				onChange={(event) => {
					setFirstName(event.target.value);
				}}
				placeholder='FIrst Name'
			></input>
			<input
				type='text'
				className='input'
				value={lastName}
				name='lastName'
				onChange={(event) => {
					setLastName(event.target.value);
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
			<button type='submit'>add</button>
		</form>
	);
}
export default AddEntry;

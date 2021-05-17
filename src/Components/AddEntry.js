import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';

function AddEntry() {
	let { addEntry } = useContext(TableContext);

	let [name, setName] = useState('');
	let [age, setAge] = useState('');
	let [id, setId] = useState('');

	function submitHandler(event) {
		event.preventDefault();

		if (name && id && age) {
			addEntry(name, age, id, 0);
			setName('');
			setId('');
			setAge('');
		} else console.log('Заполните все поля');
	}

	return (
		<form className='add-form' onSubmit={submitHandler}>
			<div>
				<input
					type='text'
					className='input'
					value={name}
					name='firstName'
					onChange={(event) => {
						setName(event.target.value);
					}}
					placeholder='Name'
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
				<input
					type='text'
					className='input'
					value={id}
					name='ID'
					onChange={(event) => {
						setId(event.target.value);
					}}
					placeholder='ID'
				></input>
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
}
export default AddEntry;

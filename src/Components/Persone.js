import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';

function Persone(persone) {
	let [name, setName] = useState(persone.name);
	let [age, setAge] = useState(persone.age);
	let { removeEntry, saveChangesPersone } = useContext(TableContext);
	let [readMode, setReadMode] = useState(false);
	const classesForInput = ['persone__input_active', 'persone__input_no-active'];
	let inputClass = '';
	if (readMode) inputClass = classesForInput[0];
	else inputClass = classesForInput[1];
	function getButton() {
		if (readMode)
			return (
				<button
					key={`save-button-${persone.id}`}
					className='changes-btn'
					onClick={() => {
						setReadMode(false);
						saveChangesPersone(persone.id, name, age);
					}}
				>
					&#10004;
				</button>
			);
		else
			return (
				<button
					key={`change-button-${persone.id}`}
					className='changes-btn'
					onClick={() => {
						setReadMode(true);
					}}
				>
					&#9998;
				</button>
			);
	}
	return [
		<td key={`name-${persone.id}`} className={inputClass}>
			<input
				key={`name-input-${persone.id}`}
				className={`persone__input ${inputClass}`}
				type='text'
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
				disabled={!readMode}
			/>
		</td>,
		<td key={`ade-${persone.id}`} className={inputClass}>
			<input
				key={`age-input-${persone.id}`}
				className={`persone__input ${inputClass}`}
				type='number'
				value={age}
				onChange={(event) => {
					setAge(event.target.value);
				}}
				disabled={!readMode}
			/>
		</td>,
		<td key={`id-${persone.id}`}>{persone.id}</td>,
		<td key={`getButton-${persone.id}`} className='changes-btn-container'>
			{getButton()}
		</td>,
		<td className='td-delete-button' key={`td-delete-button-${persone.id}`}>
			<button
				key={`remove-button-${persone.id}`}
				className='delete-button'
				onClick={() => {
					removeEntry(persone.id);
				}}
			>
				&#10006;
			</button>
		</td>,
	];
}
export default Persone;

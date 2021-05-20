import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';

function Persone(persone) {
	let [name, setName] = useState(persone.name);
	let [age, setAge] = useState(persone.age);
	let { removeEntry, saveChangesPersone } = useContext(TableContext);
	let [readMode, setReadMode] = useState(false);

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
					Сохранить
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
					Редактировать
				</button>
			);
	}
	return [
		<td key={`name-${persone.id}`}>
			<input
				key={`name-input-${persone.id}`}
				className='persone__input'
				type='text'
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
				disabled={!readMode}
			/>
		</td>,
		<td key={`ade-${persone.id}`}>
			<input
				key={`age-input-${persone.id}`}
				className='persone__input'
				type='number'
				value={age}
				onChange={(event) => {
					setAge(event.target.value);
				}}
				disabled={!readMode}
			/>
		</td>,
		<td key={`id-${persone.id}`}>{persone.id}</td>,
		<td>{getButton()}</td>,
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

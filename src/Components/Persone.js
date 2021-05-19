import React, { useContext, useState } from 'react';
import TableContext from '../tableContext';

function Persone(persone) {
	let [name, setName] = useState(persone.name);
	let [age, setAge] = useState(persone.age);

	let { removeEntry } = useContext(TableContext);

	return [
		<td key={`name-${persone.id}`}>
			<input
				key={`name-input-${persone.id}`}
				type='text'
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
				disabled={true}
			/>
		</td>,
		<td key={`ade-${persone.id}`}>
			<input
				key={`age-input-${persone.id}`}
				type='text'
				value={age}
				onChange={(event) => {
					setAge(event.target.value);
				}}
				disabled={true}
			/>
		</td>,
		<td key={`id-${persone.id}`}>{persone.id}</td>,
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
		<td>
			<button key={`change-button-${persone.id}`}>Редактировать</button>
		</td>,
	];
}
export default Persone;

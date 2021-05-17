import React, { useContext } from 'react';
import TableContext from '../tableContext';

function Persone({ id = -1, name = '', age = -1 }) {
	let { removeEntry } = useContext(TableContext);
	return [
		<td key={`name-${id}`}>{name}</td>,
		<td key={`ade-${id}`}>{age}</td>,
		<td key={`id-${id}`}>{id}</td>,
		<td className='td-delete-button' key={`td-delete-button-${id}`}>
			<button
				className='delete-button'
				onClick={() => {
					removeEntry(id);
				}}
			>
				&#10006;
			</button>
		</td>,
	];
}
export default Persone;

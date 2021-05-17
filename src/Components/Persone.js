import React, { useContext } from 'react';
import TableContext from '../tableContext';

function Persone({ id = -1, name = '', age = -1 }) {
	let { removeEntry } = useContext(TableContext);
	return [
		<td>{name}</td>,
		<td>{age}</td>,
		<td>{id}</td>,
		<td className='td-delete-button'>
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

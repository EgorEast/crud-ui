import React, { useContext } from 'react';
import TableContext from '../tableContext';

function Persone({ id = -1, index = -1, name = '', age = -1 }) {
	let { removeEntry } = useContext(TableContext);
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{name}</td>
			<td>{age}</td>
			<td>{id}</td>
			<td className='td-delete-button'>
				<button
					className='delete-button'
					onClick={() => {
						removeEntry(id, index);
					}}
				>
					&#10006;
				</button>
			</td>
		</tr>
	);
}
export default Persone;

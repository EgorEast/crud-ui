import React, { useContext } from 'react';
import TableContext from '../tableContext';

function Persone({
	id = -1,
	firstName: firstname = '',
	lastName: lastname = '',
	age = -1,
}) {
	let { removeEntry } = useContext(TableContext);
	return (
		<tr>
			<td>{id}</td>
			<td>{firstname}</td>
			<td>{lastname}</td>
			<td>{age}</td>
			<td className='td-delete-button'>
				<button
					className='delete-button'
					onClick={() => {
						removeEntry(id);
					}}
				>
					&#10006;
				</button>
			</td>
		</tr>
	);
}
export default Persone;

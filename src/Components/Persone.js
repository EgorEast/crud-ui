import React from 'react';

function Persone({ id = -1, firstName = '', lastName = '', age = -1 }) {
	return [
		<tr>
			<td>{id}</td>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{age}</td>
			<button>&times;</button>
		</tr>,
		,
	];
}
export default Persone;

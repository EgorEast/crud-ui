import React from 'react';

function Persone({ firstName = '', lastName = '', age = -1 }) {
	return (
		<tr>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{age}</td>
		</tr>
	);
}
export default Persone;

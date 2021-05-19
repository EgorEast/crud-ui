import React, { useContext } from 'react';
import TableContext from '../tableContext';

function Changes() {
	let { acceptChanges } = useContext(TableContext);
	return (
		<div className='chandes-container'>
			<button onClick={acceptChanges()}>Accept Changes</button>
		</div>
	);
}

export default Changes;

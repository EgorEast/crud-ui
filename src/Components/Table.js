import React, { useContext } from 'react';
import Persone from './Persone';
import TableContext from '../tableContext';

function Table() {
	let { listOfPeople } = useContext(TableContext);
	return (
		<table className='table'>
			<thead className='table-head'>
				<tr>
					<th>№</th>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Age</th>
					<th></th>
				</tr>
			</thead>
			<tbody className='table-body'>
				{[
					listOfPeople.map((persone, index) => {
						return (
							<Persone
								key={`persone-${persone.id}`}
								id={persone.id}
								firstname={persone.firstname}
								lastname={persone.lastname}
								age={persone.age}
							/>
						);
					}),
				]}
			</tbody>
			<tfoot></tfoot>
		</table>
	);
}

export default Table;

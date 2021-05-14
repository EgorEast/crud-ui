import React, { useContext } from 'react';
import Persone from './Persone';
import TableContext from '../tableContext';

function Table() {
	let { listOfPeople } = useContext(TableContext);
	return (
		<table className='table'>
			<thead className='table-head'>
				<tr>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody className='table-body'>
				{[
					listOfPeople.map((persone, index) => {
						return (
							<Persone
								key={`persone-${persone.id}`}
								firstName={persone.firstName}
								lastName={persone.lastName}
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

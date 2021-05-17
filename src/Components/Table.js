import React, { useContext } from 'react';
import Persone from './Persone';
import TableContext from '../tableContext';

function Table() {
	let { peopleList } = useContext(TableContext);
	return (
		<table className='table'>
			<thead className='table-head'>
				<tr>
					<th>№</th>
					<th>Name</th>
					<th>Age</th>
					<th>ID</th>
					<th></th>
				</tr>
			</thead>
			<tbody className='table-body'>
				{[
					peopleList.map((persone, index) => {
						return (
							<Persone
								key={`persone-${persone._id}`}
								index={index}
								id={persone._id}
								name={persone.data.name}
								age={persone.data.age}
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

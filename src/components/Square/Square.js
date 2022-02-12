import React from 'react';

function Square({ value, onClick }) {
	return (
		<div>
			<button className="square" onClick={onClick}>
				{value}
			</button>
		</div>
	);
}

export default Square;

// the onClick is calling another function withe the parameter of index.
// we can use index to tell which square we are working with.

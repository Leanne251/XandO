import React from 'react';
import Square from '../Square/Square';

function Board({ squares, makeChanges, turn }) {
	console.log(squares);

	return (
		<div className="squareHolder">
			{squares.map((element, index) => (
				<Square squares={squares} value={element} onClick={() => makeChanges(index)} />
			))}
		</div>
	);
}

export default Board;

// value is the x or o or null of the array passed on to the individual component.
//

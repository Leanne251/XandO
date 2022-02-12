import { useState } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../Helper/Helper';

function Game() {
	// whos turn?
	const [ isTurn, setIsTurn ] = useState(true);
	// the board changes on every go so we need to set a state for this and the board is made of squares.

	const [ board, setBoard ] = useState(Array(9).fill(null));
	const winner = calculateWinner(board); // call the function and pass in the current board.

	console.log('winner', winner);

	let turn = isTurn ? 'X' : 'O';

	// pass down a function to board, where onClick states can be changed, such as turn.
	// so onClick, we need to place a O or X, depending on whose turn it is...
	// We can only go in the square if it is empty, so we need to check for this.
	// we also need to check for a winner, by calling the winner function.
	// we need to update the board array on click. so change the value in the array when clicked with the value of the player.

	// onClick is called, which calls the function make changes with the parameter index which we have got from mapping over the squares

	function makeChanges(index) {
		console.log('index', index);
		if (winner || board[index]) {
			return;
		}

		setBoard([ ...board.slice(0, index), turn, ...board.slice(index + 1) ]);
		setIsTurn(!isTurn);
	}

	// spread the array and slice it at desired position, add in the turn and then slice from where it was.

	return (
		<div className="center">
			<Board makeChanges={makeChanges} squares={board} turn={turn} />
			<p>Player: {turn}</p>
			<br />
			{winner ? 'Winner: ' + winner : 'Next Player: ' + turn}
		</div>
	);
}

export default Game;

// need to plot out how the player will win - 8 combinations of squareA === squareB === squareC

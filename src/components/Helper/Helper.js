export function calculateWinner(board) {
	const winningLines = [
		[ 0, 1, 2 ],
		[ 3, 4, 5 ],
		[ 6, 7, 8 ],
		[ 0, 3, 6 ],
		[ 1, 4, 7 ],
		[ 2, 5, 8 ],
		[ 0, 4, 8 ],
		[ 2, 4, 6 ]
	];
	for (let i = 0; i < winningLines.length; i++) {
		// count trhough each winning combo
		// compare the value on the square with each other combination
		const a = winningLines[i][0];
		const b = winningLines[i][1];
		const c = winningLines[i][2];
		// SAME AS: const [ a, b, c ] = lines[i];

		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a];
		}
	}
	return null;
}

// then asign squares a,b,c to equal an array in winning combo.
// then write an if statement to check winners.

//create a function to determine the winners.
// write out all winning combos.

//then count through the combos and compare if the values match.

// below is detructuring...
// for example if lines[i] = [1,2,3]
// then let [a,b,c] = let a = 1, let

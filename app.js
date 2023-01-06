let cells = document.querySelectorAll('.row > div');
let result = document.querySelector('#message');



let playerX = true;
let turnCounter = 0;
let winner = false;



for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', cellClicked);
};

function cellClicked(choice) {
	if (choice.target.textContent) {
		return;
	} else if (playerX) {
		turnCounter++;
		choice.target.textContent = 'X';
		playerX = !playerX;
	} else {
		turnCounter++;
		choice.target.textContent = 'O';
		playerX = !playerX;
	};
	checkforWinner(cells);
	if (turnCounter === 9 && winner === false) {
		result.textContent = ('------Draw!!!------');
		gameOver();
	}
};



function checkforWinner(cells) {
	if (
		(cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X')
		|| (cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X')
		|| (cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X')
		|| (cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X')
		|| (cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X')
		|| (cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X')
		|| (cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X')
		|| (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X')
	) {
		result.textContent = ('--Player X Wins!--');
		winner = true;
		gameOver();
	} else if (
		(cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O')
		|| (cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O')
		|| (cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O')
		|| (cells[0].textContent == 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O')
		|| (cells[1].textContent == 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O')
		|| (cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O')
		|| (cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O')
		|| (cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O')
	) {
		result.textContent = ('--Player O Wins!--');
		winner = true;
		gameOver();
	} else return;
};



function gameOver() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener('click', restartGame);
		cells[i].removeEventListener('click', cellClicked);
	}
}

function restartGame() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener('click', cellClicked);
		cells[i].removeEventListener('click', restartGame);
		cells[i].textContent = '';
	}
	playerX = true;
	turnCounter = 0;
	winner = false;
	result.textContent = null;
}

/*const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];*/
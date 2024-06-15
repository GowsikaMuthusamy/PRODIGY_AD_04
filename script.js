let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    
    if (checkWin()) {
      document.getElementById('status').innerText = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (gameBoard.every(cell => cell !== '')) {
      document.getElementById('status').innerText = 'It\'s a tie!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('status').innerText = `Current player: ${currentPlayer}`;
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];

  return winPatterns.some(pattern =>
    pattern.every(index => gameBoard[index] === currentPlayer)
  );
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  // Clear the board and status display
  Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.innerText = '');
  document.getElementById('status').innerText = 'Current player: X';
}

const cells = document.getElementsByClassName("cell");
const turnDisplay = document.getElementById("turn");
const winnerDisplay = document.getElementById("winner");
const restartBtn = document.getElementById("restart");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameEnd = false;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


cells[0].addEventListener("click", handleCellClick);
cells[1].addEventListener("click", handleCellClick);
cells[2].addEventListener("click", handleCellClick);
cells[3].addEventListener("click", handleCellClick);
cells[4].addEventListener("click", handleCellClick);
cells[5].addEventListener("click", handleCellClick);
cells[6].addEventListener("click", handleCellClick);
cells[7].addEventListener("click", handleCellClick);
cells[8].addEventListener("click", handleCellClick);
// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", handleCellClick);
// }


function handleCellClick(e) {
  const cell = e.target;
  const cellIndex = cell.getAttribute("id");

  if (board[cellIndex] === "" && !gameEnd) {
    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.style.color = currentPlayer === "X" ? "blue" : "red";
    checkGameEnd();
    if (!gameEnd) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}


function checkGameEnd() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      gameEnd = true;
      winnerDisplay.textContent = `Player ${currentPlayer} wins!`;
      return;
    }
  }
  if (board.every((cell) => cell !== "")) {
    gameEnd = true;
    winnerDisplay.textContent = "Draw!";
    return;
  }
}


function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameEnd = false;
  turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
  winnerDisplay.textContent = "";
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].style.color = "black";
  }
}

restartBtn.addEventListener("click", restartGame);

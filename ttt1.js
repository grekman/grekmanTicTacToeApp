var gameController = document.getElementById("gameController");
var activePlayer = "X";
var moves = [];
var ticTacToeCells = document.getElementsByClassName("box");

var winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [6,4,2],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8]
];


function playTurn(cellIndex) {
  if (isBlank(cellIndex)) {
    // Track each player's moves
    moves[cellIndex] = activePlayer;

    if (activePlayer == "X") {
      drawX(cellIndex);
    } else {
      drawO(cellIndex);
    }

    if (isWinner(activePlayer)) {
      gameOver(activePlayer + " has won!");
    } else if (isTie()) {
      gameOver("It's a draw, try again!");
    } else {
    activePlayer = (activePlayer === "X") ? "O" : "X";
  }
  }
}

function gameOver(message) {
  // Pause the game for a 1/2 second before displaying the game over message
  setTimeout(function() {
    alert(message);
    reset();
    activePlayer = (activePlayer === "X") ? "O" : "X";
  }, 500);
}

function drawX(cellIndex) {
  document.getElementsByClassName('box')[cellIndex].innerHTML = "X";

}
function drawO(cellIndex) {
  document.getElementsByClassName('box')[cellIndex].innerHTML = "O";
}

function isBlank(cellIndex) {
  if (moves[cellIndex] === undefined) {
    return true;
  } else {
    return false;
  }
}

function isWinner(player) {
  for (var i = 0; i < winningCombinations.length; i++) {
    if (moves[winningCombinations[i][0]] == player &&
       moves[winningCombinations[i][1]] == player &&
       moves[winningCombinations[i][2]] == player) {
       highlightWinningCombo(winningCombinations[i]);
       return true;
    }
  }
  return false;
}

function isTie() {
  for (var i = 0; i < 9; i++) {
    console.log("moves[" + i + "]=" + moves[i]);
    if (typeof moves[i] == 'undefined' || null === moves[i] ) {
      return false;
    }
  }
  return true;
}

function highlightWinningCombo(winningCombo) {
  for (var i = 0; i < winningCombo.length; i++) {
    var cell = ticTacToeCells[winningCombo[i]];
    cell.classList.add("winner");
  }
}

function reset() {
  for (var i = 0; i <= moves.length; i++) {
    if (moves[i] !== undefined) {
      // Erase the cells that have X or O
      var cell = ticTacToeCells[i];
      document.getElementsByClassName('box')[i].innerHTML = "";

    }
  }

  // Reset the moves array
  moves = [];
}

gameController.addEventListener("click", function() {
  reset();
});

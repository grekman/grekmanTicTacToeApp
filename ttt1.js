var gameController = document.getElementById("gameController");
var activePlayer = "X";
var moves = [];
var ticTacToeCells = document.getElementsByClassName("box");


function draw(cellIndex) {
  if (isBlank(cellIndex)) {
    // Track each player's moves
    moves[cellIndex] = activePlayer;

    if (activePlayer == "X") {
      drawX(cellIndex);
    } else {
      drawO(cellIndex);
    }
    activePlayer = (activePlayer === "X") ? "O" : "X";
  }
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



/*function isTie() {
  for (var i = 0; i < 9; i++) {
    console.log("moves[" + i + "]=" + moves[i]);
    if (typeof moves[i] == 'undefined' || null === moves[i] ) {
      return false;
    }
  }
  return true;
}*/


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
for (var i = 0; i < ticTacToeCells.length; i++) {
    addClickHandler(ticTacToeCells[i], i);
}

function addClickHandler(box, index) {
    console.log("type", box);
    box.addEventListener("click", function() {
        draw(index);
    }, false);
}

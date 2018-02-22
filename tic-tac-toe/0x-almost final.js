/**
 * We need some variable to stock information that will be used throughout the game
 */

var players = {
  x: {
    name: "Player 1",
    score: 0
  },
  o: {
    name: "Player 2",
    score: 0
  }
};
var whoseTurnIsIt = "x";
var cases = [];

// Now the functions to play

function newGame() {
  //reset the cases
  cases = [];
}

function addMark(who, where) {
  //check if it is the right turn
  if (whoseTurnIsIt != who) {
    console.log("ERROR, it is up to", players[whoseTurnIsIt].name, "to play!");
    return;
  }
  //check that the provided case is between 1 and 9
  if (where < 1 || where > 9) {
    console.log("ERROR, please provide a case between 1 and 9");
    return;
  }
  //check if the case is free
  if (cases[where]) {
    console.log("ERROR, this case is already taken");
    return;
  }

  //add the mark to the specified position
  cases[where] = who;

  //printBoard
  printBoard();

  //checkIfPlayer wins
  isWinningMove(who);

  //Switch turn
  switchTurn();

  //Check if there are still cases empty or play a new game
  isGameFinished();
}

//Switch turn
function switchTurn() {
  whoseTurnIsIt = whoseTurnIsIt == "x" ? "o" : "x";
}

//Check if player wins
function isWinningMove(who) {
  var won = false;
  var winningCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
  ];
  winningCombinations.forEach(function(el) {
    var check = el.every(function(c) {
      return cases[c] == who;
    });
    if (check) {
      won = true;
    }
  });
  if (won) {
    players[who].score++;
    console.log("Congratulations ", players[who].name, " You have won!");
    console.log("Player 1 has", players.x.score, "points");
    console.log("Player 2 has", players.o.score, "points");
    newGame();
  }
}

//Print the board
function printBoard() {
  var board = "-------------\n";
  board += "|";
  for (let i = 1; i <= 9; i++) {
    board += " " + (cases[i] || "-") + " |";
    if (i % 3 == 0) {
      board += "\n-------------\n";
      if (i != 9) {
        board += "|";
      }
    }
  }
  console.log(board);
}

//Check if there are some cases left to go on the game
function isGameFinished() {
  //If there is at least one case empty, get back to the game
  for (let i = 1; i <= 9; i++) {
    if (!cases[i]) {
      return;
    }
  }
  //Otherwise start a new game
  console.log(
    "It's a draw! Let's start a new one. It is up to",
    players[whoseTurnIsIt].name,
    "to play!"
  );
  newGame();
}

//shortCuts
function x(where) {
  addMark("x", where);
}
function o(where) {
  addMark("o", where);
}

//.load ./tic-tac-toe/01-setup.js

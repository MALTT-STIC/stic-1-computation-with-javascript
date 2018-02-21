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
  //reset all the initial variables except the score
  cases = [];
}

function addMark(who, where) {
  //check if it is the right turn
  if (whoseTurnIsIt != who) {
    console.log("ERROR, it is up to", players[whoseTurnIsIt].name, "to play!");
    return;
  }
  //check if the case is free
  if (cases[where]) {
    console.log("Error, this case is already taken");
    return;
  }

  //add the mark
  cases[where] = who;

  //printBoard
  printBoard();

  //checkIfPlayer wins
  truthTable(who);

  whoseTurnIsIt = whoseTurnIsIt == "x" ? "o" : "x";
}

function truthTable(who) {
  var won = false;
  var combinations = [
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 9],
    [4, 5, 6],
    [7, 8, 9]
  ];
  combinations.forEach(function(el) {
    var check = el.every(function(c) {
      return cases[c] == who;
    });
    if (check) {
      won = true;
    }
  });
  if (won) {
    players[who].score++;
    console.log("Congratulations player", players[who].name, "! You have won!");
    console.log("Player 1 has", players.x.score, "points");
    console.log("Player 2 has", players.o.score, "points");
    newGame();
  }
}

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

//shortCuts
function x(where) {
  addMark("x", where);
}
function o(where) {
  addMark("o", where);
}

//.load ./tic-tac-toe/01-setup.js

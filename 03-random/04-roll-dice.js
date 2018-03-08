//Create a function that simulate a dice
function rollDice() {
  //Return number from 1 to 6
  return Math.floor(Math.random() * 6 + 1);
}

//Keep track of the score
var scores = {
  you: 0,
  computer: 0,
  draws: 0
};

//Create a function that print the current score upon request
function whatIsTheScore() {
  console.log("******************");
  console.log("You have", scores.you, "points");
  console.log("The computer has", scores.computer, "points");
  console.log("Number of draws:", scores.draws);
  console.log("******************");
}

//Create a function that simulate a game
function play() {
  var yourResult = rollDice();
  var computerResult = rollDice();

  //Check the result
  if (yourResult > computerResult) {
    scores.you++;
    console.log("You won", yourResult, "to", computerResult);
  } else if (yourResult < computerResult) {
    scores.computer++;
    console.log("The computer won", computerResult, "to", yourResult);
  } else {
    scores.draws++;
    console.log("It's a draw", yourResult, "-", computerResult);
  }

  //Print the current score
  whatIsTheScore();
}

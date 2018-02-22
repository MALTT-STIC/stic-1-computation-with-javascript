/**
 * Now we want to add a penalty for wrong answers
 * We could use the same function with negative numbers
 * But this risks to cause more errors
 * So we add another function for penalties
 */

var score = 0;

//Function to add points
function incrementScoreBy(points) {
  //increment the score
  score = score + points;
}

//Function to substract points
function decrementScoreBy(points) {
  //decrement the score
  score = score - points;
}

//Use both functions
incrementScoreBy(20); //--> score = 20
decrementScoreBy(5); //--> score = 15
incrementScoreBy(15); //--> score = 30
decrementScoreBy(20); //--> score = 10

/**
 * We have a simple scaffolding of an app, but we can do better
 * For instance, we could easly forget if when we decrement
 * We need to use positive or negative numbers
 * To avoid this problem, we will "sanitize" the points
 */

var score = 0;

//Function to add points
function incrementScoreBy(points) {
  //increment the score
  score = score + points;
}

//Function to substract points
function decrementScoreBy(points) {
  //Force number to be positive using Math.abs()
  points = Math.abs(points);
  //decrement the score
  score = score - points;
  //At this point, check if it is below zero
  if (score < 0) {
    //Set it back to zero
    score = 0;
  }
}

//Use both functions
incrementScoreBy(20); //--> score = 20
decrementScoreBy(-50); //--> score = 0
incrementScoreBy(15); //--> score = 15
decrementScoreBy(5); //--> score = 10

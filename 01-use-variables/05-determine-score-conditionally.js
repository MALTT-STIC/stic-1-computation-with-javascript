/**
 * To avoid learners excessive frustration when they are wrong
 * We don't want the score to go below 0
 * We add a control inside the function to avoid this
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
  //At this point, check if it is below zero
  if (score < 0) {
    //Set it back to zero
    score = 0;
  }
}

//Use both functions
incrementScoreBy(20); //--> score = 20
decrementScoreBy(50); //--> score = 0
incrementScoreBy(15); //--> score = 15
decrementScoreBy(5); //--> score = 10

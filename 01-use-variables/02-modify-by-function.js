/**
 * Now we need a way to increment the score if the learner has a right answer
 */

var score = 0;

//Declare the function
function incrementScore() {
  //increment the score
  score = score + 1;
}

//Use the function three times
incrementScore(); //--> score = 1
incrementScore(); //--> score = 2
incrementScore(); //--> score = 3

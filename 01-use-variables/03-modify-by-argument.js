var score = 0;

//Declare the function and accept an argument as number of points to add
//In this way we have a more flexible function
function incrementScoreBy(points) {
  //increment the score
  score = score + points;
}

//Use the function three times
incrementScoreBy(5); //--> score = 5
incrementScoreBy(10); //--> score = 15
incrementScoreBy(50); //--> score = 65

var givenAnswer = prompt("What programming language is used in this article?");
var correctAnswer = "JavaScript";

function isGivenAnswerCorrect(given, correct) {
  var given = given.toLowerCase().trim();
  var correct = correct.toLowerCase().trim();

  return given == correct;
}

//Check the correctAnswer
if (isGivenAnswerCorrect(givenAnswer, correctAnswer)) {
  console.log("Yes,", correctAnswer, "is the right answer");
} else {
  console.log("Sorry,", givenAnswer, "is not the right answer!");
}

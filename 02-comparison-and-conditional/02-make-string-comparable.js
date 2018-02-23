var givenAnswer = prompt("What programming language is used in this article?");
var correctAnswer = "JavaScript";

//Check the correctAnswer
if (givenAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
  console.log("Yes,", correctAnswer, "is the right answer");
} else {
  console.log("Sorry,", givenAnswer, "is not the right answer");
}

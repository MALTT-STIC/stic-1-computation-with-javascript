var possibleAnswers = ["html", "css", "javascript"];

//Question
var givenAnswer = prompt(
  "Cite one of the main web technologies that compose an interactive web page"
);

//Check if the answer is in the array (if not, it return -1)
var isInArray = possibleAnswers.indexOf(givenAnswer.toLowerCase());

//Give a conditional feedback
if (isInArray < 0) {
  console.log(
    "Sorry, but",
    givenAnswer,
    "is not considered one of the main technologies"
  );
} else {
  console.log("Yes,", givenAnswer, "is one of the main web technologies");
}

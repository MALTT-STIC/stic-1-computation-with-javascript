var quiz = [
  {
    country: "Switzerland",
    capital: "Bern"
  },
  {
    country: "France",
    capital: "Paris"
  },
  {
    country: "Italy",
    capital: "Rome"
  }
];

//Create a function that randomly ask what is the capital of ...
function randomQuestion() {
  //We generate a random number from 0 to the number of elements in the quiz
  var randomNumber = Math.floor(Math.random() * quiz.length);
  //Retrieve the current country and capital
  var currentCountry = quiz[randomNumber].country;
  var currentCapital = quiz[randomNumber].capital;

  //Prompt the question
  var givenAnswer = prompt("What is the capital of " + currentCountry + "?");

  //Check the answer
  if (givenAnswer.toLowerCase() == currentCapital.toLowerCase()) {
    console.log("Yes, the capital of", currentCountry, "is", currentCapital);
  } else {
    console.log("Nope, the capital of", currentCountry, "is", currentCapital);
  }
}

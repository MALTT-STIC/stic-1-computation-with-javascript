//First principle is the concept of writing and reading from a variable

//To write a litteral value to a variable, just assign it. In this case we assign numbers.
var bachelorCredits = 180;
var masterCredits = 120;
var hoursPerCredit = 30;

//Wrong assignement order
var wrongTotalSuffering = bachelorCredits + masterCredits * hoursPerCredit;
console.log(wrongTotalSuffering); //3780

//Right assignment order
var actualTotalSuffering = (bachelorCredits + masterCredits) * hoursPerCredit;
console.log(actualTotalSuffering); //9000

//First principle is the concept of writing and reading from a variable

//To write a litteral value to a variable, just assign it. In this case we assign numbers.
var bachelorCredits = 180;
var masterCredits = 120;
var hoursPerCredit = 30;

//Wrong assignement order
var wrontTotal = bachelorCredits + masterCredits * hoursPerCredit;
console.log(wrontTotal); //3780

//Right assignment order
var rightTotal = (bachelorCredits + masterCredits) * hoursPerCredit;
console.log(rightTotal); //9000

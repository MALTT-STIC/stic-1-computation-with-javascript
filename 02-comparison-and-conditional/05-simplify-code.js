var grade = prompt("Insert a grade between 0 and 6, with 0.25 steps");

/**
 * From 0 to 1.75 --> Sorry, that's very bad
 * From 2 to 2.75 --> Something must have gone wrong!
 * From 3 to 3.75 --> It's not enough, but you are close
 * From 4 to 5.00 --> Yes, that's good!
 * Above 5 --> Great!
 */

if (grade > 5) {
  console.log("Great!");
} else if (grade >= 4) {
  console.log("Yes, that's good!");
} else if (grade >= 3) {
  console.log("It's not enought, but you are close");
} else if (grade >= 2) {
  console.log("Something must have gone wrong!");
} else {
  console.log("Sorry, that's very bad");
}

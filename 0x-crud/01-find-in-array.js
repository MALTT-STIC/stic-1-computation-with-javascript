var days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

//Ask participant to provide any day of the week and check if it exists
var givenDay = prompt("Provide the name of any day of the week in English");
givenDay = givenDay.toLocaleLowerCase().trim();

//Use the .indexOf() method to see if the given day appears
var itExists = days.indexOf(givenDay);

/**
 * If there is no match, -1 is returned
 * Otherwise the index of the element in the array, starting from 0, is returned
 * */
if (itExists < 0) {
  console.log("The name of the day provided does not exist or is mispelled!");
} else {
  console.log(
    "Yes, you have provided the day of the week number",
    itExists + 1,
    "counting from Monday on"
  );
}

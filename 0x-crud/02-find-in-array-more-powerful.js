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

var message = "The name of the day provided does not exist or is mispelled!";

//We will use the .find() method, which is more powerful
var itExists = days.find(function(el, index, array) {
  if (this.toString() == el) {
    message = `Yes, ${el} is the day of the week number ${index + 1}.`;
    message += "The names of the day are: " + array.join(", ");
    return true;
  }
}, givenDay);

console.log(message);

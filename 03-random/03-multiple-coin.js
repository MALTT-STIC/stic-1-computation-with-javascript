//Use a function to flip the coin
function getCoinFace() {
  var randomNumber = Math.random();

  //Check the random number to determine heads or tails
  if (randomNumber < 0.5) {
    return "Heads";
  } else {
    return "Tails";
  }
}

//Let's use an object to stock the results
var flips = {
  Heads: 0,
  Tails: 0
};

//Simulate 100 flips
for (let i = 0; i < 100; i++) {
  var currentFlip = getCoinFace();
  flips[currentFlip]++;
}

//Log the results
console.log("Total Heads:", flips.Heads);
console.log("Total Tails:", flips.Tails);

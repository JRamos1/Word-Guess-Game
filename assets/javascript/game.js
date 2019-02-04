//words to choose from
var words = ["grape", "orange", "peach", "plum"];

// generates random number
var randNum = Math.floor(Math.random() * words.length);

// Chooses word based on random number generated
var choosenWord = words[randNum];

// empty array to be shown in html
var blankWord = [];

// array for correct guesses
var rightGuess = [];

// array for wrong guesses
var wrongGuess = [];

// var for tries left
var tries = 10;

// function that generates underscores based on the length of the chosenWord variable and pushes them to the blankWord array
var underscore = () => {
  for (var i = 0; i < choosenWord.length; i++) {
    blankWord.push("_");
  }
  return blankWord;
};
// gets user input
document.onkeyup = function(event) {
  var userGuess = event.key;

  if (choosenWord.indexOf(userGuess) > -1) {
    console.log(true);

    rightGuess.push(userGuess);

    blankWord[choosenWord.indexOf(userGuess)] = userGuess;
  } else {
    console.log(false);

    wrongGuess.push(userGuess);

    tries--;

    console.log(tries);
  }
};

console.log(choosenWord);

console.log(underscore());

console.log(rightGuess);

console.log(wrongGuess);

var DoctoGuessElements = document.getElementById("wordToGuess");
DoctoGuessElements.innerHTML = blankWord;

var DocCorrectGuess = document.getElementById("rightGuesses");
DocCorrectGuess.innerHTML = rightGuess;

var DocwrongGuess = document.getElementById("wrongGuesses");
DocwrongGuess.innerHTML = wrongGuess;

var DocGuessesLeft = document.getElementById("Tries");
DocGuessesLeft.innerHTML = tries;

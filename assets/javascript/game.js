var words = ['apple', 'orange', "peach", 'strawberry'];
var randNum = Math.floor(Math.random() * words.length);
var choosenWord = words[randNum];
var blankWord = [];
var rightGuess = [];
var wrongGuess = [];
var underscore = () => {
  for (var i = 0; i < choosenWord.length; i++) {
    blankWord.push('_');
  }
  return blankWord;
}

document.onkeyup = function (event) {
  var userGuess = event.key;


  if (choosenWord.indexOf(userGuess) > -1) {
    console.log(true);
    rightGuess.push(userGuess);
    blankWord[choosenWord.indexOf(userGuess)] = userGuess;


  }
  else {
    console.log(false);
    wrongGuess.push(userGuess);
  }


}




console.log(choosenWord);
console.log(underscore());
console.log(rightGuess);
console.log(wrongGuess);







//global variables

alert("Guess a letter in the food related word and get a point! Guess the whole word to win the game!");

var wins = 0;
var losses = 0;
var guessNumber = 15;

//word bank
var wordBank = ["peanuts", "ham", "bread", "knife", "jam", "cuban", "thai", "steak", "bowl", "ramen", "tofu", "fruit", "grape", "melon"];

// picks word at random
var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(computerGuess);

var wrongLetters = [];
var writeLetters = [];
var indices = [];

//creates underscores
var answerArray = [];
for (var i = 0; i < computerGuess.length; i++) {
  answerArray[i] = "_";
}


// displays underscores on page
var underScore = document.getElementById("underscores");
underScore.innerHTML = answerArray;
underScore.innerHTML = answerArray.join(" ");

//displays the amount of guese you have left
var numberOfGuesses = document.getElementById("guessNumber");
numberOfGuesses.innerHTML = guessNumber;

//displays wrong letters
var wrongList = document.getElementById("wrongLetters");
wrongList.innerHTML = wrongLetters;




//game logic

//picks up on key presses
document.onkeyup = function(event) {
  var userGuess = event.key;

  console.log(userGuess);
  for (var i = 0; i < computerGuess.length; i++) {
    if (computerGuess[i] === userGuess) indices.push(i);

{break;}

  }

  var index = computerGuess.indexOf(userGuess);

  console.log(index);
  if (index > -1) {
    console.log(true);
    wins++;
    var winsOnScreen = document.getElementById("wins");
    winsOnScreen.innerHTML = wins;

    if(wins === computerGuess.length){
      alert("You Win! Reload the page to play agian!");
    }

    answerArray[index] = userGuess;

    var writeList = document.getElementById("underscores");
    writeList.innerHTML = answerArray.join(" ");

  } else {
    console.log(false);
    wrongLetters.push(userGuess);
    guessNumber--;


    var numberOfGuesses = document.getElementById("guessNumber");
    numberOfGuesses.innerHTML = guessNumber;

    var wrongList = document.getElementById("wrongLetters");
    wrongList.innerHTML = wrongLetters;
    wrongList.innerHTML = wrongLetters.join(" ");

    if (guessNumber === 0) {
      alert("You Loose! Reload the page to try again! ");
    }
  }
};

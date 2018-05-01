//global variable
//********************************* */

var wordOptions = ["taylor", "kellu", "loto", "jimo"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];


// Game Counter

var winCount = 0;
var lossCount = 0;
var guessesleft = 9;
//functions
//********************************* */

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];


    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset


    guessesleft = 9;
    wrongLetters = [];
    blankAndSuccesses = [];



    // populate blanks and success with right number of blanks

    for (var i = 0; i < numBlanks; i++) {
        blankAndSuccesses.push("_");

    }
    //chnage HTML to reflect  round conditions
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesleft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;




    //testing/debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blankAndSuccesses);
}
function checkLetters(letter) {
    // check if letter exists in code at all
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] === letter) {
            isLetterInWord = true;
        
        }
    }

    // check where in word letter exists, then produce out blankAndSuccess array
    if (isLetterInWord) {


        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] === letter) {
                blankAndSuccesses[i] =letter;

            }
        }
    }
    else 
    {
        wrongLetters.push(letter);
        guessesleft--;

    }
    console.log(blankAndSuccesses);
}


function roundComplete(){
    console.log("win count :" + winCount + "| loss count : "+ lossCount + " | Guess Left :" + guessesleft);

document.getElementById("numGuesses").innerHTML=guessesleft;
document.getElementById("wordToGuess").innerHTML=blankAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML=wrongLetters.join(" ");
//check if user won
if (lettersinWord.toString()==blankAndSuccesses.toString()){
    winCount++;
    alert("you Won");
    //update the win counter in the HTML
document.getElementById("winCounter").innerHTML=winCount;
    startGame();


}
else if(guessesleft===0){
    lossCount++;
    alert("You Lost");

    document.getElementById("lossCounter").innerHTML=lossCount;
    startGame();
}
//check if user loss



}
    //********************************* */
    //main process


    //initiate the code for the first time 
    startGame();

    //register keyclicks

    document.onkeyup = function (event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuessed);
        //testing /debugging


        console.log(letterGuessed);
        roundComplete();


    }
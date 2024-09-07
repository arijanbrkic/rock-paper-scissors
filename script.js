//declare variables
let computerChoice;
let userScore = 0;
let computerScore = 0;


//get computer choice randomly
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

//function to call to update scores
function updateScores() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

//delete after testing
getComputerChoice();

console.log(computerChoice);

//full function to play game
function playGame(userChoice) {
    
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        userScore++;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        userScore++;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        userScore++;
    } else if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else {
        computerScore++;
    }

    //update score on webpage
    updateScores();
}

//function to reset score and allow user to play again
function playAgain() {
    userScore = 0;
    computerScore = 0;

    updateScores();
}

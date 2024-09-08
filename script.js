//declare variables
let computerChoice;
let userScore = 0;
let computerScore = 0;
let winningScore = 5;


//get computer choice randomly
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

//output round outcome to user
function displayRound(message) {
    document.getElementById('roundOutcome').textContent = message;
}

//function to call to update scores
function updateScores() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

//full function to play game
function playGame(userChoice) {

    //get a new computer choice
    getComputerChoice();
    
//first to five wins
    if (userScore >= winningScore || computerScore >= winningScore) {
        displayRound("Game over! Click play again to play again.");
        return;
    }

//game logic
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        userScore++;
        displayRound("You win! " + userChoice + " beats " + computerChoice + "!");
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        userScore++;
        displayRound("You win! " + userChoice + " beats " + computerChoice + "!");
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        userScore++;
        displayRound("You win! " + userChoice + " beats " + computerChoice + "!");
    } else if (userChoice === computerChoice) {
        displayRound("It's a tie!");
    } else {
        computerScore++;
        displayRound("You lose! " + computerChoice + " beats " + userChoice + "!");
    }

    //update score on webpage
    updateScores();

    if (userScore >= winningScore) {
        displayRound("YOU WIN! VAMOOOOOOS");
    } else if (computerScore >= winningScore) {
        displayRound("YOU LOSE LOSERRRRR");
    }
}

//function to reset score and allow user to play again
function playAgain() {
    userScore = 0;
    computerScore = 0;
    displayRound("Let's get it on!");
    updateScores();
}



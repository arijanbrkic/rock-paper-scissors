// Function to get the computer's choice at random
function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Function to handle the game logic
function playGame() {
    const computerSelection = getComputerChoice();
    const userSelection = showMessage();

    if (userSelection === computerSelection) {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". it's a tie!");
    } else if (userSelection === "paper" && computerSelection === "rock") {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". you win!");
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". you lose!");
    } else if (userSelection === "rock" && computerSelection === "paper") {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". you lose!");
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". you win!");
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". you win!");
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". you lose!");
    } else {
        alert("you chose " + userSelection + ". CPU chose: " + computerSelection + ". you lose!");
    }
}

// Function to get user input, only prompts on button click
function showMessage() {
    let userSelection;

    while (true) {
        userSelection = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();

        if (userSelection === "rock" || userSelection === "paper" || userSelection === "scissors") {
            break;
        } else {
            alert("Choose a valid option (rock, paper, or scissors).");
        }
    }

    return userSelection;
}

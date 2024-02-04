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








function showMessage() {

let userChoice = prompt("Enter your choice (rock, paper, or scissors): ").toUpperCase();
const computerSelection = getComputerChoice();

if (userChoice === "ROCK") {
    alert("You chose rock!");
} else if (userChoice === "PAPER"){
    alert("You chose paper!");
} else if (userChoice === "SCISSORS"){
    alert("You chose scissors!")
} else {
    alert("Choose correctly.")
}

console.log(computerSelection)
}
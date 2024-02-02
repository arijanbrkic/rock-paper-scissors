function showMessage() {

let userChoice = prompt("Enter your choice (rock, paper, or scissors): ").toUpperCase();

if (userChoice === "ROCK") {
    alert("You chose rock!");
} else if (userChoice === "PAPER"){
    alert("You chose paper!");
} else if (userChoice === "SCISSORS"){
    alert("You chose scissors!")
} else {
    alert("Choose correctly.")
}

}

const choice = Math.floor(Math.random()*3+1);

function getComputerChoice () {
    if(choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper"
    } else if (choice == 3) {
        return "scissors"
    }
}

function game (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "I'ts a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "I'ts a draw!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "I'ts a draw!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper!";
    } else {
        return "Choose one of the following: Rock,Scissors or Paper!";
    }
}

const playerSelection = prompt("Choose your Weapon").toLowerCase();
const computerSelection = getComputerChoice ();

console.log(game(playerSelection, computerSelection));
function newRound () {
    const choice = Math.floor(Math.random()*3+1);

    function getComputerChoice () {
        switch(choice) {
            case 1:
                return "rock"
                break;
            case 2:
                return "paper"
                break;
            case 3:
                return "scissors"
                break;
        }
    }
    computerSelection = getComputerChoice ();
};

let playerScore = 0;
let computerScore = 0;
let round = 0;

const createResult = document.createElement("p")
const result = document.querySelector("#result");
const textPlayerScore = document.querySelector("#textPlayerScore")
const textComputerScore = document.querySelector("#textComputerScore")
const resultround = document.querySelector('#resultround')

const rock = document.querySelector("#rock")
rock.addEventListener('click', () => {
    round++;
    result.textContent = `Round ${round}`;
    let playerSelection = "rock";
    newRound();
    if (playerSelection == "rock" && computerSelection == "rock") {
        resultround.textContent = "It's a draw!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        textPlayerScore.textContent = `Player Score: ${playerScore}`
        resultround.textContent = "You Win! Rock beats Scissors!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        textComputerScore.textContent = `Computer Score: ${computerScore}`
        resultround.textContent = "You Lose! Paper beats Rock!";        
    }
});

const paper = document.querySelector("#paper")
paper.addEventListener('click', () => {
    round++;
    result.textContent = `Round ${round}`;
    let playerSelection = "paper";
    newRound();
    if (playerSelection == "paper" && computerSelection == "paper") {
        resultround.textContent = "I'ts a draw!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        textPlayerScore.textContent = `Player Score: ${playerScore}`
        resultround.textContent = "You Win! Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        textComputerScore.textContent = `Computer Score: ${computerScore}`
        resultround.textContent = "You Lose! Scissors beats Paper!"
    }
});

const scissors = document.querySelector("#scissors")
scissors.addEventListener('click', () => {
    round++;
    result.textContent = `Round ${round}`;
    let playerSelection = "scissors";
    newRound();
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        resultround.textContent = "I'ts a draw!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        textPlayerScore.textContent = `Player Score: ${playerScore}`
        resultround.textContent = "You Win! Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        textComputerScore.textContent = `Computer Score: ${computerScore}`
        resultround.textContent = "You Lose! Rock beats Scissors!"; 
    }
});
function newRound () {
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
    playerSelection = prompt("Choose your Weapon").toLowerCase();
    computerSelection = getComputerChoice ();
}

let playerScore = 0;
let computerScore = 0;

    function game (playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock") {
            return "I'ts a draw!";
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return "I'ts a draw!";
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return "I'ts a draw!";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore += 1;
            return "You Win! Rock beats Scissors!";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore += 1;
            return "You Win! Paper beats Rock!";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper!";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock!";        
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore += 1;
            return "You Lose! Scissors beats Paper!";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore += 1;
            return "You Lose! Rock beats Scissors!"; 
        }   else {
            alert("Choose one of the following: Rock,Scissors or Paper!");
        }
    }

function playGame () {
    newRound();
    game (playerSelection, computerSelection);
    console.log(`The Score is Player ${playerScore} - Computer: ${computerScore}`)
    newRound();
    game (playerSelection, computerSelection);
    console.log(`The Score is Player ${playerScore} - Computer: ${computerScore}`)
    newRound();
    game (playerSelection, computerSelection);
    console.log(`The Score is Player ${playerScore} - Computer: ${computerScore}`)
    newRound();
    game (playerSelection, computerSelection);
    console.log(`The Score is Player ${playerScore} - Computer: ${computerScore}`)
    newRound();
    game (playerSelection, computerSelection);
    console.log(`The Score is Player ${playerScore} - Computer: ${computerScore}`)
}

playGame();

    if (playerScore > computerScore) {
        console.log(`The Score is Player ${playerScore} - Computer: ${computerScore}. The Player wins!`)
    } else if (playerScore < computerScore) {
        console.log(`The Score is Player ${playerScore} - Computer: ${computerScore}. The Computer wins!`)
    } else if (playerScore === computerScore){
        console.log (`The Score is Player ${playerScore} - Computer: ${computerScore}. It's a tie!`)
    } 
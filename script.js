function getComputerChoice() {
    //find a random number between 1 and 3
    let choice = Math.floor(Math.random() * 3) + 1;

    //return the choice based on the random number
    switch (choice) {
        case 1: 
            return "Rock";
            break;

        case 2:
            return "Paper";
            break;

        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    //check for all possible outcomes and return the result of both the player and computer selections
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors";
    }
    else {
        return "It's a tie!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        //play through five rounds and display the score after the five rounds are over
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result.includes("Win")) {
            playerScore++;
        }
        else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("You guys have tied!");
    }
}

game();
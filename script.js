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

    let computerSelection = getComputerChoice();

    let option = document.querySelector("#option");
    option.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                let result1 = playRound("Rock", computerSelection);
                if (result1.includes("Win"))
                    playerScore++;
                else if (result1.includes("Lose"))
                    computerScore++;
                break;
            case 'paper':
                let result2 = playRound("Paper", computerSelection);
                if (result2.includes("Win")) 
                    playerScore++;
                else if (result2.includes("Lose")) 
                    computerScore++;
                break;
            case 'scissors':
                let result3 = playRound("Scissors", computerSelection);
                if (result3.includes("Win"))
                    playerScore++;
                else if (result3.includes("Lose"))
                    computerScore++;
                break;
        }
    });

    let results = document.createElement("div");

    if (playerScore > computerScore) {
        results.textContent = "You win the game!";
    }
    else if (playerScore < computerScore) {
        results.textContent = "You lose the game...";
    }
    else if (playerScore === computerScore && playerScore !== 0) {
        results.textContent = "You guys have tied."
    }
    else {
        results.textContent = "No game was played.";
    }
}

game();
let playerScore = 0;
let computerScore = 0;

const selection = document.querySelector(".rps-select");
const score = document.querySelector("h4");
const player = document.querySelector("#player");
const pc = document.querySelector("#computer");
const currPlayerScore = document.querySelector("#player-score");
currPlayerScore.textContent = playerScore;
const currComputerScore = document.querySelector("#computer-score");
currComputerScore.textContent = computerScore;

function getComputerChoice() {
    //find a random number between 1 and 3
    let choice = Math.floor(Math.random() * 3) + 1;

    //return the choice based on the random number
    switch (choice) {
        case 1: 
            return (pc.textContent= "🪨");

        case 2:
            return (pc.textContent = "📃");

        case 3:
            return (pc.textContent = "✂️");
    }
}

function playRound(player, pc) {
    //check for all possible outcomes and return the result of both the player and computer selections
    if (player === pc) {
        score.textContent = "No points awarded.";
        currPlayerScore.textContent = playerScore;
        currComputerScore.textContent = computerScore;
    } 

    switch (player) {
        case "🪨":
            switch (pc) {
                case "📃":
                    computerScore++;
                    currPlayerScore.textContent = playerScore;
                    currComputerScore.textContent = computerScore;
                    score.textContent = "You Lose! Paper beats Rock...";
                    break;
                case "✂️":
                    playerScore++;
                    currPlayerScore.textContent = playerScore;
                    currComputerScore.textContent = computerScore;
                    score.textContent = "You Win! Rock beats Scissors!";
                    break;
            }
            break;

        case "📃":
            switch (pc) {
                case "✂️":
                    computerScore++;
                    currPlayerScore.textContent = playerScore;
                    currComputerScore.textContent = computerScore;
                    score.textContent = "You Lose! Scissors beats Paper...";
                    break;
                case "🪨":
                    playerScore++;
                    currPlayerScore.textContent = playerScore;
                    currComputerScore.textContent = computerScore;
                    score.textContent = "You Win! Paper beats Rock!";
                    break;
            }
            break;

        case "✂️":
            switch (pc) {
                case "🪨":
                    computerScore++;
                    currPlayerScore.textContent = playerScore;
                    currComputerScore.textContent = computerScore;
                    score.textContent = "You Lose! Rock beats Scissors...";
                    break;
                case "📃":
                    playerScore++;
                    currPlayerScore.textContent = playerScore;
                    currComputerScore.textContent = computerScore;
                    score.textContent = "You Win! Scissors beats Paper!";
                    break;
            }
            break;
    }
}

selection.addEventListener("click", (e) => {
    let click = e.target;
    switch (click.id) {
        case "rock":
            playRound("🪨", getComputerChoice());
            player.textContent = "🪨";
            break;
        case "paper":
            playRound("📃", getComputerChoice());
            player.textContent = "📃";
            break; 
        case "scissors":
            playRound("✂️", getComputerChoice());
            player.textContent = "✂️";
            break;
    }

    
});
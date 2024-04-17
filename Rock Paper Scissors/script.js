console.log("First to 5 points wins!");
let computerChoice;
let playerChoice;
let roundsPlayed = 0;
let pcPoints = 0;
let playerPoints = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            computerChoice = "rock"; break;
        case 1:
            computerChoice = "paper"; break;
        case 2:
            computerChoice = "scissors"; break;
    }
}

function getPlayerChoice() {
    do
        playerChoice = prompt("Write Rock, Paper or Scissors").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors");
}

function playRound() {
    getComputerChoice();
    getPlayerChoice();
    if (computerChoice === playerChoice)
        console.log("Tie! - No points awarded");
    else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        console.log(`Computer gets the point! - Computer chose: ${computerChoice}, whilst the player chose: ${playerChoice}`);
        pcPoints++;
    } else {
        console.log(`Player gets the point! - Computer chose: ${computerChoice}, whilst the player chose: ${playerChoice}`);
        playerPoints++;
    }
}

while (true) {
    playRound();
    if (pcPoints === 5) {
        console.log("PC WINS!");
        break;
    } else if (playerPoints === 5) {
        console.log("PLAYER WINS!");
        break;
    }
}

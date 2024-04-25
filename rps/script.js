let computerChoice;
let playerChoice;
let roundsPlayed = 0;
let pcPoints = 0;
let playerPoints = 0;
const buttonListener = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".pcScore");


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
    buttonListener.forEach(element => {
        element.addEventListener("click", () => {
            switch (element.id) {
                case '1': playerChoice = "rock"; break;
                case '2': playerChoice = "paper"; break;
                case '3': playerChoice = "scissors"; break;
            }
            playRound();
        })
    });
}
function playRound() {
    if(pcPoints === 5 || playerPoints === 5)
    {
        pcPoints = 0;
        playerPoints = 0;
        playerScore.textContent = `Player's score: ${playerPoints}`;
        computerScore.textContent = `Computer's score: ${pcPoints}`;
    }
    getComputerChoice();
    if (computerChoice === playerChoice)
        result.textContent = "Tie! - No points awarded";
    else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        result.innerHTML = `Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}, <span style="color:red;">It gains a point</span>`;
        pcPoints++;
        computerScore.textContent = `Computer's score: ${pcPoints}`;

    } else {
        result.innerHTML = `Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}, <span style="color:green;">You gain a point</span>`;
        playerPoints++;
        playerScore.textContent = `Player's score: ${playerPoints}`;
    }
    if(playerPoints === 5)
    {
        result.innerHTML = 'You <span style="color:green;">win!</span>, good job!';

    }
    else if(pcPoints === 5)
    {
        result.innerHTML = 'You <span style="color:red;">Lose!</span> :(';
    }
    
}
getPlayerChoice();
/* Rock, Paper, & Scissors Javascript File */


// console picks random choice
function getComputerChoice() {
    // random number between 1 - 3
    let n = Math.floor((Math.random() * 3) + 1);

    // return choice based on random number
    if (n === 1) {
        return "rock";
    }
    if (n === 2) {
        return "paper";
    }
    return "scissors";
}


// initialaze score
let humanScore = 0;
let computerScore = 0;


// compares choices (runs round) and adjusts score
function playRound(humanChoice, computerChoice){
    
    // string are the same
    if (humanChoice === computerChoice) {
        return "Tied!";
    }

    // user input rock based on string length
    if (humanChoice.length === 4) {
        if (computerChoice.length === 5) {
            computerScore++;
            return "You lose. Paper beats Rock.";
        } else {
            humanScore++;
            return "You win! Rock beats Scissors.";
        }
    }

    // user input paper based on string length
    if (humanChoice.length === 5) {
        if (computerChoice.length === 8) {
            computerScore++;
            return "You lose. Scissors beats Paper.";
        } else {
            humanScore++;
            return "You win! Paper beats Rock.";
        }
    }

    // user input scissors based on string length
    if (humanChoice.length === 8) {
        if (computerChoice.length === 4) {
            computerScore++;
            return "You lose. Rock beats Scissors.";
        } else {
            humanScore++;
            return "You win! Scissors beats Paper.";
        }
    }
}


function playGame(choice) {
    let computerSelection = getComputerChoice();

    const updateHumanPick = document.querySelector("#humanPick");
    const updateComputerPick = document.querySelector("#computerPick");
    const updateResult = document.querySelector("#result");

    updateHumanPick.textContent = "You picked " + choice + ".";
    updateComputerPick.textContent = "Computer picked " + computerSelection + ".";
    updateResult.textContent = playRound(choice, computerSelection); 

    // display updated scores
    const updateHumanScore = document.querySelector("#human");
    const updateComputerScore = document.querySelector("#computer");

    updateHumanScore.textContent = "Your Score: " + humanScore;
    updateComputerScore.textContent = "Computer Score: " + computerScore;

    // stops game when either user or console gets a score of 5
    if (humanScore === 5) {
        alert("Congratulations, you win the game!");
    } else  if (computerScore === 5){
        alert("You lose the game. :( \n");
    } 

}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playGame("rock"); 
});
paper.addEventListener("click", () => {
    playGame("paper");
});
scissors.addEventListener("click", () => {
    playGame("scissors");
});

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


// compares choices (runs round) and adjusts score accordingly 
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

    // update user and computer picks on index.html
    const updateHumanPick = document.querySelector("#humanPick");
    const updateComputerPick = document.querySelector("#computerPick");
    const updateResult = document.querySelector("#result");

    updateHumanPick.textContent = "You picked " + choice + ".";
    updateComputerPick.textContent = "Computer picked " + computerSelection + ".";

    // runs round and updates result
    updateResult.textContent = playRound(choice, computerSelection); 

    // display updated scores
    const updateHumanScore = document.querySelector("#human");
    const updateComputerScore = document.querySelector("#computer");

    updateHumanScore.textContent = "Your Score: " + humanScore;
    updateComputerScore.textContent = "Computer Score: " + computerScore;

    // calls handleResult function when user or computer reaches score of 5
    if (humanScore === 5) {
        handleResult("Congratulations, you win the game!");
    } else  if (computerScore === 5){
        handleResult("You lose the game.");
    } 

}


function handleResult(winnerString) {

    // display winnder
    const result = document.querySelector("#result");
    result.textContent = winnerString;

    // remove buttons to prevent additional rounds being played
    const removeButton = document.querySelector("#buttons");
    removeButton.remove();

    // remove certain result elements from #updates div
    const removeHumanPick = document.querySelector("#humanPick");
    const removeComputerPick = document.querySelector("#computerPick");
    removeHumanPick.remove();
    removeComputerPick.remove();
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

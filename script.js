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


// user input
function getHumanChoice() {

    let choice = window.prompt("Rock, Paper, or Scissors?");

    // return one of 3 options
    if (choice.toLowerCase() === "rock"){
        return "rock";
    }
    if (choice.toLowerCase() === "paper"){
        return "paper";
    }
    if (choice.toLowerCase() === "scissors"){
        return "scissors";
    }

    // resets function if input isn't one of 3 choices
    alert("Invalid input, try again.");
    getHumanChoice();
}


// initialaze score
let humanScore = 0;
let computerScore = 0;


// compares choices (runs round)
function playRound(humanChoice, computerChoice){
    
    // string length are the same
    if (humanChoice.length === computerChoice.length) {
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


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);


console.log(playRound(humanSelection, computerSelection));



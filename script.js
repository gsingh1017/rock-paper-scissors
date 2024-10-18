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

function getHumanChoice() {
    // user picks choice
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
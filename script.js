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

/*
// user input
function getHumanChoice() {

    
    let choice = prompt("Rock, Paper, or Scissors?");

    // return one of 3 options
    // all user inputs lowercase regardless of uppercase iterations
    if (choice.toLowerCase() === "rock"){
        return "rock";
    } else if (choice.toLowerCase() === "paper"){
        return "paper";
    } else if (choice.toLowerCase() === "scissors"){
        return "scissors";
    } else {
        // call function again if input isn't one of 3 choices
        alert("Invalid input, try again.");
        return getHumanChoice();
    } 
}
    */

// initialaze score
let humanScore = 0;
let computerScore = 0;


// compares choices (runs round) and adjusts score
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


/*function adjustScore() {
    const human = document.querySelector("#human");
    const computer = document.querySelector("#computer");

    human.textContent = "Your Score: " + humanScore;
    computer.textContent = "Computer Score: " + computerScore;

    // console.log("Your Score: " + humanScore);
    // console.log("Computer Score: " + computerScore);
}*/

function handleClick(choice) {
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

}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    /*let computerSelection = getComputerChoice();
    console.log("You picked rock.");
    console.log("Console picked " + computerSelection + "."); 
    console.log(playRound("rock", computerSelection));  */
    handleClick("rock"); 
});
paper.addEventListener("click", () => {
   /* let computerSelection = getComputerChoice();
    console.log("You picked paper.");
    console.log("Console picked " + computerSelection + ".");
    console.log(playRound("paper", computerSelection));  
    adjustScore();*/
    handleClick("paper");
});
scissors.addEventListener("click", () => {
    /*let computerSelection = getComputerChoice();
    console.log("You picked scissors.");
    console.log("Console picked " + computerSelection + ".");
    console.log(playRound("scissors", computerSelection));  
    adjustScore();*/
    handleClick("scissors");
});


if (humanScore === 5) {
    console.log("Congratulations, you win the game!");
    stop();
} else  if (computerScore === 5){
    console.log("You lose the game. :( \n");
    stop();
} 

/* 

// play game
function playGame() {

    // play game until humanScore or computerScore is 5    
    // while ((humanScore != 5) && (computerScore != 5)) {

        // get choice from user and computer
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // log choices
        console.log(humanSelection);
        console.log(computerSelection);

        // play round
        console.log(playRound(humanSelection, computerSelection));

        // log scores
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);  
    }

    returns winner
    if (humanScore === 5) {
        return console.log("Congratulations, you win the game!")
    } else {
        return console.log("You lose the game. :( \n");
    } 
}

playGame();

*/

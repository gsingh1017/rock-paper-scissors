# rock-paper-scissors


Updated rock, paper, and scissors game to be fully played without console. The game is also only played when buttons are clicked. 

An explination on the code: 

- The game will only be played when a button is clicked. When a button is clicked, an event listner in script.js will call the playGame function in script.js.

- playGame(choice) will get either a rock, paper, or scissors string. This function will get the computer choice the same as the initial code. The UI will update displaying the human pick and computer pick. This function will call the playRound function. 

- playGame function will also update scores. Once either human or computer hits a score of 5, the handleResult function is called. 

- handleResult will get a string from playGame depending on who won. handleResult will display the winner, and remove the button and two elements. This way the game is closed and cannot be played again unless the site is refreshed. 

 


# rock-paper-scissors


This is my first working game ever coded. It may not be the most optimised code, but it a working game based on my tests. 

A little explination on how I coded this game: 

- The computer selects a random number between 1-3. For example, rock = 1, 2 = paper, 3 = scissors. Based on the random number chosen, a string is returned. The string returned is in lowercase.  

- For the human choice, the user will input either rock, paper, or scissors in a prompt window. The function will convert the string to lowercase, eliminating case sensitivity, and return a lowercase string based on the user's choice. If the user input doesn't match either "rock", "paper", or "scissors", an alert is displayed stating the user input is invalid. The return value is a function recall, allowing the user to input a new option. 

- Once each choice is selected, the round is played. The round function is determined based on the string length. becasue each option has a different string length, we can use this to determine the winner. For example, if the computer selects "rock" and the human selects "paper", the function will determine that the human chose "paper" based on the string length of 5, and the computer chose "rock" based on the string length of 4. Since paper beats rock, the value of humanScore is increased by 1 and a win string is returned. If both human and computer selected "rock", a tied string is returned and the round is played again. No score is affected. 

- A while loop was made making the playGame function. This while loop will run rounds until either the human or computer score is 5. The first to hit 5 will win and a string is returned accordingly. 


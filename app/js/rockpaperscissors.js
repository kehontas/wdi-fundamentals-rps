////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
        // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
     // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    //https://repl.it/9nH/1742
    if (playerMove==='rock' && computerMove==='scissors'){
        winner = 'player';
    }else if (computerMove==='rock' && playerMove==='scissors'){
        winner = 'computer';
    }
    else if (playerMove==='scissors' && computerMove==='paper'){
        winner = 'player';
    }
    else if (computerMove==='scissors' && playerMove==='paper'){
        winner = 'computer';
    }
    else if (playerMove==='paper' && computerMove==='rock'){
        winner = 'player';
    }
    else if (computerMove==='paper' && playerMove==='rock'){
        winner = 'computer';
    }
    else if (playerMove===computerMove){
        winner = 'tie';
   }

    return winner;

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    //I want to use the above function here
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    
    while (playerWins < 5 && computerWins < 5){
    var playerMove = getPlayerMove();
    console.log("player move is " + playerMove)
    
    var computerMove = getComputerMove();
    console.log("computer move is " + computerMove)
    
    var winner = getWinner(playerMove,computerMove); 
    console.log("winner is " + winner)

        if (winner === 'player') {
             playerWins ++;
        }else if (winner === 'computer'){
            computerWins ++;
     
        }else if (winner = 'tie') {
            console.log("This game is a tie, try again!");
        }
    
          console.log("The score is Player:" + playerWins + " to Computer: " + computerWins);

             
}
    return [playerWins, computerWins];

}

playToFive();

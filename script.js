let humanScore = 0;
let computerScore = 0;

// This function generates a random number between 0-2, this controls what option the computer will pick
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice [Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    return prompt("rock","paper","scissors").toLowerCase();
}

// Decides winner by comparing slections by user and computer
function playRound(human, computer){
    if(human === computer){
        console.log("Tie");
    }
    else{
        if(human === "paper"){
            if(computer === "rock"){
                console.log("You Win!");
                humanScore ++;
            }
            else{
                console.log("You Lose!");
                computerScore ++;
            }
        }
        else if (human === "rock"){
            if (computer === "scissors"){
                console.log("You Win!");
                humanScore ++;
            }
            else{
                console.log("You Lose!")
                computerScore ++;
            }
        }
        else if (human === "scissors"){
            if (computer === "paper"){
                console.log("You Win!");
                humanScore ++;
            }
            else{
                console.log("You Lose!")
                computerScore ++;
            }
        }
    }
}

//
function playGame(){
    for(let i = 0; i < 3; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === computerScore){
        console.log("The game ends in a draw");
    }
    else if (humanScore > computerScore){
        console.log("You Won!");
    }
    else{
        console.log("Computer has won!");
    }
}

playGame()

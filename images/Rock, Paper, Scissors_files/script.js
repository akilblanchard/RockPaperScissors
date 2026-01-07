const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let gameOver = false;
let again = false;

// images for choices
const choiceImages = {
    rock: "images/rock.svg",
    paper: "images/paper.svg",
    scissors: "images/scissors.svg"
}

const defaultImage = {
    default: "images/default.svg"
}


//cache images
const playerChoiceImg = document.getElementById("playerChoiceImg");

const computerChoiceImg = document.getElementById("computerChoiceImg");

// buttons
rockBtn.addEventListener("click", ()=> {
    humanChoice = "rock";
    playRound();
});

paperBtn.addEventListener("click", ()=> {

    humanChoice = "paper";
    playRound();
});

scissorsBtn.addEventListener("click", ()=> {

    humanChoice = "scissors";
    playRound();
});



// This function generates a random number between 0-2, this controls what option the computer will pick
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice [Math.floor(Math.random()*3)];
}


// updates scores
function updateScore(){
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}


// gameplay
function playRound() {

    const computerChoice = getComputerChoice();
    playerChoiceImg.src = choiceImages[humanChoice];
    computerChoiceImg.src = choiceImages[computerChoice];
    if (humanChoice === computerChoice){
        console.log("Tie");
        return;
    }
    if 
    (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors")
        humanScore ++;
    else{
        computerScore ++;
    }
    console.log(humanChoice);
    updateScore();
    endGame();
}


// function to end the game once either player reaches 5
function endGame(){
    if ( humanScore === 5 || computerScore === 5){
        gameOver = true;
        document.getElementById("gameControls").style.display = "none";
        againBtn.style.display = "block";


        showWinner();
    }
}

//results
const winner = document.getElementById("result");
function showWinner (){
    if (humanScore === 5){
        winner.textContent = "Congratulations! You won!";
    }
    else{
        winner.textContent = "You lost. RIP."
    }
}

//play again
document.getElementById("againBtn").addEventListener("click", playAgain);
function playAgain() {
  gameEnded = false;
  humanScore = 0;
  computerScore = 0;

playerChoiceImg.src = defaultImage;
computerChoiceImg.src = defaultImage;

  // reset scores on screen
  updateScore();

  // reset winner text
  winner.textContent = "";

  // reset images (optional)
  playerChoiceImg.src = "";
  computerChoiceImg.src = "";

  // show game controls again
  document.getElementById("gameControls").style.display = "flex";

  // hide play again button
  document.getElementById("againBtn").style.display = "none";
}
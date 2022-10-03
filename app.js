const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const roundCount = document.getElementById("roundCount");
const resultDisplay = document.getElementById("result");
const playerChoice = document.querySelectorAll(".choiceButton")
const compOpt = document.getElementById("compOpt");
const playerOpt = document.getElementById("playerOpt");
const gameCount = document.querySelectorAll(".gameCounter");
const deadBut1 = document.getElementById("deadButton1").disabled = true;
const deadBut2 = document.getElementById("deadButton2").disabled = true;
const deadBut3 = document.getElementById("deadButton3").disabled = true;
const endText = document.getElementById("endText")

let counter = 1;
let playerS = 0;
let compS = 0;
let gameInt;

const oneGame = document.getElementById("oneGame").disabled = false;
const threeGames = document.getElementById("threeGames").disabled = false;
gameCount.forEach(choice => choice.addEventListener("click", () => {
    gameInt = choice.textContent
    roundCount.innerHTML = counter;
    console.log(gameInt)

}))

playerChoice.forEach(choice => choice.addEventListener("click", () => {
    
    playerOpt.innerHTML = choice.textContent;
    computerTurn();
    resultDisplay.innerHTML = checkWinner();
    addScore();
    roundCount.innerHTML = counter;
    console.log(playerS, compS, gameOver() === true)
    if(gameOver()) {
        resultDisplay.innerHTML = finalScore();
        roundCount.innerHTML = "Game Over";
        endText.innerHTML = "REFRESH TO PLAY AGAIN";
        disableBtn();
        compScore.innerHTML = compS;
        playerScore.innerHTML = playerS;
    }
    compScore.innerHTML = compS;
    playerScore.innerHTML = playerS;
}))


function disable() {
    document.getElementById("oneGame").disabled = true;
    document.getElementById("threeGames").disabled = true;
}
function disableBtn() {
    document.getElementById("deadButton1").disabled = true;
    document.getElementById("deadButton2").disabled = true;
    document.getElementById("deadButton3").disabled = true;
}
function choiceEnable() {
    document.getElementById("deadButton1").disabled = false;
    document.getElementById("deadButton2").disabled = false;
    document.getElementById("deadButton3").disabled = false;
}

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    
        switch(randNum) {
            case 1:
                compOpt.innerHTML = "ROCK";
                break;
            case 2:
                compOpt.innerHTML = "PAPER";
                break;
            case 3:
                compOpt.innerHTML = "SCISSORS";
                break;
        }
}
function finalScore() {
    if(compS > playerS) {
        return "Computer Wins!";
    }
    else {
        return "You win!";
    }
}
function gameOver() {
    if (Number(gameInt) == 1) {
        return(compS == 1 || playerS == 1) ? true : false;
    } 
    else if(Number(gameInt) == 3) {
        return(compS == 2|| playerS == 2) ? true : false;
    }
}
 
function checkWinner() {
    while(gameOver) {
        if (playerOpt.innerHTML == compOpt.innerHTML) {
            counter++
            return "Draw!";
        }
        else if(compOpt.innerHTML == "ROCK") {
            counter++;
            return(playerOpt.innerHTML == "PAPER") ? "You win" : "You lose";
        }
        else if(compOpt.innerHTML == "PAPER") {
            counter++;
            return(playerOpt.innerHTML == "SCISSORS") ? "You win" : "You lose";
        }
        else if(compOpt.innerHTML == "SCISSORS") {
            counter++;
            return(playerOpt.innerHTML == "ROCK") ? "You win" : "You lose";
        }
    }
}
function addScore() {
   
        if (playerOpt.innerHTML == compOpt.innerHTML) {
            return false
        }
        if(compOpt.innerHTML == "ROCK") {
            return(playerOpt.innerHTML == "PAPER") ? playerS++ : compS++;
        }
        else if(compOpt.innerHTML == "PAPER") {
            return(playerOpt.innerHTML == "SCISSORS") ? playerS++ : compS++;
        }
        else if(compOpt.innerHTML == "SCISSORS") {
            return(playerOpt.innerHTML == "ROCK") ? playerS++ : compS++;
        }

}
var humanScore = 0;
var computerScore = 0;

let computerChoice;
let humanChoice;

let result = document.getElementById("results");
let humanImage = document.getElementById("human-played");
let computerImage = document.getElementById("computer-played");
let finalResultDisplay = document.getElementById("final-result-say");
let modal = document.getElementById("modal");
let buttonPlayAgain = document.getElementById("play-again");

function getComputerChoice() {
    computerChoice = Math.random();
    computerChoice *= 3;
    computerChoice = Math.ceil(computerChoice);

    if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
    } else if (computerChoice === 3) {
        computerChoice = "rock";
    }

    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice(choice) {
    humanChoice = choice;
    console.log(humanChoice);
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function scoreCalc(whoGetsPoint) {
    if (whoGetsPoint === "computer") {
        computerScore++;
        document.getElementById("computer-score").innerHTML = computerScore;
    } else if (whoGetsPoint === "human") {
        humanScore++;
        document.getElementById("human-score").innerHTML = humanScore;
    }

    if (computerScore === 5) {
        modal.style.display = "block";
        buttonPlayAgain.style.display = "block";
        finalResultDisplay.textContent = "You Lost!";
    } else if (humanScore === 5) {
        modal.style.display = "block";
        buttonPlayAgain.style.display = "block";
        finalResultDisplay.textContent = "You Won!";
    }
}

function restart() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("human-score").innerHTML = humanScore;
    modal.style.display = "none";
}

function displayImageResult(humanChoice, computerChoice) {
    if (humanChoice === "paper") {
        humanImage.src = "images/paper.png";
    } else if (humanChoice === "scissors") {
        humanImage.src = "images/scissors.png";
    } else if (humanChoice === "rock") {
        humanImage.src = "images/rock.png";
    }

    if (computerChoice === "paper") {
        computerImage.src = "images/paper.png";
    } else if (computerChoice === "scissors") {
        computerImage.src = "images/scissors.png";
    } else if (computerChoice === "rock") {
        computerImage.src = "images/rock.png";
    }
}

function playRound(humanChoice, computerChoice) {
    displayImageResult(humanChoice, computerChoice);

    if (humanChoice == computerChoice) {
        result.textContent = "tie";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        scoreCalc("human");
        result.textContent = "You Won";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        scoreCalc("human");
        result.textContent = "You Won";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        scoreCalc("human");
        result.textContent = "You Won";
    } else {
        scoreCalc("computer");
        result.textContent = "the computer won";
    }
}

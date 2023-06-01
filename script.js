function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function formatString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function playRound(playerSelection, computerSelection) {
  formattedPlayerSelection = formatString(playerSelection);
  const winMessage = `You win! ${formattedPlayerSelection} beats ${computerSelection}`;
  const lossMessage = `Ỳou lose! ${computerSelection} beats ${formattedPlayerSelection}`;
  const drawMessage = `No winner, both you and the computer played ${computerSelection}`;

  if (formattedPlayerSelection === computerSelection) return drawMessage;
  switch (formattedPlayerSelection) {
    case "Rock":
      if (computerSelection === "Scissors") return winMessage;
      else if (computerSelection === "Paper") return lossMessage;
    case "Paper":
      if (computerSelection === "Rock") return winMessage;
      else if (computerSelection === "Scissors") return lossMessage;
    case "Scissors":
      if (computerSelection === "Paper") return winMessage;
      else if (computerSelection === "Rock") return lossMessage;
  }
}

function updateScore(message, playerScore, computerScore) {
  if (message.startsWith("You win!")) {
    playerScore.textContent++;
  } else if (message.startsWith("You lose!")) {
    computerScore++;
  }
}

function checkWin(playerScore, computerScore) {
  if (playerScore.textContent == 5 || computerScore.textContent == 5) {
    if (playerScore.textContent == 5) {
      console.log("Congratulations, you won!");
    } else {
      console.log("Game over! You lost");
    }
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function playGame() {
  const playerSelection = this.id;
  const computerSelection = getComputerChoice();
  message = playRound(playerSelection, computerSelection);
  updateScore(message, playerScore, computerScore);
  console.log(message);
  checkWin(playerScore, computerScore);
}

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);

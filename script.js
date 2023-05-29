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

let formatString = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

function playRound(playerSelection, computerSelection) {
  const formattedPlayerSelection = formatString(playerSelection);
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

function game() {
  for (let index = 0; index < 10; index++) {
    let playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissors'");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();

  if (playerSelectionLowerCase === computerSelection) {
    return "Omg! It's a tie. Both players chose " + playerSelection + " :)";
  } else if (
    (playerSelectionLowerCase === "rock" && computerSelection === "scissors") ||
    (playerSelectionLowerCase === "paper" && computerSelection === "rock") ||
    (playerSelectionLowerCase === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! It's a good choise! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt(
      `Round ${round}: Enter 'rock', 'paper', or 'scissors':`
    );
    if (!playerSelection) {
      return;
    }
    while (!choices.includes(playerSelection.toLowerCase())) {
      playerSelection = prompt(
        `Round ${round}: Ooopss! Invalid :( Enter 'rock', 'paper', or 'scissors':`
      );
      if (!playerSelection) {
        return;
      }
    }

    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }
  }

  let winnerMessage;
  if (playerScore > computerScore) {
    winnerMessage = "Congratulations! You won the game!";
  } else if (playerScore < computerScore) {
    winnerMessage = "Sorry, you lost the game. Better luck next time!";
  } else {
    winnerMessage = "It's a tie! Both players have the same score.";
  }

  console.log(`Final Scores: You ${playerScore} - ${computerScore} Computer`);
  console.log(winnerMessage);
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", game);

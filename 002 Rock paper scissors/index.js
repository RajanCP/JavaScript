
let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}


function playRound(humanChoice, computerChoice) {
  // Make humanChoice case-insensitive
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}\n`);
  }


  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game. Better luck next time!");
  } else {
    console.log("It's a tie! No overall winner.");
  }
}

playGame();

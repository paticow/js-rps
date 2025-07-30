document.addEventListener('DOMContentLoaded', () => {
  let humanScore = 0;
  let computerScore = 0;

  const scoreboard = document.getElementById('scoreboard');
  const buttons    = document.querySelectorAll('button');

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const selection = choices[Math.floor(Math.random() * 3)];
    comSelection.textContent = `${selection}`;
    return selection;
  }

  function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) return;

    const winAgainst = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    if (winAgainst[humanChoice] === computerChoice) {
      humanScore++;
    } else {
      computerScore++;
    }

if (humanScore === 5 || computerScore === 5) {
  if (humanScore === 5) {
    total.textContent = "You win";
  } else {
    total.textContent = "Computer wins";
  }
  buttons.forEach(btn => btn.disabled = true);
}
}

  function updateScoreboard() {
    scoreboard.textContent = `${computerScore} - ${humanScore}`;
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const humanChoice =
        button.id === 'r-btn' ? 'rock' :
        button.id === 'p-btn' ? 'paper' : 'scissors';

      const computerChoice = getComputerChoice();
        humSelection.textContent = `${humanChoice}`;
      playRound(humanChoice, computerChoice);
      updateScoreboard();
    });
  });

  updateScoreboard();
});

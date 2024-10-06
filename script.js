const choices = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultMessage = document.getElementById('result-message');

const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
        updateUI(playerChoice, computerChoice, result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArray[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a draw!';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function updateUI(playerChoice, computerChoice, result) {
    playerChoiceDisplay.textContent = `You chose: ${capitalize(playerChoice)}`;
    computerChoiceDisplay.textContent = `Computer chose: ${capitalize(computerChoice)}`;
    resultMessage.textContent = result;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function restartGame() {
    playerChoiceDisplay.textContent = 'You chose: ';
    computerChoiceDisplay.textContent = 'Computer chose: ';
    resultMessage.textContent = '';
}

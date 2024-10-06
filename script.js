const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userScore = 0;
let computerScore = 0;
let remainingTries = 5;

const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
const remainingTriesDisplay = document.getElementById('remainingTries');
const restartButton = document.getElementById('restart');

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        if (remainingTries > 0) {
            const userChoice = button.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);
            updateScore(result);
            displayResult(userChoice, computerChoice, result);
            remainingTries--;
            remainingTriesDisplay.innerText = remainingTries;
        }

        if (remainingTries === 0) {
            endGame();
        }
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return 'draw';
    
    const winningConditions = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
    };

    return winningConditions[userChoice].includes(computerChoice) ? 'win' : 'lose';
}

function updateScore(result) {
    if (result === 'win') {
        userScore++;
        userScoreDisplay.innerText = userScore;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
    }
}

function displayResult(userChoice, computerChoice, result) {
    resultDisplay.innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. You ${result}!`;
}

function endGame() {
    resultDisplay.innerText += " Game over!";
    document.querySelectorAll('.choice').forEach(button => button.disabled = true);
    restartButton.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    remainingTries = 5;

    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
    remainingTriesDisplay.innerText = remainingTries;
    resultDisplay.innerText = '';
    document.querySelectorAll('.choice').forEach(button => button.disabled = false);
    restartButton.style.display = 'none';
});



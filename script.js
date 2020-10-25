// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display the message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Display the secret number
const displaySecretNumber = function(secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
}

// Display the score
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

// Add event on the check button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When ther is no input
    if(!guess) {
        displayMessage('⛔ No number!');

        // When player win
    } else if(guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        displaySecretNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if(guess !== secretNumber){
        if(score > 1) {
            displayMessage(guess > secretNumber ? '⤴ Too high!' : '⤵ Too low!');
            score --;
            displayScore(score);
        } else {
            displayMessage('🔴 You lost the game!');
            displayScore(0);
        }
    }
});

// Add event on the again button
document.querySelector('.again').addEventListener('click', function() {
    
    // Restore initial value of the score and secretnumber
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Restore the initial conditions of the message, number, score and guess inout field
    displayMessage('Start guessing...');
    displayScore(score);
    displaySecretNumber('?');
    document.querySelector('.guess').value = '';

    // Resotre the original background color and number width
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
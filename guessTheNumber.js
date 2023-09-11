let numberGuess = document.getElementById('guessedNumber');
let guessAttempts = document.getElementById('guessAttempts');
const secretNumber = Math.floor(Math.random() * 10) + 1; // Use Math.floor to ensure the number is between 1 and 10 (inclusive)
let tries = 5;

function guessNumber(num) {
  if (tries === 0) {
    alert('You have run out of tries. The secret number was ' + secretNumber);
  } else {
    if (num === secretNumber) {
      alert('Congratulations, you guessed the right number!');
      numberGuess.textContent = secretNumber;
      tries = 0;
    } else {
      alert('Try again (' + tries + ' tries left)');
      tries--;
      if (num < secretNumber) {
        alert('Move to the right');
      } else {
        alert('Move to the left');
      }
      guessAttempts.textContent = tries;
    }
  }
}
guessAttempts.textContent = tries;


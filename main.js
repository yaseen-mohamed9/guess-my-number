'use strict';

let secretNumber = Math.floor(Math.random()*20);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  
  if (!guess) {
    displayMessage('⛔ No number!');
    document.body.style.backgroundColor = 'red';
  }else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
if (score > highscore) {
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
  }
} else if (guess !== secretNumber) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
    document.body.style.backgroundColor = 'red';
  }
}
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20);
  
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  
  document.body.style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('keyup', function(e){
  if (e.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);
    if (guess) {
      document.querySelector('.check').click();
    }
  }
});






























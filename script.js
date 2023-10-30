'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!👍';
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  //nema unosa
  if (!guess && guess !== 0) {
    document.querySelector('.message').textContent = 'No number';
    //pogodjen broj
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    return;
    //pogresan broj
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high';
      } else {
        document.querySelector('.message').textContent = 'Too low';
      }
    } else {
      document.querySelector('.message').textContent = 'Game over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {});

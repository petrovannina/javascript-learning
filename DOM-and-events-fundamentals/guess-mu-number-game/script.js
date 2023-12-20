'use strict';

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.message').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); 

console.log('inainte');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// hidding the secret number
// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        displayMessage("No number was added!!");
        if (score > 0) {
            score--;
        } else {
            displayMessage("You losed the game");
        }
        document.querySelector(".score").textContent = score;
    // when player wins
    } else if (guess === secretNumber) {
        displayMessage("You gest the number");
        score= score + 10;
        document.querySelector(".score").textContent = score;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector(".number p").textContent = secretNumber;
        

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    // when the number is bigger
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? "The number is to hight" : "The number is to low";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You lost the game");
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > secretNumber) {
    //     displayMessage("The number is to high")
    //     if (score > 0) {
    //         score--;
    //     } else {
    //             displayMessage("You losed the game")
    //     }
    //     document.querySelector(".score").textContent = score;
    //     // when the number is lower
    // } else if (guess < secretNumber) {
    //     displayMessage("The number is to low")
    //     if (score > 0) {
    //         score--;
    //     } else {
    //         displayMessage("You losed the game with score 0")
    //     }
    //     document.querySelector(".score").textContent = score;
    // }
})

document.querySelector(".number button, .again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number p").textContent = '?';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector(".message").textContent = 'Start guessing again...'
    document.querySelector(".score").textContent = score;
})


console.log('dupa');
console.log('score', score);


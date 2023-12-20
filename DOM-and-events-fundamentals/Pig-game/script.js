'use strict';

// when rolling the dice the current should have one of the 5 dices available
// the image of the dive should be acording with the number that appearce in the game
// the hold buttons should swich bettween players
// the first players that has 100 points wins the game

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// const player = document.querySelector('.player');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let currentScore, activePlayer, scores, playing;


// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEL.classList.add('hidden');

const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Starting conditions
function init () {
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
        
    diceEL.classList.add('hidden');
    player0El.classList.remove('playyer-winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('playyer-active');
    player1El.classList.remove('player--active');
}

init();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1.Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        // 2.Display dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;
        // 3.Check for rolled 1: if true, switch to next player
        if (dice === 1) {
            // switch to next player
            switchPlayer();
        } else {
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1.add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // 2.check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceEL.classList.add('hidden');
            document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
            document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
})

// my solution
// btnNew.addEventListener('click', function () {
//     console.log('nina');
//     playing = true;
//     currentScore = 0;
//     scores[activePlayer] += currentScore;
//     document.getElementById('score--0').textContent = 0;
//     document.getElementById('score--1').textContent = 0;
//     document.querySelector('#current--0').textContent = 0;
//     document.querySelector('#current--1').textContent = 0;
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.remove('player--winner');
//     document
//       .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--active');
//     diceEL.classList.remove('hidden');
// })

// solution from video
btnNew.addEventListener('click', init);
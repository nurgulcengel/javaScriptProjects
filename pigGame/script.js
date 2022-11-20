'use strict';

//selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRolldice = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

//Starting conditions 

let scores, currentScore, activePlayer, playing;


const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
};
init();

//switch player func

const switchPlayer = function () {

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.getElementById(`current--${activePlayer}`).textContent = currentScore;


    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

//rolling dice

btnRolldice.addEventListener('click', function () {
    if (playing) {
        //1. generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //2. display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3.check for rolled 1: 

        //add dice to current score
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            //if true, switch to next player
        } else {

            switchPlayer();
        }

    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //1. add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. check if player's score is >=100
        if (scores[activePlayer] >= 100) {
            //finish the game 
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }
        else {
            switchPlayer();
        }

    }


});

btnNew.addEventListener('click', init);
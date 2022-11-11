'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
const number=document.querySelector('.number');
const checkButton= document.querySelector('.check');
const againButton=document.querySelector('.again');
const message=document.querySelector('.message');
const mScore=document.querySelector('.score');
const body= document.querySelector('body');
const guessDiv=document.querySelector('.guess');
const highscore=document.querySelector('.highscore');
let score=20;
let vHighScore=0;
const displayMessage = function (messages) {
    message.textContent = messages;
  };

checkButton.addEventListener('click', function(){
 const guess=Number(guessDiv.value);
    if (score>1) {
        if (!guess) {
            displayMessage('No number!');
         } else if(guess>secretNumber){
            displayMessage('Too high!');
             score--;
             mScore.textContent=score;
         }else if(guess<secretNumber){
            displayMessage('Too low!');
             score--;
             mScore.textContent=score;
         }else if(guess===secretNumber){
             number.textContent=secretNumber;
             number.style.width='30rem';
             body.style.backgroundColor='#60b347';
             displayMessage('🎉Correct number!');
             if(score>vHighScore){
               vHighScore=score;
               highscore.textContent=vHighScore;
             }
           checkButton.style.display='none';
            
             
         }
    } else {
        displayMessage('Game over!');
        mScore.textContent=0;

    };
    

});

againButton.addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    score=20;
    mScore.textContent=20;
    displayMessage('Start guessing...');
    number.textContent='?';
    number.style.width='15rem';
    body.style.backgroundColor='#222';
    guessDiv.value='';
    checkButton.style.display='block';
    

});